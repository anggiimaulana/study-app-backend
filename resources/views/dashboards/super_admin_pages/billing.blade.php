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
                <h2 style="color:var(--ocean-dark)">Langganan & Tagihan (Billing)</h2>
                <p style="color:var(--text-muted); font-size:14px; margin-top:4px;">Navigasi Operasional</p>
            </div>
            <div class="user-profile">
                <b>{{ Auth::user()->name }}</b>
                <form action="{{ route('logout') }}" method="POST">@csrf <button class="btn-logout"><i data-lucide="log-out" style="width:16px; height:16px;"></i></button></form>
            </div>
        </div>
        
        <div class="panel">
            <h2><i data-lucide="credit-card"></i> Status Pembayaran Langganan (SaaS) Instansi</h2>
            <p style="color:var(--text-muted); margin-bottom:20px;">Berikut adalah daftar konklusif sekolah yang bermitra berserta status tagihan mereka (Lunas/Menunggak).</p>
            <table>
                <tr>
                    <th>NPSN</th>
                    <th>Nama Instansi</th>
                    <th>Plan Langganan</th>
                    <th>Jatuh Tempo</th>
                    <th>Status Pembayaran</th>
                    <th>Aksi</th>
                </tr>
                @foreach(App\Models\School::all() as $s)
                @php
                    $isPaid = $s->subscription_end_date && \Carbon\Carbon::parse($s->subscription_end_date)->isFuture();
                @endphp
                <tr>
                    <td style="color:var(--text-muted)">{{ $s->npsn ?? '-' }}</td>
                    <td style="font-weight:600">{{ $s->name }}</td>
                    <td><span class="badge active" style="background:var(--ocean-bg); color:var(--ocean-dark);">{{ $s->subscription_plan ?? 'Basic' }}</span></td>
                    <td style="color:{{ $isPaid ? 'var(--text-muted)' : 'var(--danger)' }}">{{ $s->subscription_end_date ? date('d M Y', strtotime($s->subscription_end_date)) : 'Belum di-set' }}</td>
                    <td>
                        @if($isPaid)
                            <span class="badge active" style="background:#ecfdf5; color:#059669;">Sudah Bayar Lunas</span>
                        @else
                            <span class="badge inactive" style="background:#fef2f2; color:#dc2626;">Belum Bayar (Menunggak)</span>
                        @endif
                    </td>
                    <td>
                        <button style="padding:6px 12px; background:var(--ocean-blue); color:white; border:none; border-radius:4px; cursor:pointer;">Detail Invoice</button>
                    </td>
                </tr>
                @endforeach
            </table>
        </div>
    </main>
@endsection