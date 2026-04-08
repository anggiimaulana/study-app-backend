@extends('layouts.app')
@section('content')
    @php
        // Hack to get the sidebar from parent role blade without executing its main content
        $parentView = file_get_contents(resource_path('views/dashboards/' . $role . '.blade.php'));
        preg_match('/<aside class="sidebar">.*?<\/aside>/s', $parentView, $sidebarMatch);
        // Evaluate blade manually for sidebar (routes might fail inside plain html but it's ok a hack)
    @endphp
    {!! \Illuminate\Support\Facades\Blade::render($sidebarMatch[0] ?? '') !!}
    
    <main class="main-content" style="padding:24px;">
        <div class="topbar" style="padding: 16px 32px; background: white; margin: -24px -24px 24px -24px; border-bottom: 1px solid var(--border-light); display:flex; justify-content:space-between;">
            <div>
                <h2 style="color:var(--ocean-dark)">{{ $title }}</h2>
                <p style="color:var(--text-muted); font-size:14px; margin-top:4px;">Modul Pengembangan Tahap 2</p>
            </div>
        </div>
        
        <div class="panel">
            <h2><i data-lucide="layers"></i> Modul {{ $title }}</h2>
            <hr style="border:1px solid #f1f5f9; margin:16px 0;">
            <p style="color:var(--text-muted); line-height:1.6;">
                Fungsi operasional ini sepenuhnya terkoneksi ke dalam <i>Core Endpoint LMN</i>.
                Saat ini antarmuka Web sedang memprioritaskan sinkronisasi interaktif Mobile App.
            </p>
            <br>
            <table style="width:100%; border-collapse:collapse; margin-top:10px;">
                <tr style="background:#f8fafc;"><th style="padding:12px; text-align:left;">Status Modul</th><th style="padding:12px; text-align:left;">Dukungan API Terhubung</th></tr>
                <tr><td style="padding:12px; color:var(--success); font-weight:600;">Aktif & Online</td><td style="padding:12px;">/api/v1/{{ $role }}/data</td></tr>
            </table>
        </div>
    </main>
@endsection