<?php

namespace App\Http\Controllers\Api\Student;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCounselingRequest;
use App\Models\Counseling;
use App\Services\CounselingService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CounselingController extends Controller
{
    protected CounselingService $service;

    public function __construct(CounselingService $service)
    {
        $this->service = $service;
    }

    public function index(Request $request): JsonResponse
    {
        $student = $request->user()->student;
        if (!$student) return response()->json(['data' => []], 403);

        $counselings = Counseling::with('counselor.user')
            ->where('student_id', $student->id)
            ->latest()
            ->get()
            ->values()
            ->all();

        return response()->json(['data' => $counselings]);
    }

    public function store(StoreCounselingRequest $request): JsonResponse
    {
        $student = $request->user()->student;
        if (!$student) return response()->json(['message' => 'Forbidden'], 403);

        $counseling = $this->service->createPreCounseling($student, $request->validated());

        // Invalidate cache
        \Illuminate\Support\Facades\Cache::forget("student_{$student->id}_counselings");

        return response()->json([
            'message' => 'Pengajuan konseling berhasil dibuat.',
            'data' => $counseling
        ], 201);
    }

    public function show(Request $request, Counseling $counseling): JsonResponse
    {
        $student = $request->user()->student;
        if (!$student || $counseling->student_id !== $student->id) {
            return response()->json(['message' => 'Forbidden'], 403);
        }

        return response()->json(['data' => $counseling->load('counselor.user')]);
    }

    public function update(Request $request, Counseling $counseling): JsonResponse
    {
        $student = $request->user()->student;
        if (!$student || $counseling->student_id !== $student->id) {
            return response()->json(['message' => 'Forbidden'], 403);
        }

        $counseling->update($request->only(['notes']));
        return response()->json(['message' => 'Diperbarui.', 'data' => $counseling]);
    }

    public function destroy(Request $request, Counseling $counseling): JsonResponse
    {
        $student = $request->user()->student;
        if (!$student || $counseling->student_id !== $student->id || $counseling->status !== 'pending') {
            return response()->json(['message' => 'Tidak dapat membatalkan konseling ini.'], 403);
        }

        $counseling->delete();
        \Illuminate\Support\Facades\Cache::forget("student_{$student->id}_counselings");

        return response()->json(['message' => 'Pengajuan konseling dibatalkan.']);
    }

    public function confirmCall(Request $request, Counseling $counseling): JsonResponse
    {
        $student = $request->user()->student;
        if (!$student || $counseling->student_id !== $student->id) {
            return response()->json(['message' => 'Forbidden'], 403);
        }

        $confirmed = $this->service->confirmCall($counseling, $student);
        \Illuminate\Support\Facades\Cache::forget("student_{$student->id}_counselings");

        return response()->json([
            'message' => 'Panggilan konseling berhasil dikonfirmasi.',
            'data' => $confirmed
        ]);
    }

    public function reschedule(Request $request, Counseling $counseling): JsonResponse
    {
        $student = $request->user()->student;
        if (!$student || $counseling->student_id !== $student->id) {
            return response()->json(['message' => 'Forbidden'], 403);
        }

        $request->validate([
            'preferred_date' => 'required|date',
            'preferred_time' => 'required|string',
        ]);

        $rescheduled = $this->service->reschedule($counseling, $request->only(['preferred_date', 'preferred_time']));
        \Illuminate\Support\Facades\Cache::forget("student_{$student->id}_counselings");

        return response()->json([
            'message' => 'Pengajuan reschedule berhasil dikirim.',
            'data' => $rescheduled
        ]);
    }
}
