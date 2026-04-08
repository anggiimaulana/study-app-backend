import React from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Badge from '@/Components/Badge';

export default function Dashboard({ stats, schedules, tasks }) {
    const cards = [
        { 
            title: 'Tugas Menunggu', 
            value: stats.active_tasks || 0, 
            desc: 'Deadline mendekat', 
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
            color: 'bg-blue-600',
            light: 'bg-blue-50',
            text: 'text-blue-600'
        },
        { 
            title: 'Mata Pelajaran', 
            value: schedules?.length || 0, 
            desc: 'Jadwal hari ini', 
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
            color: 'bg-indigo-600',
            light: 'bg-indigo-50',
            text: 'text-indigo-600'
        },
        { 
            title: 'Rata-rata Nilai', 
            value: '88.4', 
            desc: 'Performa akademik', 
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
            color: 'bg-emerald-600',
            light: 'bg-emerald-50',
            text: 'text-emerald-600'
        },
    ];

    return (
        <DashboardLayout userRole="Siswa" headerTitle="Ringkasan Belajar">
            <Head title="Student Overview" />

            {/* Hero Welcome */}
            <div className="relative overflow-hidden bg-slate-900 rounded-[2.5rem] p-10 lg:p-16 mb-12 shadow-2xl shadow-blue-900/20">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -mr-48 -mt-48 transition-transform duration-1000"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] -ml-24 -mb-24"></div>
                
                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-black tracking-[0.2em] uppercase mb-8">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            Akademik Terverifikasi
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-black text-white font-outfit leading-[1.1] tracking-tight mb-6">
                            Wujudkan <span className="text-blue-500 italic">Mimpimu</span> Di Sekolah Digital.
                        </h1>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-lg mb-10">
                            Selamat datang kembali! Kamu memiliki <span className="text-white font-bold">{stats.active_tasks} tugas</span> yang menunggu untuk dikerjakan hari ini. Mari kita buat hari ini produktif.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href={route('student.task-exam')}>
                                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-xl shadow-blue-600/30 transition-all active:scale-95">Mulai Belajar Sekarang</button>
                            </Link>
                            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 backdrop-blur-md transition-all">Lihat Jadwal</button>
                        </div>
                    </div>
                    <div className="hidden lg:grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <div className="h-40 bg-white/5 rounded-[2rem] border border-white/10 p-6 backdrop-blur-sm">
                                <div className="text-blue-500 mb-4 tracking-widest font-black text-[10px] uppercase">Attendance</div>
                                <div className="text-3xl font-black text-white font-outfit">98%</div>
                                <div className="text-xs text-slate-500 mt-1">Hadir Semester Ini</div>
                            </div>
                            <div className="h-56 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] p-8 shadow-xl shadow-blue-600/20">
                                <div className="text-white/60 mb-8 tracking-widest font-black text-[10px] uppercase">Rank</div>
                                <div className="text-4xl font-black text-white font-outfit">#04</div>
                                <div className="text-xs text-white/60 mt-2 font-bold tracking-tight">Peringkat Kelas</div>
                            </div>
                        </div>
                        <div className="space-y-4 pt-12">
                             <div className="h-56 bg-white/5 rounded-[2rem] border border-white/10 p-8 backdrop-blur-sm">
                                <div className="text-emerald-500 mb-8 tracking-widest font-black text-[10px] uppercase">Credits</div>
                                <div className="text-4xl font-black text-white font-outfit">142</div>
                                <div className="text-xs text-slate-500 mt-2 font-bold tracking-tight">Total Poin Aktif</div>
                            </div>
                            <div className="h-40 bg-white/5 rounded-[2rem] border border-white/10 p-6 backdrop-blur-sm">
                                <div className="text-amber-500 mb-4 tracking-widest font-black text-[10px] uppercase">GPA</div>
                                <div className="text-3xl font-black text-white font-outfit">3.92</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {cards.map((card, idx) => (
                    <div key={idx} className="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-premium hover:border-blue-200 transition-all duration-500 relative overflow-hidden">
                        <div className={`absolute top-0 right-0 w-24 h-24 ${card.light} rounded-bl-[4rem] -mr-8 -mt-8 transition-transform group-hover:scale-110`}></div>
                        <div className={`${card.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg ${card.color.replace('bg-', 'shadow-')}/20 mb-8 transition-transform group-hover:rotate-6`}>
                            {card.icon}
                        </div>
                        <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.1em] mb-1">{card.title}</h3>
                        <div className="flex items-baseline gap-2">
                             <span className="text-4xl font-black text-slate-900 font-outfit tracking-tighter">{card.value}</span>
                             <span className="text-xs font-bold text-slate-400">Items</span>
                        </div>
                        <p className="text-sm text-slate-400 mt-4 font-medium">{card.desc}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Tasks Section */}
                <div>
                    <div className="flex items-center justify-between mb-8 px-2">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-lg">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 font-outfit leading-none">Tugas Terbaru</h3>
                        </div>
                        <Link href={route('student.task-exam')} className="text-xs font-black text-blue-600 bg-blue-50 px-4 py-2 rounded-xl hover:bg-blue-100 transition-colors uppercase tracking-widest">Lihat Semua</Link>
                    </div>
                    
                    <div className="space-y-4">
                        {tasks && tasks.length > 0 ? tasks.map((task) => (
                            <div key={task.id} className="group bg-white border border-slate-100 p-6 rounded-[2rem] shadow-premium hover:border-blue-100 transition-all flex items-center gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex flex-col items-center justify-center shrink-0 border border-slate-100">
                                    <span className="text-[10px] font-black text-slate-400 uppercase leading-none mb-1">{new Date(task.due_date).toLocaleDateString('id-ID', { month: 'short' })}</span>
                                    <span className="text-xl font-black text-slate-800 font-outfit leading-none">{new Date(task.due_date).getDate()}</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <Badge variant={task.type === 'exam' ? 'danger' : 'indigo'} className="text-[10px] tracking-widest px-2 py-0.5">{task.type?.toUpperCase()}</Badge>
                                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">ID: #{task.id}</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-800 truncate font-outfit group-hover:text-blue-600 transition-colors">{task.title}</h4>
                                    <p className="text-sm text-slate-400 font-medium truncate">{task.subject?.name || 'Informatics Engineering'}</p>
                                </div>
                                <button className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 hover:text-blue-600 hover:border-blue-600 transition-all group-hover:translate-x-1">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                                </button>
                            </div>
                        )) : (
                            <div className="bg-slate-50 rounded-[2rem] p-12 text-center border-2 border-dashed border-slate-200">
                                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Belum ada tugas tersedia</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Schedule Section */}
                <div>
                    <div className="flex items-center justify-between mb-8 px-2">
                         <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-lg">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 font-outfit leading-none">Jadwal Kelas</h3>
                        </div>
                    </div>

                    <div className="bg-white border border-slate-100 rounded-[2.5rem] shadow-premium p-8">
                        {schedules && schedules.length > 0 ? (
                            <div className="space-y-10 relative before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-slate-100">
                                {schedules.map((schedule, idx) => (
                                    <div key={idx} className="relative pl-10">
                                        <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-4 border-slate-900 shadow-md z-10 transition-transform hover:scale-125" />
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
                                            <div className="w-24 shrink-0">
                                                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest block mb-1">Time</span>
                                                <span className="text-sm font-black text-slate-800 font-outfit">{schedule.start_time.substring(0,5)} — {schedule.end_time.substring(0,5)}</span>
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-black text-slate-900 font-outfit leading-tight mb-1">{schedule.subject?.name}</h4>
                                                <div className="flex items-center gap-3">
                                                     <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 overflow-hidden">
                                                        <img src={`https://ui-avatars.com/api/?name=${schedule.teacher?.user?.name}&background=random`} alt="Guru" />
                                                     </div>
                                                     <span className="text-sm text-slate-400 font-medium">{schedule.teacher?.user?.name}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="py-20 text-center">
                                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Jadwal kosong hari ini</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
