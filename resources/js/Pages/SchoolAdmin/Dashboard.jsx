import React from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function Dashboard({ stats, teachers }) {
    const sidebarItems = [
        {
            label: 'Dashboard Overview',
            route: 'school-admin.dashboard',
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
        },
        {
            label: 'Data Pegawai & Murid',
            route: 'school-admin.master-data',
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
        },
        {
            label: 'Manajemen Ujian CBT',
            route: 'school-admin.cbt-management',
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        },
        {
            label: 'Tugas & Materi',
            route: 'school-admin.material',
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
        },
        {
            label: 'Laporan Aduan',
            route: 'school-admin.incoming-complaint',
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
        },
        {
            label: 'Pengumuman Resmi',
            route: 'school-admin.broadcast',
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        },
    ];

    const kpiData = [
        { title: 'Total Student', value: stats.students || 0, trend: '+20 Semester Ini', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', color: 'from-blue-500 to-blue-600', bg: 'bg-blue-50', text: 'text-blue-600' },
        { title: 'Tenaga Pengajar', value: stats.teachers || 0, trend: 'Aktif', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', color: 'from-indigo-500 to-indigo-600', bg: 'bg-indigo-50', text: 'text-indigo-600' },
        { title: 'Ujian / Tugas CBT', value: stats.tasks || 0, trend: 'On-Going', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', color: 'from-emerald-500 to-emerald-600', bg: 'bg-emerald-50', text: 'text-emerald-600' },
        { title: 'Laporan Masuk', value: stats.complaints || 0, trend: 'Aduan Perlu Respon', icon: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'from-amber-500 to-amber-600', bg: 'bg-amber-50', text: 'text-amber-600' },
    ];

    return (
        <DashboardLayout userRole="Admin Sekolah" sidebarItems={sidebarItems} headerTitle="Admin Dashboard">
            <Head title="Admin Sekolah Dashboard" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 mt-2">
                {kpiData.map((item, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-tr ${item.color} rounded-bl-full opacity-5 group-hover:opacity-10 transition-opacity`} />
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.bg} ${item.text}`}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                        </div>
                        <h3 className="text-sm font-bold text-slate-500">{item.title}</h3>
                        <p className="text-3xl font-bold font-outfit text-slate-800 mt-1 mb-2">{item.value}</p>
                        <p className="text-xs font-semibold text-slate-400 capitalize">{item.trend}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* School Activity & Config */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden p-6">
                        <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                            <div>
                                <h3 className="text-lg font-bold text-slate-800 font-outfit">Sistem Analitik Kehadiran</h3>
                                <p className="text-sm text-slate-500 mt-1">Grafik kehadiran dan kedisiplinan teacher & staf bulan ini.</p>
                            </div>
                            <button className="px-4 py-2 bg-blue-50 text-blue-600 text-sm font-bold rounded-lg hover:bg-blue-100 transition-colors">
                                Unduh Rekap
                            </button>
                        </div>
                        <div className="h-64 w-full rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100/60 shadow-inner">
                            <p className="text-slate-400 font-medium text-sm flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                Sinkronisasi Data Area
                            </p>
                        </div>
                    </div>
                </div>

                {/* Top Teachers Ranking */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                        <h3 className="text-lg font-bold text-slate-800 font-outfit flex items-center gap-2">
                            <span className="w-2 h-6 bg-emerald-500 rounded-full"></span>
                            Peringkat Teacher
                        </h3>
                    </div>
                    <div className="p-2">
                        {teachers && teachers.length > 0 ? (
                            <div className="space-y-1">
                                {teachers.slice(0,5).map((teacher, idx) => (
                                    <div key={teacher.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${idx === 0 ? 'bg-amber-100 text-amber-600' : idx === 1 ? 'bg-slate-200 text-slate-600' : idx === 2 ? 'bg-orange-100 text-orange-600' : 'bg-blue-50 text-blue-600'}`}>
                                            #{idx + 1}
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-semibold text-slate-800 text-sm truncate">{teacher.user?.name}</p>
                                            <p className="text-xs text-slate-500 mt-0.5">{teacher.employee_id || 'NUPTK -'}</p>
                                        </div>
                                        <div className="text-right flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-lg">
                                            <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                            <span className="font-bold text-slate-700">{teacher.average_rating || '0.0'}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-10 px-4">
                                <p className="text-sm font-medium text-slate-500">Belum ada evaluasi teacher tersedia.</p>
                            </div>
                        )}
                        <div className="p-4 border-t border-slate-100 mt-2">
                             <Link href={route('school-admin.master-data')} className="block w-full py-2.5 text-center bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold rounded-xl transition-colors text-sm">Lihat Seluruh Pegawai</Link>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
