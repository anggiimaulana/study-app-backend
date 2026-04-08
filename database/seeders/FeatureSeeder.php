<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\School;
use App\Models\Student;
use App\Models\MyfessPost;

class FeatureSeeder extends Seeder
{
    public function run(): void
    {
        $school = School::first();
        $student = Student::first();

        MyfessPost::create([
            'school_id' => $school->id,
            'student_id' => $student->id,
            'content' => 'Gimana sih cara ngoding yang gak bikin pusing? #help',
            'is_anonymous' => true,
            'status' => 'published'
        ]);
    }
}
