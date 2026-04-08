<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdmissionController extends Controller
{
    public function index()
    {
        $schoolId = \Illuminate\Support\Facades\Auth::user()->school_id;
        $stats = [
            'total_registrants' => \App\Models\PpdbRegistration::where('school_id', $schoolId)->count(),
            'pending_verification' => \App\Models\PpdbRegistration::where('school_id', $schoolId)->where('status', 'pending')->count(),
            'accepted_students' => \App\Models\PpdbRegistration::where('school_id', $schoolId)->where('status', 'accepted')->count(),
        ];
        
        $recentRegistrations = \App\Models\PpdbRegistration::where('school_id', $schoolId)->latest()->take(10)->get();
        
        return \Inertia\Inertia::render('Admission/Dashboard', [
            'stats' => $stats,
            'recentRegistrations' => $recentRegistrations
        ]);
    }
    
    
    
    public function page_main_dashboard() { return \Inertia\Inertia::render('GenericPage', ['title' => 'Dashboard Utama', 'role' => 'admission']); }
    public function page_operational_menu() { return \Inertia\Inertia::render('GenericPage', ['title' => 'Menu Operasional', 'role' => 'admission']); }
    public function page_report() { return \Inertia\Inertia::render('GenericPage', ['title' => 'Laporan', 'role' => 'admission']); }
}
