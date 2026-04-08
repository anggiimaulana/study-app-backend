<?php

namespace App\Services;

use Illuminate\Support\Facades\Crypt;
use Carbon\Carbon;
use Exception;

class AttendanceService
{
    /**
     * Generate secure QR token for a schedule, valid for a 10s window.
     */
    public function generateQrToken($scheduleId, $subjectId, $teacherId)
    {
        // Get current timestamp block (floored to nearest 10 seconds)
        $timestamp = (int) (time() / 10) * 10;
        
        $payload = [
            's' => $scheduleId,
            'sub' => $subjectId,
            't' => $teacherId,
            'ts' => $timestamp,
            'date' => Carbon::now()->toDateString()
        ];

        return Crypt::encryptString(json_encode($payload));
    }

    /**
     * Validate the scanned QR token by a student.
     */
    public function validateToken($token, $expectedScheduleId)
    {
        try {
            $decrypted = Crypt::decryptString($token);
            $data = json_decode($decrypted, true);

            // Check if valid JSON
            if (!$data || !isset($data['ts'])) {
                return false;
            }

            // Check if it belongs to the correct schedule
            if ($data['s'] != $expectedScheduleId) {
                return false;
            }

            // Check if within the 10-second window (allow ±10s for network latency)
            $currentTime = time();
            $tokenTime = $data['ts'];
            
            if (abs($currentTime - $tokenTime) > 15) { // 15 seconds tolerance max
                return false;
            }

            return true;

        } catch (Exception $e) {
            return false;
        }
    }
}
