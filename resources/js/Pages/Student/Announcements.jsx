import React from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function Announcements({ announcements }) {
    const dummyAnnouncements = announcements && announcements.length > 0 ? announcements : [
        { id: 1, title: 'Ujian Tengah Semester 2026', content: 'Persiapkan diri Anda untuk UTS Genap. Jadwal lengkap tersedia di menu kalender.', type: 'urgent', created_at: '2026-04-01' },
        { id: 2, title: 'Libur Hari Raya', content: 'Sekolah diliburkan mulai 28 Maret s/d 5 April 2026.', type: 'info', created_at: '2026-03-25' },
    ];

    return (
        <DashboardLayout headerTitle="Pengumuman">
            <Head title="Informasi" />

            <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-left mb-10">
                    <h2 className="text-2xl font-bold text-slate-900 font-outfit uppercase tracking-tight">Pusat Informasi</h2>
                    <p className="text-slate-500 text-sm mt-1">Berita terbaru dan pengumuman resmi sekolah.</p>
                </div>

                <div className="space-y-6">
                    {dummyAnnouncements.map((ann) => (
                        <div key={ann.id} className={`bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:border-blue-300 transition-all border-l-4 ${ann.type === 'urgent' ? 'border-l-red-500' : 'border-l-blue-600'}`}>
                            <div className="flex flex-col md:flex-row justify-between md:items-start gap-6 mb-6">
                                <div className="text-left">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest ${ann.type === 'urgent' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>{ann.type || 'INFO'}</span>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase">{new Date(ann.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 font-outfit uppercase tracking-tight leading-tight">{ann.title}</h3>
                                </div>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed text-left border-slate-100">{ann.content}</p>
                            <div className="mt-6 flex justify-end">
                                <button className="text-[10px] font-bold uppercase tracking-widest text-blue-600 hover:text-blue-800 transition-all flex items-center gap-2">
                                    Lihat Selengkapnya
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}
