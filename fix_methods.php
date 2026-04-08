<?php
$controllersDir = __DIR__ . '/app/Http/Controllers';

$menus = [
    'siswa' => [
        ['label' => 'Tugas & Ujian', 'route' => 'siswa.tugas_ujian'],
        ['label' => 'Jadwal Kelas', 'route' => 'siswa.jadwal_kelas'],
        ['label' => 'Hasil Studi', 'route' => 'siswa.hasil_studi'],
        ['label' => 'Ruang Aman (MyFess)', 'route' => 'siswa.myfess'],
        ['label' => 'Portal Loker', 'route' => 'siswa.pekerjaan'],
        ['label' => 'Pengumuman', 'route' => 'siswa.pengumuman'],
        ['label' => 'Aduanku', 'route' => 'siswa.aduanku'],
    ],
    'guru' => [
        ['label' => 'Manajemen Tugas', 'route' => 'guru.manajemen_tugas'],
        ['label' => 'Penilaian CBT', 'route' => 'guru.penilaian_cbt'],
        ['label' => 'Jadwal Mengajar', 'route' => 'guru.jadwal_mengajar'],
        ['label' => 'Evaluasi Siswa', 'route' => 'guru.evaluasi_siswa'],
        ['label' => 'Informasi & Pengumuman', 'route' => 'guru.informasi'],
        ['label' => 'Moderasi MyFess', 'route' => 'guru.moderasi_myfess'],
    ],
    'admin_sekolah' => [
        ['label' => 'Data Pegawai & Murid', 'route' => 'admin_sekolah.data_master'],
        ['label' => 'Manajemen Ujian CBT', 'route' => 'admin_sekolah.manajemen_cbt'],
        ['label' => 'Tugas & Materi', 'route' => 'admin_sekolah.materi'],
        ['label' => 'Laporan Aduan', 'route' => 'admin_sekolah.aduan_masuk'],
        ['label' => 'Sistem Pengumuman', 'route' => 'admin_sekolah.siaran_informasi'],
    ],
    'guru_bk' => [
        ['label' => 'Analisis Mental', 'route' => 'guru_bk.analisis'],
        ['label' => 'Jadwal Konseling', 'route' => 'guru_bk.jadwal_konseling'],
        ['label' => 'MyFess Insight', 'route' => 'guru_bk.myfess_insight'],
    ],
    'bkk' => [
        ['label' => 'Manajemen Loker', 'route' => 'bkk.loker'],
        ['label' => 'Review Kandidat', 'route' => 'bkk.kandidat'],
        ['label' => 'Mitra Perusahaan', 'route' => 'bkk.mitra'],
    ],
    'keuangan' => [
        ['label' => 'SPP & Tagihan', 'route' => 'keuangan.tagihan'],
        ['label' => 'Riwayat Kas', 'route' => 'keuangan.kas'],
    ]
];

foreach ($menus as $role => $items) {
    $controllerName = str_replace(' ', '', ucwords(str_replace('_', ' ', $role))) . 'Controller';
    $controllerFile = $controllersDir . '/' . $controllerName . '.php';
    if (!file_exists($controllerFile)) continue;
    
    $cContent = file_get_contents($controllerFile);
    $methodsToAppend = "\n";
    foreach ($items as $item) {
        $methodName = str_replace($role . '.', '', $item['route']);
        $methodsToAppend .= "    public function {$methodName}() { return view('dashboards.subpages.generic', ['title' => '{$item['label']}', 'role' => '{$role}']); }\n";
    }
    
    // reliably insert before the last closing brace
    $lastBracePos = strrpos($cContent, '}');
    if ($lastBracePos !== false) {
        $cContent = substr_replace($cContent, $methodsToAppend . "}\n", $lastBracePos, 1);
        file_put_contents($controllerFile, $cContent);
    }
}
echo "Controller methods re-injected strongly.";
