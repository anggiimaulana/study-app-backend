<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PpdbRegistration extends Model
{
    use HasFactory;

    protected $fillable = [
        'school_id', 'registration_number', 'student_name', 'nisn', 'school_origin', 'major_id', 'score', 'parent_name', 'address', 'phone'
    ];

    public function school()
    {
        return $this->belongsTo(School::class, 'school_id');
    }

    public function major()
    {
        return $this->belongsTo(Major::class, 'major_id');
    }

}
