<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AcademicController extends Controller
{
    public function index()
    {
        // Dynamic stats mockup for new roles
        $stats = [
            'stat1' => rand(10, 500),
            'stat2' => rand(5, 50),
            'stat3' => rand(100, 1000),
        ];
        return \Inertia\Inertia::render('Staff/Dashboard', ['role' => 'academic', 'stats' => $stats]);
    }
    
    
    
    public function page_main_dashboard() { return \Inertia\Inertia::render('GenericPage', ['title' => 'Dashboard Utama', 'role' => 'academic']); }
    public function page_operational_menu() { return \Inertia\Inertia::render('GenericPage', ['title' => 'Menu Operasional', 'role' => 'academic']); }
    public function page_report() { return \Inertia\Inertia::render('GenericPage', ['title' => 'Laporan', 'role' => 'academic']); }
}
