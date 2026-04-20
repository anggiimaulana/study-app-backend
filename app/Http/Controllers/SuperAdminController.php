<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\School;
use App\Models\User;
use App\Models\Complaint;

class SuperAdminController extends Controller
{
    public function index()
    {
        $stats = [
            'schools' => School::count(),
            'active_schools' => School::where('status', 'active')->count(),
            'total_users' => User::count(),
            'total_complaints' => Complaint::count(),
        ];
        $schools = School::withCount('students')->get();
        return \Inertia\Inertia::render('SuperAdmin/Dashboard', ['stats' => $stats, 'schools' => $schools]);
    }

    public function schools() 
    { 
        $schools = \App\Models\School::withCount(['students', 'teachers'])->latest()->paginate(10);
        return \Inertia\Inertia::render('SuperAdmin/Schools', ['schools' => $schools]); 
    }
    
    public function billing() { return \Inertia\Inertia::render('SuperAdmin/Billing'); }
    public function monitoring() { return \Inertia\Inertia::render('SuperAdmin/Monitoring'); }
    public function settings() { return \Inertia\Inertia::render('SuperAdmin/Settings'); }


}

