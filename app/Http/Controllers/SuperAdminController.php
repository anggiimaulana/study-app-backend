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
        return view('dashboards.super_admin', compact('stats', 'schools'));
    }

    public function schools() { return view('dashboards.super_admin_pages.schools'); }
    public function billing() { return view('dashboards.super_admin_pages.billing'); }
    public function monitoring() { return view('dashboards.super_admin_pages.monitoring'); }
    public function settings() { return view('dashboards.super_admin_pages.settings'); }


}

