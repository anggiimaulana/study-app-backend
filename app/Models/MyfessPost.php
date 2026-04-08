<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MyfessPost extends Model
{
    use HasFactory;

    protected $fillable = [
        'school_id', 'student_id', 'title', 'content', 'is_anonymous'
    ];

    public function school()
    {
        return $this->belongsTo(School::class, 'school_id');
    }

    public function student()
    {
        return $this->belongsTo(Student::class, 'student_id');
    }

}
