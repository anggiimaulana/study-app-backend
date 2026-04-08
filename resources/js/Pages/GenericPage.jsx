import React from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function GenericPage({ title, role }) {
    const roleLabels = {
        'admission': 'PPDB',
        'career': 'BKK',
        'librarian': 'Perpustakaan',
        'academic': 'Akademik',
        'department': 'Kejuruan',
        'finance': 'Keuangan',
        'guidance': 'Bimbingan Konseling',
        'school-admin': 'Admin Sekolah',
        'super_admin': 'Super Admin',
        'teacher': 'Teacher',
        'student': 'Student'
    };

    const displayRole = roleLabels[role] || role;

    return (
        <DashboardLayout userRole={`Portal ${displayRole}`} sidebarItems={[]} headerTitle={title}>
            <Head title={title} />
            
            <div className="bg-white rounded-3xl p-8 mb-8 border border-slate-100 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
                 <div className="relative z-10 w-full flex justify-between items-center">
                    <div>
                        <Link href={route(`${role}.dashboard`)} className="text-sm font-bold text-blue-600 hover:text-blue-800 mb-2 inline-flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                            Kembali ke Dashboard Utama
                        </Link>
                        <h2 className="text-3xl font-bold font-outfit text-slate-800 mb-2">{title}</h2>
                        <p className="text-slate-500">Anda berada di ruang modul {title}. Modul dinamis ini masih dalam tahap scaffolding.</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-16 flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 font-outfit mb-2">Modul Sedang Dibangun</h3>
                <p className="text-slate-500 max-w-md mx-auto">
                    Data untuk fungsionalitas <strong>{title}</strong> sedang disiapkan oleh tim developer. Komponen spesifik akan diinjeksi di bagian ini dengan arsitektur React Inertia.
                </p>
                <div className="mt-8 flex gap-4">
                    <button className="px-6 py-2.5 bg-slate-100 font-bold text-slate-600 rounded-xl hover:bg-slate-200 transition-colors">
                        Simulasikan Data
                    </button>
                    <button className="px-6 py-2.5 bg-blue-600 font-bold text-white rounded-xl shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-all">
                        Tarik Data Server
                    </button>
                </div>
            </div>

        </DashboardLayout>
    );
}
