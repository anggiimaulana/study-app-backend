import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function Tasks({ tasks }) {
    const [filter, setFilter] = useState('all');

    const dummyTasks = [
        { id: 101, title: 'Laporan Praktikum Jaringan Komputer', description: 'Simulasi Cisco Packet Tracer untuk routing statis.', due_date: '2026-04-15', type: 'tugas', subject: { name: 'TKJ' }, teacher: { user: { name: 'Bpk. Heru' } } },
        { id: 102, title: 'Ujian Tengah Semester - Matematika', description: 'Materi Integral dan Statistika.', due_date: '2026-04-12', type: 'exam', subject: { name: 'Matematika' }, teacher: { user: { name: 'Ibu Sari' } } },
    ];

    const displayTasks = tasks && tasks.length > 0 ? tasks : dummyTasks;

    const filteredTasks = displayTasks.filter(task => {
        if (filter === 'all') return true;
        const isSubmitted = task.submissions && task.submissions.length > 0;
        if (filter === 'pending') return !isSubmitted;
        if (filter === 'submitted') return isSubmitted;
        return true;
    });

    return (
        <DashboardLayout headerTitle="Tugas & Ujian">
            <Head title="Akademik" />

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
                <div className="text-left">
                    <h2 className="text-2xl font-bold text-slate-900 font-outfit uppercase tracking-tight">Daftar Aktivitas</h2>
                    <p className="text-slate-500 text-sm mt-1">Kelola tugas mandiri dan evaluasi ujian Anda.</p>
                </div>
                
                <div className="flex bg-white p-1 rounded-lg border border-slate-200 shadow-sm shrink-0">
                    {['all', 'pending', 'submitted'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-6 py-2 rounded-md text-[10px] font-bold uppercase transition-all ${
                                filter === f ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'
                            }`}
                        >
                            {f === 'all' ? 'Semua' : f === 'pending' ? 'Tertunda' : 'Selesai'}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTasks.map((task) => {
                    const submission = task.submissions?.[0];
                    const isSubmitted = !!submission;
                    
                    return (
                        <div key={task.id} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-all flex flex-col h-full group overflow-hidden">
                            <div className="p-6 flex-1 text-left">
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest ${task.type === 'exam' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                                        {task.type || 'Tugas'}
                                    </span>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase">Deadline: {new Date(task.due_date).toLocaleDateString('id-ID')}</p>
                                </div>

                                <h3 className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors uppercase tracking-tight mb-3 leading-tight line-clamp-2">{task.title}</h3>
                                <p className="text-slate-500 text-xs font-medium leading-relaxed line-clamp-3 mb-6 h-[3rem]">{task.description}</p>
                                
                                <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                                    <div className="text-left shrink-0">
                                        <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1 leading-none">{task.subject?.name}</p>
                                        <p className="text-[10px] font-medium text-slate-300 uppercase leading-none">{task.teacher?.user?.name}</p>
                                    </div>
                                    <div className={`w-2 h-2 rounded-full ${isSubmitted ? 'bg-emerald-500' : 'bg-slate-200'}`}></div>
                                </div>
                            </div>
                            
                            <Link className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center group-hover:bg-blue-600 group-hover:text-white transition-all text-xs font-bold uppercase">
                                <span>{isSubmitted ? 'Lihat Jawaban' : 'Kerjakan Sekarang'}</span>
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </DashboardLayout>
    );
}
