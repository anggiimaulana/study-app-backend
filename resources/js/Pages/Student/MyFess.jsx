import React, { useMemo, useState } from 'react';
import { Head, usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Modal from '@/Components/ui/Modal';

// ─── Constants ──────────────────────────────────────────────────────
const EMOTIONS = [
    { id: 'sangat_baik', label: 'Sangat Baik', color: '#10b981', bg: '#ecfdf5', border: '#a7f3d0', icon: '😊' },
    { id: 'baik', label: 'Baik', color: '#3b82f6', bg: '#eff6ff', border: '#bfdbfe', icon: '🙂' },
    { id: 'cukup', label: 'Cukup', color: '#f59e0b', bg: '#fffbeb', border: '#fde68a', icon: '😐' },
    { id: 'kurang_baik', label: 'Kurang Baik', color: '#f97316', bg: '#fff7ed', border: '#fed7aa', icon: '😟' },
    { id: 'buruk', label: 'Buruk', color: '#ef4444', bg: '#fef2f2', border: '#fecaca', icon: '😢' },
];

const COUNSELING_REASONS = ['Masalah akademik', 'Hubungan sosial', 'Tekanan keluarga', 'Kondisi emosi', 'Perundungan (bullying)', 'Konsultasi karier', 'Lainnya'];

const fmtDate = (v) => v ? new Date(v).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : '-';
const fmtDateTime = (v) => v ? new Date(v).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '-';

const statusStyles = {
    'Menunggu konfirmasi': { bg: 'bg-amber-50', text: 'text-amber-700', dot: 'bg-amber-400', border: 'border-amber-100' },
    'Disetujui': { bg: 'bg-green-50', text: 'text-green-700', dot: 'bg-green-500', border: 'border-green-100' },
    'Ditolak': { bg: 'bg-red-50', text: 'text-red-700', dot: 'bg-red-500', border: 'border-red-100' },
    'Selesai': { bg: 'bg-blue-50', text: 'text-blue-700', dot: 'bg-blue-500', border: 'border-blue-100' },
};

const StatusBadge = ({ status }) => {
    const s = statusStyles[status] || statusStyles['Menunggu konfirmasi'];
    return (
        <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full ${s.bg} ${s.text} border ${s.border}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />{status}
        </span>
    );
};

// ─── Main ───────────────────────────────────────────────────────────
export default function MyFess() {
    const { auth } = usePage().props;
    const [activeTab, setActiveTab] = useState('checkin');

    const tabs = [
        { key: 'checkin', label: 'Check-in & Refleksi', icon: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' },
        { key: 'counseling', label: 'Konseling', icon: 'M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155' },
        { key: 'panggilan', label: 'Panggilan', icon: 'M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0' },
    ];

    return (
        <DashboardLayout headerTitle="MyFess">
            <Head title="MyFess" />
            <div className="space-y-6">
                {/* Page Header */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">MyFess — Ruang Aman</h2>
                            <p className="text-sm text-gray-500">Check-in harian, layanan konseling, dan informasi panggilan BK.</p>
                        </div>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-100">
                        {tabs.map(tab => (
                            <button key={tab.key} onClick={() => setActiveTab(tab.key)} className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all ${activeTab === tab.key ? 'bg-primary-500 text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={tab.icon} /></svg>
                                <span className="hidden sm:inline">{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {activeTab === 'checkin' && <CheckinTab />}
                {activeTab === 'counseling' && <CounselingTab />}
                {activeTab === 'panggilan' && <PanggilanTab />}
            </div>
        </DashboardLayout>
    );
}

// ─── Tab: Check-in & Refleksi ───────────────────────────────────────
function CheckinTab() {
    const { auth } = usePage().props;
    const firstName = auth?.user?.name?.split(' ')[0] || 'Siswa';

    const [emotion, setEmotion] = useState('');
    const [reflection, setReflection] = useState('');
    const [submitting, setSubmitting] = useState(false);

    // History (max 3, no edit/delete)
    const [history, setHistory] = useState([
        { id: 1, emotion: 'baik', reflection: 'Hari ini cukup produktif, menyelesaikan tugas matematika.', createdAt: new Date(Date.now() - 86400000).toISOString() },
        { id: 2, emotion: 'cukup', reflection: 'Sedikit lelah tapi masih semangat belajar.', createdAt: new Date(Date.now() - 172800000).toISOString() },
        { id: 3, emotion: 'sangat_baik', reflection: 'Senang sekali hari ini dapat nilai bagus di ujian.', createdAt: new Date(Date.now() - 259200000).toISOString() },
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!emotion) return;
        setSubmitting(true);
        setTimeout(() => {
            const newEntry = { id: Date.now(), emotion, reflection: reflection.trim(), createdAt: new Date().toISOString() };
            setHistory(h => [newEntry, ...h].slice(0, 3));
            setReflection('');
            setEmotion('');
            setSubmitting(false);
            if (window.AppAlert) window.AppAlert.toast('success', 'Check-in berhasil disimpan!');
        }, 600);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Check-in Form - 3 cols */}
            <div className="lg:col-span-3 space-y-4">
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Ceritakan Harimu, {firstName}</h3>
                    <p className="text-xs text-gray-400 mb-4">Bagaimana perasaanmu hari ini? Pilih kondisi dan tulis refleksimu.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Emotion Picker */}
                        <div>
                            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Kondisi Hari Ini</label>
                            <div className="grid grid-cols-5 gap-2">
                                {EMOTIONS.map(em => (
                                    <button key={em.id} type="button" onClick={() => setEmotion(em.id)}
                                        className={`p-3 rounded-xl border text-center transition-all ${emotion === em.id ? 'shadow-sm scale-[1.02]' : 'hover:border-gray-200'}`}
                                        style={emotion === em.id ? { background: em.bg, borderColor: em.color, boxShadow: `0 2px 8px ${em.color}20` } : { borderColor: '#f1f5f9' }}
                                    >
                                        <span className="text-xl block mb-1">{em.icon}</span>
                                        <span className="text-[10px] font-medium" style={{ color: emotion === em.id ? em.color : '#94a3b8' }}>{em.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Reflection */}
                        <div>
                            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Refleksi Harian</label>
                            <textarea value={reflection} onChange={e => setReflection(e.target.value)} rows={4} placeholder="Ceritakan apa yang kamu rasakan, pengalaman, atau hal yang ingin kamu sampaikan..." className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all resize-none placeholder:text-gray-400" />
                        </div>

                        {/* Submit */}
                        <button type="submit" disabled={!emotion || submitting} className="w-full py-2.5 bg-primary-500 text-white font-semibold text-sm rounded-xl hover:bg-primary-600 transition disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                            {submitting ? (
                                <><svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Menyimpan...</>
                            ) : (
                                <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>Kirim Check-in</>
                            )}
                        </button>
                    </form>
                </div>
            </div>

            {/* History - 2 cols */}
            <div className="lg:col-span-2 space-y-4">
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Riwayat Check-in</h3>
                    {history.length === 0 ? (
                        <div className="text-center py-8">
                            <svg className="w-10 h-10 text-gray-200 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <p className="text-xs text-gray-400">Belum ada riwayat check-in.</p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {history.slice(0, 3).map(item => {
                                const em = EMOTIONS.find(e => e.id === item.emotion);
                                return (
                                    <div key={item.id} className="p-3.5 rounded-xl border border-gray-100 hover:bg-gray-50 transition">
                                        <div className="flex items-start justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className="text-lg">{em?.icon || '😐'}</span>
                                                <span className="text-xs font-semibold" style={{ color: em?.color }}>{em?.label}</span>
                                            </div>
                                            <span className="text-[10px] text-gray-400 font-medium">{fmtDate(item.createdAt)}</span>
                                        </div>
                                        {item.reflection && <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">{item.reflection}</p>}
                                    </div>
                                );
                            })}
                            <p className="text-[10px] text-gray-400 text-center">Menampilkan 3 check-in terakhir · Tidak dapat diedit/dihapus</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// ─── Tab: Konseling ─────────────────────────────────────────────────
function CounselingTab() {
    const [showForm, setShowForm] = useState(false);
    const [editItem, setEditItem] = useState(null);
    const [items, setItems] = useState([
        { id: 1, reason: 'Masalah akademik', description: 'Saya merasa kesulitan memahami materi pelajaran Matematika semester ini.', preferred_date: '2026-04-20', preferred_time: '10:00', status: 'Menunggu konfirmasi', createdAt: '2026-04-15T08:00:00' },
        { id: 2, reason: 'Hubungan sosial', description: 'Ingin konsultasi tentang cara berkomunikasi lebih baik.', preferred_date: '2026-04-18', preferred_time: '14:00', status: 'Disetujui', createdAt: '2026-04-10T10:00:00' },
    ]);
    const [form, setForm] = useState({ reason: '', description: '', preferred_date: '', preferred_time: '' });

    const canModify = (status) => status === 'Menunggu konfirmasi';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editItem) {
            setItems(prev => prev.map(i => i.id === editItem.id ? { ...i, ...form } : i));
            setEditItem(null);
        } else {
            setItems(prev => [{ id: Date.now(), ...form, status: 'Menunggu konfirmasi', createdAt: new Date().toISOString() }, ...prev]);
        }
        setForm({ reason: '', description: '', preferred_date: '', preferred_time: '' });
        setShowForm(false);
        if (window.AppAlert) window.AppAlert.toast('success', editItem ? 'Konseling diperbarui!' : 'Pengajuan konseling berhasil!');
    };

    const handleEdit = (item) => {
        if (!canModify(item.status)) return;
        setForm({ reason: item.reason, description: item.description, preferred_date: item.preferred_date, preferred_time: item.preferred_time });
        setEditItem(item);
        setShowForm(true);
    };

    const handleDelete = (item) => {
        if (!canModify(item.status)) return;
        if (window.AppAlert) {
            window.Swal?.fire({ title: 'Hapus konseling?', text: 'Data ini akan dihapus permanen.', icon: 'warning', showCancelButton: true, confirmButtonColor: '#ef4444', confirmButtonText: 'Hapus' }).then(r => { if (r.isConfirmed) { setItems(prev => prev.filter(i => i.id !== item.id)); window.AppAlert.toast('success', 'Konseling dihapus.'); } });
        } else {
            setItems(prev => prev.filter(i => i.id !== item.id));
        }
    };

    return (
        <div className="space-y-4">
            {/* Action bar */}
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">{items.length} pengajuan konseling</p>
                <button onClick={() => { setShowForm(true); setEditItem(null); setForm({ reason: '', description: '', preferred_date: '', preferred_time: '' }); }} className="px-4 py-2 bg-primary-500 text-white text-xs font-semibold rounded-xl hover:bg-primary-600 transition flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15m7.5-7.5h-15" /></svg>
                    Ajukan Konseling
                </button>
            </div>

            {/* List */}
            {items.length === 0 ? (
                <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
                    <svg className="w-12 h-12 text-gray-200 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>
                    <p className="text-sm font-medium text-gray-600">Belum ada pengajuan</p>
                    <p className="text-xs text-gray-400 mt-1">Klik tombol di atas untuk mengajukan konseling baru.</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {items.map(item => (
                        <div key={item.id} className="bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-sm transition">
                            <div className="flex items-start justify-between mb-2">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900">{item.reason}</h4>
                                    <p className="text-xs text-gray-400 mt-0.5">Diajukan {fmtDate(item.createdAt)}</p>
                                </div>
                                <StatusBadge status={item.status} />
                            </div>
                            <p className="text-xs text-gray-600 leading-relaxed mb-3 line-clamp-2">{item.description}</p>
                            <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                                <div className="flex items-center gap-3 text-xs text-gray-500">
                                    <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>{fmtDate(item.preferred_date)}</span>
                                    <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>{item.preferred_time} WIB</span>
                                </div>
                                {canModify(item.status) && (
                                    <div className="flex gap-1.5">
                                        <button onClick={() => handleEdit(item)} className="p-1.5 text-gray-400 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition" title="Edit">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>
                                        </button>
                                        <button onClick={() => handleDelete(item)} className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition" title="Hapus">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Form Modal */}
            <Modal open={showForm} onClose={() => { setShowForm(false); setEditItem(null); }} title={editItem ? 'Edit Konseling' : 'Ajukan Konseling Baru'}>
                <form onSubmit={handleSubmit} className="p-5 space-y-4">
                    <div>
                        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">Kategori</label>
                        <select value={form.reason} onChange={e => setForm(f => ({ ...f, reason: e.target.value }))} required className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all">
                            <option value="">Pilih alasan...</option>
                            {COUNSELING_REASONS.map(r => <option key={r} value={r}>{r}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">Deskripsi</label>
                        <textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} rows={4} required placeholder="Ceritakan permasalahanmu..." className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all resize-none" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">Tanggal</label>
                            <input type="date" value={form.preferred_date} onChange={e => setForm(f => ({ ...f, preferred_date: e.target.value }))} required className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all" />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">Waktu</label>
                            <input type="time" value={form.preferred_time} onChange={e => setForm(f => ({ ...f, preferred_time: e.target.value }))} required className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all" />
                        </div>
                    </div>
                    <div className="flex justify-end gap-2 pt-2">
                        <button type="button" onClick={() => { setShowForm(false); setEditItem(null); }} className="px-4 py-2 text-sm font-medium border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition">Batal</button>
                        <button type="submit" className="px-4 py-2 text-sm font-semibold bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition">{editItem ? 'Simpan Perubahan' : 'Ajukan'}</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}

// ─── Tab: Panggilan ─────────────────────────────────────────────────
function PanggilanTab() {
    const [items] = useState([
        { id: 1, title: 'Panggilan Wali Kelas', description: 'Diminta hadir untuk evaluasi prestasi semester.', date: '2026-04-22', time: '09:00', caller: 'Ibu Sari Dewi, S.Pd', location: 'Ruang BK', status: 'Menunggu konfirmasi', createdAt: '2026-04-16T08:00:00' },
        { id: 2, title: 'Panggilan Guru BK', description: 'Follow-up terkait hasil konseling terakhir.', date: '2026-04-19', time: '13:30', caller: 'Bpk. Heru, M.Pd', location: 'Ruang BK Lt. 2', status: 'Disetujui', createdAt: '2026-04-14T10:00:00' },
    ]);

    const canModify = (status) => status === 'Menunggu konfirmasi';

    return (
        <div className="space-y-4">
            <p className="text-sm text-gray-500">{items.length} panggilan tercatat</p>

            {items.length === 0 ? (
                <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
                    <svg className="w-12 h-12 text-gray-200 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
                    <p className="text-sm font-medium text-gray-600">Belum ada panggilan</p>
                    <p className="text-xs text-gray-400 mt-1">Panggilan dari guru BK atau wali kelas akan muncul di sini.</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {items.map(item => (
                        <div key={item.id} className="bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-sm transition">
                            <div className="flex items-start justify-between mb-2">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
                                    <p className="text-xs text-gray-400 mt-0.5">dari {item.caller}</p>
                                </div>
                                <StatusBadge status={item.status} />
                            </div>
                            <p className="text-xs text-gray-600 leading-relaxed mb-3">{item.description}</p>
                            <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                                <div className="flex items-center gap-4 text-xs text-gray-500">
                                    <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>{fmtDate(item.date)}</span>
                                    <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>{item.time} WIB</span>
                                    <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>{item.location}</span>
                                </div>
                                {canModify(item.status) && (
                                    <span className="text-[10px] text-amber-600 font-medium bg-amber-50 px-2 py-0.5 rounded-full">Konfirmasi kehadiran</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
