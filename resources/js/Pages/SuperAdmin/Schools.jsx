import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Modal from '@/Components/ui/Modal';

export default function Schools({ schools }) {
    const [modalOpen, setModalOpen] = useState(false);
    const dummySchools = [
        { id: 1, name: 'SMK Negeri 1 Jakarta', address: 'Jl. Jend. Sudirman No. 1', students_count: 850, teachers_count: 45, status: 'active' },
        { id: 2, name: 'SMA Harapan Bangsa', address: 'Jl. Pendidikan No. 12, Bandung', students_count: 620, teachers_count: 32, status: 'active' },
        { id: 3, name: 'SMK Tekno Mandiri', address: 'Jl. Industri No. 8, Surabaya', students_count: 430, teachers_count: 25, status: 'trial' },
    ];
    const items = schools?.data && schools.data.length > 0 ? schools.data : dummySchools;

    return (
        <DashboardLayout headerTitle="Kelola Sekolah">
            <Head title="Kelola Sekolah" />
            <div className="space-y-6">
                {/* Header */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                            <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Database Sekolah</h2>
                            <p className="text-sm text-gray-500">Kelola seluruh instansi pendidikan yang terdaftar.</p>
                        </div>
                    </div>
                    <button onClick={() => setModalOpen(true)} className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-xl transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                        Daftarkan Sekolah
                    </button>
                </div>

                {/* Table */}
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Sekolah</th>
                                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Pengguna</th>
                                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Paket</th>
                                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
                                    <th className="text-right px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(school => (
                                    <tr key={school.id} className="border-b border-gray-50 hover:bg-gray-50 transition group">
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">{school.name?.substring(0, 1)}</div>
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">{school.name}</p>
                                                    <p className="text-xs text-gray-400">{school.address || 'Alamat belum disetel'}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4">
                                            <p className="text-sm font-medium text-gray-700">{school.students_count || 0} Siswa</p>
                                            <p className="text-xs text-gray-400">{school.teachers_count || 0} Guru</p>
                                        </td>
                                        <td className="px-5 py-4">
                                            <span className="text-[11px] font-semibold px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-full border border-indigo-100">ENTERPRISE</span>
                                        </td>
                                        <td className="px-5 py-4">
                                            <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${school.status === 'active' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-amber-50 text-amber-600 border-amber-100'}`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${school.status === 'active' ? 'bg-green-500' : 'bg-amber-500'}`} />
                                                {school.status === 'active' ? 'Aktif' : 'Trial'}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 text-right space-x-2">
                                            <button className="px-3 py-1.5 text-xs font-medium bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition">Kelola</button>
                                            <button className="px-3 py-1.5 text-xs font-medium text-red-500 hover:bg-red-50 rounded-lg transition">Suspend</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Daftarkan Sekolah Baru" maxWidth="max-w-xl">
                <form className="p-6 space-y-4" onSubmit={e => { e.preventDefault(); setModalOpen(false); if (window.AppAlert) window.AppAlert.toast('success', 'Sekolah berhasil didaftarkan!'); }}>
                    <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">Nama Sekolah</label>
                        <input className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all" placeholder="Masukkan nama sekolah..." />
                    </div>
                    <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">Alamat</label>
                        <textarea rows={2} className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all resize-none" placeholder="Alamat lengkap..." />
                    </div>
                    <div className="flex justify-end gap-2 pt-2">
                        <button type="button" onClick={() => setModalOpen(false)} className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-50 transition">Batal</button>
                        <button type="submit" className="px-4 py-2 bg-primary-500 text-white text-sm font-semibold rounded-xl hover:bg-primary-600 transition">Daftarkan</button>
                    </div>
                </form>
            </Modal>
        </DashboardLayout>
    );
}
