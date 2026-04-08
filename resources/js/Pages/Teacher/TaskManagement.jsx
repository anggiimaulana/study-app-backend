import React from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Badge from '@/Components/Badge';
import Button from '@/Components/Button';

export default function TaskManagement({ tasks }) {
    return (
        <DashboardLayout headerTitle="Manajemen Tugas">
            <Head title="Manajemen Tugas" />

            <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800 font-outfit">Tugas & Materi yang Anda Berikan</h2>
                    <p className="text-slate-500 text-sm mt-1">Pantau pengumpulan tugas dan berikan penilaian tepat waktu.</p>
                </div>
                <Button variant="primary" className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    Buat Tugas Baru
                </Button>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[10px] tracking-widest border-b border-slate-100">
                            <tr>
                                <th className="px-8 py-5">Informasi Tugas</th>
                                <th className="px-6 py-5">Kelas & Mapel</th>
                                <th className="px-6 py-5">Status Pengumpulan</th>
                                <th className="px-6 py-5">Batas Waktu</th>
                                <th className="px-8 py-5 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {tasks.map((task) => (
                                <tr key={task.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-8 py-5">
                                        <div className="flex flex-col">
                                            <span className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors uppercase font-outfit">{task.title}</span>
                                            <span className="text-xs text-slate-400 mt-1">ID: #TSK-{task.id}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col gap-1.5">
                                            <Badge variant="indigo" className="w-fit">{task.classroom?.name || 'Umum'}</Badge>
                                            <span className="text-xs font-bold text-slate-600">{task.subject?.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="flex-1 h-2 bg-slate-100 rounded-full max-w-[100px] overflow-hidden">
                                                <div className="h-full bg-blue-600 rounded-full" style={{ width: '65%' }}></div>
                                            </div>
                                            <span className="text-xs font-bold text-slate-700">{task.submissions_count || 0} Terkumpul</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-slate-700">{new Date(task.due_date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}</span>
                                            <span className="text-[10px] text-slate-400 font-bold uppercase">{new Date(task.due_date).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-right space-x-2">
                                        <Button size="sm" variant="secondary" className="px-3">
                                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                        </Button>
                                        <Button size="sm" variant="primary">
                                            Periksa
                                        </Button>
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
