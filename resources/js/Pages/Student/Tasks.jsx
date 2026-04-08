import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Badge from '@/Components/Badge';
import Button from '@/Components/Button';

export default function Tasks({ tasks }) {
    const [filter, setFilter] = useState('all');

    const filteredTasks = tasks.filter(task => {
        if (filter === 'all') return true;
        const isSubmitted = task.submissions && task.submissions.length > 0;
        if (filter === 'pending') return !isSubmitted;
        if (filter === 'submitted') return isSubmitted;
        return true;
    });

    return (
        <DashboardLayout headerTitle="Tugas & Ujian">
            <Head title="Tugas & Ujian" />

            <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800 font-outfit">Daftar Tugas Anda</h2>
                    <p className="text-slate-500 text-sm mt-1">Kelola dan kumpulkan tugas tepat waktu untuk hasil maksimal.</p>
                </div>
                
                <div className="flex bg-white p-1 rounded-xl border border-slate-100 shadow-sm">
                    {['all', 'pending', 'submitted'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all capitalize ${
                                filter === f ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-800'
                            }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            {filteredTasks.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTasks.map((task) => {
                        const submission = task.submissions?.[0];
                        const isSubmitted = !!submission;
                        const daysLeft = Math.ceil((new Date(task.due_date) - new Date()) / (1000 * 60 * 60 * 24));
                        
                        return (
                            <div key={task.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow group">
                                <div className="p-6 flex-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <Badge variant={task.type === 'exam' ? 'danger' : 'indigo'}>
                                            {task.type?.toUpperCase() || 'TUGAS'}
                                        </Badge>
                                        <div className="text-right">
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Deadline</p>
                                            <p className={`text-sm font-bold ${daysLeft < 3 && !isSubmitted ? 'text-red-500' : 'text-slate-700'}`}>
                                                {new Date(task.due_date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                                            </p>
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-800 font-outfit truncate mb-1 group-hover:text-blue-600 transition-colors">
                                        {task.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 line-clamp-2 mb-4 h-10">
                                        {task.description || 'Tidak ada deskripsi tambahan.'}
                                    </p>

                                    <div className="flex items-center gap-3 py-3 border-t border-slate-50">
                                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-blue-600">
                                            {task.subject?.name?.substring(0, 1) || 'S'}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs font-bold text-slate-700 truncate">{task.subject?.name || 'Mata Pelajaran'}</p>
                                            <p className="text-[10px] text-slate-500 truncate">{task.teacher?.user?.name || 'Guru'}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                                    {isSubmitted ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                            <span className="text-xs font-bold text-emerald-600">Terlampir</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${daysLeft < 0 ? 'bg-red-500' : 'bg-amber-500'}`}></div>
                                            <span className={`text-xs font-bold ${daysLeft < 0 ? 'text-red-600' : 'text-amber-600'}`}>
                                                {daysLeft < 0 ? 'Terlambat' : 'Belum Selesai'}
                                            </span>
                                        </div>
                                    )}
                                    
                                    <Link href={route('student.task-exam')}>
                                        <Button size="sm" variant={isSubmitted ? 'secondary' : 'primary'}>
                                            {isSubmitted ? 'Lihat Progress' : 'Kerjakan'}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="bg-white rounded-3xl p-16 border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
                    <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                         <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 font-outfit">Belum Ada Tugas</h3>
                    <p className="text-slate-500 max-w-sm mx-auto mt-2">
                        Sepertinya guru belum memberikan tugas baru untuk kelas Anda. Santai sejenak dan cek berkala!
                    </p>
                </div>
            )}
        </DashboardLayout>
    );
}
