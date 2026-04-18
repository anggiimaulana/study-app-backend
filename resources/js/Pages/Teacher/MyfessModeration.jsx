import React, { useState, useEffect } from 'react';
import { Head, usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Modal from '@/Components/ui/Modal';

// ─── Shared Emotions (Match Student side icons) ───────────────────────────────────
const EMOTIONS = [
    { id: 'senang', icon: '😊', label: 'Senang', color: '#10b981', bg: '#ecfdf5' },
    { id: 'sedih', icon: '😢', label: 'Sedih', color: '#3b82f6', bg: '#eff6ff' },
    { id: 'marah', icon: '😡', label: 'Marah', color: '#ef4444', bg: '#fef2f2' },
    { id: 'cemas', icon: '😰', label: 'Cemas', color: '#f59e0b', bg: '#fffbeb' },
    { id: 'lelah', icon: '😫', label: 'Lelah', color: '#64748b', bg: '#f8fafc' },
];

function timeAgo(d) {
    const diff = Math.floor((Date.now() - new Date(d)) / 1000);
    if (diff < 60) return `${diff}d lalu`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m lalu`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}j lalu`;
    return `${Math.floor(diff / 86400)}h lalu`;
}

export default function MyfessModeration({ myCheckins, counselingRequests, isBK }) {
    const [tab, setTab] = useState('checkin');

    // ─── Check-in State ───────────────────────────────────────────────────────
    const [selectedMood, setSelectedMood] = useState('');
    const [reflection, setReflection] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleCheckin = async (e) => {
        e.preventDefault();
        if (!selectedMood) return;
        
        if (reflection.length < 25) {
            window.AppAlert?.toast('warning', 'Refleksi minimal 25 karakter.');
            return;
        }

        setSubmitting(true);
        try {
            await window.axios.post('/api/v1/student/emotion-checkins', { // Teachers use same endpoint if logically same
                mood: selectedMood,
                story: reflection
            });
            window.AppAlert?.toast('success', 'Check-in berhasil disimpan!');
            setReflection('');
            setSelectedMood('');
            window.location.reload();
        } catch (err) {
            window.AppAlert?.toast('error', 'Gagal menyimpan check-in.');
        } finally {
            setSubmitting(false);
        }
    };

    // ─── Counseling State ─────────────────────────────────────────────────────
    const [detailRequest, setDetailRequest] = useState(null);
    const [counselFilter, setCounselFilter] = useState('all');
    const [scheduleForm, setScheduleForm] = useState({ date: '', time: '', status: 'approved' });

    const requests = counselingRequests || [];
    const filteredRequests = counselFilter === 'all' ? requests : requests.filter(r => r.status === counselFilter);

    const statusMap = {
        pending: { label: 'Menunggu', bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100', dot: 'bg-amber-500' },
        approved: { label: 'Disetujui', bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100', dot: 'bg-blue-500' },
        calling: { label: 'Dipanggil', bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100', dot: 'bg-purple-500' },
        completed: { label: 'Selesai', bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-100', dot: 'bg-green-500' },
        cancelled: { label: 'Dibatalkan', bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-100', dot: 'bg-red-500' },
    };

    const handleUpdateStatus = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const payload = {
                status: scheduleForm.status,
                requested_date: scheduleForm.date && scheduleForm.time ? `${scheduleForm.date} ${scheduleForm.time}` : null
            };
            await window.axios.put(`/api/v1/teacher/counselings/${detailRequest.id}`, payload);
            window.AppAlert?.toast('success', 'Status pengajuan berhasil diperbarui!');
            setDetailRequest(null);
            window.location.reload();
        } catch (err) {
             window.AppAlert?.toast('error', 'Gagal memperbarui status.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <DashboardLayout headerTitle="Ruang Aman (MyFess)">
            <Head title="MyFess - Guru" />
            <div className="space-y-6">
                {/* Header + Tabs */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 11-7.6-13.4" /></svg>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Ruang Aman (MyFess)</h2>
                            <p className="text-sm text-gray-500">Gunakan ruang ini untuk refleksi pribadi dan memantau kondisi siswa.</p>
                        </div>
                    </div>
                    <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-100">
                        {[{ key: 'checkin', label: 'Refleksi Guru' }, { key: 'counseling', label: 'Permintaan Siswa' }].map(t => (
                            <button key={t.key} onClick={() => setTab(t.key)} className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all uppercase tracking-widest ${tab === t.key ? 'bg-primary-500 text-white shadow-lg' : 'text-gray-400 hover:text-gray-600'}`}>{t.label}</button>
                        ))}
                    </div>
                </div>

                {/* ═══════════════════ CHECK-IN TAB ═══════════════════ */}
                {tab === 'checkin' && (
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        {/* Check-in Form */}
                        <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 p-6 flex flex-col h-full shadow-sm">
                            <h3 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-tight">Bagaimana kabarmu hari ini, Pak/Bu?</h3>
                            <form onSubmit={handleCheckin} className="space-y-6 flex-1">
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Pilih Kondisi</p>
                                    <div className="grid grid-cols-5 gap-3">
                                        {EMOTIONS.map(m => (
                                            <button key={m.id} type="button" onClick={() => setSelectedMood(m.id)} className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all active:scale-95 ${selectedMood === m.id ? 'scale-105 shadow-lg' : 'bg-white border-gray-50 hover:border-gray-200'}`} style={selectedMood === m.id ? { background: m.bg, borderColor: m.color, boxShadow: `0 8px 20px ${m.color}20` } : {}}>
                                                <span className="text-3xl">{m.icon}</span>
                                                <span className="text-[10px] font-bold" style={{ color: selectedMood === m.id ? m.color : '#94a3b8' }}>{m.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Cerita/Refleksi Singkat</p>
                                    <textarea 
                                        value={reflection} 
                                        onChange={e => setReflection(e.target.value)} 
                                        rows={6} 
                                        minLength={25}
                                        maxLength={750}
                                        placeholder="Tuliskan apa yang ada di pikiran Anda (min. 25 karakter)..." 
                                        className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4 text-sm outline-none focus:border-primary-400 focus:bg-white transition-all resize-none shadow-inner leading-relaxed" 
                                    />
                                </div>

                                <button type="submit" disabled={!selectedMood || submitting} className="w-full py-4 bg-primary-500 text-white text-xs font-bold rounded-2xl hover:bg-primary-600 transition shadow-lg shadow-primary-200 uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95">
                                    {submitting ? 'Menyimpan...' : 'Simpan Refleksi'}
                                </button>
                            </form>
                        </div>

                        {/* History */}
                        <div className="lg:col-span-2 space-y-4">
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-tight">Riwayat Refleksi</h3>
                            <div className="space-y-3">
                                {(!myCheckins || myCheckins.length === 0) ? (
                                    <div className="bg-white rounded-2xl border border-gray-100 border-dashed p-10 text-center">
                                        <p className="text-xs text-gray-400 italic">Belum ada riwayat hari ini.</p>
                                    </div>
                                ) : myCheckins.map(c => {
                                    const emo = EMOTIONS.find(e => e.id === c.mood) || EMOTIONS[0];
                                    return (
                                        <div key={c.id} className="bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-md transition group">
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center gap-2.5">
                                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-sm border border-white" style={{ background: emo.bg }}>
                                                        {emo.icon}
                                                    </div>
                                                    <div>
                                                        <h4 className="text-[11px] font-bold text-gray-900 uppercase tracking-tight">{emo.label}</h4>
                                                        <p className="text-[9px] text-gray-400">{timeAgo(c.created_at)}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-[11px] text-gray-500 leading-relaxed italic line-clamp-3">"{c.story || 'Tanpa cerita...'}"</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}

                {/* ═══════════════════ COUNSELING TAB ═══════════════════ */}
                {tab === 'counseling' && (
                    <div className="space-y-4">
                        <div className="flex gap-2 flex-wrap bg-white p-2 rounded-2xl border border-gray-100 inline-flex">
                            {[{ key: 'all', label: 'Semua' }, { key: 'pending', label: 'Menunggu' }, { key: 'approved', label: 'Disetujui' }].map(f => (
                                <button key={f.key} onClick={() => setCounselFilter(f.key)} className={`px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition ${counselFilter === f.key ? 'bg-primary-500 text-white shadow-md' : 'text-gray-400 hover:bg-gray-50'}`}>
                                    {f.label} ({f.key === 'all' ? requests.length : requests.filter(r => r.status === f.key).length})
                                </button>
                            ))}
                        </div>

                        {filteredRequests.length === 0 ? (
                            <div className="bg-white rounded-3xl border border-dashed border-gray-200 p-20 text-center">
                                <p className="text-xs text-gray-400 italic">Tidak ada permintaan konseling saat ini.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                {filteredRequests.map(req => {
                                    const st = statusMap[req.status] || statusMap.pending;
                                    return (
                                        <div key={req.id} onClick={() => { setDetailRequest(req); setScheduleForm({ date: '', time: '', status: req.status }); }} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition cursor-pointer group flex flex-col active:scale-[0.98]">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex items-center gap-3.5">
                                                    <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(req.student?.user?.name)}&background=2563eb&color=fff&bold=true&size=48`} className="w-12 h-12 rounded-2xl shadow-sm" alt="" />
                                                    <div>
                                                        <h4 className="text-sm font-bold text-gray-900 group-hover:text-primary-600 transition uppercase tracking-tight">{req.student?.user?.name}</h4>
                                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{req.student?.classroom?.name || '-'}</p>
                                                    </div>
                                                </div>
                                                <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-xl border ${st.bg} ${st.text} ${st.border}`}>
                                                    <span className={`w-1 h-1 rounded-full ${st.dot}`} />{st.label}
                                                </span>
                                            </div>
                                            <div className="bg-gray-50/50 rounded-xl p-3 border border-gray-50 mb-4 flex-1 shadow-inner">
                                                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Masalah yang dialami:</p>
                                                <p className="text-[11px] text-gray-600 italic line-clamp-2 leading-relaxed">"{req.issue_description}"</p>
                                            </div>
                                            <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                                                <span className="text-[9px] font-bold text-gray-300 uppercase">{timeAgo(req.created_at)}</span>
                                                <div className="flex items-center gap-1.5 text-primary-500 text-[10px] font-bold uppercase tracking-widest">
                                                    Proses Sekarang <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* DETAIL & ACTION MODAL */}
            <Modal open={!!detailRequest} onClose={() => setDetailRequest(null)} title="Moderasi Konseling" maxWidth="max-w-2xl">
                {detailRequest && (
                    <div className="space-y-6">
                         <div className="p-5 bg-gray-50 rounded-3xl border border-gray-100 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(detailRequest.student?.user?.name)}&background=2563eb&color=fff&bold=true&size=64`} className="w-16 h-16 rounded-3xl shadow-md border-2 border-white" alt="" />
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">{detailRequest.student?.user?.name}</h3>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{detailRequest.student?.student_id} · {detailRequest.student?.classroom?.name}</p>
                                </div>
                            </div>
                            <span className={`text-[10px] font-bold px-3 py-1 rounded-xl border ${statusMap[detailRequest.status].bg} ${statusMap[detailRequest.status].text}`}>
                                {statusMap[detailRequest.status].label}
                            </span>
                         </div>

                         <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Topik Konseling</p>
                                <p className="text-xs font-bold text-gray-800 uppercase tracking-tight">{detailRequest.reason || 'Umum'}</p>
                            </div>
                            <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Tingkat Urgensi</p>
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${detailRequest.urgency_level === 'urgen' ? 'text-red-600 bg-red-50' : 'text-amber-600 bg-amber-50'}`}>{detailRequest.urgency_level}</span>
                            </div>
                         </div>

                         <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Pesan Siswa</p>
                            <div className="p-5 bg-white rounded-3xl border border-gray-100 shadow-inner">
                                <p className="text-sm text-gray-600 leading-relaxed italic">"{detailRequest.issue_description}"</p>
                            </div>
                         </div>

                         <div className="pt-6 border-t border-gray-100">
                             <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">Tanggapi Pengajuan</h4>
                             <form onSubmit={handleUpdateStatus} className="space-y-5">
                                 <div className="grid grid-cols-2 gap-4">
                                     <div className="space-y-1.5">
                                         <label className="text-[10px] font-bold text-gray-400 uppercase">Tentukan Status</label>
                                         <select value={scheduleForm.status} onChange={e => setScheduleForm(f => ({ ...f, status: e.target.value }))} className="w-full rounded-2xl border-gray-100 bg-gray-50 text-sm focus:bg-white outline-none py-3.5 px-4 shadow-sm">
                                             <option value="pending">Pending</option>
                                             <option value="approved">Setujui & Jadwalkan</option>
                                             <option value="calling">Panggil Langsung (Sangat Urgen)</option>
                                             <option value="completed">Tandai Selesai</option>
                                             <option value="cancelled">Batalkan/Tolak</option>
                                         </select>
                                     </div>
                                     <div className="space-y-1.5">
                                         <label className="text-[10px] font-bold text-gray-400 uppercase">Input Tanggal (Jika diperlukan)</label>
                                         <input type="date" value={scheduleForm.date} onChange={e => setScheduleForm(f => ({ ...f, date: e.target.value }))} className="w-full rounded-2xl border-gray-100 bg-gray-50 text-sm focus:bg-white outline-none py-3 px-4 shadow-sm" />
                                     </div>
                                 </div>
                                 <div className="grid grid-cols-2 gap-4">
                                     <div className="space-y-1.5">
                                         <label className="text-[10px] font-bold text-gray-400 uppercase">Tentukan Jam</label>
                                         <input type="time" value={scheduleForm.time} onChange={e => setScheduleForm(f => ({ ...f, time: e.target.value }))} className="w-full rounded-2xl border-gray-100 bg-gray-50 text-sm focus:bg-white outline-none py-3 px-4 shadow-sm" />
                                     </div>
                                     <div className="flex items-end">
                                         <button type="submit" disabled={submitting} className="w-full py-3.5 bg-primary-600 text-white text-xs font-bold rounded-2xl hover:bg-primary-700 transition shadow-lg shadow-primary-200 uppercase tracking-widest active:scale-95">
                                             {submitting ? 'Memproses...' : 'Simpan Perubahan'}
                                         </button>
                                     </div>
                                 </div>
                             </form>
                         </div>
                    </div>
                )}
            </Modal>
        </DashboardLayout>
    );
}


