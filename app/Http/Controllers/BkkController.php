<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
class BkkController extends Controller
{
    public function index()
    {
        // Dynamic stats mockup for new roles
        $stats = [
            'stat1' => rand(10, 500),
            'stat2' => rand(5, 50),
            'stat3' => rand(100, 1000),
        ];
        return view('dashboards.bkk', compact('stats'));
    }

    public function loker() { return view('dashboards.subpages.generic', ['title' => 'Manajemen Loker', 'role' => 'bkk']); }
    public function kandidat() { return view('dashboards.subpages.generic', ['title' => 'Review Kandidat', 'role' => 'bkk']); }
    public function mitra() { return view('dashboards.subpages.generic', ['title' => 'Mitra Perusahaan', 'role' => 'bkk']); }
}

