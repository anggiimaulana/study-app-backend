<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExamAnswer extends Model
{
    use HasFactory;

    protected $fillable = [
        'exam_attempt_id', 'question_id', 'question_option_id', 'essay_answer', 'score'
    ];

    public function examAttempt()
    {
        return $this->belongsTo(ExamAttempt::class, 'exam_attempt_id');
    }

    public function question()
    {
        return $this->belongsTo(Question::class, 'question_id');
    }

    public function questionOption()
    {
        return $this->belongsTo(QuestionOption::class, 'question_option_id');
    }

}
