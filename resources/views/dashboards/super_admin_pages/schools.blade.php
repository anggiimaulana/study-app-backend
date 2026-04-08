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
                <h2 style="color:var(--ocean-dark)">Manajemen Afiliasi Sekolah</h2>
                <p style="color:var(--text-muted); font-size:14px; margin-top:4px;">Navigasi Operasional</p>
            </div>
            <div class="user-profile">
                <b>{{ Auth::user()->name }}</b>
                <form action="{{ route('logout') }}" method="POST">@csrf <button class="btn-logout"><i data-lucide="log-out" style="width:16px; height:16px;"></i></button></form>
            </div>
        </div>
        
        <div class="panel">
            <h2><i data-lucide="school"></i> Data Manajemen Sekolah</h2>
            <p style="color:var(--text-muted); margin-bottom: 20px;">Di sini Anda bisa Create, Read, Update, Delete afiliasi sekolah dan memutus/mengaktifkan status langganan SaaS (Software as a Service) mereka.</p>
            <table>
                <tr><th>ID</th><th>Nama Institusi</th><th>Aksi CRUD</th></tr>
                @foreach(App\Models\School::limit(5)->get() as $s)
                <tr>
                    <td>#{{ $s->id }}</td>
                    <td style="font-weight:600">{{ $s->name }}</td>
                    <td>
                        <button style="padding:6px 12px; background:var(--ocean-blue); color:white; border:none; border-radius:4px;">Edit</button>
                        <button style="padding:6px 12px; background:var(--danger); color:white; border:none; border-radius:4px;">Suspend</button>
                    </td>
                </tr>
                @endforeach
            </table>
        </div>
    </main>
@endsection