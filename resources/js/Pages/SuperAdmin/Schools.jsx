import React from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Badge from '@/Components/Badge';
import Button from '@/Components/Button';

export default function Schools({ schools }) {
    return (
        <DashboardLayout headerTitle="Manajemen Seluruh Sekolah">
            <Head title="School Management" />

            <div className="mb-8 flex justify-between items-center px-2">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800 font-outfit">Database Sekolah Terintegrasi</h2>
                    <p className="text-slate-500 text-sm mt-1">Pantau dan kelola seluruh instansi pendidikan yang menggunakan platform.</p>
                </div>
                <Button>Daftarkan Sekolah Baru</Button>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-slate-50 text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                            <tr>
                                <th className="px-8 py-5">Identitas Sekolah</th>
                                <th className="px-6 py-5">Statistik Pengguna</th>
                                <th className="px-6 py-5">Paket Layanan</th>
                                <th className="px-6 py-5">Status</th>
                                <th className="px-8 py-5 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {schools.data.map((school) => (
                                <tr key={school.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold font-outfit text-xl shadow-lg shadow-blue-600/20">
                                                {school.name?.substring(0, 1)}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors uppercase font-outfit">{school.name}</span>
                                                <span className="text-xs text-slate-400 font-bold">{school.address || 'Alamat belum disetel'}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 font-medium text-slate-600">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs font-bold text-slate-700">{school.students_count || 0} Murid</span>
                                            <span className="text-xs text-slate-500">{school.teachers_count || 0} Guru</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6">
                                         <Badge variant="indigo">ENTERPRISE</Badge>
                                    </td>
                                    <td className="px-6 py-6 text-slate-500">
                                        <Badge variant={school.status === 'active' ? 'success' : 'danger'}>
                                            {school.status?.toUpperCase() || 'ACTIVE'}
                                        </Badge>
                                    </td>
                                    <td className="px-8 py-6 text-right space-x-2">
                                        <Button size="sm" variant="secondary">Kelola</Button>
                                        <Button size="sm" variant="ghost" className="text-red-500 hover:bg-red-50">Suspend</Button>
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
