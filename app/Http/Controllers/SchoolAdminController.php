<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Teacher;
use App\Models\Task;
use App\Models\Complaint;
use App\Models\TeacherEvaluation;
use Illuminate\Support\Facades\Auth;
class SchoolAdminController extends Controller
{
    public function index()
    {
        $schoolId = Auth::user()->school_id;
        $stats = [
            'students' => Student::where('school_id', $schoolId)->count(),
            'teachers' => Teacher::where('school_id', $schoolId)->count(),
            'tasks' => Task::where('school_id', $schoolId)->count(),
            'complaints' => Complaint::where('school_id', $schoolId)->count(),
        ];
        $teachers = Teacher::where('school_id', $schoolId)->with('user')->get()->map(function($teacher) {
            $teacher->average_rating = round($teacher->averageRating(), 1);
            return $teacher;
        })->sortByDesc('average_rating');
        return \Inertia\Inertia::render('SchoolAdmin/Dashboard', [
            'stats' => $stats,
            'teachers' => $teachers
        ]);
    }

    public function master_data()
    {
        $schoolId = Auth::user()->school_id;
        
        $students = Student::where('school_id', $schoolId)->with(['user', 'classroom'])->latest()->paginate(15);
        $teachers = Teacher::where('school_id', $schoolId)->with('user')->latest()->paginate(15);
        
        return \Inertia\Inertia::render('SchoolAdmin/MasterData', [
            'students' => $students,
            'teachers' => $teachers
        ]);
    }
    public function cbt_management() { return \Inertia\Inertia::render('GenericPage', ['title' => 'Manajemen Ujian CBT', 'role' => 'school-admin']); }
    public function material() { return \Inertia\Inertia::render('GenericPage', ['title' => 'Tugas & Materi', 'role' => 'school-admin']); }
    public function incoming_complaint() { return \Inertia\Inertia::render('GenericPage', ['title' => 'Laporan Aduan', 'role' => 'school-admin']); }
    public function broadcast() { return \Inertia\Inertia::render('GenericPage', ['title' => 'Sistem Pengumuman', 'role' => 'school-admin']); }
}

