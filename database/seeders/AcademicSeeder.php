<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\School;
use App\Models\User;
use App\Models\AcademicYear;
use App\Models\Major;
use App\Models\Teacher;
use App\Models\Student;
use App\Models\Classroom;
use App\Models\Subject;
use App\Models\Schedule;

class AcademicSeeder extends Seeder
{
    public function run(): void
    {
        $school = School::first();
        $guruUser = User::where('role', 'teacher')->first();
        $siswaUser = User::where('role', 'student')->first();

        $year = AcademicYear::create([
            'school_id' => $school->id,
            'name' => '2023/2024',
            'semester' => 'Genap',
            'is_active' => true
        ]);

        $majorRpl = Major::create(['school_id' => $school->id, 'code' => 'RPL', 'name' => 'Rekayasa Perangkat Lunak']);
        Major::create(['school_id' => $school->id, 'code' => 'TKJ', 'name' => 'Teknik Komputer Jaringan']);

        $teacher = Teacher::create([
            'user_id' => $guruUser->id,
            'school_id' => $school->id,
            'nip' => '198001012005011003',
            'gender' => 'L',
        ]);

        $classroom = Classroom::create([
            'school_id' => $school->id,
            'major_id' => $majorRpl->id,
            'academic_year_id' => $year->id,
            'homeroom_teacher_id' => $teacher->id,
            'level' => 10,
            'name' => 'X RPL 1'
        ]);

        $student = Student::create([
            'user_id' => $siswaUser->id,
            'school_id' => $school->id,
            'major_id' => $majorRpl->id,
            'classroom_id' => $classroom->id,
            'nis' => '102938',
            'gender' => 'L'
        ]);

        $subject = Subject::create([
            'school_id' => $school->id,
            'major_id' => $majorRpl->id,
            'code' => 'PBO',
            'name' => 'Pemrograman Berorientasi Objek'
        ]);

        Schedule::create([
            'school_id' => $school->id,
            'academic_year_id' => $year->id,
            'classroom_id' => $classroom->id,
            'subject_id' => $subject->id,
            'teacher_id' => $teacher->id,
            'day_of_week' => 1, // Senin
            'start_time' => '07:00:00',
            'end_time' => '09:00:00'
        ]);
    }
}
