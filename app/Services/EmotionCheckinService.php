<?php

namespace App\Services;

use App\Models\EmotionCheckin;
use App\Models\Student;
use Carbon\Carbon;
use Illuminate\Validation\ValidationException;

class EmotionCheckinService
{
    public function performCheckin(Student $student, array $data)
    {
        $cacheKey = "student_{$student->id}_checked_in_today";
        
        $alreadyCheckedIn = \Illuminate\Support\Facades\Cache::get($cacheKey) ?: EmotionCheckin::where('student_id', $student->id)
            ->whereDate('created_at', Carbon::today())
            ->exists();

        if ($alreadyCheckedIn) {
            // Re-store in cache for speed if not already there
            \Illuminate\Support\Facades\Cache::put($cacheKey, true, now()->endOfDay());
            throw ValidationException::withMessages([
                'checkin' => 'Anda sudah melakukan check-in hari ini. Maksimal 1 kali sehari.'
            ]);
        }

        $checkin = EmotionCheckin::create([
            'school_id' => $student->school_id,
            'student_id' => $student->id,
            'mood' => $data['mood'],
            'current_condition' => $data['current_condition'],
            'experienced_event' => $data['experienced_event'] ?? null,
            'story' => $data['story'] ?? null,
        ]);

        // Set cache for today
        \Illuminate\Support\Facades\Cache::put($cacheKey, true, now()->endOfDay());

        return $checkin;
    }
}
