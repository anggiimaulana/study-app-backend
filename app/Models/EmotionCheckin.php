<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmotionCheckin extends Model
{
    use HasFactory;
    protected $fillable = ['school_id', 'student_id', 'mood', 'current_condition', 'experienced_event', 'story', 'ai_analysis_result'];

    public function student() { return $this->belongsTo(Student::class); }
}
