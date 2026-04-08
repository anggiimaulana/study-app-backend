import React from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Badge from '@/Components/Badge';
import Button from '@/Components/Button';

export default function CbtGrading({ exams }) {
    return (
        <DashboardLayout headerTitle="Penilaian CBT">
            <Head title="Penilaian CBT" />

            <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800 font-outfit">Monitoring Ujian Digital</h2>
                    <p className="text-slate-500 text-sm mt-1">Pantau hasil pengerjaan ujian murid secara real-time.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {exams.map((exam) => (
                    <div key={exam.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col hover:border-blue-200 transition-colors group">
                        <div className="p-6 flex-1">
                            <div className="flex justify-between items-start mb-4">
                                <Badge variant="primary">{exam.subject?.name || 'Ujian'}</Badge>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Durasi: {exam.duration_minutes} Menit</span>
                            </div>

                            <h3 className="text-lg font-bold text-slate-800 font-outfit mb-2 group-hover:text-blue-600 transition-colors">{exam.title}</h3>
                            <p className="text-sm text-slate-500 line-clamp-2 mb-4">
                                {exam.description || 'Instruksi pengerjaan standar ujian sekolah.'}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {exam.classrooms?.map(c => (
                                    <Badge key={c.id} variant="slate" className="text-[10px]">{c.name}</Badge>
                                ))}
                            </div>

                            <div className="bg-slate-50 rounded-xl p-4 flex justify-between items-center">
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase">Partisipan</p>
                                    <p className="text-sm font-bold text-slate-800">{exam.attempts_count || 0} Murid Mengikuti</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase">Rata-rata Nilai</p>
                                    <p className="text-sm font-bold text-blue-600">82.5</p>
                                </div>
                            </div>
                        </div>

                        <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex justify-between items-center">
                            <span className="text-xs font-bold text-slate-500">
                                Berakhir: {new Date(exam.end_time).toLocaleDateString('id-ID')}
                            </span>
                            <Button size="sm">Detail & Penilaian</Button>
                        </div>
                    </div>
                ))}
            </div>
            
            {exams.length === 0 && (
                <div className="bg-white rounded-3xl p-16 border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-slate-200">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    </div>
                    <p className="text-slate-500 font-medium">Belum ada data ujian yang tersedia.</p>
                </div>
            )}
        </DashboardLayout>
    );
}
