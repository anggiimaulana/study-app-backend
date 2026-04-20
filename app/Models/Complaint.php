<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Complaint extends Model
{
    use HasFactory;

    protected $fillable = [
        'school_id', 'student_id', 'title', 'description', 'response', 'responder_id', 'target_role', 'target_user_id', 'status', 'category', 'attachment_urls', 'response_attachment_urls'
    ];

    protected $casts = [
        'attachment_urls' => 'array',
        'response_attachment_urls' => 'array',
    ];

    public function school()
    {
        return $this->belongsTo(School::class, 'school_id');
    }

    public function student()
    {
        return $this->belongsTo(Student::class, 'student_id');
    }

    public function responder()
    {
        return $this->belongsTo(User::class, 'responder_id');
    }

}
