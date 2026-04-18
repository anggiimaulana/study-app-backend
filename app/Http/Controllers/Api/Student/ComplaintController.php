<?php

namespace App\Http\Controllers\Api\Student;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreComplaintRequest;
use App\Models\Complaint;
use App\Services\ComplaintService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ComplaintController extends Controller
{
    protected ComplaintService $service;

    public function __construct(ComplaintService $service)
    {
        $this->service = $service;
    }

    public function index(Request $request): JsonResponse
    {
        $student = $request->user()->student;
        if (!$student) return response()->json(['data' => []], 403);

        $complaints = Complaint::where('student_id', $student->id)
            ->with('responder')
            ->latest()
            ->paginate(8);

        return response()->json($complaints);
    }

    public function store(StoreComplaintRequest $request): JsonResponse
    {
        $student = $request->user()->student;
        if (!$student) return response()->json(['message' => 'Forbidden'], 403);

        $attachments = $request->file('attachments') ?? [];
        $complaint = $this->service->storeComplaint($student, $request->validated(), $attachments);

        // Invalidate cache
        // \Illuminate\Support\Facades\Cache::forget("student_{$student->id}_complaints");

        return response()->json([
            'message' => 'Pengaduan berhasil dikirim.',
            'data' => $complaint
        ], 201);
    }

    public function show(Request $request, Complaint $complaint): JsonResponse
    {
        $student = $request->user()->student;
        if (!$student || $complaint->student_id !== $student->id) {
            return response()->json(['message' => 'Forbidden'], 403);
        }

        return response()->json(['data' => $complaint]);
    }

    public function destroy(Request $request, Complaint $complaint): JsonResponse
    {
        $student = $request->user()->student;
        if (!$student || $complaint->student_id !== $student->id || $complaint->status !== 'pending') {
            return response()->json(['message' => 'Tidak dapat menghapus pengaduan ini.'], 403);
        }

        $complaint->delete();
        \Illuminate\Support\Facades\Cache::forget("student_{$student->id}_complaints");

        return response()->json(['message' => 'Pengaduan berhasil dihapus.']);
    }
}
