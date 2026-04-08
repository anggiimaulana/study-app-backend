<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
class KeuanganController extends Controller
{
    public function index()
    {
        // Dynamic stats mockup for new roles
        $stats = [
            'stat1' => rand(10, 500),
            'stat2' => rand(5, 50),
            'stat3' => rand(100, 1000),
        ];
        return view('dashboards.keuangan', compact('stats'));
    }

    public function tagihan() { return view('dashboards.subpages.generic', ['title' => 'SPP & Tagihan', 'role' => 'keuangan']); }
    public function kas() { return view('dashboards.subpages.generic', ['title' => 'Riwayat Kas', 'role' => 'keuangan']); }
}

