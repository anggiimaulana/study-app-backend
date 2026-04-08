<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskSubmission extends Model
{
    use HasFactory;

    protected $fillable = [
        'task_id', 'student_id', 'file_url', 'text_answer', 'submitted_at', 'grade', 'feedback'
    ];

    public function task()
    {
        return $this->belongsTo(Task::class, 'task_id');
    }

    public function student()
    {
        return $this->belongsTo(Student::class, 'student_id');
    }

}
