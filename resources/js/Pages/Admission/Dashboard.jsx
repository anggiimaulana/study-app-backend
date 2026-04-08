import React from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Badge from '@/Components/Badge';

export default function AdmissionDashboard({ stats, recentRegistrations }) {
    return (
        <DashboardLayout headerTitle="Portal PPDB Online">
            <Head title="Admission Dashboard" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-50 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Total Pendaftar</p>
                    <h3 className="text-3xl font-black text-slate-800 font-outfit">{stats.total_registrants} <span className="text-sm text-slate-400 font-medium">Siswa</span></h3>
                </div>

                <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-amber-50 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Menunggu Verifikasi</p>
                    <h3 className="text-3xl font-black text-slate-800 font-outfit">{stats.pending_verification} <span className="text-sm text-slate-400 font-medium">Berkas</span></h3>
                </div>

                <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-50 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Lolos Seleksi</p>
                    <h3 className="text-3xl font-black text-slate-800 font-outfit">{stats.accepted_students} <span className="text-sm text-slate-400 font-medium">Target</span></h3>
                </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-8 border-b border-slate-50 flex justify-between items-center">
                    <h3 className="text-xl font-bold text-slate-800 font-outfit">Pendaftar Terbaru</h3>
                    <button className="px-4 py-2 bg-slate-50 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-100 transition-colors">Unduh Data Pendaftar</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-slate-50 text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                            <tr>
                                <th className="px-8 py-5">Nama Calon Murid</th>
                                <th className="px-6 py-5">Asal Sekolah</th>
                                <th className="px-6 py-5">No. Telp</th>
                                <th className="px-8 py-5 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {recentRegistrations.map((r) => (
                                <tr key={r.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-8 py-5">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-slate-700">{r.full_name}</span>
                                            <span className="text-[10px] text-slate-400 font-bold">REG-ID: #{r.id}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 font-medium text-slate-600">
                                        {r.previous_school || 'N/A'}
                                    </td>
                                    <td className="px-6 py-5 text-slate-500">
                                        {r.phone_number}
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <Badge variant={r.status === 'accepted' ? 'success' : (r.status === 'rejected' ? 'danger' : 'warning')}>
                                            {r.status?.toUpperCase() || 'PENDING'}
                                        </Badge>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardLayout>
    );
}
