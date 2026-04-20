<?php

namespace App\Services;

use App\Models\Counseling;
use App\Models\Student;
use Illuminate\Validation\ValidationException;

class CounselingService
{
    public function createPreCounseling(Student $student, array $data)
    {
        $requestedDate = null;
        if (!empty($data['preferred_date']) && !empty($data['preferred_time'])) {
            $requestedDate = $data['preferred_date'] . ' ' . $data['preferred_time'];
        }

        return Counseling::create([
            'school_id' => $student->school_id,
            'student_id' => $student->id,
            'preferred_counselor_id' => $data['preferred_counselor_id'] ?? null,
            'issue_description' => $data['issue_description'],
            'requested_date' => $requestedDate,
            'status' => 'pending',
            'reason' => $data['reason'] ?? 'Umum',
            'target_role' => $data['target_role'],
            'urgency_level' => $data['urgency_level']
        ]);
    }

    public function reschedule(Counseling $counseling, array $data)
    {
        $requestedDate = $data['preferred_date'] . ' ' . $data['preferred_time'];
        
        $counseling->update([
            'requested_date' => $requestedDate,
            'status' => 'pending', // go back to pending if rescheduled
            'notes' => ($counseling->notes ? $counseling->notes . "\n" : "") . "Reschedule requested to: " . $requestedDate
        ]);

        return $counseling;
    }

    public function confirmCall(Counseling $counseling, Student $student)
    {
        if ($counseling->student_id !== $student->id) {
            abort(403, 'Unauthorized');
        }

        $counseling->update([
            'student_confirmation' => 'ready',
            'status' => 'scheduled'
        ]);

        return $counseling;
    }
}
