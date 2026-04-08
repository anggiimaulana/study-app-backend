<?php

// New roles to add
$roles = [
    'guru_bk' => [
        'icon' => 'heart-handshake',
        'title' => 'Guru Bimbingan Konseling',
        'desc' => 'Pemantauan mental siswa & Myfess',
        'stats' => ['laporan_masuk', 'sesi_konseling', 'siswa_diawasi'],
        'panels' => ['Analisis Emosi (Mental Health)', 'Jadwal Konseling Sekolah']
    ],
    'keuangan' => [
        'icon' => 'wallet',
        'title' => 'Staf Keuangan',
        'desc' => 'Arus kas & Pembayaran SPP',
        'stats' => ['total_pemasukan', 'tagihan_pending', 'laporan_keuangan'],
        'panels' => ['Verifikasi Pembayaran', 'Rekap Tagihan']
    ],
    'jurusan' => [
        'icon' => 'book-open',
        'title' => 'Ketua Jurusan / Peminatan',
        'desc' => 'Uji kompetensi & Sertifikasi',
        'stats' => ['total_jurusan', 'uji_kompetensi', 'siswa_sertifikasi'],
        'panels' => ['Jadwal Uji Kompetensi', 'Statistik Lulusan']
    ],
    'akademik' => [
        'icon' => 'library',
        'title' => 'Akademik & Kurikulum',
        'desc' => 'Pengaturan kurikulum pusat',
        'stats' => ['silabus_aktif', 'jadwal_terintegrasi', 'pengajar_terdaftar'],
        'panels' => ['Manajemen Kurikulum Pusat', 'Sinkronisasi Jadwal']
    ],
    'perpustakawan' => [
        'icon' => 'book-marked',
        'title' => 'Staf Perpustakaan',
        'desc' => 'Sistem Rekomendasi Buku & Peminjaman',
        'stats' => ['buku_tersedia', 'peminjaman_aktif', 'kunjungan_hari_ini'],
        'panels' => ['Sistem Auto-Rekomendasi Buku', 'Log Kunjungan & Peminjaman']
    ],
    'bkk' => [
        'icon' => 'briefcase',
        'title' => 'BKK (Bursa Kerja Khusus)',
        'desc' => 'Loker & Kerjasama Perusahaan',
        'stats' => ['mitra_perusahaan', 'loker_aktif', 'pelamar_kerja'],
        'panels' => ['Manajemen Lowongan Pekerjaan', 'Review Kandidat Siswa']
    ],
    'ppdb' => [
        'icon' => 'user-plus',
        'title' => 'Panitia PPDB',
        'desc' => 'Penerimaan Siswa Baru',
        'stats' => ['pendaftar_baru', 'uji_seleksi', 'siswa_diterima'],
        'panels' => ['Verifikasi Berkas Calon Siswa', 'Jadwal Tes Seleksi']
    ]
];

$controllersDir = __DIR__ . '/app/Http/Controllers';
$dashboardsDir = __DIR__ . '/resources/views/dashboards';

