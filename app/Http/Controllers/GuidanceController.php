<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
class GuidanceController extends Controller
{
    public function index()
    {
        // Dynamic stats mockup for new roles
        $stats = [
            'stat1' => rand(10, 500),
            'stat2' => rand(5, 50),
            'stat3' => rand(100, 1000),
        ];
        return \Inertia\Inertia::render('Staff/Dashboard', ['role' => 'guidance', 'stats' => $stats]);
    }

    public function analysis() { return \Inertia\Inertia::render('GenericPage', ['title' => 'Analisis Mental', 'role' => 'guidance']); }
    public function counseling_schedule() { return \Inertia\Inertia::render('GenericPage', ['title' => 'Jadwal Konseling', 'role' => 'guidance']); }
    public function myfess_insight() { return \Inertia\Inertia::render('GenericPage', ['title' => 'MyFess Insight', 'role' => 'guidance']); }
}

