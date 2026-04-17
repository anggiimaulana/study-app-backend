import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function IncomingComplaint({ complaints }) {
    const [filter, setFilter] = useState('all');
    const [detailItem, setDetailItem] = useState(null);
    const [response, setResponse] = useState('');

    const dummyComplaints = [
        { id: 1, title: 'AC Kelas XI RPL Tidak Berfungsi', category: 'Fasilitas', status: 'pending', content: 'AC di ruang kelas XI RPL 1 sudah tidak berfungsi sejak minggu lalu. Suhu ruangan sangat panas.', student: 'Kadek Dimas P.', class: 'XI RPL 1', created_at: '2026-04-14', response: null },
        { id: 2, title: 'Modul Praktikum Belum Ada', category: 'Akademik', status: 'resolved', content: 'Modul praktikum Pemrograman Web semester genap belum tersedia di perpustakaan.', student: 'Ni Wayan Ayu', class: 'X RPL 2', created_at: '2026-04-10', response: 'Modul sudah dicetak dan didistribusikan.' },
        { id: 3, title: 'Toilet Lantai 2 Rusak', category: 'Fasilitas', status: 'pending', content: 'Keran air di toilet putra lantai 2 bocor terus menerus.', student: 'I Gede Arka', class: 'X RPL 1', created_at: '2026-04-08', response: null },
        { id: 4, title: 'Bullying di Kelas', category: 'Kemanusiaan', status: 'in_progress', content: 'Ada penindasan verbal yang dialami siswa di kelas kami. Mohon ditindak.', student: 'Anonim', class: 'XI RPL 2', created_at: '2026-04-06', response: null },
    ];

    const items = complaints?.data?.length > 0 ? complaints.data : dummyComplaints;
    const filtered = filter === 'all' ? items : items.filter(c => c.status === filter);

    const statusMap = { pending: { label: 'Pending', bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100', dot: 'bg-amber-500' }, in_progress: { label: 'Diproses', bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100', dot: 'bg-blue-500' }, resolved: { label: 'Selesai', bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-100', dot: 'bg-green-500' }, rejected: { label: 'Ditolak', bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-100', dot: 'bg-red-500' } };

    const handleRespond = () => {
        if (window.AppAlert) window.AppAlert.toast('success', 'Tanggapan berhasil dikirim!');
        setResponse('');
        setDetailItem(null);
    };

    return (
        <DashboardLayout headerTitle="Laporan Aduan">
            <Head title="Laporan Aduan" />
            <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center"><svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg></div>
                        <div><h2 className="text-lg font-semibold text-gray-900">Laporan Aduan Masuk</h2><p className="text-sm text-gray-500">Kelola dan tanggapi pengaduan dari siswa.</p></div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['all','pending','in_progress','resolved'].map(f => (
                        <button key={f} onClick={() => setFilter(f)} className={`bg-white rounded-2xl border p-4 text-left transition ${filter === f ? 'border-primary-300 ring-2 ring-primary-100' : 'border-gray-100'}`}>
                            <p className="text-2xl font-bold text-gray-900">{f === 'all' ? items.length : items.filter(c => c.status === f).length}</p>
                            <p className="text-xs text-gray-500 mt-1">{f === 'all' ? 'Semua' : statusMap[f]?.label}</p>
                        </button>
                    ))}
                </div>

                <div className="space-y-3">
                    {filtered.map(c => {
                        const st = statusMap[c.status] || statusMap.pending;
                        return (
                            <div key={c.id} onClick={() => setDetailItem(c)} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-sm transition cursor-pointer group">
                                <div className="flex items-start justify-between mb-2">
                                    <div><h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition">{c.title}</h3><p className="text-xs text-gray-400 mt-0.5">{c.student} · {c.class} · {new Date(c.created_at).toLocaleDateString('id-ID',{day:'numeric',month:'short'})}</p></div>
                                    <span className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 rounded-full border ${st.bg} ${st.text} ${st.border}`}><span className={`w-1.5 h-1.5 rounded-full ${st.dot}`} />{st.label}</span>
                                </div>
                                <p className="text-xs text-gray-500 line-clamp-2 mb-2">{c.content}</p>
                                <div className="flex items-center justify-between"><span className="text-xs font-medium bg-gray-50 text-gray-500 px-2.5 py-1 rounded-full border border-gray-100">{c.category}</span><span className="text-xs font-medium text-primary-500">Detail →</span></div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {detailItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm" onClick={() => setDetailItem(null)}>
                    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]" onClick={e => e.stopPropagation()}>
                        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between"><h3 className="text-base font-semibold text-gray-900">Detail Aduan</h3><button onClick={() => setDetailItem(null)} className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button></div>
                        <div className="overflow-y-auto flex-1 px-6 py-5 space-y-4">
                            <h2 className="text-xl font-semibold text-gray-900">{detailItem.title}</h2>
                            <div className="grid grid-cols-3 gap-3">
                                {[{l:'Pelapor',v:detailItem.student},{l:'Kelas',v:detailItem.class},{l:'Kategori',v:detailItem.category}].map((d,i) => <div key={i} className="p-3 bg-gray-50 rounded-xl border border-gray-100"><p className="text-[10px] text-gray-400 uppercase mb-1">{d.l}</p><p className="text-sm font-semibold text-gray-900">{d.v}</p></div>)}
                            </div>
                            <div><p className="text-[10px] text-gray-400 uppercase mb-2">ISI ADUAN</p><p className="text-sm text-gray-600 leading-relaxed">{detailItem.content}</p></div>
                            {detailItem.response && <div className="p-4 bg-green-50 rounded-xl border border-green-100"><p className="text-[10px] text-green-600 uppercase mb-2">TANGGAPAN</p><p className="text-sm text-green-700">{detailItem.response}</p></div>}
                            {!detailItem.response && (
                                <div>
                                    <p className="text-[10px] text-gray-400 uppercase mb-2">BERI TANGGAPAN</p>
                                    <textarea value={response} onChange={e => setResponse(e.target.value)} rows={3} placeholder="Tulis tanggapan..." className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all resize-none placeholder:text-gray-400" />
                                </div>
                            )}
                        </div>
                        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-end gap-2">
                            <button onClick={() => setDetailItem(null)} className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition">Tutup</button>
                            {!detailItem.response && <button onClick={handleRespond} disabled={!response.trim()} className="px-5 py-2 bg-primary-500 text-white text-sm font-semibold rounded-xl hover:bg-primary-600 transition disabled:opacity-50">Kirim Tanggapan</button>}
                        </div>
                    </div>
                </div>
            )}
        </DashboardLayout>
    );
}
