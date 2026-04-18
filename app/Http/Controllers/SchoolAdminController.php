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
    public function cbt_management() { return \Inertia\Inertia::render('SchoolAdmin/CbtManagement'); }
    public function material() { return \Inertia\Inertia::render('SchoolAdmin/Material'); }
    public function incoming_complaint() 
    { 
        $schoolId = Auth::user()->school_id;
        $query = Complaint::where('school_id', $schoolId)
            ->where('target_role', 'school-admin');

        $stats = [
            'total' => (clone $query)->count(),
            'pending' => (clone $query)->where('status', 'pending')->count(),
            'processed' => (clone $query)->whereIn('status', ['dalam tinjauan', 'dalam proses'])->count(),
            'resolved' => (clone $query)->where('status', 'selesai')->count(),
        ];

        $complaints = $query->with(['student.user', 'student.classroom', 'responder'])
            ->latest()
            ->paginate(8);

        return \Inertia\Inertia::render('SchoolAdmin/IncomingComplaint', [
            'complaints' => $complaints,
            'stats' => $stats
        ]); 
    }
    public function broadcast() { return \Inertia\Inertia::render('SchoolAdmin/Broadcast'); }
}

