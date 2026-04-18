import React, { useState, useEffect } from 'react';
import { Head, usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Modal from '@/Components/ui/Modal';

export default function Complaints() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [detailItem, setDetailItem] = useState(null);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const [form, setForm] = useState({ category: 'Fasilitas', title: '', description: '' });
    const [files, setFiles] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [submitting, setSubmitting] = useState(false);

    const [pagination, setPagination] = useState(null);
    
    const fetchItems = async (url = '/api/v1/student/complaints') => {
        setLoading(true);
        try {
            const res = await window.axios?.get(url);
            if (res?.data) {
                setItems(res.data.data || []);
                setPagination(res.data.links || []);
            }
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateStr) => {
        if (!dateStr) return '-';
        const d = new Date(dateStr);
        if (isNaN(d.getTime())) return '-';
        return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    const formatDateFull = (dateStr) => {
        if (!dateStr) return '-';
        const d = new Date(dateStr);
        if (isNaN(d.getTime())) return '-';
        return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    useEffect(() => {
        fetchItems();
    }, []);

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        if (files.length + selectedFiles.length > 5) {
            if (window.AppAlert) window.AppAlert.toast('warning', 'Maksimal 5 file diperbolehkan.');
            return;
        }

        const newFiles = [...files, ...selectedFiles].slice(0, 5);
        setFiles(newFiles);

        const newPreviews = newFiles.map(file => {
            if (file.type.startsWith('image/')) return URL.createObjectURL(file);
            return null;
        });
        setPreviews(newPreviews);
    };

    const removeFile = (index) => {
        const newFiles = files.filter((_, i) => i !== index);
        const newPreviews = previews.filter((_, i) => i !== index);
        setFiles(newFiles);
        setPreviews(newPreviews);
    };

    const submit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const formData = new FormData();
            formData.append('title', form.title);
            formData.append('description', form.description);
            formData.append('category', form.category);
            files.forEach((f, i) => formData.append(`attachments[${i}]`, f));

            await window.axios?.post('/api/v1/student/complaints', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            if (window.AppAlert) window.AppAlert.toast('success', 'Pengaduan berhasil dikirim!');
            
            setIsModalOpen(false);
            setForm({ category: 'Fasilitas', title: '', description: '' });
            setFiles([]);
            setPreviews([]);
            fetchItems();
        } catch (e) {
            if (window.AppAlert) window.AppAlert.toast('error', 'Gagal mengirim pengaduan.');
        } finally {
            setSubmitting(false);
        }
    };

    const statusMap = {
        pending:  { label: 'Pending', bg: 'bg-amber-50', text: 'text-amber-600', dot: 'bg-amber-500', border: 'border-amber-100' },
        'dalam tinjauan': { label: 'Tinjauan', bg: 'bg-blue-50', text: 'text-blue-600', dot: 'bg-blue-500', border: 'border-blue-100' },
        'dalam proses': { label: 'Proses', bg: 'bg-indigo-50', text: 'text-indigo-600', dot: 'bg-indigo-500', border: 'border-indigo-100' },
        selesai: { label: 'Selesai', bg: 'bg-green-50', text: 'text-green-600', dot: 'bg-green-500', border: 'border-green-100' },
        ditolak: { label: 'Ditolak', bg: 'bg-red-50', text: 'text-red-600', dot: 'bg-red-500', border: 'border-red-100' },
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
                {loading ? (
                    <div className="p-12 text-center text-gray-400">Loading...</div>
                ) : items.length === 0 ? (
                    <div className="bg-white rounded-2xl border border-gray-100 p-16 text-center">
                        <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
                        </div>
                        <p className="text-sm font-medium text-gray-700 mb-1">Belum ada pengaduan</p>
                        <p className="text-xs text-gray-400">Klik "Ajukan Keluhan" untuk membuat laporan baru.</p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {items.map((c, idx) => {
                                const st = statusMap[c.status] || statusMap.pending;
                                return (
                                    <div key={c.id || idx} onClick={() => setDetailItem(c)} className="bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-sm transition cursor-pointer group">
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition line-clamp-1">{c.title}</h4>
                                                <p className="text-[10px] text-gray-400 mt-0.5">#{c.id} · {formatDate(c.created_at)}</p>
                                            </div>
                                            <span className={`inline-flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 rounded-full border shrink-0 ${st.bg} ${st.text} ${st.border}`}>
                                                <span className={`w-1 h-1 rounded-full ${st.dot}`} />{st.label}
                                            </span>
                                        </div>
                                        <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-2 mb-3">{c.description}</p>
                                        <div className="pt-3 border-t border-gray-50 flex items-center justify-between">
                                            <span className="text-[10px] font-medium px-2 py-0.5 bg-gray-50 text-gray-500 rounded-lg border border-gray-100">{c.category}</span>
                                            <span className="text-xs font-semibold text-primary-500 group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                                                Detail <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {pagination && pagination.length > 3 && (
                            <div className="flex flex-wrap gap-1 justify-center mt-6">
                                {pagination.map((link, lidx) => (
                                    <button
                                        key={lidx}
                                        onClick={() => link.url && fetchItems(link.url)}
                                        className={`px-3 py-1.5 text-xs rounded-lg border transition-all ${link.active ? 'bg-primary-500 text-white border-primary-500' : 'bg-white text-gray-600 border-gray-100 hover:bg-gray-50'} ${!link.url ? 'opacity-40 cursor-not-allowed' : ''}`}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Detail Modal */}
            <Modal open={!!detailItem} onClose={() => setDetailItem(null)} title="Detail Laporan" maxWidth="max-w-2xl">
                {detailItem && (
                    <div className="space-y-5">
                        <div className="flex items-center justify-between">
                            {(() => { const st = statusMap[detailItem.status] || statusMap.pending; return (
                                <span className={`inline-flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1.5 rounded-full border ${st.bg} ${st.text} ${st.border}`}>
                                    <span className={`w-1.5 h-1.5 rounded-full ${st.dot}`} />{st.label}
                                </span>
                            ); })()}
                            <span className="text-xs text-gray-400 font-medium">ID #{detailItem.id}</span>
                        </div>

                        <h2 className="text-xl font-semibold text-primary-600">{detailItem.title}</h2>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                            <span>{new Date(detailItem.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        </div>

                        <div>
                            <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-2">KATEGORI</p>
                            <span className="inline-flex items-center gap-2 text-xs font-medium bg-primary-50 text-primary-600 px-3 py-1.5 rounded-xl border border-primary-100">
                                {detailItem.category}
                            </span>
                        </div>

                        <div>
                            <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-2">DESKRIPSI ADUAN</p>
                            <p className="text-sm text-gray-600 leading-relaxed italic">"{detailItem.description}"</p>
                        </div>

                        {detailItem.response && (
                            <div className="space-y-4">
                                <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                                    <p className="text-[10px] font-medium text-green-600 uppercase tracking-wider mb-2">TANGGAPAN SEKOLAH</p>
                                    <p className="text-sm text-green-700 leading-relaxed italic mb-3">"{detailItem.response}"</p>
                                    <p className="text-[10px] text-green-600 font-bold uppercase tracking-tighter opacity-70">Oleh: {detailItem.responder?.name || 'Sekolah'}</p>
                                </div>
                                
                                {detailItem.response_attachment_urls && detailItem.response_attachment_urls.length > 0 && (
                                    <div>
                                        <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-2">BUKTI PENYELESAIAN</p>
                                        <div className="flex flex-wrap gap-2">
                                            {detailItem.response_attachment_urls.map((url, i) => (
                                                <a key={i} href={url} target="_blank" rel="noreferrer" className="block p-1 border border-green-100 rounded-lg hover:shadow-sm bg-white">
                                                    {url.match(/\.(jpeg|jpg|gif|png)$/i) ? (
                                                        <img src={url} alt={`Bukti ${i+1}`} className="w-16 h-16 object-cover rounded-md" />
                                                    ) : (
                                                        <div className="w-16 h-16 bg-gray-50 rounded-md flex items-center justify-center text-xs text-gray-400 font-semibold border-gray-100 uppercase">File</div>
                                                    )}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        <div>
                            <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-2">LAMPIRAN</p>
                            {detailItem.attachment_urls && detailItem.attachment_urls.length > 0 ? (
                                <div className="flex flex-wrap gap-2">
                                    {detailItem.attachment_urls.map((url, i) => (
                                        <a key={i} href={url} target="_blank" rel="noreferrer" className="block p-1 border rounded-lg hover:shadow-sm">
                                            {url.match(/\.(jpeg|jpg|gif|png)$/i) ? (
                                                <img src={url} alt={`Lampiran ${i+1}`} className="w-16 h-16 object-cover rounded-md" />
                                            ) : (
                                                <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center text-xs text-gray-500 font-semibold border-gray-200">PDF</div>
                                            )}
                                        </a>
                                    ))}
                                </div>
                            ) : (
                                <span className="text-xs text-gray-400 uppercase font-bold tracking-tighter">Tidak ada lampiran</span>
                            )}
                        </div>
                        
                        <div className="flex justify-end pt-4">
                             <button onClick={() => setDetailItem(null)} className="px-5 py-2 bg-primary-500 text-white text-sm font-semibold rounded-xl hover:bg-primary-600 transition shadow-lg shadow-primary-200">Tutup</button>
                        </div>
                    </div>
                )}
            </Modal>

            {/* Create Modal */}
            <Modal open={isModalOpen} onClose={() => { setIsModalOpen(false); setForm({ category: 'Fasilitas', title: '', description: '' }); setFiles([]); setPreviews([]); }} title="Formulir Pengaduan">
                <form onSubmit={submit} className="p-5 space-y-4">
                    <div>
                        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">Kategori</label>
                        <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all">
                            <option>Fasilitas</option><option>Akademik</option><option>Pelayanan</option><option>Kemanusiaan</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">Judul</label>
                        <input type="text" placeholder="Singkat dan jelas..." value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all placeholder:text-gray-400" required />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">Detail Masalah</label>
                        <textarea placeholder="Jelaskan secara rinci..." value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} rows={5} className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all resize-none placeholder:text-gray-400" required />
                    </div>
                    
                    {/* File Attachments */}
                    <div>
                        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">Lampiran (Opsional, Maks 5 File)</label>
                        <input type="file" multiple accept="image/*,.pdf" onChange={handleFileChange} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100" />
                        
                        {previews.length > 0 && (
                            <div className="flex flex-wrap gap-3 mt-3">
                                {previews.map((preview, idx) => (
                                    <div key={idx} className="relative w-16 h-16 border rounded-xl overflow-hidden group">
                                        {preview ? (
                                            <img src={preview} className="w-full h-full object-cover" alt={`Preview ${idx}`} />
                                        ) : (
                                            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-400">PDF</div>
                                        )}
                                        <button type="button" onClick={() => removeFile(idx)} className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">×</button>
                                    </div>
                                ))}
                            </div>
                        )}
                        <p className="text-[10px] text-gray-400 mt-2">Dukung format .png, .jpg, .jpeg, .pdf. Ukuran maksimal 2MB/file.</p>
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                        <button type="button" onClick={() => { setIsModalOpen(false); setForm({ category: 'Fasilitas', title: '', description: '' }); setFiles([]); setPreviews([]); }} className="px-4 py-2 text-sm font-medium border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition">Batal</button>
                        <button type="submit" disabled={submitting || !form.title.trim()} className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-xl transition disabled:opacity-50">{submitting ? 'Mengirim...' : 'Kirim Laporan'}</button>
                    </div>
                </form>
            </Modal>
        </DashboardLayout>
    );
}
