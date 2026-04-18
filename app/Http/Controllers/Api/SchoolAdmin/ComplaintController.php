<?php

namespace App\Http\Controllers\Api\SchoolAdmin;

use App\Http\Controllers\Controller;
use App\Http\Requests\RespondComplaintRequest;
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
        $complaints = Complaint::with(['student.user', 'responder'])
            ->where('target_role', 'school-admin')
            ->latest()
            ->paginate(8);
            
        return response()->json($complaints);
    }

    public function show(Complaint $complaint): JsonResponse
    {
        $complaint->load(['student.user', 'responder']);
        return response()->json(['data' => $complaint]);
    }

    public function respond(RespondComplaintRequest $request, Complaint $complaint): JsonResponse
    {
        $responderId = $request->user()->id;
        $attachments = $request->file('attachments') ?? [];
        
        $updated = $this->service->respondToComplaint(
            $complaint, 
            $responderId, 
            $request->response, 
            $request->status, 
            $attachments
        );

        return response()->json([
            'message' => 'Tanggapan berhasil dikirim.',
            'data' => $updated
        ]);
    }
}
