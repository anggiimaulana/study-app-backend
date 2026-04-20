import React from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function CbtGrading({ exams }) {
    const dummyExams = [
        { id: 1, title: 'UTS Matematika Kelas X', subject: { name: 'Matematika' }, duration_minutes: 90, description: 'Ujian tengah semester materi integral dan turunan.', classrooms: [{ id: 1, name: 'X RPL 1' }, { id: 2, name: 'X RPL 2' }], attempts_count: 45, avg_score: 78.5, end_time: '2026-04-20T12:00:00' },
        { id: 2, title: 'Quiz Pemrograman Web', subject: { name: 'Pemrograman Web' }, duration_minutes: 45, description: 'Quiz mingguan HTML, CSS, dan JavaScript dasar.', classrooms: [{ id: 3, name: 'XI RPL 1' }], attempts_count: 28, avg_score: 85.2, end_time: '2026-04-18T10:00:00' },
    ];
    const items = exams && exams.length > 0 ? exams : dummyExams;

    return (
        <DashboardLayout headerTitle="Penilaian CBT">
            <Head title="Penilaian CBT" />
            <div className="space-y-6">
                {/* Header */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Monitoring Ujian Digital</h2>
                            <p className="text-sm text-gray-500">Pantau hasil pengerjaan ujian murid secara real-time.</p>
                        </div>
                    </div>
                </div>

                {/* Exam Cards */}
                {items.length === 0 ? (
                    <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
                        <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        </div>
                        <p className="text-sm font-medium text-gray-700">Belum ada ujian</p>
                        <p className="text-xs text-gray-400 mt-1">Data ujian CBT akan muncul di sini.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {items.map(exam => (
                            <div key={exam.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-sm transition-all group">
                                <div className="p-5">
                                    <div className="flex justify-between items-start mb-3">
                                        <span className="text-[11px] font-semibold px-2.5 py-1 bg-primary-50 text-primary-600 rounded-full border border-primary-100">{exam.subject?.name || 'Ujian'}</span>
                                        <span className="text-xs text-gray-400">Durasi: {exam.duration_minutes} menit</span>
                                    </div>
                                    <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition">{exam.title}</h3>
                                    <p className="text-xs text-gray-500 line-clamp-2 mb-4">{exam.description}</p>
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {exam.classrooms?.map(c => (
                                            <span key={c.id} className="text-[10px] font-medium px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">{c.name}</span>
                                        ))}
                                    </div>
                                    <div className="bg-gray-50 rounded-xl p-3 flex justify-between items-center">
                                        <div>
                                            <p className="text-[10px] font-medium text-gray-400 uppercase">Partisipan</p>
                                            <p className="text-sm font-semibold text-gray-900">{exam.attempts_count || 0} siswa</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] font-medium text-gray-400 uppercase">Rata-rata</p>
                                            <p className="text-sm font-semibold text-primary-600">{exam.avg_score || '—'}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-5 py-3.5 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                                    <span className="text-xs text-gray-500">Berakhir: {new Date(exam.end_time).toLocaleDateString('id-ID')}</span>
                                    <button className="px-3 py-1.5 text-xs font-medium bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition">Detail & Penilaian</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
}
