<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Task;
use App\Models\Exam;
use App\Models\TeacherEvaluation;
class TeacherController extends Controller
{
    public function index()
    {
        $teacher = Auth::user()->teacher;
        if (!$teacher) abort(403, 'Akses ditolak: Anda belum terdaftar sebagai teacher.');
        $stats = [
            'tasks_given' => Task::where('teacher_id', $teacher->id)->count(),
            'exams_given' => Exam::where('teacher_id', $teacher->id)->count(),
            'average_rating' => round($teacher->averageRating(), 1),
            'reviews_count' => $teacher->evaluations()->count(),
        ];
        $recentTasks = Task::where('teacher_id', $teacher->id)->latest()->take(5)->get();
        $evaluations = TeacherEvaluation::where('teacher_id', $teacher->id)->latest()->take(10)->with('student.user')->get();
        return \Inertia\Inertia::render('Teacher/Dashboard', [
            'stats' => $stats,
            'recentTasks' => $recentTasks,
            'evaluations' => $evaluations
        ]);
    }

    public function task_management()
    {
        $teacher = Auth::user()->teacher;
        if (!$teacher) abort(403);
        
        $tasks = Task::where('teacher_id', $teacher->id)
            ->with(['classroom', 'subject'])
            ->withCount('submissions')
            ->latest()
            ->get();
            
        return \Inertia\Inertia::render('Teacher/TaskManagement', [
            'tasks' => $tasks
        ]);
    }
    public function cbt_grading()
    {
        $teacher = Auth::user()->teacher;
        if (!$teacher) abort(403);
        
        $exams = Exam::where('teacher_id', $teacher->id)
            ->with(['subject', 'classrooms'])
            ->withCount('attempts')
            ->latest()
            ->get();
            
        return \Inertia\Inertia::render('Teacher/CbtGrading', [
            'exams' => $exams
        ]);
    }
    public function teaching_schedule() { return \Inertia\Inertia::render('GenericPage', ['title' => 'Jadwal Mengajar', 'role' => 'teacher']); }
    public function student_evaluation() { return \Inertia\Inertia::render('GenericPage', ['title' => 'Evaluasi Student', 'role' => 'teacher']); }
    public function information() { return \Inertia\Inertia::render('GenericPage', ['title' => 'Informasi & Pengumuman', 'role' => 'teacher']); }
    public function myfess_moderation() { return \Inertia\Inertia::render('GenericPage', ['title' => 'Moderasi MyFess', 'role' => 'teacher']); }
}

