<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
class CareerController extends Controller
{
    public function index()
    {
        $schoolId = \Illuminate\Support\Facades\Auth::user()->school_id;
        $stats = [
            'active_jobs' => \App\Models\JobVacancy::where('school_id', $schoolId)->where('status', 'open')->count(),
            'total_applications' => \App\Models\JobApplication::whereHas('job', function($q) use ($schoolId) {
                $q->where('school_id', $schoolId);
            })->count(),
            'pending_review' => \App\Models\JobApplication::whereHas('job', function($q) use ($schoolId) {
                $q->where('school_id', $schoolId);
            })->where('status', 'pending')->count(),
        ];
        
        $recentApplications = \App\Models\JobApplication::whereHas('job', function($q) use ($schoolId) {
                $q->where('school_id', $schoolId);
            })->with(['student.user', 'job'])->latest()->take(10)->get();
        
        return \Inertia\Inertia::render('Career/Dashboard', [
            'stats' => $stats,
            'recentApplications' => $recentApplications
        ]);
    }

    public function job_vacancies() { return \Inertia\Inertia::render('GenericPage', ['title' => 'Manajemen Loker', 'role' => 'career']); }
    public function candidate() { return \Inertia\Inertia::render('GenericPage', ['title' => 'Review Kandidat', 'role' => 'career']); }
    public function partner() { return \Inertia\Inertia::render('GenericPage', ['title' => 'Mitra Perusahaan', 'role' => 'career']); }
}

