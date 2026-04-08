<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Counseling extends Model
{
    use HasFactory;

    protected $fillable = [
        'school_id', 'student_id', 'counselor_id', 'schedule_date', 'issue_description', 'notes'
    ];

    public function school()
    {
        return $this->belongsTo(School::class, 'school_id');
    }

    public function student()
    {
        return $this->belongsTo(Student::class, 'student_id');
    }

    public function counselor()
    {
        return $this->belongsTo(Teacher::class, 'counselor_id');
    }

}
