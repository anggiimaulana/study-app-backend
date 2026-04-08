import React from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function Dashboard({ role, stats }) {
    const roleLabels = {
        'admission': 'PPDB',
        'career': 'BKK',
        'librarian': 'Perpustakaan',
        'academic': 'Akademik',
        'department': 'Kejuruan',
        'finance': 'Keuangan',
        'guidance': 'Bimbingan Konseling'
    };

    const displayRole = roleLabels[role] || role;

    const sidebarItems = [
        {
            label: 'Dashboard Overview',
            route: `${role}.dashboard`,
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
        },
        {
            label: 'Dashboard Utama',
            route: `${role}.main-dashboard`,
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        },
        {
            label: 'Menu Operasional',
            route: `${role}.operational-menu`,
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        },
        {
            label: 'Laporan',
            route: `${role}.report`,
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        },
    ];

    const kpiData = [
        { title: 'Aktivitas Tercatat', value: stats?.stat1 || 124, trend: 'Permintaan Aktif', color: 'from-blue-500 to-blue-600', bg: 'bg-blue-50', text: 'text-blue-600' },
        { title: 'Tugas Selesai', value: stats?.stat2 || 45, trend: 'Disetujui', color: 'from-emerald-500 to-emerald-600', bg: 'bg-emerald-50', text: 'text-emerald-600' },
        { title: 'Total Volume', value: stats?.stat3 || 892, trend: 'Selama Kuartal', color: 'from-indigo-500 to-indigo-600', bg: 'bg-indigo-50', text: 'text-indigo-600' },
    ];

    return (
        <DashboardLayout userRole={`Divisi ${displayRole}`} sidebarItems={sidebarItems} headerTitle={`Portal ${displayRole}`}>
            <Head title={`Dashboard ${displayRole}`} />

            <div className="bg-white rounded-3xl p-8 mb-8 border border-slate-100 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-indigo-50/50 to-transparent pointer-events-none" />
                <div className="relative z-10 max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 font-semibold text-xs rounded-lg mb-3 border border-indigo-100">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        Sistem Operasional Aktif
                    </div>
                    <h2 className="text-3xl font-bold font-outfit text-slate-800 mb-2">Selamat datang di Panel {displayRole}</h2>
                    <p className="text-slate-500">Ini adalah pusat operasional terpadu bagi peran Anda. Anda dapat mengelola data utama, mencetak report rutin, dan mengatur fungsi operasional harian.</p>
                </div>
                <div className="relative z-10 flex-shrink-0 flex gap-3">
                    <Link href={route(`${role}.operational-menu`)} className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-md shadow-blue-500/20 hover:bg-blue-700 hover:-translate-y-0.5 transition-all">
                        Mulai Operasional
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-2">
                {kpiData.map((item, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm relative group hover:shadow-md transition-all hover:border-slate-200">
                        <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${item.color} rounded-bl-3xl opacity-5 group-hover:opacity-10 transition-opacity`} />
                        <h3 className="text-sm font-bold text-slate-500 mb-2">{item.title}</h3>
                        <p className="text-4xl font-black font-outfit text-slate-800 mb-2">{item.value}</p>
                        <p className="text-xs font-semibold text-slate-400">{item.trend}</p>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <h3 className="text-lg font-bold text-slate-800 font-outfit">Tugas Rutin Terbaru</h3>
                    <Link href={route(`${role}.report`)} className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">Cetak Laporan</Link>
                </div>
                <div className="p-8 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 border border-slate-100">
                        <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h4 className="text-lg font-bold text-slate-700 mb-1">Semua Selesai!</h4>
                    <p className="text-slate-500 text-sm max-w-sm">Tugas operasional Anda untuk bulan ini tidak ada yang tertunda. Silakan navigasi ke Menu Operasional untuk menambahkan data baru.</p>
                </div>
            </div>
        </DashboardLayout>
    );
}
