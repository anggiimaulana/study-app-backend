import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Modal from '@/Components/ui/Modal';

export default function Complaints({ complaints }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [detailItem, setDetailItem] = useState(null);
    const { data, setData, post, processing, reset } = useForm({
        category: 'Fasilitas',
        title: '',
        content: '',
    });

    const submit = (e) => {
        e.preventDefault();
        if (window.AppAlert) window.AppAlert.toast('success', 'Pengaduan berhasil dikirim!');
        setIsModalOpen(false);
        reset();
    };

    const dummyItems = [
        { id: 1, title: 'AC Kelas XI RPL Tidak Berfungsi', category: 'Fasilitas', status: 'pending', content: 'AC di ruang kelas XI RPL 1 sudah tidak berfungsi sejak minggu lalu. Suhu ruangan sangat panas saat jam pelajaran siang, mengganggu konsentrasi belajar siswa.', created_at: '2026-04-14', response: null },
        { id: 2, title: 'Modul Praktikum Belum Tersedia', category: 'Akademik', status: 'resolved', content: 'Modul praktikum Pemrograman Web semester genap belum tersedia di perpustakaan. Sudah hampir 3 minggu sejak semester dimulai.', created_at: '2026-04-10', response: 'Modul sudah dicetak dan akan didistribusikan minggu depan. Terima kasih atas laporannya.' },
        { id: 3, title: 'Toilet Lantai 2 Rusak', category: 'Fasilitas', status: 'pending', content: 'Keran air di toilet putra lantai 2 bocor dan tidak bisa ditutup. Air terus mengalir sepanjang hari.', created_at: '2026-04-08', response: null },
    ];

    const items = complaints?.data?.length > 0 ? complaints.data : dummyItems;

    const statusMap = {
        pending:  { label: 'Pending', bg: 'bg-amber-50', text: 'text-amber-600', dot: 'bg-amber-500', border: 'border-amber-100' },
        resolved: { label: 'Selesai', bg: 'bg-green-50', text: 'text-green-600', dot: 'bg-green-500', border: 'border-green-100' },
        rejected: { label: 'Ditolak', bg: 'bg-red-50', text: 'text-red-600', dot: 'bg-red-500', border: 'border-red-100' },
    };

    return (
        <DashboardLayout headerTitle="Pengaduan">
            <Head title="Aduanku" />
            <div className="space-y-6">
                {/* Header */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Daftar Pengaduan</h2>
                            <p className="text-sm text-gray-500">Sampaikan keluhan atau saran untuk perbaikan sekolah.</p>
                        </div>
                    </div>
                    <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-xl transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                        Ajukan Keluhan
                    </button>
                </div>

                {/* Cards Grid */}
                {items.length === 0 ? (
                    <div className="bg-white rounded-2xl border border-gray-100 p-16 text-center">
                        <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
                        </div>
                        <p className="text-sm font-medium text-gray-700 mb-1">Belum ada pengaduan</p>
                        <p className="text-xs text-gray-400">Klik "Ajukan Keluhan" untuk membuat laporan baru.</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {items.map(c => {
                            const st = statusMap[c.status] || statusMap.pending;
                            const canEdit = c.status === 'pending';
                            return (
                                <div key={c.id} onClick={() => setDetailItem(c)} className="bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-sm transition cursor-pointer group">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition">{c.title}</h4>
                                            <p className="text-xs text-gray-400 mt-0.5">ID #{c.id} · {new Date(c.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                                        </div>
                                        <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${st.bg} ${st.text} ${st.border}`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${st.dot}`} />{st.label}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-3">{c.content}</p>
                                    <div className="pt-3 border-t border-gray-50 flex items-center justify-between">
                                        <span className="text-xs font-medium px-2.5 py-1 bg-gray-50 text-gray-500 rounded-full border border-gray-100">{c.category}</span>
                                        <span className="text-xs font-medium text-primary-500 group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                                            Detail <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Detail Modal */}
            {detailItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm" onClick={() => setDetailItem(null)}>
                    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                            <h3 className="text-base font-semibold text-gray-900">Detail Laporan</h3>
                            <button onClick={() => setDetailItem(null)} className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                        </div>
                        <div className="overflow-y-auto flex-1 px-6 py-5 space-y-5">
                            {/* Status + ID */}
                            <div className="flex items-center justify-between">
                                {(() => { const st = statusMap[detailItem.status] || statusMap.pending; return (
                                    <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${st.bg} ${st.text} ${st.border}`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${st.dot}`} />{st.label}
                                    </span>
                                ); })()}
                                <span className="text-xs text-gray-400 font-medium">ID #{detailItem.id}</span>
                            </div>

                            {/* Title */}
                            <h2 className="text-xl font-semibold text-primary-600">{detailItem.title}</h2>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                                <span>{new Date(detailItem.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                            </div>

                            {/* Category */}
                            <div>
                                <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-2">KATEGORI</p>
                                <span className="inline-flex items-center gap-2 text-xs font-medium bg-primary-50 text-primary-600 px-3 py-1.5 rounded-xl border border-primary-100">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 6h.008v.008H6V6z" /></svg>
                                    {detailItem.category}
                                </span>
                            </div>

                            {/* Description */}
                            <div>
                                <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-2">DESKRIPSI ADUAN</p>
                                <p className="text-sm text-gray-600 leading-relaxed">{detailItem.content}</p>
                            </div>

                            {/* Response */}
                            {detailItem.response && (
                                <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                                    <p className="text-[10px] font-medium text-green-600 uppercase tracking-wider mb-2">TANGGAPAN SEKOLAH</p>
                                    <p className="text-sm text-green-700 leading-relaxed">{detailItem.response}</p>
                                </div>
                            )}

                            {/* Attachment placeholder */}
                            <div>
                                <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-2">LAMPIRAN</p>
                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="w-10 h-10 rounded-lg bg-white border border-gray-100 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 002.25-2.25V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" /></svg>
                                    </div>
                                    <span className="text-xs text-gray-400 font-medium">Tidak ada lampiran</span>
                                </div>
                            </div>
                        </div>
                        <div className="px-6 py-4 border-t border-gray-100 flex justify-end bg-gray-50">
                            <button onClick={() => setDetailItem(null)} className="px-5 py-2 bg-primary-500 text-white text-sm font-semibold rounded-xl hover:bg-primary-600 transition">Tutup</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Create Modal */}
            <Modal open={isModalOpen} onClose={() => { setIsModalOpen(false); reset(); }} title="Formulir Pengaduan">
                <form onSubmit={submit} className="p-5 space-y-4">
                    <div>
                        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">Kategori</label>
                        <select value={data.category} onChange={e => setData('category', e.target.value)} className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all">
                            <option>Fasilitas</option><option>Akademik</option><option>Pelayanan</option><option>Kemanusiaan</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">Judul</label>
                        <input type="text" placeholder="Singkat dan jelas..." value={data.title} onChange={e => setData('title', e.target.value)} className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all placeholder:text-gray-400" />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">Detail Masalah</label>
                        <textarea placeholder="Jelaskan secara rinci..." value={data.content} onChange={e => setData('content', e.target.value)} rows={5} className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all resize-none placeholder:text-gray-400" />
                    </div>
                    <div className="flex justify-end gap-2 pt-2">
                        <button type="button" onClick={() => { setIsModalOpen(false); reset(); }} className="px-4 py-2 text-sm font-medium border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition">Batal</button>
                        <button type="submit" disabled={processing || !data.title.trim()} className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-xl transition disabled:opacity-50">Kirim Laporan</button>
                    </div>
                </form>
            </Modal>
        </DashboardLayout>
    );
}
