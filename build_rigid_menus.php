<?php
$dashboardsDir = __DIR__ . '/resources/views/dashboards';
$controllersDir = __DIR__ . '/app/Http/Controllers';
$webPath = __DIR__ . '/routes/web.php';

// Define the precise sidebar menus for each major role to perfectly align with the new requested features
$menus = [
    'siswa' => [
        ['icon' => 'home', 'label' => 'Beranda', 'route' => 'siswa.dashboard', 'is_dashboard' => true],
        ['icon' => 'book', 'label' => 'Tugas & Ujian', 'route' => 'siswa.tugas_ujian'],
        ['icon' => 'calendar-check', 'label' => 'Jadwal Kelas', 'route' => 'siswa.jadwal_kelas'],
        ['icon' => 'file-bar-chart-2', 'label' => 'Hasil Studi', 'route' => 'siswa.hasil_studi'],
        ['icon' => 'heart', 'label' => 'Ruang Aman (MyFess)', 'route' => 'siswa.myfess'],
        ['icon' => 'briefcase', 'label' => 'Portal Loker', 'route' => 'siswa.pekerjaan'],
        ['icon' => 'megaphone', 'label' => 'Pengumuman', 'route' => 'siswa.pengumuman'],
        ['icon' => 'message-square-warning', 'label' => 'Aduanku', 'route' => 'siswa.aduanku'],
    ],
    'guru' => [
        ['icon' => 'layout-dashboard', 'label' => 'Analytics Kelas', 'route' => 'guru.dashboard', 'is_dashboard' => true],
        ['icon' => 'file-text', 'label' => 'Manajemen Tugas', 'route' => 'guru.manajemen_tugas'],
        ['icon' => 'award', 'label' => 'Penilaian CBT', 'route' => 'guru.penilaian_cbt'],
        ['icon' => 'calendar', 'label' => 'Jadwal Mengajar', 'route' => 'guru.jadwal_mengajar'],
        ['icon' => 'message-square', 'label' => 'Evaluasi Siswa', 'route' => 'guru.evaluasi_siswa'],
        ['icon' => 'bell', 'label' => 'Informasi & Pengumuman', 'route' => 'guru.informasi'],
        ['icon' => 'heart-handshake', 'label' => 'Moderasi MyFess', 'route' => 'guru.moderasi_myfess'],
    ],
    'admin_sekolah' => [
        ['icon' => 'layout-dashboard', 'label' => 'Dashboard Utama', 'route' => 'admin_sekolah.dashboard', 'is_dashboard' => true],
        ['icon' => 'users', 'label' => 'Data Pegawai & Murid', 'route' => 'admin_sekolah.data_master'],
        ['icon' => 'check-square', 'label' => 'Manajemen Ujian CBT', 'route' => 'admin_sekolah.manajemen_cbt'],
        ['icon' => 'file', 'label' => 'Tugas & Materi', 'route' => 'admin_sekolah.materi'],
        ['icon' => 'alert-triangle', 'label' => 'Laporan Aduan', 'route' => 'admin_sekolah.aduan_masuk'],
        ['icon' => 'megaphone', 'label' => 'Sistem Pengumuman', 'route' => 'admin_sekolah.siaran_informasi'],
    ],
    'guru_bk' => [
        ['icon' => 'layout-dashboard', 'label' => 'Dashboard Utama', 'route' => 'guru_bk.dashboard', 'is_dashboard' => true],
        ['icon' => 'brain', 'label' => 'Analisis Mental', 'route' => 'guru_bk.analisis'],
        ['icon' => 'calendar-clock', 'label' => 'Jadwal Konseling', 'route' => 'guru_bk.jadwal_konseling'],
        ['icon' => 'message-circle', 'label' => 'MyFess Insight', 'route' => 'guru_bk.myfess_insight'],
    ],
    'bkk' => [
        ['icon' => 'layout-dashboard', 'label' => 'Dashboard Utama', 'route' => 'bkk.dashboard', 'is_dashboard' => true],
        ['icon' => 'briefcase', 'label' => 'Manajemen Loker', 'route' => 'bkk.loker'],
        ['icon' => 'users', 'label' => 'Review Kandidat', 'route' => 'bkk.kandidat'],
        ['icon' => 'building', 'label' => 'Mitra Perusahaan', 'route' => 'bkk.mitra'],
    ],
    'keuangan' => [
        ['icon' => 'layout-dashboard', 'label' => 'Dashboard Utama', 'route' => 'keuangan.dashboard', 'is_dashboard' => true],
        ['icon' => 'wallet', 'label' => 'SPP & Tagihan', 'route' => 'keuangan.tagihan'],
        ['icon' => 'history', 'label' => 'Riwayat Kas', 'route' => 'keuangan.kas'],
    ]
];

