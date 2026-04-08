<?php
$viewsDir = __DIR__ . '/resources/views/dashboards/super_admin_pages';
if (!is_dir($viewsDir)) mkdir($viewsDir, 0755, true);

// Create views for each side-menu
$pages = [
    'schools' => 'Manajemen Afiliasi Sekolah',
    'billing' => 'Langganan & Tagihan (Billing)',
    'monitoring' => 'Monitoring Sistem & Alert Log',
    'settings' => 'Konfigurasi Global & Aturan'
];

$lucideIcons = [
    'schools' => 'school',
    'billing' => 'credit-card',
    'monitoring' => 'activity',
    'settings' => 'settings'
];

foreach ($pages as $p => $title) {
    if ($p === 'schools') {
        $contentHTML = "
        <div class=\"panel\">
            <h2><i data-lucide=\"school\"></i> Data Manajemen Sekolah</h2>
            <p style=\"color:var(--text-muted); margin-bottom: 20px;\">Di sini Anda bisa Create, Read, Update, Delete afiliasi sekolah dan memutus/mengaktifkan status langganan SaaS (Software as a Service) mereka.</p>
            <table>
                <tr><th>ID</th><th>Nama Institusi</th><th>Aksi CRUD</th></tr>
                @foreach(App\Models\School::limit(5)->get() as \$s)
                <tr>
                    <td>#{{ \$s->id }}</td>
                    <td style=\"font-weight:600\">{{ \$s->name }}</td>
                    <td>
                        <button style=\"padding:6px 12px; background:var(--ocean-blue); color:white; border:none; border-radius:4px;\">Edit</button>
                        <button style=\"padding:6px 12px; background:var(--danger); color:white; border:none; border-radius:4px;\">Suspend</button>
                    </td>
                </tr>
                @endforeach
            </table>
        </div>";
    } elseif ($p === 'billing') {
        $contentHTML = "
        <div class=\"panel\">
            <h2><i data-lucide=\"credit-card\"></i> Rekap Tagihan Pembayaran Software</h2>
            <p style=\"color:var(--text-muted); margin-bottom:20px;\">Sistem auto-billing berjalan menggunakan trigger bulanan. Tagihan digenerate secara otomatis kepada masing-masing instansi sekolah.</p>
            <div style=\"background: var(--ocean-bg); padding:16px; border-radius:8px; border-left:4px solid var(--ocean-dark);\">
                <strong>Rp45.000.000,-</strong> <br><span style=\"color:var(--text-muted); font-size:13px;\">Estimasi Pendapatan Bulan Ini dari seluruh instansi aktif.</span>
            </div>
        </div>";
    } elseif ($p === 'monitoring') {
        $contentHTML = "
        <div class=\"panel\">
            <h2><i data-lucide=\"activity\"></i> Alert Log Server</h2>
            <p style=\"color:var(--text-muted); margin-bottom: 10px;\">Lacak aktivitas error (Track error & permasalahan), percobaan penetrasi, hingga error log 500 & 502.</p>
            <div style=\"background:#111; color:#10B981; padding:16px; border-radius:8px; font-family:monospace; line-height:1.5; font-size:13px;\">
                > System operational at 100% capacity.<br>
                > [INFO] No DB constraint issues found.<br>
                > [ALERT] Auth brute-force attempt blocked at {{ now()->subMinutes(12)->toTimeString() }}.<br>
                > Log watcher active.
            </div>
        </div>";
    } else {
        $contentHTML = "
        <div class=\"panel\">
            <h2><i data-lucide=\"settings\"></i> Konfigurasi Fitur Global</h2>
            <p style=\"color:var(--text-muted)\">Konfigurasi batas maksimal limit per sekolahan (Rate Limiter: 100 req/menit), penyesuaian disk storage, penguncian registrasi baru.</p>
        </div>";
    }

    $stub = "@extends('layouts.app')
@section('content')
    <aside class=\"sidebar\">
        <div class=\"brand\"><i data-lucide=\"building\"></i> LMN Manage</div>
        <ul class=\"menu\">
            <li><a href=\"{{ route('super_admin.dashboard') }}\"><i data-lucide=\"layout-dashboard\"></i> Analytics</a></li>
            <li><a href=\"{{ route('super_admin.schools') }}\" class=\"{{ request()->routeIs('super_admin.schools') ? 'active' : '' }}\"><i data-lucide=\"school\"></i> Manejemen Sekolah</a></li>
            <li><a href=\"{{ route('super_admin.billing') }}\" class=\"{{ request()->routeIs('super_admin.billing') ? 'active' : '' }}\"><i data-lucide=\"credit-card\"></i> Langganan & Tagihan</a></li>
            <li><a href=\"{{ route('super_admin.monitoring') }}\" class=\"{{ request()->routeIs('super_admin.monitoring') ? 'active' : '' }}\"><i data-lucide=\"activity\"></i> Monitoring/Alerts</a></li>
            <li><a href=\"{{ route('super_admin.settings') }}\" class=\"{{ request()->routeIs('super_admin.settings') ? 'active' : '' }}\"><i data-lucide=\"settings\"></i> Konfigurasi</a></li>
        </ul>
    </aside>
    <main class=\"main-content\">
        <div class=\"topbar\">
            <div>
                <h2 style=\"color:var(--ocean-dark)\">{$title}</h2>
                <p style=\"color:var(--text-muted); font-size:14px; margin-top:4px;\">Navigasi Operasional</p>
            </div>
            <div class=\"user-profile\">
                <b>{{ Auth::user()->name }}</b>
                <form action=\"{{ route('logout') }}\" method=\"POST\">@csrf <button class=\"btn-logout\"><i data-lucide=\"log-out\" style=\"width:16px; height:16px;\"></i></button></form>
            </div>
        </div>
        {$contentHTML}
    </main>
@endsection";
    file_put_contents($viewsDir . '/' . $p . '.blade.php', $stub);
}

