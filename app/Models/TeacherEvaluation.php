<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeacherEvaluation extends Model
{
    use HasFactory;
    protected $fillable = ['school_id', 'teacher_id', 'student_id', 'rating', 'notes'];

    public function teacher() { return $this->belongsTo(Teacher::class); }
    public function student() { return $this->belongsTo(Student::class); }
    public function school() { return $this->belongsTo(School::class); }
}
