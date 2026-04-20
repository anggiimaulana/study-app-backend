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
    public function teaching_schedule() { return \Inertia\Inertia::render('Teacher/TeachingSchedule'); }
    public function student_evaluation() { return \Inertia\Inertia::render('Teacher/StudentEvaluation'); }
    public function information() { return \Inertia\Inertia::render('Teacher/Information'); }
    public function myfess_moderation() 
    { 
        $user = Auth::user();
        $teacher = $user->teacher;
        if (!$teacher) abort(403);

        $schoolId = $user->school_id;

        // 1. Self Check-ins
        $myCheckins = \App\Models\EmotionCheckin::where('user_id', $user->id)
            ->latest()
            ->take(10)
            ->get();

        // 2. Counseling Requests
        // If teacher is Guru BK, they see all 'bk' target_role in the school
        // If teacher is Wali Kelas, they see 'wali_kelas' target_role for THEIR classroom students
        
        $isBK = in_array('Guru BK', $teacher->positions ?? []);
        $classroomsLed = \App\Models\Classroom::where('homeroom_teacher_id', $teacher->id)->pluck('id');

        $requests = \App\Models\Counseling::with(['student.user', 'student.classroom', 'preferredCounselor.user'])
            ->where('school_id', $schoolId)
            ->where(function($q) use ($isBK, $classroomsLed) {
                if ($isBK) {
                    $q->orWhere('target_role', 'bk');
                }
                if ($classroomsLed->isNotEmpty()) {
                    $q->orWhere(function($sq) use ($classroomsLed) {
                        $sq->where('target_role', 'wali_kelas')
                           ->whereHas('student', function($ssq) use ($classroomsLed) {
                               $ssq->whereIn('classroom_id', $classroomsLed);
                           });
                    });
                }
            })
            ->latest()
            ->get();

        return \Inertia\Inertia::render('Teacher/MyfessModeration', [
            'myCheckins' => $myCheckins,
            'counselingRequests' => $requests,
            'isBK' => $isBK
        ]); 
    }
}

