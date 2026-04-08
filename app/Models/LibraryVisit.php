<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LibraryVisit extends Model
{
    use HasFactory;

    protected $fillable = [
        'school_id', 'student_id', 'visit_date', 'purpose'
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
