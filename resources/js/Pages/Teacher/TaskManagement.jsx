import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Modal from '@/Components/ui/Modal';

export default function TaskManagement({ tasks }) {
    const [modalOpen, setModalOpen] = useState(false);
    const dummyTasks = [
        { id: 1, title: 'Laporan Praktikum Jaringan', classroom: { name: 'X RPL 1' }, subject: { name: 'TKJ' }, due_date: '2026-04-20T23:59:00', submissions_count: 18, total_students: 30 },
        { id: 2, title: 'Tugas Pemrograman Web - HTML', classroom: { name: 'XI RPL 2' }, subject: { name: 'Pemrograman Web' }, due_date: '2026-04-22T23:59:00', submissions_count: 25, total_students: 32 },
        { id: 3, title: 'Essay Bahasa Inggris', classroom: { name: 'XII RPL 1' }, subject: { name: 'B. Inggris' }, due_date: '2026-04-18T15:00:00', submissions_count: 28, total_students: 28 },
    ];
    const items = tasks && tasks.length > 0 ? tasks : dummyTasks;

    return (
        <DashboardLayout headerTitle="Manajemen Tugas">
            <Head title="Manajemen Tugas" />
            <div className="space-y-6">
                {/* Header */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Tugas & Materi</h2>
                            <p className="text-sm text-gray-500">Pantau pengumpulan tugas dan berikan penilaian tepat waktu.</p>
                        </div>
                    </div>
                    <button onClick={() => setModalOpen(true)} className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-xl transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                        Buat Tugas Baru
                    </button>
                </div>

                {/* Table */}
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Informasi Tugas</th>
                                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Kelas & Mapel</th>
                                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Pengumpulan</th>
                                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Batas Waktu</th>
                                    <th className="text-right px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((task) => {
                                    const total = task.total_students || 30;
                                    const submitted = task.submissions_count || 0;
                                    const pct = Math.round((submitted / total) * 100);
                                    return (
                                        <tr key={task.id} className="border-b border-gray-50 hover:bg-gray-50 transition group">
                                            <td className="px-5 py-4">
                                                <p className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition">{task.title}</p>
                                                <p className="text-xs text-gray-400 mt-0.5">ID: #TSK-{task.id}</p>
                                            </td>
                                            <td className="px-5 py-4">
                                                <span className="text-xs font-medium px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-full border border-indigo-100">{task.classroom?.name || 'Umum'}</span>
                                                <p className="text-xs text-gray-500 mt-1">{task.subject?.name}</p>
                                            </td>
                                            <td className="px-5 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex-1 h-2 bg-gray-100 rounded-full max-w-[100px] overflow-hidden">
                                                        <div className="h-full bg-primary-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
                                                    </div>
                                                    <span className="text-xs font-medium text-gray-700">{submitted}/{total}</span>
                                                </div>
                                            </td>
                                            <td className="px-5 py-4">
                                                <p className="text-sm font-medium text-gray-700">{new Date(task.due_date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}</p>
                                                <p className="text-[11px] text-gray-400">{new Date(task.due_date).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB</p>
                                            </td>
                                            <td className="px-5 py-4 text-right space-x-2">
                                                <button className="px-3 py-1.5 text-xs font-medium bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                                                    <svg className="w-3.5 h-3.5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                                </button>
                                                <button className="px-3 py-1.5 text-xs font-medium bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition">Periksa</button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Create Task Modal */}
            <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Buat Tugas Baru" maxWidth="max-w-xl">
                <form className="p-6 space-y-4" onSubmit={e => { e.preventDefault(); setModalOpen(false); if (window.AppAlert) window.AppAlert.toast('success', 'Tugas berhasil dibuat!'); }}>
                    <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">Judul Tugas</label>
                        <input className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all" placeholder="Masukkan judul tugas..." />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">Kelas</label>
                            <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all">
                                <option>X RPL 1</option><option>XI RPL 2</option><option>XII RPL 1</option>
                            </select>
                        </div>
                        <div className="space-y-1.5">
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">Mata Pelajaran</label>
                            <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all">
                                <option>TKJ</option><option>Pemrograman Web</option><option>B. Inggris</option>
                            </select>
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">Batas Waktu</label>
                        <input type="datetime-local" className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all" />
                    </div>
                    <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">Deskripsi</label>
                        <textarea rows={3} className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all resize-none" placeholder="Instruksi tugas..." />
                    </div>
                    <div className="flex justify-end gap-2 pt-2">
                        <button type="button" onClick={() => setModalOpen(false)} className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-50 transition">Batal</button>
                        <button type="submit" className="px-4 py-2 bg-primary-500 text-white text-sm font-semibold rounded-xl hover:bg-primary-600 transition">Simpan Tugas</button>
                    </div>
                </form>
            </Modal>
        </DashboardLayout>
    );
}
