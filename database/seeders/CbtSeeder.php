<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\School;
use App\Models\Teacher;
use App\Models\Subject;
use App\Models\Classroom;
use App\Models\Exam;
use App\Models\Question;
use App\Models\QuestionOption;
use Carbon\Carbon;

class CbtSeeder extends Seeder
{
    public function run(): void
    {
        $school = School::first();
        $teacher = Teacher::first();
        $subject = Subject::first();
        $classroom = Classroom::first();

        $exam = Exam::create([
            'school_id' => $school->id,
            'teacher_id' => $teacher->id,
            'subject_id' => $subject->id,
            'title' => 'Ujian Tengah Semester PBO',
            'description' => 'Kerjakan dengan jujur. Waktu 60 menit.',
            'start_time' => Carbon::now()->subMinutes(10),
            'end_time' => Carbon::now()->addHours(2),
            'duration_minutes' => 60,
            'type' => 'uts'
        ]);

        $exam->classrooms()->attach($classroom->id);

        $q1 = Question::create(['exam_id' => $exam->id, 'type' => 'multiple_choice', 'text' => 'Apa paradigma utama bahasa Java?']);
        QuestionOption::create(['question_id' => $q1->id, 'text' => 'Procedural']);
        QuestionOption::create(['question_id' => $q1->id, 'text' => 'Functional']);
        QuestionOption::create(['question_id' => $q1->id, 'text' => 'Object Oriented', 'is_correct' => true]);

        Question::create(['exam_id' => $exam->id, 'type' => 'essay', 'text' => 'Jelaskan perbedaan Inheritance dan Polymorphism!']);
    }
}
