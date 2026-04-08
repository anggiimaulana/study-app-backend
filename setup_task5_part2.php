<?php

$controllersDir = __DIR__ . '/app/Http/Controllers';

// --- Dashboard Controllers ---
$superAdminContent = "<?php\n\nnamespace App\Http\Controllers;\n\nuse Illuminate\Http\Request;\nuse App\Models\School;\nuse App\Models\User;\nuse App\Models\Complaint;\n\nclass SuperAdminController extends Controller\n{\n    public function index()\n    {\n        \$stats = [\n            'schools' => School::count(),\n            'active_schools' => School::where('status', 'active')->count(),\n            'total_users' => User::count(),\n            'total_complaints' => Complaint::count(),\n        ];\n        \$schools = School::withCount('students')->get();\n        return view('dashboards.super_admin', compact('stats', 'schools'));\n    }\n}\n";
file_put_contents($controllersDir . '/SuperAdminController.php', $superAdminContent);

$adminSekolahContent = "<?php\n\nnamespace App\Http\Controllers;\n\nuse Illuminate\Http\Request;\nuse App\Models\Student;\nuse App\Models\Teacher;\nuse App\Models\Task;\nuse App\Models\Complaint;\nuse App\Models\TeacherEvaluation;\nuse Illuminate\Support\Facades\Auth;\n\nclass AdminSekolahController extends Controller\n{\n    public function index()\n    {\n        \$schoolId = Auth::user()->school_id;\n        \$stats = [\n            'students' => Student::where('school_id', \$schoolId)->count(),\n            'teachers' => Teacher::where('school_id', \$schoolId)->count(),\n            'tasks' => Task::where('school_id', \$schoolId)->count(),\n            'complaints' => Complaint::where('school_id', \$schoolId)->count(),\n        ];\n        \n        \$teachers = Teacher::where('school_id', \$schoolId)->with('user')->get()->map(function(\$teacher) {\n            \$teacher->average_rating = round(\$teacher->averageRating(), 1);\n            return \$teacher;\n        })->sortByDesc('average_rating');\n\n        return view('dashboards.admin_sekolah', compact('stats', 'teachers'));\n    }\n}\n";
file_put_contents($controllersDir . '/AdminSekolahController.php', $adminSekolahContent);

// --- Routes setup ---
$webRoutesPath = __DIR__ . '/routes/web.php';
$webContent = "<?php\n\nuse Illuminate\Support\Facades\Route;\nuse App\Http\Controllers\WebAuthController;\nuse App\Http\Controllers\SuperAdminController;\nuse App\Http\Controllers\AdminSekolahController;\n\nRoute::get('/', function () {\n    return redirect('/login');\n});\n\nRoute::get('/login', [WebAuthController::class, 'showLogin'])->name('login');\nRoute::post('/login', [WebAuthController::class, 'login']);\nRoute::post('/logout', [WebAuthController::class, 'logout'])->name('logout');\n\nRoute::middleware(['auth', 'Illuminate\Session\Middleware\AuthenticateSession'])->group(function () {\n    Route::middleware('role:super_admin')->group(function () {\n        Route::get('/super-admin/dashboard', [SuperAdminController::class, 'index'])->name('super_admin.dashboard');\n        // Additional super_admin routes here\n    });\n\n    Route::middleware('role:admin_sekolah')->group(function () {\n        Route::get('/admin/dashboard', [AdminSekolahController::class, 'index'])->name('admin_sekolah.dashboard');\n        // Additional admin routes here\n    });\n});\n";
file_put_contents($webRoutesPath, $webContent);

// --- Views setup ---
$viewsDir = __DIR__ . '/resources/views';
if(!is_dir($viewsDir . '/layouts')) mkdir($viewsDir . '/layouts', 0755, true);
if(!is_dir($viewsDir . '/auth')) mkdir($viewsDir . '/auth', 0755, true);
if(!is_dir($viewsDir . '/dashboards')) mkdir($viewsDir . '/dashboards', 0755, true);

