@extends('layouts.app')
@section('content')
    <aside class="sidebar">
        <div class="brand"><i data-lucide="book-open-check"></i> Ruang Guru</div>
        <ul class="menu">
            <li><a href="{{ route('guru.dashboard') }}" class="{{ request()->routeIs('guru.dashboard') ? 'active' : '' }}"><i data-lucide="layout-dashboard"></i> Analytics Kelas</a></li>
            <li><a href="{{ route('guru.manajemen_tugas') }}" class="{{ request()->routeIs('guru.manajemen_tugas') ? 'active' : '' }}"><i data-lucide="file-text"></i> Manajemen Tugas</a></li>
            <li><a href="{{ route('guru.penilaian_cbt') }}" class="{{ request()->routeIs('guru.penilaian_cbt') ? 'active' : '' }}"><i data-lucide="award"></i> Penilaian CBT</a></li>
            <li><a href="{{ route('guru.jadwal_mengajar') }}" class="{{ request()->routeIs('guru.jadwal_mengajar') ? 'active' : '' }}"><i data-lucide="calendar"></i> Jadwal Mengajar</a></li>
            <li><a href="{{ route('guru.evaluasi_siswa') }}" class="{{ request()->routeIs('guru.evaluasi_siswa') ? 'active' : '' }}"><i data-lucide="message-square"></i> Evaluasi Siswa</a></li>
            <li><a href="{{ route('guru.informasi') }}" class="{{ request()->routeIs('guru.informasi') ? 'active' : '' }}"><i data-lucide="bell"></i> Informasi & Pengumuman</a></li>
            <li><a href="{{ route('guru.moderasi_myfess') }}" class="{{ request()->routeIs('guru.moderasi_myfess') ? 'active' : '' }}"><i data-lucide="heart-handshake"></i> Moderasi MyFess</a></li>

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
                <h2 style="color:var(--ocean-dark)">Dashboard Tenaga Pendidik</h2>
                <p style="color:var(--text-muted); font-size:14px; margin-top:4px;">Panel Kinerja dan Akademik</p>
            </div>
            <div class="user-profile">
                <b>{{ Auth::user()->name }}</b>
                <form action="{{ route('logout') }}" method="POST">@csrf <button class="btn-logout"><i data-lucide="log-out" style="width:16px; height:16px;"></i></button></form>
            </div>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-info"><h3>Total Tugas Diberikan</h3><h2>{{ $stats['tasks_given'] }}</h2></div>
                <div class="stat-icon"><i data-lucide="check-square"></i></div>
            </div>
            <div class="stat-card">
                <div class="stat-info"><h3>Ujian (CBT) Aktif</h3><h2>{{ $stats['exams_given'] }}</h2></div>
                <div class="stat-icon"><i data-lucide="file-question"></i></div>
            </div>
            <div class="stat-card">
                <div class="stat-info"><h3>Rata-rata Evaluasi</h3><h2><i data-lucide="star" style="width:18px; color:#f59e0b"></i> {{ $stats['average_rating'] }} / 5.0</h2></div>
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
                    <td><span class="badge {{ $task->type == 'tugas' ? 'active' : 'inactive' }}">{{ strtoupper($task->type) }}</span></td>
                    <td>{{ $task->due_date ? mb_substr($task->due_date, 0, 10) : '-' }}</td>
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
                    <td>{{ $ev->student->user->name ?? 'Anonim' }}</td>
                    <td>{{ $ev->created_at->format('d M Y') }}</td>
                    <td style="color:var(--ocean-blue); font-weight:700;">{{ $ev->rating }} / 5</td>
                    <td style="color:var(--text-muted); font-style:italic;">"{{ $ev->notes ?? 'Tanpa catatan' }}"</td>
                </tr>
                @endforeach
                @if($evaluations->isEmpty())
                <tr><td colspan="4" style="text-align:center; color:var(--text-muted);">Belum ada evaluasi masuk.</td></tr>
                @endif
            </table>
        </div>
    </main>
@endsection