<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AkademikController extends Controller
{
    public function index()
    {
        // Dynamic stats mockup for new roles
        $stats = [
            'stat1' => rand(10, 500),
            'stat2' => rand(5, 50),
            'stat3' => rand(100, 1000),
        ];
        return view('dashboards.akademik', compact('stats'));
    }
    
    
    
    public function page_dashboard_utama() { return view('dashboards.subpages.generic', ['title' => 'Dashboard Utama', 'role' => 'akademik']); }
    public function page_menu_operasional() { return view('dashboards.subpages.generic', ['title' => 'Menu Operasional', 'role' => 'akademik']); }
    public function page_laporan() { return view('dashboards.subpages.generic', ['title' => 'Laporan', 'role' => 'akademik']); }
}
