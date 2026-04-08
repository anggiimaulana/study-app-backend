<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
class GuruBkController extends Controller
{
    public function index()
    {
        // Dynamic stats mockup for new roles
        $stats = [
            'stat1' => rand(10, 500),
            'stat2' => rand(5, 50),
            'stat3' => rand(100, 1000),
        ];
        return view('dashboards.guru_bk', compact('stats'));
    }

    public function analisis() { return view('dashboards.subpages.generic', ['title' => 'Analisis Mental', 'role' => 'guru_bk']); }
    public function jadwal_konseling() { return view('dashboards.subpages.generic', ['title' => 'Jadwal Konseling', 'role' => 'guru_bk']); }
    public function myfess_insight() { return view('dashboards.subpages.generic', ['title' => 'MyFess Insight', 'role' => 'guru_bk']); }
}

