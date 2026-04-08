@extends('layouts.app')
@section('content')
    <aside class="sidebar">
        <div class="brand"><i data-lucide="building"></i> LMN Manage</div>
        <ul class="menu">
            <li><a href="{{ route('super_admin.dashboard') }}"><i data-lucide="layout-dashboard"></i> Analytics</a></li>
            <li><a href="{{ route('super_admin.schools') }}" class="{{ request()->routeIs('super_admin.schools') ? 'active' : '' }}"><i data-lucide="school"></i> Manejemen Sekolah</a></li>
            <li><a href="{{ route('super_admin.billing') }}" class="{{ request()->routeIs('super_admin.billing') ? 'active' : '' }}"><i data-lucide="credit-card"></i> Langganan & Tagihan</a></li>
            <li><a href="{{ route('super_admin.monitoring') }}" class="{{ request()->routeIs('super_admin.monitoring') ? 'active' : '' }}"><i data-lucide="activity"></i> Monitoring/Alerts</a></li>
            <li><a href="{{ route('super_admin.settings') }}" class="{{ request()->routeIs('super_admin.settings') ? 'active' : '' }}"><i data-lucide="settings"></i> Konfigurasi</a></li>
        
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
                <h2 style="color:var(--ocean-dark)">Monitoring Sistem & Alert Log</h2>
                <p style="color:var(--text-muted); font-size:14px; margin-top:4px;">Navigasi Operasional</p>
            </div>
            <div class="user-profile">
                <b>{{ Auth::user()->name }}</b>
                <form action="{{ route('logout') }}" method="POST">@csrf <button class="btn-logout"><i data-lucide="log-out" style="width:16px; height:16px;"></i></button></form>
            </div>
        </div>
        
        <div class="panel">
            <h2><i data-lucide="activity"></i> Alert Log Server</h2>
            <p style="color:var(--text-muted); margin-bottom: 10px;">Lacak aktivitas error (Track error & permasalahan), percobaan penetrasi, hingga error log 500 & 502.</p>
            <div style="background:#111; color:#10B981; padding:16px; border-radius:8px; font-family:monospace; line-height:1.5; font-size:13px;">
                > System operational at 100% capacity.<br>
                > [INFO] No DB constraint issues found.<br>
                > [ALERT] Auth brute-force attempt blocked at {{ now()->subMinutes(12)->toTimeString() }}.<br>
                > Log watcher active.
            </div>
        </div>
    </main>
@endsection