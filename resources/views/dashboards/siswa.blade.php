@extends('layouts.app')
@section('content')
    <aside class="sidebar">
        <div class="brand"><i data-lucide="graduation-cap"></i> Ruang Siswa</div>
        <ul class="menu">
            <li><a href="{{ route('siswa.dashboard') }}" class="{{ request()->routeIs('siswa.dashboard') ? 'active' : '' }}"><i data-lucide="home"></i> Beranda</a></li>
            <li><a href="{{ route('siswa.tugas_ujian') }}" class="{{ request()->routeIs('siswa.tugas_ujian') ? 'active' : '' }}"><i data-lucide="book"></i> Tugas & Ujian</a></li>
            <li><a href="{{ route('siswa.jadwal_kelas') }}" class="{{ request()->routeIs('siswa.jadwal_kelas') ? 'active' : '' }}"><i data-lucide="calendar-check"></i> Jadwal Kelas</a></li>
            <li><a href="{{ route('siswa.hasil_studi') }}" class="{{ request()->routeIs('siswa.hasil_studi') ? 'active' : '' }}"><i data-lucide="file-bar-chart-2"></i> Hasil Studi</a></li>
            <li><a href="{{ route('siswa.myfess') }}" class="{{ request()->routeIs('siswa.myfess') ? 'active' : '' }}"><i data-lucide="heart"></i> Ruang Aman (MyFess)</a></li>
            <li><a href="{{ route('siswa.pekerjaan') }}" class="{{ request()->routeIs('siswa.pekerjaan') ? 'active' : '' }}"><i data-lucide="briefcase"></i> Portal Loker</a></li>
            <li><a href="{{ route('siswa.pengumuman') }}" class="{{ request()->routeIs('siswa.pengumuman') ? 'active' : '' }}"><i data-lucide="megaphone"></i> Pengumuman</a></li>
            <li><a href="{{ route('siswa.aduanku') }}" class="{{ request()->routeIs('siswa.aduanku') ? 'active' : '' }}"><i data-lucide="message-square-warning"></i> Aduanku</a></li>

            <li style="margin-top:20px;">
                <form action="{{ route('logout') }}" method="POST">
                    @csrf
                    <button type="submit" style="width:100%; text-align:left; background:transparent; color:var(--danger); border:none; padding:12px 20px; font-weight:600; cursor:pointer; border-radius:8px; display:flex; gap:12px; align-items:center;">
                        <i data-lucide="log-out"></i> Keluar Akun
                    </button>
                </form>
            </li>
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
                <form action="{{ route('logout') }}" method="POST">@csrf <button class="btn-logout"><i data-lucide="log-out" style="width:16px; height:16px;"></i></button></form>
            </div>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-info"><h3>Total Tugas (Belum Selesai)</h3><h2>{{ $stats['active_tasks'] }}</h2></div>
                <div class="stat-icon"><i data-lucide="alert-circle"></i></div>
            </div>
            <div class="stat-card">
                <div class="stat-info"><h3>Jadwal Pelajaran Kelas</h3><h2>{{ $stats['schedules'] }} Mapel</h2></div>
                <div class="stat-icon"><i data-lucide="calendar"></i></div>
            </div>
            <div class="stat-card">
                <div class="stat-info"><h3>Nilai / Raport (Grades)</h3><h2>{{ $stats['total_grades'] }} Draft</h2></div>
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
                        <td style="font-weight:600;">{{ $t->subject->name ?? '-' }}</td>
                        <td>{{ $t->title }}</td>
                        <td style="color:var(--danger)">{{ $t->due_date ? date('d M', strtotime($t->due_date)) : '-' }}</td>
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
                        <td>{{ ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'][$s->day_of_week] ?? 'Minggu' }}</td>
                        <td>{{ $s->subject->name ?? '-' }}</td>
                        <td>{{ $s->teacher->user->name ?? '-' }}</td>
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
@endsection