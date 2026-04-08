import React from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Badge from '@/Components/Badge';

export default function CareerDashboard({ stats, recentApplications }) {
    return (
        <DashboardLayout headerTitle="Dashboard BKK & Karir">
            <Head title="Career Dashboard" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                    </div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Lowongan Aktif</p>
                    <h3 className="text-2xl font-black text-slate-800 font-outfit">{stats.active_jobs} <span className="text-base text-slate-400 font-medium">Posisi</span></h3>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                        </div>
                    </div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Total Lamaran Masuk</p>
                    <h3 className="text-2xl font-black text-slate-800 font-outfit">{stats.total_applications} <span className="text-base text-slate-400 font-medium">Berdasar Sistem</span></h3>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        </div>
                    </div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Menunggu Review</p>
                    <h3 className="text-2xl font-black text-slate-800 font-outfit">{stats.pending_review} <span className="text-base text-slate-400 font-medium">Kandidat</span></h3>
                </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-8 border-b border-slate-50 flex justify-between items-center">
                    <h3 className="text-xl font-bold text-slate-800 font-outfit">Aplikasi Kandidat Terbaru</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-slate-50 text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                            <tr>
                                <th className="px-8 py-5">Nama Kandidat</th>
                                <th className="px-6 py-5">Lowongan Dilamar</th>
                                <th className="px-6 py-5">Status</th>
                                <th className="px-8 py-5 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {recentApplications.map((app) => (
                                <tr key={app.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs uppercase">
                                                {app.student?.user?.name?.substring(0, 1)}
                                            </div>
                                            <span className="font-bold text-slate-700">{app.student?.user?.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-slate-600 font-medium">{app.job?.title}</span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <Badge variant={app.status === 'accepted' ? 'success' : (app.status === 'rejected' ? 'danger' : 'warning')}>
                                            {app.status?.toUpperCase() || 'PENDING'}
                                        </Badge>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <button className="text-blue-600 font-bold hover:underline">Review CV</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardLayout>
    );
}
