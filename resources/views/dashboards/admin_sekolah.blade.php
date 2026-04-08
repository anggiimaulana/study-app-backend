@extends('layouts.app')
@section('content')
    <aside class="sidebar">
        <div class="brand"><i data-lucide="graduation-cap"></i> {{ Auth::user()->school->name ?? 'Sekolah' }}</div>
        <ul class="menu">
            <li><a href="{{ route('admin_sekolah.dashboard') }}" class="{{ request()->routeIs('admin_sekolah.dashboard') ? 'active' : '' }}"><i data-lucide="layout-dashboard"></i> Dashboard Utama</a></li>
            <li><a href="{{ route('admin_sekolah.data_master') }}" class="{{ request()->routeIs('admin_sekolah.data_master') ? 'active' : '' }}"><i data-lucide="users"></i> Data Pegawai & Murid</a></li>
            <li><a href="{{ route('admin_sekolah.manajemen_cbt') }}" class="{{ request()->routeIs('admin_sekolah.manajemen_cbt') ? 'active' : '' }}"><i data-lucide="check-square"></i> Manajemen Ujian CBT</a></li>
            <li><a href="{{ route('admin_sekolah.materi') }}" class="{{ request()->routeIs('admin_sekolah.materi') ? 'active' : '' }}"><i data-lucide="file"></i> Tugas & Materi</a></li>
            <li><a href="{{ route('admin_sekolah.aduan_masuk') }}" class="{{ request()->routeIs('admin_sekolah.aduan_masuk') ? 'active' : '' }}"><i data-lucide="alert-triangle"></i> Laporan Aduan</a></li>
            <li><a href="{{ route('admin_sekolah.siaran_informasi') }}" class="{{ request()->routeIs('admin_sekolah.siaran_informasi') ? 'active' : '' }}"><i data-lucide="megaphone"></i> Sistem Pengumuman</a></li>

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
                <h2 style="color:var(--ocean-dark)">Dashboard Admin Sekolah</h2>
                <p style="color:var(--text-muted); font-size:14px; margin-top:4px;">Statistik internal dan manajemen</p>
            </div>
            <div class="user-profile">
                <b>{{ Auth::user()->name }}</b>
                <form action="{{ route('logout') }}" method="POST">@csrf <button class="btn-logout"><i data-lucide="log-out" style="width:16px; height:16px;"></i></button></form>
            </div>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-info"><h3>Total Siswa</h3><h2>{{ $stats['students'] }}</h2></div>
                <div class="stat-icon"><i data-lucide="users"></i></div>
            </div>
            <div class="stat-card">
                <div class="stat-info"><h3>Tenaga Pendidik (Guru)</h3><h2>{{ $stats['teachers'] }}</h2></div>
                <div class="stat-icon"><i data-lucide="book-open"></i></div>
            </div>
            <div class="stat-card">
                <div class="stat-info"><h3>Total Tasks (Ujian/Tugas)</h3><h2>{{ $stats['tasks'] }}</h2></div>
                <div class="stat-icon"><i data-lucide="file-text"></i></div>
            </div>
        </div>

        <div class="panel">
            <h2><i data-lucide="star"></i> Rangking Evaluasi Kinerja Guru (By Siswa)</h2>
            <table>
                <tr><th>Nama Guru</th><th>NIP</th><th>Rata-rata Rating</th><th>Total Evaluasi</th></tr>
                @foreach($teachers as $t)
                <tr>
                    <td>{{ $t->user->name ?? 'Unknown' }}</td>
                    <td>{{ $t->nip ?? '-' }}</td>
                    <td style="color: var(--ocean-blue); font-weight:700;"><i data-lucide="star" style="width:16px; height:16px;"></i> {{ $t->average_rating }} / 5.0</td>
                    <td>{{ $t->evaluations()->count() }} Penilaian</td>
                </tr>
                @endforeach
            </table>
            <p style="font-size:13px; color:var(--text-muted); margin-top:10px;">*Detail deskripsi observasi diprivasi, hanya ditayangkan di dashboard masing-masing guru.</p>
        </div>
    </main>
@endsection