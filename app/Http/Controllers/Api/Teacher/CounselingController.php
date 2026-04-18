<?php

namespace App\Http\Controllers\Api\Teacher;

use App\Http\Controllers\Controller;
use App\Models\Counseling;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CounselingController extends Controller
{
    public function index()
    {
        $teacher = Auth::user()->teacher;
        if (!$teacher) return response()->json(['message' => 'Forbidden'], 403);

        $isBK = in_array('Guru BK', $teacher->positions ?? []);
        $classroomsLed = \App\Models\Classroom::where('homeroom_teacher_id', $teacher->id)->pluck('id');

        $requests = Counseling::with(['student.user', 'student.classroom'])
            ->where('school_id', Auth::user()->school_id)
            ->where(function($q) use ($isBK, $classroomsLed) {
                if ($isBK) {
                    $q->orWhere('target_role', 'bk');
                }
                if ($classroomsLed->isNotEmpty()) {
                    $q->orWhere(function($sq) use ($classroomsLed) {
                        $sq->where('target_role', 'wali_kelas')
                           ->whereHas('student', function($ssq) use ($classroomsLed) {
                               $ssq->whereIn('classroom_id', $classroomsLed);
                           });
                    });
                }
            })
            ->latest()
            ->get();

        return response()->json($requests);
    }

    public function update(Request $request, Counseling $counseling)
    {
        $teacher = Auth::user()->teacher;
        if (!$teacher) return response()->json(['message' => 'Forbidden'], 403);

        // Simple authorization: check if it's the right school
        if ($counseling->school_id !== Auth::user()->school_id) {
             return response()->json(['message' => 'Forbidden'], 403);
        }

        $validated = $request->validate([
            'status' => 'required|string|in:pending,approved,calling,completed,cancelled',
            'requested_date' => 'nullable|string'
        ]);

        $updateData = [
            'status' => $validated['status'],
            'preferred_counselor_id' => $teacher->id
        ];

        if ($validated['requested_date']) {
            $updateData['requested_date'] = $validated['requested_date']; // We reuse requested_date for actual schedule if approved
            // Or use a separate schedule_date column if it exists. Looking at migration earlier, it was requested_date.
        }

        $counseling->update($updateData);

        return response()->json([
            'message' => 'Counseling updated successfully',
            'data' => $counseling
        ]);
    }
}
