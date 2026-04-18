<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Task;
use App\Models\Schedule;
use App\Models\Grade;
use App\Models\MyfessPost;
use App\Models\Complaint;
class StudentController extends Controller
{
    public function index()
    {
        $student = Auth::user()->student;
        if (!$student) abort(403, 'Akses ditolak: Anda belum terdaftar sebagai student.');
        $stats = [
            'active_tasks' => Task::where('classroom_id', $student->classroom_id)->count(),
            'schedules' => Schedule::where('classroom_id', $student->classroom_id)->count(),
            'total_grades' => Grade::where('student_id', $student->id)->count(),
        ];
        $schedules = Schedule::where('classroom_id', $student->classroom_id)->with('subject', 'teacher.user')->orderBy('day_of_week')->orderBy('start_time')->get();
        $tasks = Task::where('classroom_id', $student->classroom_id)->with('subject')->latest()->take(5)->get();
        return \Inertia\Inertia::render('Student/Dashboard', [
            'stats' => $stats,
            'schedules' => $schedules,
            'tasks' => $tasks
        ]);
    }

    public function task_exam()
    {
        $student = Auth::user()->student;
        if (!$student) abort(403);
        
        $tasks = Task::where('classroom_id', $student->classroom_id)
            ->with(['subject', 'teacher.user'])
            ->with(['submissions' => function($q) use ($student) {
                $q->where('student_id', $student->id);
            }])
            ->latest()
            ->get();
            
        return \Inertia\Inertia::render('Student/Tasks', [
            'tasks' => $tasks
        ]);
    }
    public function class_schedule()
    {
        $student = Auth::user()->student;
        if (!$student) abort(403);
        
        $schedules = Schedule::where('classroom_id', $student->classroom_id)
            ->with(['subject', 'teacher.user'])
            ->orderBy('day_of_week')
            ->orderBy('start_time')
            ->get()
            ->groupBy('day_of_week');
            
        return \Inertia\Inertia::render('Student/Schedule', [
            'schedules' => $schedules
        ]);
    }
    public function study_result() { 
        return \Inertia\Inertia::render('GenericPage', ['title' => 'Hasil Studi', 'role' => 'student']); 
    }

    public function myfess()
    {
        $student = Auth::user()->student;
        if (!$student) abort(403);
        
        $posts = MyfessPost::where('school_id', $student->school_id)
            ->with('student.user')
            ->latest()
            ->paginate(20);
            
        return \Inertia\Inertia::render('Student/MyFess', [
            'posts' => $posts
        ]);
    }
    public function jobs() { 
        $jobs = \App\Models\JobVacancy::where('school_id', Auth::user()->school_id)
            ->latest()
            ->paginate(8);
        return \Inertia\Inertia::render('Student/Jobs', [
            'jobs' => $jobs
        ]); 
    }
    public function announcement() { 
        return \Inertia\Inertia::render('Student/Announcements'); 
    }

    public function my_complaint()
    {
        $student = Auth::user()->student;
        if (!$student) abort(403);
        
        $complaints = Complaint::where('student_id', $student->id)
            ->with('responder')
            ->latest()
            ->paginate(8);
            
        return \Inertia\Inertia::render('Student/Complaints', [
            'complaints' => $complaints
        ]);
    }
    
    public function notifications() {
        return \Inertia\Inertia::render('Student/Notifications');
    }
}