$logoutHtml = "
            <li style=\"margin-top:20px;\">
                <form action=\"{{ route('logout') }}\" method=\"POST\">
                    @csrf
                    <button type=\"submit\" style=\"width:100%; text-align:left; background:transparent; color:var(--danger); border:none; padding:12px 20px; font-weight:600; cursor:pointer; border-radius:8px; display:flex; gap:12px; align-items:center;\">
                        <i data-lucide=\"log-out\"></i> Keluar Akun
                    </button>
                </form>
            </li>";

$webContent = file_get_contents($webPath);

foreach ($menus as $role => $items) {
    $bladeFile = $dashboardsDir . '/' . $role . '.blade.php';
    if (!file_exists($bladeFile)) continue;
    
    // 1. Rewrite the Blade sidebar menu entirely
    $content = file_get_contents($bladeFile);
    $ulParts = [];
    $ulParts[] = '<ul class="menu">';
    
    $controllerName = str_replace(' ', '', ucwords(str_replace('_', ' ', $role))) . 'Controller';
    $controllerFile = $controllersDir . '/' . $controllerName . '.php';
    $methodsToAppend = "";
    $routesToAppend = "";

    foreach ($items as $item) {
        $rName = $item['route'];
        $ulParts[] = "            <li><a href=\"{{ route('{$rName}') }}\" class=\"{{ request()->routeIs('{$rName}') ? 'active' : '' }}\"><i data-lucide=\"{$item['icon']}\"></i> {$item['label']}</a></li>";
        
        // 2. Prepare Routes and Controller Methods
        if (!isset($item['is_dashboard'])) {
            $methodName = str_replace($role . '.', '', $rName);
            $methodsToAppend .= "    public function {$methodName}() { return view('dashboards.subpages.generic', ['title' => '{$item['label']}', 'role' => '{$role}']); }\n";
            $routesToAppend .= "        Route::get('/{$role}/" . $methodName . "', [\\App\\Http\\Controllers\\{$controllerName}::class, '{$methodName}'])->name('{$rName}');\n";
        }
    }
    
    $ulParts[] = $logoutHtml;
    $ulParts[] = '        </ul>';
    $newMenuHtml = implode("\n", $ulParts);
    
    // Replace the old <ul class="menu">...</ul> with the pristine new one
    $content = preg_replace('/<ul class="menu">.*?<\/ul>/s', $newMenuHtml, $content);
    file_put_contents($bladeFile, $content);
    
    // 3. Inject missing methods into Controller
    if (file_exists($controllerFile) && !empty($methodsToAppend)) {
        $cContent = file_get_contents($controllerFile);
        // Clean out previously injected generic page_* methods to avoid redundancy
        $cContent = preg_replace('/public function page_[a-zA-Z0-9_]+\(\)\s*\{[^\}]+\}/', '', $cContent);
        // Inject new methods
        $cContent = str_replace("}\n}\n", "}\n" . rtrim($methodsToAppend) . "\n}\n", $cContent);
        // Fix up multiple empty lines
        $cContent = preg_replace("/(^[\r\n]*|[\r\n]+)[\s\t]*[\r\n]+/", "\n", $cContent);
        file_put_contents($controllerFile, $cContent);
    }
    
    // 4. Inject missing routes into web.php
    if (!empty($routesToAppend)) {
        // Strip out old generic page_ routes to prevent bloat
        $webContent = preg_replace("/Route::get\('\/{$role}\/page_.*?;\n/", "", $webContent);
        
        $groupPattern = "/Route::middleware\('role:{$role}'\)->group\(function \(\) \{(.*?)\}\);/ms";
        if (preg_match($groupPattern, $webContent, $groupMatch)) {
            // merge inside
            $oldInside = $groupMatch[1];
            // only keep the dashboard route inside
            $dashboardRoute = "";
            if (preg_match('/Route::get.*?dashboard.*/', $oldInside, $dbMatch)) {
                $dashboardRoute = $dbMatch[0] . "\n";
            }
            $newInside = "\n" . $dashboardRoute . rtrim($routesToAppend) . "\n    ";
            $newGroup = "Route::middleware('role:{$role}')->group(function () {" . $newInside . "});";
            $webContent = preg_replace($groupPattern, $newGroup, $webContent);
        }
    }
}

file_put_contents($webPath, $webContent);
echo "All menus perfectly structured and patched!";
