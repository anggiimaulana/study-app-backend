<?php
$viewsDir = __DIR__ . '/resources/views/dashboards/super_admin_pages';
$mainDashPath = __DIR__ . '/resources/views/dashboards/super_admin.blade.php';

// The new sidebar logout button HTML
$logoutListHtml = "\n            <li style=\"margin-top:20px;\">\n                <form action=\"{{ route('logout') }}\" method=\"POST\">\n                    @csrf\n                    <button type=\"submit\" style=\"width:100%; text-align:left; background:transparent; color:var(--danger); border:none; padding:12px 20px; font-weight:600; cursor:pointer; border-radius:8px; display:flex; gap:12px; align-items:center;\">\n                        <i data-lucide=\"log-out\"></i> Keluar Akun\n                    </button>\n                </form>\n            </li>\n        </ul>";

// Update the 4 sub-pages
$files = ['schools.blade.php', 'billing.blade.php', 'monitoring.blade.php', 'settings.blade.php'];
foreach ($files as $file) {
    if (file_exists($viewsDir . '/' . $file)) {
        $content = file_get_contents($viewsDir . '/' . $file);
        if (!str_contains($content, 'Keluar Akun')) {
            $content = preg_replace('/<\/ul>/s', $logoutListHtml, $content, 1);
            file_put_contents($viewsDir . '/' . $file, $content);
        }
    }
}

// Update the main super_admin.blade.php
if (file_exists($mainDashPath)) {
    $content = file_get_contents($mainDashPath);
    if (!str_contains($content, 'Keluar Akun')) {
        $content = preg_replace('/<\/ul>/s', $logoutListHtml, $content, 1);
        file_put_contents($mainDashPath, $content);
    }
}

// Overwrite the billing.blade.php core content
$billingFile = $viewsDir . '/billing.blade.php';
if (file_exists($billingFile)) {
    $bContent = file_get_contents($billingFile);
    
    // Pattern to replace the generic panel body
    $newBillingBody = "
        <div class=\"panel\">
            <h2><i data-lucide=\"credit-card\"></i> Status Pembayaran Langganan (SaaS) Instansi</h2>
            <p style=\"color:var(--text-muted); margin-bottom:20px;\">Berikut adalah daftar konklusif sekolah yang bermitra berserta status tagihan mereka (Lunas/Menunggak).</p>
            <table>
                <tr>
                    <th>NPSN</th>
                    <th>Nama Instansi</th>
                    <th>Plan Langganan</th>
                    <th>Jatuh Tempo</th>
                    <th>Status Pembayaran</th>
                    <th>Aksi</th>
                </tr>
                @foreach(App\Models\School::all() as \$s)
                @php
                    \$isPaid = \$s->subscription_end_date && \\Carbon\\Carbon::parse(\$s->subscription_end_date)->isFuture();
                @endphp
                <tr>
                    <td style=\"color:var(--text-muted)\">{{ \$s->npsn ?? '-' }}</td>
                    <td style=\"font-weight:600\">{{ \$s->name }}</td>
                    <td><span class=\"badge active\" style=\"background:var(--ocean-bg); color:var(--ocean-dark);\">{{ \$s->subscription_plan ?? 'Basic' }}</span></td>
                    <td style=\"color:{{ \$isPaid ? 'var(--text-muted)' : 'var(--danger)' }}\">{{ \$s->subscription_end_date ? date('d M Y', strtotime(\$s->subscription_end_date)) : 'Belum di-set' }}</td>
                    <td>
                        @if(\$isPaid)
                            <span class=\"badge active\" style=\"background:#ecfdf5; color:#059669;\">Sudah Bayar Lunas</span>
                        @else
                            <span class=\"badge inactive\" style=\"background:#fef2f2; color:#dc2626;\">Belum Bayar (Menunggak)</span>
                        @endif
                    </td>
                    <td>
                        <button style=\"padding:6px 12px; background:var(--ocean-blue); color:white; border:none; border-radius:4px; cursor:pointer;\">Detail Invoice</button>
                    </td>
                </tr>
                @endforeach
            </table>
        </div>
    </main>
@endsection";

    // Replace everything after <div class="topbar">...</div> closure
    $bContent = preg_replace('/<div class="panel">.*?@endsection/s', ltrim($newBillingBody), $bContent);
    file_put_contents($billingFile, $bContent);
}

echo "Patched successfully!";