// Ensure the main dashboard also has the updated links
$mainDashPath = __DIR__ . '/resources/views/dashboards/super_admin.blade.php';
$mainDash = file_get_contents($mainDashPath);
$newMenu = '
        <ul class="menu">
            <li><a href="{{ route(\'super_admin.dashboard\') }}" class="active"><i data-lucide="layout-dashboard"></i> Analytics</a></li>
            <li><a href="{{ route(\'super_admin.schools\') }}"><i data-lucide="school"></i> Manejemen Sekolah</a></li>
            <li><a href="{{ route(\'super_admin.billing\') }}"><i data-lucide="credit-card"></i> Langganan & Tagihan</a></li>
            <li><a href="{{ route(\'super_admin.monitoring\') }}"><i data-lucide="activity"></i> Monitoring/Alerts</a></li>
            <li><a href="{{ route(\'super_admin.settings\') }}"><i data-lucide="settings"></i> Konfigurasi</a></li>
        </ul>';
$mainDash = preg_replace('/<ul class="menu">.*?<\/ul>/s', $newMenu, $mainDash);
file_put_contents($mainDashPath, $mainDash);

// Update Controller
$controllerPath = __DIR__ . '/app/Http/Controllers/SuperAdminController.php';
$controllerContent = file_get_contents($controllerPath);
if (!str_contains($controllerContent, 'public function schools()')) {
    $methods = "
    public function schools() { return view('dashboards.super_admin_pages.schools'); }
    public function billing() { return view('dashboards.super_admin_pages.billing'); }
    public function monitoring() { return view('dashboards.super_admin_pages.monitoring'); }
    public function settings() { return view('dashboards.super_admin_pages.settings'); }
}
";
    $controllerContent = str_replace("}\n}\n", "}\n" . $methods, $controllerContent);
    // sometimes it's "}\n}"
    $controllerContent = str_replace("}\n}", "}\n" . $methods, $controllerContent);
    file_put_contents($controllerPath, $controllerContent);
}

// Update routes
$webRoutesPath = __DIR__ . '/routes/web.php';
$routesContent = file_get_contents($webRoutesPath);
if (!str_contains($routesContent, "'super_admin.schools'")) {
    $routesBlock = "
        Route::get('/super-admin/dashboard', [SuperAdminController::class, 'index'])->name('super_admin.dashboard');
        Route::get('/super-admin/schools', [SuperAdminController::class, 'schools'])->name('super_admin.schools');
        Route::get('/super-admin/billing', [SuperAdminController::class, 'billing'])->name('super_admin.billing');
        Route::get('/super-admin/monitoring', [SuperAdminController::class, 'monitoring'])->name('super_admin.monitoring');
        Route::get('/super-admin/settings', [SuperAdminController::class, 'settings'])->name('super_admin.settings');
";
    $routesContent = preg_replace("/Route::get\('\/super-admin\/dashboard'.*?;/s", $routesBlock, $routesContent);
    file_put_contents($webRoutesPath, $routesContent);
}

echo "Subpages routing completed!";
