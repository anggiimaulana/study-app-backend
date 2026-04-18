<?php

namespace App\Services;

use App\Models\Complaint;
use App\Models\Student;
use Illuminate\Http\UploadedFile;

class ComplaintService
{
    public function storeComplaint(Student $student, array $data, array $attachments = [])
    {
        $urls = [];

        foreach ($attachments as $file) {
            /** @var UploadedFile $file */
            // Store under storage/app/public/complaints
            $path = $file->store('complaints', 'public');
            $urls[] = '/storage/' . $path;
        }

        return Complaint::create([
            'school_id' => $student->school_id,
            'student_id' => $student->id,
            'target_role' => 'school-admin', // To admin
            'target_user_id' => null, // General admin
            'title' => $data['title'],
            'description' => $data['description'],
            'category' => $data['category'] ?? 'Umum',
            'status' => 'pending',
            'attachment_urls' => $urls
        ]);
    }

    public function respondToComplaint(Complaint $complaint, $responderId, string $response, string $status = 'resolved', array $attachments = [])
    {
        $urls = $complaint->attachment_urls ?? []; // Keep existing or separate? User said "bisa juga ngirim bukti". Let's use a separate field or append. 
        // Actually, let's keep it simple and just use the same attachment_urls or better, a new responder_attachment_urls? 
        // Table doesn't have responder_attachment_urls. I'll check migration.
        
        $urls = [];
        foreach ($attachments as $file) {
            /** @var UploadedFile $file */
            $path = $file->store('complaints/responses', 'public');
            $urls[] = '/storage/' . $path;
        }

        $complaint->update([
            'response' => $response,
            'responder_id' => $responderId,
            'status' => $status,
            'response_attachment_urls' => $urls
        ]);

        return $complaint;
    }
}
