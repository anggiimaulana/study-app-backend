import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';

// ─── Mood Options ─────────────────────────────────────────────────────────────
const moods = [
    { emoji: '😄', label: 'Sangat Baik', value: 'sangat_baik', color: 'bg-green-50 border-green-200 text-green-700' },
    { emoji: '🙂', label: 'Baik', value: 'baik', color: 'bg-blue-50 border-blue-200 text-blue-700' },
    { emoji: '😐', label: 'Biasa', value: 'biasa', color: 'bg-gray-50 border-gray-200 text-gray-700' },
    { emoji: '😟', label: 'Kurang', value: 'kurang', color: 'bg-amber-50 border-amber-200 text-amber-700' },
    { emoji: '😔', label: 'Buruk', value: 'buruk', color: 'bg-red-50 border-red-200 text-red-700' },
];

function timeAgo(d) {
    const diff = Math.floor((Date.now() - new Date(d)) / 1000);
    if (diff < 60) return `${diff}d lalu`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m lalu`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}j lalu`;
    return `${Math.floor(diff / 86400)}h lalu`;
}

// ─── Dummy Data ───────────────────────────────────────────────────────────────
const dummyCheckins = [
    { id: 1, created_at: new Date(Date.now() - 3600000).toISOString(), mood: 'baik', reflection: 'Hari ini cukup produktif, bisa menyelesaikan persiapan materi untuk besok.' },
    { id: 2, created_at: new Date(Date.now() - 86400000).toISOString(), mood: 'sangat_baik', reflection: 'Senang sekali melihat siswa antusias saat praktikum hari ini!' },
    { id: 3, created_at: new Date(Date.now() - 172800000).toISOString(), mood: 'biasa', reflection: 'Hari biasa saja, rapat agak lama tapi lancar.' },
];

const dummyCounselingRequests = [
    { id: 1, student: { name: 'Kadek Dimas Pratama', nis: '25001', class: 'X RPL 1', avatar: null }, topic: 'Masalah akademik - kesulitan mengikuti pelajaran', status: 'pending', urgency: 'medium', created_at: '2026-04-16T08:30:00' },
    { id: 2, student: { name: 'Ni Wayan Ayu Putri', nis: '25002', class: 'X RPL 1', avatar: null }, topic: 'Masalah pribadi - konflik dengan teman sekelas', status: 'pending', urgency: 'high', created_at: '2026-04-15T10:15:00' },
    { id: 3, student: { name: 'I Gede Arka Wijaya', nis: '25003', class: 'X RPL 2', avatar: null }, topic: 'Konsultasi rencana karir setelah lulus', status: 'approved', urgency: 'low', created_at: '2026-04-14T14:00:00' },
    { id: 4, student: { name: 'Putu Ayu Lestari', nis: '25004', class: 'XI RPL 1', avatar: null }, topic: 'Masalah keluarga yang mempengaruhi belajar', status: 'completed', urgency: 'high', created_at: '2026-04-12T09:00:00' },
];

