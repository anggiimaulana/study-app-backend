import React from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Badge from '@/Components/Badge';

export default function Schedule({ schedules }) {
    const days = [
        { id: 1, name: 'Senin', color: 'bg-blue-600' },
        { id: 2, name: 'Selasa', color: 'bg-indigo-600' },
        { id: 3, name: 'Rabu', color: 'bg-amber-600' },
        { id: 4, name: 'Kamis', color: 'bg-emerald-600' },
        { id: 5, name: 'Jumat', color: 'bg-red-600' },
    ];

    return (
        <DashboardLayout headerTitle="Jadwal Kelas">
            <Head title="Jadwal Kelas" />

            <div className="mb-10">
                <h2 className="text-2xl font-bold text-slate-800 font-outfit">Kalender Akademik Anda</h2>
                <p className="text-slate-500 text-sm mt-1">Lacak waktu pelajaran agar tidak tertinggal materi penting.</p>
            </div>

            <div className="flex flex-col gap-10">
                {days.map((day) => {
                    const daySchedules = schedules[day.id] || [];
                    
                    return (
                        <div key={day.id} className="relative">
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`px-5 py-2 rounded-2xl ${day.color} text-white font-bold font-outfit shadow-lg shadow-current/10`}>
                                    {day.name}
                                </div>
                                <div className="flex-1 h-px bg-slate-100"></div>
                                <Badge variant="slate">{daySchedules.length} Sesi</Badge>
                            </div>

                            {daySchedules.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {daySchedules.map((item, idx) => (
                                        <div key={idx} className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                            <div className={`absolute top-0 left-0 w-1 h-full ${day.color} opacity-70`}></div>
                                            
                                            <div className="flex justify-between items-start mb-3">
                                                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm bg-blue-50 px-2.5 py-1 rounded-lg">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                    {item.start_time.substring(0, 5)} - {item.end_time.substring(0, 5)}
                                                </div>
                                                <Badge variant="slate">R. {item.room || 'Utama'}</Badge>
                                            </div>

                                            <h4 className="text-lg font-bold text-slate-800 font-outfit mb-1 group-hover:text-blue-600 transition-colors">
                                                {item.subject?.name}
                                            </h4>
                                            
                                            <div className="mt-4 pt-4 border-t border-slate-50 flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden">
                                                    <img src={`https://ui-avatars.com/api/?name=${item.teacher?.user?.name}&background=random`} alt="Guru" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-xs font-bold text-slate-700 truncate">{item.teacher?.user?.name}</p>
                                                    <p className="text-[10px] text-slate-500">Guru Pengampu</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 py-10 flex flex-col items-center justify-center text-slate-400">
                                    <p className="text-sm font-medium italic">Tidak ada jadwal pelajaran di hari ini.</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </DashboardLayout>
    );
}