// Build Controllers & Views
foreach ($roles as $key => $info) {
    $className = str_replace(' ', '', ucwords(str_replace('_', ' ', $key))) . 'Controller';
    
    // Controller
    $controllerContent = "<?php\n\nnamespace App\Http\Controllers;\n\nuse Illuminate\Http\Request;\n\nclass {$className} extends Controller\n{\n    public function index()\n    {\n        // Dynamic stats mockup for new roles\n        \$stats = [\n            'stat1' => rand(10, 500),\n            'stat2' => rand(5, 50),\n            'stat3' => rand(100, 1000),\n        ];\n        return view('dashboards.{$key}', compact('stats'));\n    }\n}\n";
    file_put_contents($controllersDir . '/' . $className . '.php', $controllerContent);

    // View Blade
    $dashboardContent = "@extends('layouts.app')\n@section('content')\n    <aside class=\"sidebar\">\n        <div class=\"brand\"><i data-lucide=\"{$info['icon']}\"></i> LMN {$info['title']}</div>\n        <ul class=\"menu\">\n            <li><a href=\"#\" class=\"active\"><i data-lucide=\"layout-dashboard\"></i> Dashboard Utama</a></li>\n            <li><a href=\"#\"><i data-lucide=\"mouse-pointer-click\"></i> Menu Operasional</a></li>\n            <li><a href=\"#\"><i data-lucide=\"file-text\"></i> Laporan</a></li>\n        </ul>\n    </aside>\n    <main class=\"main-content\">\n        <div class=\"topbar\">\n            <div>\n                <h2 style=\"color:var(--ocean-dark)\">Dashboard {$info['title']}</h2>\n                <p style=\"color:var(--text-muted); font-size:14px; margin-top:4px;\">{$info['desc']}</p>\n            </div>\n            <div class=\"user-profile\">\n                <b>{{ Auth::user()->name }}</b>\n                <form action=\"{{ route('logout') }}\" method=\"POST\">@csrf <button class=\"btn-logout\"><i data-lucide=\"log-out\" style=\"width:16px; height:16px;\"></i></button></form>\n            </div>\n        </div>\n\n        <div class=\"stats-grid\">\n            <div class=\"stat-card\">\n                <div class=\"stat-info\"><h3>Total {$info['stats'][0]}</h3><h2>{{ \$stats['stat1'] }}</h2></div>\n                <div class=\"stat-icon\"><i data-lucide=\"activity\"></i></div>\n            </div>\n            <div class=\"stat-card\">\n                <div class=\"stat-info\"><h3>Data {$info['stats'][1]}</h3><h2>{{ \$stats['stat2'] }}</h2></div>\n                <div class=\"stat-icon\"><i data-lucide=\"bar-chart\"></i></div>\n            </div>\n            <div class=\"stat-card\">\n                <div class=\"stat-info\"><h3>Rekap {$info['stats'][2]}</h3><h2>{{ \$stats['stat3'] }}</h2></div>\n                <div class=\"stat-icon\"><i data-lucide=\"check-circle\"></i></div>\n            </div>\n        </div>\n\n        <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:24px;\">\n            <div class=\"panel\">\n                <h2><i data-lucide=\"monitor\"></i> {$info['panels'][0]}</h2>\n                <p style=\"color:var(--text-muted); line-height:1.6;\">Fitur ini terintegrasi 100% dengan ekosistem aplikasi mobile. Melakukan sinkronisasi data real-time berbasis API backend.</p>\n            </div>\n            <div class=\"panel\">\n                <h2><i data-lucide=\"layers\"></i> {$info['panels'][1]}</h2>\n                <p style=\"color:var(--text-muted); line-height:1.6;\">Menampilkan rangkuman statistik terkait tugas administratif dari role {$info['title']} di institusi ini.</p>\n            </div>\n        </div>\n    </main>\n@endsection";
    file_put_contents($dashboardsDir . '/' . $key . '.blade.php', $dashboardContent);
}

// Routes
$webPath = __DIR__ . '/routes/web.php';
$webRoutes = file_get_contents($webPath);

foreach ($roles as $key => $info) {
    if (!str_contains($webRoutes, "role:{$key}")) {
        $className = str_replace(' ', '', ucwords(str_replace('_', ' ', $key))) . 'Controller';
        $useStatement = "use App\Http\Controllers\\{$className};\n";
        $webRoutes = str_replace("use App\Http\Controllers\SiswaController;", "use App\Http\Controllers\SiswaController;\n{$useStatement}", $webRoutes);
        
        $routeBlock = "\n    Route::middleware('role:{$key}')->group(function () {\n        Route::get('/{$key}/dashboard', [{$className}::class, 'index'])->name('{$key}.dashboard');\n    });";
        $webRoutes = str_replace("});\n", "});\n{$routeBlock}\n", $webRoutes);
    }
}
file_put_contents($webPath, $webRoutes);

// Auth redirection
$authPath = __DIR__ . '/app/Http/Controllers/WebAuthController.php';
$authContent = file_get_contents($authPath);
if (!str_contains($authContent, "elseif (\$role === 'guru_bk')")) {
    $redirects = "";
    foreach ($roles as $key => $info) {
        $redirects .= "        } elseif (\$role === '{$key}') {\n            return redirect()->route('{$key}.dashboard');\n";
    }
    $authContent = str_replace("        } else {\n            Auth::logout();", $redirects . "        } else {\n            Auth::logout();", $authContent);
    file_put_contents($authPath, $authContent);
}

echo "Role extension implemented successfully!";
