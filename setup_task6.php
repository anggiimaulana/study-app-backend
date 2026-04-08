<?php

$controllersDir = __DIR__ . '/app/Http/Controllers';

// --- Guru Web Controller ---
$guruContent = "<?php\n\nnamespace App\Http\Controllers;\n\nuse Illuminate\Http\Request;\nuse Illuminate\Support\Facades\Auth;\nuse App\Models\Task;\nuse App\Models\Exam;\nuse App\Models\TeacherEvaluation;\n\nclass GuruController extends Controller\n{\n    public function index()\n    {\n        \$teacher = Auth::user()->teacher;\n        if (!\$teacher) abort(403, 'Akses ditolak: Anda belum terdaftar sebagai guru.');\n        \n        \$stats = [\n            'tasks_given' => Task::where('teacher_id', \$teacher->id)->count(),\n            'exams_given' => Exam::where('teacher_id', \$teacher->id)->count(),\n            'average_rating' => round(\$teacher->averageRating(), 1),\n            'reviews_count' => \$teacher->evaluations()->count(),\n        ];\n        \n        \$recentTasks = Task::where('teacher_id', \$teacher->id)->latest()->take(5)->get();\n        \$evaluations = TeacherEvaluation::where('teacher_id', \$teacher->id)->latest()->take(10)->with('student.user')->get();\n        \n        return view('dashboards.guru', compact('stats', 'recentTasks', 'evaluations'));\n    }\n}\n";
file_put_contents($controllersDir . '/GuruController.php', $guruContent);

// --- Siswa Web Controller ---
$siswaContent = "<?php\n\nnamespace App\Http\Controllers;\n\nuse Illuminate\Http\Request;\nuse Illuminate\Support\Facades\Auth;\nuse App\Models\Task;\nuse App\Models\Schedule;\nuse App\Models\Grade;\n\nclass SiswaController extends Controller\n{\n    public function index()\n    {\n        \$student = Auth::user()->student;\n        if (!\$student) abort(403, 'Akses ditolak: Anda belum terdaftar sebagai siswa.');\n        \n        \$stats = [\n            'active_tasks' => Task::where('classroom_id', \$student->classroom_id)->count(),\n            'schedules' => Schedule::where('classroom_id', \$student->classroom_id)->count(),\n            'total_grades' => Grade::where('student_id', \$student->id)->count(),\n        ];\n        \n        \$schedules = Schedule::where('classroom_id', \$student->classroom_id)->with('subject', 'teacher.user')->orderBy('day_of_week')->orderBy('start_time')->get();\n        \$tasks = Task::where('classroom_id', \$student->classroom_id)->with('subject')->latest()->take(5)->get();\n        \n        return view('dashboards.siswa', compact('stats', 'schedules', 'tasks'));\n    }\n}\n";
file_put_contents($controllersDir . '/SiswaController.php', $siswaContent);

// --- Routes setup append ---
$webRoutesPath = __DIR__ . '/routes/web.php';
$webContent = file_get_contents($webRoutesPath);
if (!str_contains($webContent, 'GuruController')) {
    $newRoutes = "
    Route::middleware('role:guru')->group(function () {
        Route::get('/guru/dashboard', [\App\Http\Controllers\GuruController::class, 'index'])->name('guru.dashboard');
    });

    Route::middleware('role:siswa')->group(function () {
        Route::get('/siswa/dashboard', [\App\Http\Controllers\SiswaController::class, 'index'])->name('siswa.dashboard');
    });
});";
    $webContent = str_replace("});\n", $newRoutes, $webContent);
    // Be careful with str_replace closing tag. Using regex or precise replacement is safer
}
// Actually, let's just rewrite the whole chunk safely:
$webContent = "<?php\n\nuse Illuminate\Support\Facades\Route;\nuse App\Http\Controllers\WebAuthController;\nuse App\Http\Controllers\SuperAdminController;\nuse App\Http\Controllers\AdminSekolahController;\nuse App\Http\Controllers\GuruController;\nuse App\Http\Controllers\SiswaController;\n\nRoute::get('/', function () {\n    return redirect('/login');\n});\n\nRoute::get('/login', [WebAuthController::class, 'showLogin'])->name('login');\nRoute::post('/login', [WebAuthController::class, 'login']);\nRoute::post('/logout', [WebAuthController::class, 'logout'])->name('logout');\n\nRoute::middleware(['auth', 'Illuminate\Session\Middleware\AuthenticateSession'])->group(function () {\n    Route::middleware('role:super_admin')->group(function () {\n        Route::get('/super-admin/dashboard', [SuperAdminController::class, 'index'])->name('super_admin.dashboard');\n    });\n\n    Route::middleware('role:admin_sekolah')->group(function () {\n        Route::get('/admin/dashboard', [AdminSekolahController::class, 'index'])->name('admin_sekolah.dashboard');\n    });\n\n    Route::middleware('role:guru')->group(function () {\n        Route::get('/guru/dashboard', [GuruController::class, 'index'])->name('guru.dashboard');\n    });\n\n    Route::middleware('role:siswa')->group(function () {\n        Route::get('/siswa/dashboard', [SiswaController::class, 'index'])->name('siswa.dashboard');\n    });\n});\n";
file_put_contents($webRoutesPath, $webContent);