// Unified OceanBlue Layout
$layoutContent = '<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LMN Study App - Dashboard</title>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lucide-static@0.321.0/font/lucide.min.css">
    <script src="https://cdn.jsdelivr.net/npm/lucide@latest"></script>
    <style>
        :root {
            --ocean-blue: #0077b6;
            --ocean-light: #0096c7;
            --ocean-dark: #023e8a;
            --ocean-bg: #f0f8ff;
            --text-main: #333333;
            --text-muted: #666666;
            --white: #ffffff;
            --danger: #ef476f;
            --success: #06d6a0;
            --shadow-sm: 0 4px 6px -1px rgba(0, 119, 182, 0.1);
            --shadow-md: 0 10px 15px -3px rgba(0, 119, 182, 0.15);
        }
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: \'Plus Jakarta Sans\', sans-serif; }
        body { background-color: var(--ocean-bg); color: var(--text-main); }
        .sidebar { width: 250px; background: var(--white); height: 100vh; position: fixed; left: 0; top: 0; border-right: 1px solid #e0f0ff; display: flex; flex-direction: column; }
        .brand { padding: 24px; font-size: 24px; font-weight: 700; color: var(--ocean-dark); display:flex; align-items:center; gap: 10px;}
        .menu { list-style: none; padding: 0 15px; flex: 1;}
        .menu li { margin-bottom: 8px; }
        .menu a { text-decoration: none; padding: 12px 16px; display: flex; align-items: center; gap: 12px; color: var(--text-muted); border-radius: 8px; font-weight: 500; transition: all 0.2s;}
        .menu a:hover, .menu a.active { background: var(--ocean-blue); color: var(--white); box-shadow: var(--shadow-sm); }
        .main-content { margin-left: 250px; padding: 30px; }
        .topbar { display: flex; justify-content: space-between; align-items: center; background: var(--white); padding: 15px 30px; border-radius: 12px; box-shadow: var(--shadow-sm); margin-bottom: 30px; }
        .user-profile { display: flex; align-items: center; gap: 15px; }
        .btn-logout { background: var(--danger); color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: 600; }
        
        /* Stats Grid */
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; margin-bottom: 30px;}
        .stat-card { background: var(--white); padding: 24px; border-radius: 16px; box-shadow: var(--shadow-sm); display:flex; align-items:center; justify-content: space-between;}
        .stat-info h3 { font-size: 14px; color: var(--text-muted); margin-bottom: 8px; }
        .stat-info h2 { font-size: 32px; color: var(--ocean-dark); }
        .stat-icon { width: 48px; height: 48px; background: var(--ocean-bg); border-radius: 12px; display:flex; align-items:center; justify-content:center; color: var(--ocean-blue); }
        
        /* Tables & Panels */
        .panel { background: var(--white); padding: 24px; border-radius: 16px; box-shadow: var(--shadow-sm); margin-bottom:24px;}
        .panel h2 { margin-bottom: 20px; color: var(--ocean-dark); display:flex; align-items:center; gap: 8px; font-size: 18px;}
        table { width: 100%; border-collapse: collapse; }
        th, td { padding: 14px 16px; text-align: left; border-bottom: 1px solid #e0f0ff; }
        th { color: var(--text-muted); font-weight: 600; font-size: 14px; text-transform:uppercase; letter-spacing: 0.5px;}
        td { color: var(--text-main); font-size: 15px; font-weight: 500;}
        .badge { padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
        .badge.active { background: #d1fae5; color: var(--success); }
        .badge.inactive { background: #ffe4e6; color: var(--danger); }
        
        button { cursor: pointer; }
    </style>
</head>
<body>
    @yield(\'content\')
    <script>
        lucide.createIcons();
    </script>
</body>
</html>';

file_put_contents($viewsDir . '/layouts/app.blade.php', $layoutContent);

// Login Template
$loginContent = '<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistem Terpadu LMN - Login</title>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root { --ocean-blue: #0077b6; --ocean-dark: #023e8a; }
        * { margin:0; padding:0; box-sizing:border-box; font-family:\'Plus Jakarta Sans\', sans-serif;}
        body { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #023e8a 0%, #0077b6 100%); padding: 20px;}
        .login-card { background: white; width: 100%; max-width: 420px; border-radius: 24px; padding: 40px; box-shadow: 0 20px 40px rgba(0,0,0,0.2);}
        .logo-area { text-align: center; margin-bottom: 30px; }
        .logo-area h1 { color: var(--ocean-dark); font-size: 28px; margin-bottom: 10px; }
        .logo-area p { color: #666; font-size: 14px; }
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; margin-bottom: 8px; color: #444; font-size: 14px; font-weight: 600;}
        .form-group input { width: 100%; padding: 14px 16px; border: 1.5px solid #e0e0e0; border-radius: 12px; font-size: 15px; transition: border-color 0.2s; outline:none;}
        .form-group input:focus { border-color: var(--ocean-blue); }
        .btn-submit { width: 100%; padding: 14px; background: var(--ocean-blue); color: white; border: none; border-radius: 12px; font-size: 16px; font-weight: 600; cursor: pointer; transition: background 0.2s;}
        .btn-submit:hover { background: var(--ocean-dark); }
        .alert { padding: 14px; border-radius: 10px; margin-bottom: 20px; font-size: 14px; font-weight:500;}
        .alert.error { background: #ffe4e6; color: #e11d48; border: 1px solid #fda4af;}
        .alert.info { background: #e0f2fe; color: #0284c7; border: 1px solid #7dd3fc;}
    </style>
</head>
<body>
    <div class="login-card">
        <div class="logo-area">
            <h1>LMN Portal</h1>
            <p>Sistem Informasi Manajemen Sekolah Terpadu</p>
        </div>
        
        @if(session(\'error\'))
            <div class="alert error">{{ session(\'error\') }}</div>
        @endif
        @if(session(\'status\'))
            <div class="alert info">{{ session(\'status\') }}</div>
        @endif
        @if($errors->any())
            <div class="alert error">{{ $errors->first() }}</div>
        @endif

        <form action="{{ route(\'login\') }}" method="POST">
            @csrf
            <div class="form-group">
                <label>Email ID</label>
                <input type="email" name="email" value="{{ old(\'email\') }}" required placeholder="admin@smk.id">
            </div>
            <div class="form-group">
                <label>Kata Sandi</label>
                <input type="password" name="password" required placeholder="••••••••">
            </div>
            <button type="submit" class="btn-submit">Masuk ke Dashboard</button>
        </form>
    </div>
</body>
</html>';
file_put_contents($viewsDir . '/auth/login.blade.php', $loginContent);

// Super Admin Template
$superAdminTemplate = '@extends(\'layouts.app\')
@section(\'content\')
    <aside class="sidebar">
        <div class="brand"><i data-lucide="building"></i> LMN Manage</div>
        <ul class="menu">
            <li><a href="#" class="active"><i data-lucide="layout-dashboard"></i> Analytics</a></li>
            <li><a href="#"><i data-lucide="school"></i> Manejemen Sekolah</a></li>
            <li><a href="#"><i data-lucide="credit-card"></i> Langganan & Tagihan</a></li>
            <li><a href="#"><i data-lucide="activity"></i> Monitoring/Alerts</a></li>
            <li><a href="#"><i data-lucide="settings"></i> Konfigurasi</a></li>
        </ul>
    </aside>
    <main class="main-content">
        <div class="topbar">
            <div>
                <h2 style="color:var(--ocean-dark)">Dashboard Super Admin</h2>
                <p style="color:var(--text-muted); font-size:14px; margin-top:4px;">Pemantauan sistem terpusat</p>
            </div>
            <div class="user-profile">
                <b>{{ Auth::user()->name }}</b>
                <form action="{{ route(\'logout\') }}" method="POST">@csrf <button class="btn-logout"><i data-lucide="log-out" style="width:16px; height:16px;"></i></button></form>
            </div>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-info"><h3>Total Sekolah</h3><h2>{{ $stats[\'schools\'] }}</h2></div>
                <div class="stat-icon"><i data-lucide="school"></i></div>
            </div>
            <div class="stat-card">
                <div class="stat-info"><h3>Super Apps Users</h3><h2>{{ $stats[\'total_users\'] }}</h2></div>
                <div class="stat-icon"><i data-lucide="users"></i></div>
            </div>
            <div class="stat-card">
                <div class="stat-info"><h3>Koneksi Aktif</h3><h2>{{ $stats[\'active_schools\'] }}</h2></div>
                <div class="stat-icon"><i data-lucide="activity"></i></div>
            </div>
            <div class="stat-card">
                <div class="stat-info"><h3>Islands Aduan</h3><h2>{{ $stats[\'total_complaints\'] }}</h2></div>
                <div class="stat-icon"><i data-lucide="message-square-warning"></i></div>
            </div>
        </div>

        <div class="panel">
            <h2><i data-lucide="list"></i> Daftar Afiliasi Sekolah</h2>
            <table>
                <tr><th>Nama Sekolah</th><th>NPSN</th><th>Total Siswa Aktif</th><th>Status Langganan</th></tr>
                @foreach($schools as $sch)
                <tr>
                    <td>{{ $sch->name }}</td>
                    <td>{{ $sch->npsn }}</td>
                    <td>{{ $sch->students_count }} Siswa</td>
                    <td><span class="badge {{ $sch->status == \'active\' ? \'active\' : \'inactive\' }}">{{ strtoupper($sch->status) }}</span></td>
                </tr>
                @endforeach
            </table>
        </div>
    </main>
@endsection';
file_put_contents($viewsDir . '/dashboards/super_admin.blade.php', $superAdminTemplate);

// Admin Sekolah Template
$adminSekolahTemplate = '@extends(\'layouts.app\')
@section(\'content\')
    <aside class="sidebar">
        <div class="brand"><i data-lucide="graduation-cap"></i> {{ Auth::user()->school->name ?? \'Sekolah\' }}</div>
        <ul class="menu">
            <li><a href="#" class="active"><i data-lucide="layout-dashboard"></i> Analytics</a></li>
            <li><a href="#"><i data-lucide="users"></i> Master Users</a></li>
            <li><a href="#"><i data-lucide="file-question"></i> Manejemen Ujian (CBT)</a></li>
            <li><a href="#"><i data-lucide="megaphone"></i> Pengumuman</a></li>
            <li><a href="#"><i data-lucide="bar-chart"></i> Kinerja Guru</a></li>
        </ul>
    </aside>
    <main class="main-content">
        <div class="topbar">
            <div>
                <h2 style="color:var(--ocean-dark)">Dashboard Admin Sekolah</h2>
                <p style="color:var(--text-muted); font-size:14px; margin-top:4px;">Statistik internal dan manajemen</p>
            </div>
            <div class="user-profile">
                <b>{{ Auth::user()->name }}</b>
                <form action="{{ route(\'logout\') }}" method="POST">@csrf <button class="btn-logout"><i data-lucide="log-out" style="width:16px; height:16px;"></i></button></form>
            </div>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-info"><h3>Total Siswa</h3><h2>{{ $stats[\'students\'] }}</h2></div>
                <div class="stat-icon"><i data-lucide="users"></i></div>
            </div>
            <div class="stat-card">
                <div class="stat-info"><h3>Tenaga Pendidik (Guru)</h3><h2>{{ $stats[\'teachers\'] }}</h2></div>
                <div class="stat-icon"><i data-lucide="book-open"></i></div>
            </div>
            <div class="stat-card">
                <div class="stat-info"><h3>Total Tasks (Ujian/Tugas)</h3><h2>{{ $stats[\'tasks\'] }}</h2></div>
                <div class="stat-icon"><i data-lucide="file-text"></i></div>
            </div>
        </div>

        <div class="panel">
            <h2><i data-lucide="star"></i> Rangking Evaluasi Kinerja Guru (By Siswa)</h2>
            <table>
                <tr><th>Nama Guru</th><th>NIP</th><th>Rata-rata Rating</th><th>Total Evaluasi</th></tr>
                @foreach($teachers as $t)
                <tr>
                    <td>{{ $t->user->name ?? \'Unknown\' }}</td>
                    <td>{{ $t->nip ?? \'-\' }}</td>
                    <td style="color: var(--ocean-blue); font-weight:700;"><i data-lucide="star" style="width:16px; height:16px;"></i> {{ $t->average_rating }} / 5.0</td>
                    <td>{{ $t->evaluations()->count() }} Penilaian</td>
                </tr>
                @endforeach
            </table>
            <p style="font-size:13px; color:var(--text-muted); margin-top:10px;">*Detail deskripsi observasi diprivasi, hanya ditayangkan di dashboard masing-masing guru.</p>
        </div>
    </main>
@endsection';
file_put_contents($viewsDir . '/dashboards/admin_sekolah.blade.php', $adminSekolahTemplate);

echo "Task 5 setup part 2 completed: controllers, routes, and views implemented.";
