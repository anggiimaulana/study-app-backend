<?php

namespace App\Services;

use App\Models\Exam;
use App\Models\Question;

class CbtService
{
    /**
     * Get randomized questions for a student's exam attempt.
     */
    public function getExamQuestions(int $examId, bool $randomize = true)
    {
        $query = Question::where('exam_id', $examId)->with(['options' => function($q) use ($randomize) {
            if ($randomize) {
                $q->inRandomOrder();
            }
        }]);

        if ($randomize) {
            $query->inRandomOrder();
        }

        return $query->get();
    }
}