// --- Views setup ---
$viewsDir = __DIR__ . '/resources/views/dashboards';

// Guru Template
$guruTemplate = '@extends(\'layouts.app\')
@section(\'content\')
    <aside class="sidebar">
        <div class="brand"><i data-lucide="book-open-check"></i> Ruang Guru</div>
        <ul class="menu">
            <li><a href="#" class="active"><i data-lucide="layout-dashboard"></i> Analytics Kelas</a></li>
            <li><a href="#"><i data-lucide="file-text"></i> Manajemen Tugas</a></li>
            <li><a href="#"><i data-lucide="award"></i> Penilaian (CBT/Tugas)</a></li>
            <li><a href="#"><i data-lucide="calendar"></i> Jadwal Mengajar</a></li>
            <li><a href="#"><i data-lucide="message-square"></i> Evaluasi Siswa</a></li>
        </ul>
    </aside>
    <main class="main-content">
        <div class="topbar">
            <div>
                <h2 style="color:var(--ocean-dark)">Dashboard Tenaga Pendidik</h2>
                <p style="color:var(--text-muted); font-size:14px; margin-top:4px;">Panel Kinerja dan Akademik</p>
            </div>
            <div class="user-profile">
                <b>{{ Auth::user()->name }}</b>
                <form action="{{ route(\'logout\') }}" method="POST">@csrf <button class="btn-logout"><i data-lucide="log-out" style="width:16px; height:16px;"></i></button></form>
            </div>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-info"><h3>Total Tugas Diberikan</h3><h2>{{ $stats[\'tasks_given\'] }}</h2></div>
                <div class="stat-icon"><i data-lucide="check-square"></i></div>
            </div>
            <div class="stat-card">
                <div class="stat-info"><h3>Ujian (CBT) Aktif</h3><h2>{{ $stats[\'exams_given\'] }}</h2></div>
                <div class="stat-icon"><i data-lucide="file-question"></i></div>
            </div>
            <div class="stat-card">
                <div class="stat-info"><h3>Rata-rata Evaluasi</h3><h2><i data-lucide="star" style="width:18px; color:#f59e0b"></i> {{ $stats[\'average_rating\'] }} / 5.0</h2></div>
                <div class="stat-icon"><i data-lucide="star"></i></div>
            </div>
        </div>

        <div class="panel">
            <h2><i data-lucide="book-open"></i> Tugas Terakhir yang Anda Buat</h2>
            <table>
                <tr><th>Judul Tugas</th><th>Tipe</th><th>Batas Waktu</th><th>Status</th></tr>
                @foreach($recentTasks as $task)
                <tr>
                    <td>{{ $task->title }}</td>
                    <td><span class="badge {{ $task->type == \'tugas\' ? \'active\' : \'inactive\' }}">{{ strtoupper($task->type) }}</span></td>
                    <td>{{ $task->due_date ? mb_substr($task->due_date, 0, 10) : \'-\' }}</td>
                    <td>Aktif</td>
                </tr>
                @endforeach
                @if($recentTasks->isEmpty())
                <tr><td colspan="4" style="text-align:center; color:var(--text-muted);">Belum ada tugas yang dibuat.</td></tr>
                @endif
            </table>
        </div>

        <div class="panel">
            <h2><i data-lucide="message-circle"></i> Hasil Evaluasi & Observasi dari Siswa (Privat)</h2>
            <table>
                <tr><th>Siswa</th><th>Waktu</th><th>Rating</th><th>Catatan Observasi Khusus</th></tr>
                @foreach($evaluations as $ev)
                <tr>
                    <td>{{ $ev->student->user->name ?? \'Anonim\' }}</td>
                    <td>{{ $ev->created_at->format(\'d M Y\') }}</td>
                    <td style="color:var(--ocean-blue); font-weight:700;">{{ $ev->rating }} / 5</td>
                    <td style="color:var(--text-muted); font-style:italic;">"{{ $ev->notes ?? \'Tanpa catatan\' }}"</td>
                </tr>
                @endforeach
                @if($evaluations->isEmpty())
                <tr><td colspan="4" style="text-align:center; color:var(--text-muted);">Belum ada evaluasi masuk.</td></tr>
                @endif
            </table>
        </div>
    </main>
@endsection';
file_put_contents($viewsDir . '/guru.blade.php', $guruTemplate);

// Siswa Template
$siswaTemplate = '@extends(\'layouts.app\')
@section(\'content\')
    <aside class="sidebar">
        <div class="brand"><i data-lucide="graduation-cap"></i> Ruang Siswa</div>
        <ul class="menu">
            <li><a href="#" class="active"><i data-lucide="home"></i> Beranda</a></li>
            <li><a href="#"><i data-lucide="book"></i> Tugas & Ujian</a></li>
            <li><a href="#"><i data-lucide="calendar-check"></i> Jadwal Kelas</a></li>
            <li><a href="#"><i data-lucide="file-bar-chart-2"></i> Hasil Studi</a></li>
            <li style="margin-top:20px;"><a href="#" style="background:var(--ocean-bg); color:var(--ocean-dark);"><i data-lucide="smartphone"></i> Buka via Mobile App</a></li>
        </ul>
    </aside>
    <main class="main-content">
        <div class="topbar">
            <div>
                <h2 style="color:var(--ocean-dark)">LMN Web Dashboard Siswa</h2>
                <p style="color:var(--text-muted); font-size:14px; margin-top:4px;">Akses PC untuk aktivitas sekolah</p>
            </div>
            <div class="user-profile">
                <b>{{ Auth::user()->name }}</b>
                <form action="{{ route(\'logout\') }}" method="POST">@csrf <button class="btn-logout"><i data-lucide="log-out" style="width:16px; height:16px;"></i></button></form>
            </div>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-info"><h3>Total Tugas (Belum Selesai)</h3><h2>{{ $stats[\'active_tasks\'] }}</h2></div>
                <div class="stat-icon"><i data-lucide="alert-circle"></i></div>
            </div>
            <div class="stat-card">
                <div class="stat-info"><h3>Jadwal Pelajaran Kelas</h3><h2>{{ $stats[\'schedules\'] }} Mapel</h2></div>
                <div class="stat-icon"><i data-lucide="calendar"></i></div>
            </div>
            <div class="stat-card">
                <div class="stat-info"><h3>Nilai / Raport (Grades)</h3><h2>{{ $stats[\'total_grades\'] }} Draft</h2></div>
                <div class="stat-icon"><i data-lucide="award"></i></div>
            </div>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:24px;">
            <div class="panel">
                <h2><i data-lucide="clipboard-list"></i> Tugas & Latihan Terbaru</h2>
                <table>
                    <tr><th>Pelajaran</th><th>Judul Tugas</th><th>Batas</th></tr>
                    @foreach($tasks as $t)
                    <tr>
                        <td style="font-weight:600;">{{ $t->subject->name ?? \'-\' }}</td>
                        <td>{{ $t->title }}</td>
                        <td style="color:var(--danger)">{{ $t->due_date ? date(\'d M\', strtotime($t->due_date)) : \'-\' }}</td>
                    </tr>
                    @endforeach
                    @if($tasks->isEmpty())
                    <tr><td colspan="3" style="text-align:center;">Hore! Tidak ada tugas.</td></tr>
                    @endif
                </table>
            </div>

            <div class="panel">
                <h2><i data-lucide="clock"></i> Jadwal Mengajar Kelas</h2>
                <table>
                    <tr><th>Hari</th><th>Mapel</th><th>Guru</th><th>Pukul</th></tr>
                    @foreach($schedules as $s)
                    <tr>
                        <td>{{ [\'Minggu\',\'Senin\',\'Selasa\',\'Rabu\',\'Kamis\',\'Jumat\',\'Sabtu\'][$s->day_of_week] ?? \'Minggu\' }}</td>
                        <td>{{ $s->subject->name ?? \'-\' }}</td>
                        <td>{{ $s->teacher->user->name ?? \'-\' }}</td>
                        <td>{{ mb_substr($s->start_time, 0, 5) }}</td>
                    </tr>
                    @endforeach
                     @if($schedules->isEmpty())
                    <tr><td colspan="4" style="text-align:center;">Belum ada jadwal.</td></tr>
                    @endif
                </table>
            </div>
        </div>
    </main>
@endsection';
file_put_contents($viewsDir . '/siswa.blade.php', $siswaTemplate);

echo "Task 6 setup completed: Guru and Siswa web dashboards created.";
