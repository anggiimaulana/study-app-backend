import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function Complaints({ complaints }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data, setData, post, processing, reset } = useForm({
        category: 'Fasilitas',
        title: '',
        content: '',
    });

    const submit = (e) => {
        e.preventDefault();
        setIsModalOpen(false);
        reset();
    };

    return (
        <DashboardLayout headerTitle="Pengaduan">
            <Head title="Aduanku" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
                <div className="text-left">
                    <h2 className="text-2xl font-bold text-slate-900 font-outfit uppercase tracking-tight">Daftar Pengaduan</h2>
                    <p className="text-slate-500 text-sm mt-1">Sampaikan keluhan atau saran untuk fasilitas sekolah.</p>
                </div>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-bold text-xs uppercase hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
                    Ajukan Keluhan
                </button>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Subjek</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Kategori</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tanggal</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {complaints.data.length > 0 ? complaints.data.map((c) => (
                            <tr key={c.id} className="hover:bg-slate-50 transition-all">
                                <td className="px-6 py-5">
                                    <p className="font-bold text-slate-900 text-sm leading-tight">{c.title}</p>
                                </td>
                                <td className="px-6 py-5">
                                    <span className="text-[10px] font-bold px-2.5 py-1 bg-slate-100 text-slate-500 rounded-full uppercase tracking-tighter">{c.category || 'Umum'}</span>
                                </td>
                                <td className="px-6 py-5">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${c.status === 'resolved' ? 'bg-emerald-500' : 'bg-amber-400'}`}></div>
                                        <span className={`text-[10px] font-bold uppercase ${c.status === 'resolved' ? 'text-emerald-600' : 'text-amber-600'}`}>
                                            {c.status || 'Pending'}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-5">
                                    <p className="text-[11px] font-bold text-slate-400">{new Date(c.created_at).toLocaleDateString('id-ID')}</p>
                                </td>
                                <td className="px-6 py-5">
                                    <button className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors uppercase">Detail</button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="5" className="px-6 py-20 text-center text-slate-400 text-sm font-medium italic">Belum ada pengaduan yang diajukan.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white rounded-xl shadow-xl max-w-lg w-full scale-in-center overflow-hidden flex flex-col h-fit">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <h3 className="font-bold text-slate-900 font-outfit uppercase">Formulir Pengaduan</h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-slate-300 hover:text-slate-900">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <form onSubmit={submit} className="p-8 space-y-6 text-left">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-600 px-1">Kategori Laporan</label>
                                <select 
                                    value={data.category}
                                    onChange={e => setData('category', e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                                >
                                    <option>Fasilitas</option>
                                    <option>Akademik</option>
                                    <option>Pelayanan</option>
                                    <option>Kemanusiaan</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-600 px-1">Judul Laporan</label>
                                <input 
                                    type="text"
                                    placeholder="Singkat dan jelas..."
                                    value={data.title}
                                    onChange={e => setData('title', e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-blue-600 outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-600 px-1">Detail Masalah</label>
                                <textarea 
                                    placeholder="Jelaskan secara rinci..."
                                    value={data.content}
                                    onChange={e => setData('content', e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-6 text-sm text-slate-800 focus:ring-2 focus:ring-blue-600 outline-none min-h-[160px] resize-none"
                                />
                            </div>
                            <button 
                                type="submit"
                                disabled={processing}
                                className="w-full py-4 bg-blue-600 text-white font-bold text-sm rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all disabled:opacity-50"
                            >
                                Kirim Laporan &raquo;
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </DashboardLayout>
    );
}
