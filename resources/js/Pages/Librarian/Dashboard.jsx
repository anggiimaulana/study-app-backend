import React from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Badge from '@/Components/Badge';

export default function LibrarianDashboard({ stats, recentBorrowings }) {
    return (
        <DashboardLayout headerTitle="Sistem Informasi Perpustakaan">
            <Head title="Library Dashboard" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    </div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Total Koleksi Buku</p>
                    <h3 className="text-3xl font-black text-slate-800 font-outfit">{stats.total_books} <span className="text-sm text-slate-400 font-medium">Judul</span></h3>
                </div>

                <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Buku Sedang Dipinjam</p>
                    <h3 className="text-3xl font-black text-slate-800 font-outfit">{stats.active_borrowings} <span className="text-sm text-slate-400 font-medium">Ekslempar</span></h3>
                </div>

                <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm">
                    <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Keterlambatan Pengembalian</p>
                    <h3 className="text-3xl font-black text-slate-800 font-outfit">{stats.overdue_books} <span className="text-sm text-slate-400 font-medium">User</span></h3>
                </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-8 border-b border-slate-50 flex justify-between items-center">
                    <h3 className="text-xl font-bold text-slate-800 font-outfit">Aktivitas Peminjaman Terbaru</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-slate-50 text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                            <tr>
                                <th className="px-8 py-5">Nama Murid</th>
                                <th className="px-6 py-5">Judul Buku</th>
                                <th className="px-6 py-5">Tgl Pinjam</th>
                                <th className="px-6 py-5">Tgl Kembali</th>
                                <th className="px-8 py-5 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {recentBorrowings.map((b) => (
                                <tr key={b.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-8 py-5">
                                        <span className="font-bold text-slate-700">{b.student?.user?.name}</span>
                                    </td>
                                    <td className="px-6 py-5 italic font-medium text-slate-600">
                                        "{b.book?.title}"
                                    </td>
                                    <td className="px-6 py-5 text-slate-500">
                                        {new Date(b.borrow_date).toLocaleDateString('id-ID')}
                                    </td>
                                    <td className="px-6 py-5 text-slate-500">
                                        {new Date(b.return_date).toLocaleDateString('id-ID')}
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <Badge variant={b.status === 'returned' ? 'success' : (new Date(b.return_date) < new Date() ? 'danger' : 'warning')}>
                                            {b.status === 'borrowed' && new Date(b.return_date) < new Date() ? 'TERLAMBAT' : b.status?.toUpperCase()}
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
