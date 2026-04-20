import React, { useState, useMemo } from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function TeachingSchedule({ schedules }) {
    const dayNames = ['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
    const [selectedDay, setSelectedDay] = useState(0);

    const dummySchedules = {
        0: [
            { subject: 'Pemrograman Web', class: 'X RPL 1', room: 'Lab Komputer 1', start: '07:30', end: '09:00', students: 32 },
            { subject: 'Basis Data', class: 'XI RPL 2', room: 'Lab Komputer 2', start: '09:15', end: '10:45', students: 28 },
            { subject: 'Pemrograman Web', class: 'X RPL 2', room: 'Lab Komputer 1', start: '11:00', end: '12:30', students: 30 },
        ],
        1: [
            { subject: 'Basis Data', class: 'XI RPL 1', room: 'Lab Komputer 2', start: '07:30', end: '09:00', students: 31 },
            { subject: 'Pemrograman Mobile', class: 'XII RPL 1', room: 'Lab Komputer 3', start: '10:00', end: '11:30', students: 26 },
        ],
        2: [
            { subject: 'Pemrograman Web', class: 'X RPL 3', room: 'Lab Komputer 1', start: '07:30', end: '09:00', students: 29 },
        ],
        3: [
            { subject: 'Basis Data', class: 'XI RPL 2', room: 'Lab Komputer 2', start: '09:15', end: '10:45', students: 28 },
            { subject: 'Pemrograman Mobile', class: 'XII RPL 2', room: 'Lab Komputer 3', start: '11:00', end: '12:30', students: 24 },
        ],
        4: [
            { subject: 'Pemrograman Web', class: 'X RPL 1', room: 'Lab Komputer 1', start: '07:30', end: '09:00', students: 32 },
        ],
        5: [],
    };

    const todaySchedule = dummySchedules[selectedDay] || [];
    const totalSessions = Object.values(dummySchedules).flat().length;

    return (
        <DashboardLayout headerTitle="Jadwal Mengajar">
            <Head title="Jadwal Mengajar" />
            <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center"><svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg></div>
                        <div><h2 className="text-lg font-semibold text-gray-900">Jadwal Mengajar Saya</h2><p className="text-sm text-gray-500">Total {totalSessions} sesi per minggu</p></div>
                    </div>
                    {/* Day tabs */}
                    <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-100">
                        {dayNames.map((d, i) => (
                            <button key={i} onClick={() => setSelectedDay(i)} className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all ${selectedDay === i ? 'bg-primary-500 text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>{d}</button>
                        ))}
                    </div>
                </div>

                {/* Schedule Cards */}
                {todaySchedule.length === 0 ? (
                    <div className="bg-white rounded-2xl border border-gray-100 border-dashed p-12 text-center">
                        <svg className="w-12 h-12 text-gray-200 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                        <p className="text-sm font-medium text-gray-600">Tidak ada jadwal</p>
                        <p className="text-xs text-gray-400 mt-1">Anda tidak memiliki kelas pada hari {dayNames[selectedDay]}.</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {todaySchedule.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-sm transition">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-900">{item.subject}</h3>
                                        <p className="text-xs text-primary-500 font-medium mt-0.5">{item.class}</p>
                                    </div>
                                    <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">{item.room}</span>
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                    {[
                                        { label: 'Waktu', value: `${item.start} — ${item.end}`, icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' },
                                        { label: 'Sesi', value: `Sesi ${idx + 1}`, icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25' },
                                        { label: 'Siswa', value: `${item.students} siswa`, icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' },
                                    ].map((info, i) => (
                                        <div key={i} className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                                            <div className="flex items-center gap-1.5 mb-1"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={info.icon} /></svg><span className="text-[10px] text-gray-400 font-medium uppercase">{info.label}</span></div>
                                            <p className="text-xs font-semibold text-gray-900">{info.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
}
