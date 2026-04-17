import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function Material() {
    const [tab, setTab] = useState('tasks');
    const [detailItem, setDetailItem] = useState(null);

    const dummyTasks = [
        { id: 1, title: 'Laporan Praktikum Jaringan', subject: 'Jaringan Komputer', teacher: 'Pak Rudi', class: 'XII TKJ 1', type: 'Tugas', deadline: '2026-04-22', submissions: 28, total: 32 },
        { id: 2, title: 'UTS Pemrograman Web', subject: 'Pemrograman Web', teacher: 'Pak Budi', class: 'X RPL 1', type: 'Ujian', deadline: '2026-04-20', submissions: 30, total: 32 },
        { id: 3, title: 'Quiz Basis Data', subject: 'Basis Data', teacher: 'Pak Ahmad', class: 'XI RPL 2', type: 'Latihan', deadline: '2026-04-18', submissions: 25, total: 28 },
    ];

    const dummyMaterials = [
        { id: 1, title: 'Modul HTML & CSS Dasar', subject: 'Pemrograman Web', teacher: 'Pak Budi', class: 'X RPL 1', format: 'PDF', size: '2.4 MB', uploaded_at: '2026-04-10' },
        { id: 2, title: 'Slide Presentasi SQL', subject: 'Basis Data', teacher: 'Pak Ahmad', class: 'XI RPL 1', format: 'PPTX', size: '5.1 MB', uploaded_at: '2026-04-08' },
        { id: 3, title: 'Video Tutorial React', subject: 'Pemrograman Web', teacher: 'Pak Budi', class: 'X RPL 2', format: 'MP4', size: '120 MB', uploaded_at: '2026-04-05' },
    ];

    const typeColors = { Tugas: 'bg-blue-50 text-blue-600 border-blue-100', Ujian: 'bg-red-50 text-red-600 border-red-100', Latihan: 'bg-green-50 text-green-600 border-green-100' };
    const formatColors = { PDF: 'bg-red-50 text-red-600', PPTX: 'bg-amber-50 text-amber-600', MP4: 'bg-blue-50 text-blue-600', DOC: 'bg-blue-50 text-blue-600' };

    return (
        <DashboardLayout headerTitle="Tugas & Materi">
            <Head title="Tugas & Materi" />
            <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-3 flex-1"><div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center"><svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg></div>
                        <div><h2 className="text-lg font-semibold text-gray-900">Tugas & Materi</h2><p className="text-sm text-gray-500">Semua tugas dan materi pembelajaran di sekolah Anda.</p></div>
                    </div>
                    <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-100 shrink-0">
                        <button onClick={() => setTab('tasks')} className={`px-4 py-2 rounded-lg text-xs font-medium transition ${tab === 'tasks' ? 'bg-primary-500 text-white' : 'text-gray-500'}`}>Tugas</button>
                        <button onClick={() => setTab('materials')} className={`px-4 py-2 rounded-lg text-xs font-medium transition ${tab === 'materials' ? 'bg-primary-500 text-white' : 'text-gray-500'}`}>Materi</button>
                    </div>
                </div>

                {tab === 'tasks' ? (
                    <div className="space-y-3">
                        {dummyTasks.map(t => (
                            <div key={t.id} onClick={() => setDetailItem({ ...t, _type: 'task' })} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-sm transition cursor-pointer group">
                                <div className="flex items-start justify-between mb-2">
                                    <div><h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition">{t.title}</h3><p className="text-xs text-gray-400 mt-0.5">{t.subject} · {t.teacher}</p></div>
                                    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${typeColors[t.type] || ''}`}>{t.type}</span>
                                </div>
                                <div className="flex items-center gap-4 text-xs text-gray-500 mt-3">
                                    <span className="flex items-center gap-1"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904" /></svg>{t.class}</span>
                                    <span>Deadline: {new Date(t.deadline).toLocaleDateString('id-ID',{day:'numeric',month:'short'})}</span>
                                    <span className="font-medium text-primary-500">{t.submissions}/{t.total} dikumpulkan</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-3">
                        {dummyMaterials.map(m => (
                            <div key={m.id} onClick={() => setDetailItem({ ...m, _type: 'material' })} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-sm transition cursor-pointer group">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold ${formatColors[m.format] || 'bg-gray-50 text-gray-600'}`}>{m.format}</div>
                                        <div><h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition">{m.title}</h3><p className="text-xs text-gray-400 mt-0.5">{m.subject} · {m.teacher}</p></div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
                                    <span>{m.class}</span><span>{m.size}</span><span>Diunggah: {new Date(m.uploaded_at).toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric'})}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {detailItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm" onClick={() => setDetailItem(null)}>
                    <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden" onClick={e => e.stopPropagation()}>
                        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between"><h3 className="text-base font-semibold text-gray-900">Detail {detailItem._type === 'task' ? 'Tugas' : 'Materi'}</h3><button onClick={() => setDetailItem(null)} className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button></div>
                        <div className="px-6 py-5 space-y-3">
                            <h2 className="text-lg font-semibold text-gray-900">{detailItem.title}</h2>
                            <div className="grid grid-cols-2 gap-3">
                                {[{ l: 'Mapel', v: detailItem.subject }, { l: 'Guru', v: detailItem.teacher }, { l: 'Kelas', v: detailItem.class }, detailItem._type === 'task' ? { l: 'Pengumpulan', v: `${detailItem.submissions}/${detailItem.total}` } : { l: 'Ukuran File', v: detailItem.size }].map((info, i) => (
                                    <div key={i} className="p-3 bg-gray-50 rounded-xl border border-gray-100"><p className="text-[10px] text-gray-400 uppercase mb-1">{info.l}</p><p className="text-sm font-semibold text-gray-900">{info.v}</p></div>
                                ))}
                            </div>
                        </div>
                        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-end"><button onClick={() => setDetailItem(null)} className="px-5 py-2 bg-primary-500 text-white text-sm font-semibold rounded-xl hover:bg-primary-600 transition">Tutup</button></div>
                    </div>
                </div>
            )}
        </DashboardLayout>
    );
}
