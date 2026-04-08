import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Badge from '@/Components/Badge';
import Button from '@/Components/Button';

export default function Complaints({ complaints }) {
    const { data, setData, post, processing, reset } = useForm({
        category: 'fasilitas',
        title: '',
        content: '',
    });

    const submit = (e) => {
        e.preventDefault();
        // Post logic here
        reset();
    };

    return (
        <DashboardLayout headerTitle="Aduanku (Pusat Bantuan)">
            <Head title="Aduanku" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left: History */}
                <div className="lg:col-span-2 order-2 lg:order-1">
                    <div className="mb-8 flex justify-between items-center">
                        <h2 className="text-2xl font-black text-slate-800 font-outfit">Riwayat Laporan Anda</h2>
                        <Badge variant="slate">{complaints.total} Laporan</Badge>
                    </div>

                    <div className="space-y-6">
                        {complaints.data.length > 0 ? complaints.data.map((c) => (
                            <div key={c.id} className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-premium hover:border-blue-100 transition-all">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Badge variant="indigo" className="uppercase text-[10px] tracking-widest">{c.category || 'UMUM'}</Badge>
                                            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Ticket #{c.id}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-800 font-outfit">{c.title}</h3>
                                    </div>
                                    <Badge variant={c.status === 'resolved' ? 'success' : (c.status === 'pending' ? 'warning' : 'primary')}>
                                        {c.status?.toUpperCase() || 'DALAM PROSES'}
                                    </Badge>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6 italic">
                                    "{c.content}"
                                </p>
                                <div className="pt-6 border-t border-slate-50 flex justify-between items-center">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                        Dilaporkan pada: {new Date(c.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                                    </span>
                                    <button className="text-blue-600 font-black text-xs uppercase tracking-widest hover:underline">Detail Diskusi</button>
                                </div>
                            </div>
                        )) : (
                            <div className="bg-slate-50 h-64 rounded-[2rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400">
                                <svg className="w-12 h-12 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 01-2-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                                <p className="font-bold uppercase tracking-widest text-[10px]">Belum ada riwayat laporan</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right: Create Form */}
                <div className="order-1 lg:order-2">
                    <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-premium p-10 sticky top-28">
                        <div className="mb-10 text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30 mx-auto mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                            </div>
                            <h3 className="text-2xl font-black text-slate-800 font-outfit">Sampaikan Keluhan</h3>
                            <p className="text-slate-400 text-sm mt-2">Suara Anda penting bagi kemajuan kualitas sekolah kita.</p>
                        </div>

                        <form onSubmit={submit} className="space-y-6">
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Kategori Laporan</label>
                                <select 
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-sm font-bold text-slate-700 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 transition-all outline-none"
                                    value={data.category}
                                    onChange={e => setData('category', e.target.value)}
                                >
                                    <option value="fasilitas">Fasilitas Sekolah</option>
                                    <option value="akademik">Masalah Akademik</option>
                                    <option value="bullying">Laporan Perundingan (Bullying)</option>
                                    <option value="pelayanan">Pelayanan Staf/Guru</option>
                                    <option value="lainnya">Lainnya</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Subjek / Judul</label>
                                <input 
                                    type="text"
                                    placeholder="Singkat dan padat..."
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-sm font-bold text-slate-700 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 transition-all outline-none"
                                    value={data.title}
                                    onChange={e => setData('title', e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Detail Kejadian / Keluhan</label>
                                <textarea 
                                    placeholder="Ceritakan secara detail untuk memudahkan tindak lanjut..."
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-sm font-medium text-slate-700 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 transition-all outline-none min-h-[150px] resize-none"
                                    value={data.content}
                                    onChange={e => setData('content', e.target.value)}
                                />
                            </div>

                            <Button disabled={processing} className="w-full py-5 rounded-[1.5rem] shadow-blue-600/30">
                                Kirim Laporan Sekarang
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
