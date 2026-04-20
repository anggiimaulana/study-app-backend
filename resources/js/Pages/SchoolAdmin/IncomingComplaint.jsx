import React, { useState } from 'react';
import { Head, usePage, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Modal from '@/Components/ui/Modal';

export default function IncomingComplaint({ complaints, stats: backendStats }) {
    const [filter, setFilter] = useState('all');
    const [detailItem, setDetailItem] = useState(null);
    const [response, setResponse] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const items = complaints?.data || [];
    const statsArr = [
        { label: 'Total Aduan', value: backendStats?.total || 0, icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', color: 'bg-primary-50', iconColor: 'text-primary-500' },
        { label: 'Pending', value: backendStats?.pending || 0, icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', color: 'bg-amber-50', iconColor: 'text-amber-500' },
        { label: 'Dalam Proses', value: backendStats?.processed || 0, icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', color: 'bg-blue-50', iconColor: 'text-blue-500' },
        { label: 'Selesai', value: backendStats?.resolved || 0, icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', color: 'bg-green-50', iconColor: 'text-green-500' },
    ];

    const filtered = filter === 'all' ? items : items.filter(c => c.status === filter);

    const statusMap = { 
        pending: { label: 'Pending', bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100', dot: 'bg-amber-500' }, 
        'dalam tinjauan': { label: 'Tinjauan', bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100', dot: 'bg-blue-500' }, 
        'dalam proses': { label: 'Proses', bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-100', dot: 'bg-indigo-500' }, 
        selesai: { label: 'Selesai', bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-100', dot: 'bg-green-500' }, 
        ditolak: { label: 'Ditolak', bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-100', dot: 'bg-red-500' } 
    };

    const [status, setStatus] = useState('selesai');
    const [files, setFiles] = useState([]);
    const [previews, setPreviews] = useState([]);

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        if (files.length + selectedFiles.length > 5) {
            window.AppAlert?.toast('warning', 'Maksimal 5 file diperbolehkan.');
            return;
        }
        const newFiles = [...files, ...selectedFiles].slice(0, 5);
        setFiles(newFiles);
        setPreviews(newFiles.map(f => f.type.startsWith('image/') ? URL.createObjectURL(f) : null));
    };

    const handleRespond = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const formData = new FormData();
            formData.append('_method', 'PUT');
            formData.append('response', response);
            formData.append('status', status);
            files.forEach((f, i) => formData.append(`attachments[${i}]`, f));

            await window.axios.post(`/api/v1/school-admin/complaints/${detailItem.id}/respond`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            window.AppAlert?.toast('success', 'Tanggapan berhasil dikirim!');
            setResponse('');
            setFiles([]);
            setPreviews([]);
            setDetailItem(null);
            window.location.reload(); 
        } catch (err) {
            window.AppAlert?.toast('error', 'Gagal mengirim tanggapan.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <DashboardLayout headerTitle="Laporan Aduan">
            <Head title="Laporan Aduan" />
            <div className="space-y-6">
                {/* Header Section */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">Pusat Bantuan & Aduan</h2>
                            <p className="text-sm text-gray-500">Pantau dan berikan respon resmi terhadap laporan siswa.</p>
                        </div>
                    </div>
                </div>

                {/* Statistics Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {statsArr.map((stat, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm transition-all hover:shadow-md group">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-11 h-11 rounded-xl ${stat.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                                    <svg className={`w-6 h-6 ${stat.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                            <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 pb-2">
                    {['all','pending','dalam tinjauan','dalam proses','selesai','ditolak'].map(f => (
                        <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${filter === f ? 'bg-primary-500 text-white border-primary-500 shadow-lg shadow-primary-200' : 'bg-white text-gray-500 border-gray-100 hover:border-gray-200'}`}>
                            {f === 'all' ? 'Semua Aduan' : (statusMap[f]?.label || f)}
                        </button>
                    ))}
                </div>

                {/* List Section */}
                {filtered.length === 0 ? (
                    <div className="bg-white rounded-3xl border border-dashed border-gray-200 p-20 text-center shadow-inner">
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100 text-gray-300">
                             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                        </div>
                        <p className="text-sm text-gray-400 font-medium italic">Tidak ada laporan ditemukan untuk kategori ini.</p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {filtered.map(c => {
                                const st = statusMap[c.status] || statusMap.pending;
                                return (
                                    <div key={c.id} onClick={() => setDetailItem(c)} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-xl hover:border-primary-100 transition-all cursor-pointer group flex flex-col h-full active:scale-[0.98] relative overflow-hidden">
                                        <div className="flex items-start justify-between mb-4 relative z-10">
                                            <div className="flex-1 pr-4">
                                                <h3 className="text-sm font-bold text-gray-900 group-hover:text-primary-600 transition line-clamp-1">{c.title}</h3>
                                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight mt-1 flex items-center gap-1.5">
                                                    <span className="text-primary-500">{c.student?.user?.name || 'Siswa'}</span> · <span>{c.student?.classroom?.name || '-'}</span>
                                                </p>
                                            </div>
                                            <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-lg border ${st.bg} ${st.text} ${st.border} shrink-0`}>
                                                <span className={`w-1 h-1 rounded-full ${st.dot}`} />{st.label}
                                            </span>
                                        </div>
                                        <div className="bg-gray-50/50 rounded-xl p-3 mb-4 group-hover:bg-primary-50/30 transition-colors">
                                             <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed italic">"{c.description}"</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50 relative z-10 text-[10px] font-bold">
                                            <span className="bg-gray-100 text-gray-400 px-2.5 py-1 rounded-lg border border-gray-200 uppercase tracking-tighter">{c.category}</span>
                                            <div className="flex items-center gap-3 text-gray-300">
                                                 <span>#{c.id}</span>
                                                 <span>{new Date(c.created_at).toLocaleDateString('id-ID', { day:'numeric', month:'short' })}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {complaints?.links && complaints.links.length > 3 && (
                            <div className="flex flex-wrap gap-1 justify-center mt-10">
                                {complaints.links.map((link, idx) => (
                                    <Link 
                                        key={idx}
                                        href={link.url}
                                        className={`px-4 py-2 text-[11px] font-bold uppercase tracking-wider rounded-xl border transition-all ${link.active ? 'bg-primary-500 text-white border-primary-500 shadow-lg shadow-primary-100' : 'bg-white text-gray-500 border-gray-100 hover:bg-gray-50'} ${!link.url ? 'opacity-40 cursor-not-allowed pointer-events-none' : ''}`}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Response Modal */}
            <Modal open={!!detailItem} onClose={() => setDetailItem(null)} title="Detail & Tanggapi Aduan" maxWidth="max-w-2xl">
                 {detailItem && (
                    <div className="space-y-6">
                        <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                             <div className="flex justify-between items-start mb-5">
                                 <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Judul Laporan</p>
                                    <h2 className="text-xl font-bold text-gray-900 leading-tight">{detailItem.title}</h2>
                                 </div>
                                 <div className="flex flex-col items-end">
                                     <span className="text-[10px] font-bold text-gray-400 px-2 py-1 bg-white rounded-lg border border-gray-100">ID #{detailItem.id}</span>
                                 </div>
                             </div>
                             <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1">Pelapor</p>
                                    <p className="text-xs font-bold text-gray-700">{detailItem.student?.user?.name}</p>
                                </div>
                                <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1">Kelas</p>
                                    <p className="text-xs font-bold text-gray-700">{detailItem.student?.classroom?.name || '-'}</p>
                                </div>
                                <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1">Kategori</p>
                                    <p className="text-xs font-bold text-gray-700">{detailItem.category}</p>
                                </div>
                             </div>
                        </div>

                        <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Konten Aduan</p>
                            <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-inner">
                                <p className="text-sm text-gray-600 leading-relaxed italic">"{detailItem.description}"</p>
                            </div>
                        </div>

                        {detailItem.attachment_urls && detailItem.attachment_urls.length > 0 && (
                            <div>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 px-1">Lampiran Pendukung</p>
                                <div className="flex flex-wrap gap-3">
                                    {detailItem.attachment_urls.map((url, i) => (
                                        <a key={i} href={url} target="_blank" rel="noreferrer" className="block p-1 border rounded-2xl hover:shadow-lg bg-white transition-all transform hover:-translate-y-1">
                                            {url.match(/\.(jpeg|jpg|gif|png)$/i) ? (
                                                <img src={url} alt="Bukti" className="w-24 h-24 object-cover rounded-xl" />
                                            ) : (
                                                <div className="w-24 h-24 bg-gray-50 rounded-xl flex items-center justify-center text-[10px] font-bold text-gray-400 italic">DOCUMENT</div>
                                            )}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="pt-6 border-t border-gray-100">
                            {detailItem.response ? (
                                <div className="p-5 bg-green-50 rounded-2xl border border-green-100">
                                    <div className="flex items-center justify-between mb-3 text-green-600">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text">Tanggapan Resmi</p>
                                        <span className="text-[9px] font-bold px-2 py-0.5 bg-green-100 rounded-lg">RESOLVED</span>
                                    </div>
                                    <p className="text-sm text-green-800 leading-relaxed italic mb-4">"{detailItem.response}"</p>
                                    <div className="flex items-center gap-2">
                                         <div className="w-6 h-6 rounded-full bg-green-200" />
                                         <p className="text-[10px] text-green-700 font-bold uppercase tracking-tighter">Ditanggapi oleh: {detailItem.responder?.name}</p>
                                    </div>
                                    {detailItem.response_attachment_urls && detailItem.response_attachment_urls.length > 0 && (
                                        <div className="mt-4 pt-4 border-t border-green-100">
                                            <p className="text-[9px] font-bold text-green-600 uppercase mb-2">Bukti Penyelesaian</p>
                                            <div className="flex flex-wrap gap-2">
                                                {detailItem.response_attachment_urls.map((url, i) => (
                                                    <a key={i} href={url} target="_blank" rel="noreferrer" className="block p-1 bg-white border border-green-100 rounded-lg">
                                                        {url.match(/\.(jpeg|jpg|gif|png)$/i) ? <img src={url} className="w-12 h-12 object-cover rounded" /> : <div className="w-12 h-12 flex items-center justify-center text-[8px] font-bold text-gray-300 uppercase">File</div>}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <form onSubmit={handleRespond} className="space-y-4">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Tindak Lanjut Laporan</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1.5 px-1">Tetapkan Status</label>
                                            <select value={status} onChange={e => setStatus(e.target.value)} className="w-full rounded-xl border border-gray-200 bg-gray-100 px-3.5 py-2.5 text-xs font-semibold outline-none focus:bg-white focus:ring-2 focus:ring-primary-50 transition-all">
                                                <option value="pending">Menunggu (Pending)</option>
                                                <option value="dalam tinjauan">Dalam Tinjauan</option>
                                                <option value="dalam proses">Dalam Proses</option>
                                                <option value="selesai">Selesai (Resolved)</option>
                                                <option value="ditolak">Ditolak (Rejected)</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1.5 px-1">Unggah Bukti (Max 5)</label>
                                            <input type="file" multiple onChange={handleFileChange} className="block w-full text-[10px] text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-[10px] file:font-bold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100 cursor-pointer" />
                                        </div>
                                    </div>

                                    {previews.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-2 px-1">
                                            {previews.map((p, i) => (
                                                <div key={i} className="w-12 h-12 rounded-xl border border-gray-100 overflow-hidden bg-gray-50 shadow-sm relative group">
                                                    {p ? <img src={p} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-[8px] font-bold text-gray-400">PDF</div>}
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <textarea value={response} onChange={e => setResponse(e.target.value)} rows={5} placeholder="Tuliskan solusi atau instruksi selanjutnya untuk pelapor..." className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-4 focus:ring-primary-50 transition-all resize-none shadow-inner placeholder:text-gray-400 font-medium" required />
                                    <div className="flex justify-end gap-3 pt-3">
                                        <button type="button" onClick={() => setDetailItem(null)} className="px-6 py-2.5 text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-gray-600 transition-colors">Batal</button>
                                        <button type="submit" disabled={submitting || !response.trim()} className="px-8 py-3 bg-primary-500 text-white text-xs font-bold rounded-xl shadow-xl shadow-primary-200 hover:bg-primary-600 transition flex items-center gap-2 uppercase tracking-widest active:scale-95 disabled:opacity-50">
                                            {submitting ? 'Memproses...' : 'Kirim Respon'}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                 )}
            </Modal>
        </DashboardLayout>
    );
}
