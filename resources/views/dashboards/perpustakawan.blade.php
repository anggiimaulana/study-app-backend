@extends('layouts.app')
@section('content')
    <aside class="sidebar">
        <div class="brand"><i data-lucide="book-marked"></i> LMN Staf Perpustakaan</div>
        <ul class="menu">
            <li><a href="{{ route('perpustakawan.dashboard') }}" class="{{ request()->routeIs('perpustakawan.dashboard') ? 'active' : '' }}"><i data-lucide="layout-dashboard"></i> Dashboard Utama</a></li>
            <li><a href="{{ route('perpustakawan.menu_operasional') }}" class="{{ request()->routeIs('perpustakawan.menu_operasional') ? 'active' : '' }}"><i data-lucide="mouse-pointer-click"></i> Menu Operasional</a></li>
            <li><a href="{{ route('perpustakawan.laporan') }}" class="{{ request()->routeIs('perpustakawan.laporan') ? 'active' : '' }}"><i data-lucide="file-text"></i> Laporan</a></li>
        
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
                <h2 style="color:var(--ocean-dark)">Dashboard Staf Perpustakaan</h2>
                <p style="color:var(--text-muted); font-size:14px; margin-top:4px;">Sistem Rekomendasi Buku & Peminjaman</p>
            </div>
            <div class="user-profile">
                <b>{{ Auth::user()->name }}</b>
                <form action="{{ route('logout') }}" method="POST">@csrf <button class="btn-logout"><i data-lucide="log-out" style="width:16px; height:16px;"></i></button></form>
            </div>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-info"><h3>Total buku_tersedia</h3><h2>{{ $stats['stat1'] }}</h2></div>
                <div class="stat-icon"><i data-lucide="activity"></i></div>
            </div>
            <div class="stat-card">
                <div class="stat-info"><h3>Data peminjaman_aktif</h3><h2>{{ $stats['stat2'] }}</h2></div>
                <div class="stat-icon"><i data-lucide="bar-chart"></i></div>
            </div>
            <div class="stat-card">
                <div class="stat-info"><h3>Rekap kunjungan_hari_ini</h3><h2>{{ $stats['stat3'] }}</h2></div>
                <div class="stat-icon"><i data-lucide="check-circle"></i></div>
            </div>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:24px;">
            <div class="panel">
                <h2><i data-lucide="monitor"></i> Sistem Auto-Rekomendasi Buku</h2>
                <p style="color:var(--text-muted); line-height:1.6;">Fitur ini terintegrasi 100% dengan ekosistem aplikasi mobile. Melakukan sinkronisasi data real-time berbasis API backend.</p>
            </div>
            <div class="panel">
                <h2><i data-lucide="layers"></i> Log Kunjungan & Peminjaman</h2>
                <p style="color:var(--text-muted); line-height:1.6;">Menampilkan rangkuman statistik terkait tugas administratif dari role Staf Perpustakaan di institusi ini.</p>
            </div>
        </div>
    </main>
@endsection