import React from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Badge from '@/Components/Badge';

export default function Dashboard({ stats, recentTasks, evaluations }) {
    const kpiData = [
        { 
            title: 'H-Index Belajar', 
            count: stats.tasks_given || 0, 
            label: 'Tugas Diberikan',
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>,
            color: 'bg-blue-600',
            light: 'bg-blue-50',
            text: 'text-blue-600'
        },
        { 
            title: 'Sesi Ujian', 
            count: stats.exams_given || 0, 
            label: 'CBT Aktif',
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
            color: 'bg-indigo-600',
            light: 'bg-indigo-50',
            text: 'text-indigo-600'
        },
        { 
            title: 'Rating Guru', 
            count: stats.average_rating || '5.0', 
            label: 'Kepuasan Murid',
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
            color: 'bg-amber-500',
            light: 'bg-amber-50',
            text: 'text-amber-500'
        },
        { 
            title: 'Review Masuk', 
            count: stats.reviews_count || 0, 
            label: 'Total Feedback',
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>,
            color: 'bg-emerald-600',
            light: 'bg-emerald-50',
            text: 'text-emerald-600'
        },
    ];

    return (
        <DashboardLayout userRole="Tenaga Pengajar" headerTitle="Control Center Guru">
            <Head title="Teacher Control Center" />

            {/* KPI Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {kpiData.map((kpi, idx) => (
                    <div key={idx} className="group bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-premium hover:border-blue-200 transition-all duration-500 relative overflow-hidden">
                        <div className={`absolute top-0 right-0 w-20 h-20 ${kpi.light} rounded-bl-[3rem] transition-transform group-hover:scale-110`}></div>
                        <div className={`${kpi.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 relative z-10`}>
                            {kpi.icon}
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{kpi.title}</h3>
                            <div className="text-3xl font-black text-slate-800 font-outfit tracking-tighter mb-1">{kpi.count}</div>
                            <p className="text-xs font-bold text-slate-400">{kpi.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 mb-12">
                {/* Recent Activity Table */}
                <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-premium overflow-hidden">
                    <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
                        <h3 className="text-xl font-black text-slate-900 font-outfit">Tugas & Evaluasi Terbaru</h3>
                        <Link href={route('teacher.task-management')} className="text-xs font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-xl">Kelola Semua</Link>
                    </div>
                    <div className="p-4">
                        {recentTasks && recentTasks.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50">
                                        <tr>
                                            <th className="px-6 py-4">Informasi Materi</th>
                                            <th className="px-6 py-4">Tipe</th>
                                            <th className="px-6 py-4 text-right">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {recentTasks.map(task => (
                                            <tr key={task.id} className="group transition-colors hover:bg-slate-50/50">
                                                <td className="px-6 py-6">
                                                    <p className="font-bold text-slate-800 font-outfit group-hover:text-blue-600 transition-colors uppercase">{task.title}</p>
                                                    <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-tighter">Batas: {new Date(task.due_date).toLocaleDateString('id-ID')}</p>
                                                </td>
                                                <td className="px-6 py-6 font-bold text-slate-500">
                                                    <Badge variant={task.type === 'exam' ? 'danger' : 'indigo'}>{task.type?.toUpperCase()}</Badge>
                                                </td>
                                                <td className="px-6 py-6 text-right">
                                                    <button className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-blue-600 hover:text-white transition-all text-slate-400 flex items-center justify-center border border-slate-100">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="py-20 text-center font-bold text-slate-300 uppercase tracking-widest text-[10px]">Belum ada tugas dibuat</div>
                        )}
                    </div>
                </div>

                {/* Feedback Section */}
                <div className="bg-slate-900 rounded-[2.5rem] p-10 lg:p-12 text-white shadow-2xl shadow-blue-900/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]"></div>
                    <div className="relative z-10 h-full flex flex-col">
                        <div className="flex justify-between items-center mb-10">
                            <div>
                                <h3 className="text-2xl font-black font-outfit mb-2">Ulasan Murid</h3>
                                <p className="text-slate-400 text-sm font-medium">Apa yang murid katakan tentang pengajaran Anda.</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-4 rounded-3xl">
                                <div className="text-3xl font-black text-blue-500 font-outfit">{stats.average_rating}</div>
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Global Rank</div>
                            </div>
                        </div>

                        <div className="flex-1 space-y-4 overflow-y-auto max-h-[400px] scrollbar-hide pr-2">
                            {evaluations && evaluations.length > 0 ? evaluations.map(eva => (
                                <div key={eva.id} className="bg-white/5 border border-white/5 p-6 rounded-[2rem] hover:bg-white/10 transition-all group">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-500 flex items-center justify-center font-black text-xs">
                                                {eva.student?.user?.name?.substring(0, 1)}
                                            </div>
                                            <span className="text-sm font-bold opacity-80">{eva.student?.user?.name || 'Anon Murid'}</span>
                                        </div>
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < eva.rating ? 'bg-blue-500' : 'bg-white/10'}`}></div>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-400 italic leading-relaxed">"{eva.review || 'Guru yang sangat menginspirasi!'}"</p>
                                </div>
                            )) : (
                                <div className="py-20 text-center text-slate-600 font-bold uppercase tracking-[0.2em] text-[10px]">Menunggu ulasan pertama</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
