import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Modal from '@/Components/ui/Modal';

export default function Broadcast({ announcements }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [detailItem, setDetailItem] = useState(null);
    const { data, setData, reset, processing } = useForm({ title: '', content: '', type: 'info', category: 'Umum' });

    const dummyItems = [
        { id: 1, title: 'Ujian Tengah Semester 2026', content: 'Persiapkan diri Anda untuk UTS Genap. Jadwal lengkap tersedia di portal.', type: 'urgent', category: 'Akademik', created_at: '2026-04-01', views: 245 },
        { id: 2, title: 'Libur Hari Raya', content: 'Sekolah diliburkan mulai 28 Maret s/d 5 April 2026.', type: 'info', category: 'Umum', created_at: '2026-03-25', views: 312 },
        { id: 3, title: 'Pendaftaran Ekskul', content: 'Pendaftaran ekskul semester genap dibuka mulai 10 April 2026.', type: 'info', category: 'Kegiatan', created_at: '2026-03-20', views: 189 },
    ];

    const items = announcements?.length > 0 ? announcements : dummyItems;
    const typeConfig = { urgent: { label: 'PENTING', bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-100', accent: 'border-l-red-500' }, info: { label: 'INFO', bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100', accent: 'border-l-blue-500' } };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (window.AppAlert) window.AppAlert.toast('success', 'Pengumuman berhasil dipublikasikan!');
        setIsModalOpen(false);
        reset();
    };

    return (
        <DashboardLayout headerTitle="Pengumuman">
            <Head title="Sistem Pengumuman" />
            <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-3 flex-1"><div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center"><svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" /></svg></div>
                        <div><h2 className="text-lg font-semibold text-gray-900">Sistem Broadcast</h2><p className="text-sm text-gray-500">Buat dan kelola pengumuman untuk seluruh warga sekolah.</p></div>
                    </div>
                    <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-xl transition"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>Buat Pengumuman</button>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    {[{ label: 'Total', value: items.length }, { label: 'Penting', value: items.filter(i => i.type === 'urgent').length }, { label: 'Total Views', value: items.reduce((a, i) => a + (i.views || 0), 0) }].map((s, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-gray-100 p-4"><p className="text-xs text-gray-400 mb-1">{s.label}</p><p className="text-xl font-bold text-gray-900">{s.value}</p></div>
                    ))}
                </div>

                <div className="space-y-3">
                    {items.map(ann => {
                        const tc = typeConfig[ann.type] || typeConfig.info;
                        return (
                            <div key={ann.id} onClick={() => setDetailItem(ann)} className={`bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-sm transition cursor-pointer border-l-4 ${tc.accent} group`}>
                                <div className="flex justify-between items-start gap-2 mb-2">
                                    <div className="flex items-center gap-2"><span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${tc.bg} ${tc.text} ${tc.border}`}>{tc.label}</span><span className="text-[10px] font-medium px-2 py-0.5 bg-gray-50 text-gray-500 rounded-full border border-gray-100">{ann.category}</span></div>
                                    <div className="text-right"><p className="text-xs text-gray-400">{new Date(ann.created_at).toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric'})}</p>{ann.views && <p className="text-[10px] text-gray-400 mt-0.5">{ann.views} views</p>}</div>
                                </div>
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition">{ann.title}</h3>
                                <p className="text-xs text-gray-500 mt-1 line-clamp-1">{ann.content}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Detail Modal */}
            {detailItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm" onClick={() => setDetailItem(null)}>
                    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
                        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between"><h3 className="text-base font-semibold text-gray-900">Detail Pengumuman</h3><button onClick={() => setDetailItem(null)} className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button></div>
                        <div className="overflow-y-auto flex-1 px-6 py-5 space-y-4">
                            <h2 className="text-xl font-semibold text-gray-900">{detailItem.title}</h2>
                            <p className="text-sm text-gray-600 leading-relaxed">{detailItem.content}</p>
                        </div>
                        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-between items-center">
                            <button className="px-4 py-2 text-sm font-medium text-red-500 hover:text-red-600 transition">Hapus</button>
                            <button onClick={() => setDetailItem(null)} className="px-5 py-2 bg-primary-500 text-white text-sm font-semibold rounded-xl hover:bg-primary-600 transition">Tutup</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Create Modal */}
            <Modal open={isModalOpen} onClose={() => { setIsModalOpen(false); reset(); }} title="Buat Pengumuman Baru">
                <form onSubmit={handleSubmit} className="p-5 space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                        <div><label className="block text-xs font-medium text-gray-500 uppercase mb-1.5">Tipe</label><select value={data.type} onChange={e => setData('type', e.target.value)} className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all"><option value="info">Info</option><option value="urgent">Penting</option></select></div>
                        <div><label className="block text-xs font-medium text-gray-500 uppercase mb-1.5">Kategori</label><select value={data.category} onChange={e => setData('category', e.target.value)} className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all"><option>Umum</option><option>Akademik</option><option>Kegiatan</option><option>Fasilitas</option></select></div>
                    </div>
                    <div><label className="block text-xs font-medium text-gray-500 uppercase mb-1.5">Judul</label><input type="text" value={data.title} onChange={e => setData('title', e.target.value)} className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all placeholder:text-gray-400" placeholder="Judul pengumuman..." required /></div>
                    <div><label className="block text-xs font-medium text-gray-500 uppercase mb-1.5">Isi</label><textarea value={data.content} onChange={e => setData('content', e.target.value)} rows={5} className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all resize-none placeholder:text-gray-400" placeholder="Isi pengumuman..." required /></div>
                    <div className="flex justify-end gap-2 pt-2">
                        <button type="button" onClick={() => { setIsModalOpen(false); reset(); }} className="px-4 py-2 text-sm font-medium border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition">Batal</button>
                        <button type="submit" disabled={processing || !data.title.trim()} className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-xl transition disabled:opacity-50">Publikasikan</button>
                    </div>
                </form>
            </Modal>
        </DashboardLayout>
    );
}