export default function MyfessModeration() {
    const [tab, setTab] = useState('checkin');

    // ─── Check-in State ───────────────────────────────────────────────────────
    const [selectedMood, setSelectedMood] = useState('');
    const [reflection, setReflection] = useState('');
    const [checkinHistory, setCheckinHistory] = useState(dummyCheckins);

    const handleCheckin = (e) => {
        e.preventDefault();
        if (!selectedMood || !reflection.trim()) return;
        const newCheckin = { id: Date.now(), created_at: new Date().toISOString(), mood: selectedMood, reflection };
        setCheckinHistory(prev => [newCheckin, ...prev].slice(0, 3));
        setSelectedMood('');
        setReflection('');
    };

    // ─── Counseling State ─────────────────────────────────────────────────────
    const [requests] = useState(dummyCounselingRequests);
    const [detailRequest, setDetailRequest] = useState(null);
    const [counselFilter, setCounselFilter] = useState('all');

    const filteredRequests = counselFilter === 'all' ? requests : requests.filter(r => r.status === counselFilter);

    const statusMap = {
        pending: { label: 'Menunggu', bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100', dot: 'bg-amber-500' },
        approved: { label: 'Disetujui', bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100', dot: 'bg-blue-500' },
        completed: { label: 'Selesai', bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-100', dot: 'bg-green-500' },
        rejected: { label: 'Ditolak', bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-100', dot: 'bg-red-500' },
    };

    const urgencyMap = {
        high: { label: 'Urgent', bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-100' },
        medium: { label: 'Sedang', bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100' },
        low: { label: 'Rendah', bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-100' },
    };

    const handlePanggilan = (student) => {
        if (window.AppAlert) window.AppAlert.toast('success', `Pemanggilan untuk ${student.name} berhasil dikirim!`);
        setDetailRequest(null);
    };

    return (
        <DashboardLayout headerTitle="Ruang Aman (MyFess)">
            <Head title="MyFess - Guru" />
            <div className="space-y-6">
                {/* Header + Tabs */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center"><svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg></div>
                        <div><h2 className="text-lg font-semibold text-gray-900">Ruang Aman (MyFess)</h2><p className="text-sm text-gray-500">Check-in harian Anda dan kelola permintaan konseling siswa.</p></div>
                    </div>
                    <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-100">
                        {[{ key: 'checkin', label: 'Check-in Harian' }, { key: 'counseling', label: 'Permintaan Konseling' }].map(t => (
                            <button key={t.key} onClick={() => setTab(t.key)} className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${tab === t.key ? 'bg-primary-500 text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>{t.label}</button>
                        ))}
                    </div>
                </div>

                {/* ═══════════════════ CHECK-IN TAB ═══════════════════ */}
                {tab === 'checkin' && (
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        {/* Check-in Form */}
                        <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 p-5">
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">Bagaimana kondisi Anda hari ini?</h3>
                            <form onSubmit={handleCheckin} className="space-y-5">
                                {/* Mood Selector */}
                                <div>
                                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">Kondisi Hari Ini</p>
                                    <div className="grid grid-cols-5 gap-2">
                                        {moods.map(m => (
                                            <button key={m.value} type="button" onClick={() => setSelectedMood(m.value)} className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 transition-all ${selectedMood === m.value ? m.color + ' ring-2 ring-offset-1 ring-primary-200 scale-105' : 'bg-white border-gray-100 hover:border-gray-200'}`}>
                                                <span className="text-2xl">{m.emoji}</span>
                                                <span className="text-[10px] font-medium">{m.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Reflection */}
                                <div>
                                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Refleksi Harian</p>
                                    <textarea value={reflection} onChange={e => setReflection(e.target.value)} rows={4} placeholder="Ceritakan refleksi Anda hari ini..." className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all resize-none placeholder:text-gray-400" />
                                </div>

                                <button type="submit" disabled={!selectedMood || !reflection.trim()} className="w-full py-3 bg-primary-500 text-white text-sm font-semibold rounded-xl hover:bg-primary-600 transition disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>Simpan Check-in
                                </button>
                            </form>
                        </div>

                        {/* History (Max 3) */}
                        <div className="lg:col-span-2 space-y-3">
                            <h3 className="text-sm font-semibold text-gray-900">Riwayat Check-in</h3>
                            {checkinHistory.length === 0 ? (
                                <div className="bg-white rounded-2xl border border-gray-100 border-dashed p-8 text-center">
                                    <p className="text-sm text-gray-400">Belum ada riwayat check-in.</p>
                                </div>
                            ) : checkinHistory.slice(0, 3).map(c => {
                                const moodData = moods.find(m => m.value === c.mood) || moods[2];
                                return (
                                    <div key={c.id} className="bg-white rounded-2xl border border-gray-100 p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className="text-lg">{moodData.emoji}</span>
                                                <span className="text-xs font-semibold text-gray-700">{moodData.label}</span>
                                            </div>
                                            <span className="text-xs text-gray-400">{timeAgo(c.created_at)}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">{c.reflection}</p>
                                    </div>
                                );
                            })}
                            <p className="text-[10px] text-gray-400 text-center">Refleksi Anda akan diklasifikasikan oleh AI secara otomatis.</p>
                        </div>
                    </div>
                )}

                {/* ═══════════════════ COUNSELING TAB ═══════════════════ */}
                {tab === 'counseling' && (
                    <div className="space-y-4">
                        {/* Filter */}
                        <div className="flex gap-2 flex-wrap">
                            {[{ key: 'all', label: 'Semua' }, { key: 'pending', label: 'Menunggu' }, { key: 'approved', label: 'Disetujui' }, { key: 'completed', label: 'Selesai' }].map(f => (
                                <button key={f.key} onClick={() => setCounselFilter(f.key)} className={`px-3.5 py-2 rounded-lg text-xs font-medium border transition ${counselFilter === f.key ? 'bg-primary-500 text-white border-primary-500' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'}`}>
                                    {f.label} ({f.key === 'all' ? requests.length : requests.filter(r => r.status === f.key).length})
                                </button>
                            ))}
                        </div>

                        {/* Request Cards */}
                        {filteredRequests.length === 0 ? (
                            <div className="bg-white rounded-2xl border border-gray-100 border-dashed p-12 text-center">
                                <p className="text-sm text-gray-400">Tidak ada permintaan konseling.</p>
                            </div>
                        ) : filteredRequests.map(req => {
                            const st = statusMap[req.status] || statusMap.pending;
                            const urg = urgencyMap[req.urgency] || urgencyMap.medium;
                            return (
                                <div key={req.id} onClick={() => setDetailRequest(req)} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-sm transition cursor-pointer group">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(req.student.name)}&background=2563eb&color=fff&bold=true&size=40`} className="w-10 h-10 rounded-xl" alt="" />
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition">{req.student.name}</h4>
                                                <p className="text-xs text-gray-400">NIS: {req.student.nis} · {req.student.class}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${urg.bg} ${urg.text} ${urg.border}`}>{urg.label}</span>
                                            <span className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${st.bg} ${st.text} ${st.border}`}><span className={`w-1.5 h-1.5 rounded-full ${st.dot}`} />{st.label}</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-600 leading-relaxed mb-2">{req.topic}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-400">{new Date(req.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                                        <span className="text-xs font-medium text-primary-500 group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">Detail <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* ═══════════════════ DETAIL MODAL ═══════════════════ */}
            {detailRequest && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm" onClick={() => setDetailRequest(null)}>
                    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                            <h3 className="text-base font-semibold text-gray-900">Detail Permintaan Konseling</h3>
                            <button onClick={() => setDetailRequest(null)} className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                        </div>
                        <div className="overflow-y-auto flex-1 px-6 py-5 space-y-5">
                            {/* Student Info */}
                            <div className="flex items-center gap-4">
                                <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(detailRequest.student.name)}&background=2563eb&color=fff&bold=true&size=56`} className="w-14 h-14 rounded-2xl" alt="" />
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-900">{detailRequest.student.name}</h2>
                                    <p className="text-xs text-gray-400">NIS: {detailRequest.student.nis} · {detailRequest.student.class}</p>
                                </div>
                            </div>

                            {/* Info Grid */}
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { l: 'Status', v: (statusMap[detailRequest.status] || statusMap.pending).label },
                                    { l: 'Urgency', v: (urgencyMap[detailRequest.urgency] || urgencyMap.medium).label },
                                    { l: 'Tanggal', v: new Date(detailRequest.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) },
                                ].map((info, i) => (
                                    <div key={i} className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                                        <p className="text-[10px] text-gray-400 uppercase mb-1">{info.l}</p>
                                        <p className="text-sm font-semibold text-gray-900">{info.v}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Topic */}
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase mb-2">TOPIK KONSELING</p>
                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <p className="text-sm text-gray-700 leading-relaxed">{detailRequest.topic}</p>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between gap-3">
                            <button onClick={() => setDetailRequest(null)} className="px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition">Tutup</button>
                            <div className="flex gap-2">
                                {detailRequest.status === 'pending' && (
                                    <button className="px-4 py-2.5 bg-green-500 text-white text-sm font-semibold rounded-xl hover:bg-green-600 transition flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Setujui
                                    </button>
                                )}
                                <button onClick={() => handlePanggilan(detailRequest.student)} className="px-4 py-2.5 bg-primary-500 text-white text-sm font-semibold rounded-xl hover:bg-primary-600 transition flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>Panggil Siswa
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </DashboardLayout>
    );
}
