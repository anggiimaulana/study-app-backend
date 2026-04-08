@extends('layouts.app')
@section('content')
    <aside class="sidebar">
        <div class="brand"><i data-lucide="building"></i> LMN Manage</div>
        
        <ul class="menu">
            <li><a href="{{ route('super_admin.dashboard') }}" class="active"><i data-lucide="layout-dashboard"></i> Analytics</a></li>
            <li><a href="{{ route('super_admin.schools') }}"><i data-lucide="school"></i> Manejemen Sekolah</a></li>
            <li><a href="{{ route('super_admin.billing') }}"><i data-lucide="credit-card"></i> Langganan & Tagihan</a></li>
            <li><a href="{{ route('super_admin.monitoring') }}"><i data-lucide="activity"></i> Monitoring/Alerts</a></li>
            <li><a href="{{ route('super_admin.settings') }}"><i data-lucide="settings"></i> Konfigurasi</a></li>
        
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
                <h2 style="color:var(--ocean-dark)">Dashboard Super Admin</h2>
                <p style="color:var(--text-muted); font-size:14px; margin-top:4px;">Pemantauan sistem terpusat</p>
            </div>
            <div class="user-profile">
                <b>{{ Auth::user()->name }}</b>
                <form action="{{ route('logout') }}" method="POST">@csrf <button class="btn-logout"><i data-lucide="log-out" style="width:16px; height:16px;"></i></button></form>
            </div>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-info"><h3>Total Sekolah</h3><h2>{{ $stats['schools'] }}</h2></div>
                <div class="stat-icon"><i data-lucide="school"></i></div>
            </div>
            <div class="stat-card">
                <div class="stat-info"><h3>Super Apps Users</h3><h2>{{ $stats['total_users'] }}</h2></div>
                <div class="stat-icon"><i data-lucide="users"></i></div>
            </div>
            <div class="stat-card">
                <div class="stat-info"><h3>Koneksi Aktif</h3><h2>{{ $stats['active_schools'] }}</h2></div>
                <div class="stat-icon"><i data-lucide="activity"></i></div>
            </div>
            <div class="stat-card">
                <div class="stat-info"><h3>Islands Aduan</h3><h2>{{ $stats['total_complaints'] }}</h2></div>
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
                    <td><span class="badge {{ $sch->status == 'active' ? 'active' : 'inactive' }}">{{ strtoupper($sch->status) }}</span></td>
                </tr>
                @endforeach
            </table>
        </div>
    </main>
@endsection