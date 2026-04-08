import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Badge from '@/Components/Badge';
import Button from '@/Components/Button';

export default function MasterData({ students, teachers }) {
    const [tab, setTab] = useState('students');

    return (
        <DashboardLayout headerTitle="Master Data Sekolah">
            <Head title="Master Data" />

            <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800 font-outfit">Manajemen Civitas Akademika</h2>
                    <p className="text-slate-500 text-sm mt-1">Kelola data seluruh guru, staf, dan murid dalam otoritas sekolah Anda.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="secondary">Ekspor CSV</Button>
                    <Button variant="primary" className="flex items-center gap-2">
                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                         Tambah Data
                    </Button>
                </div>
            </div>

            <div className="flex bg-white p-1.5 rounded-2xl border border-slate-100 shadow-sm w-fit mb-8">
                <button 
                    onClick={() => setTab('students')}
                    className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all ${tab === 'students' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-800'}`}
                >
                    Murid ({students.total})
                </button>
                <button 
                    onClick={() => setTab('teachers')}
                    className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all ${tab === 'teachers' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-800'}`}
                >
                    Guru ({teachers.total})
                </button>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[10px] tracking-widest border-b border-slate-100">
                            <tr>
                                <th className="px-8 py-5">Nama Lengkap & ID</th>
                                <th className="px-6 py-5">Informasi Kontak</th>
                                <th className="px-6 py-5">{tab === 'students' ? 'Kelas' : 'NIP / NUPTK'}</th>
                                <th className="px-6 py-5">Status</th>
                                <th className="px-8 py-5 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {(tab === 'students' ? students.data : teachers.data).map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold font-outfit text-base">
                                                {item.user?.name?.substring(0, 1)}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{item.user?.name}</span>
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{tab === 'students' ? 'NISN: '+item.student_id : 'NUPTK: '+item.employee_id}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col">
                                            <span className="text-slate-600 font-medium">{item.user?.email}</span>
                                            <span className="text-[10px] text-slate-400 font-bold">{item.user?.phone || 'No Phone'}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <Badge variant="slate">{tab === 'students' ? (item.classroom?.name || 'BELUM ADA KELAS') : (item.department || 'TENAGA PENGAJAR')}</Badge>
                                    </td>
                                    <td className="px-6 py-5">
                                        <Badge variant="success">AKTIF</Badge>
                                    </td>
                                    <td className="px-8 py-5 text-right space-x-2">
                                        <Button size="sm" variant="secondary" className="px-3">Edit</Button>
                                        <Button size="sm" variant="ghost" className="text-red-500 hover:bg-red-50 hover:text-red-600">Hapus</Button>
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
