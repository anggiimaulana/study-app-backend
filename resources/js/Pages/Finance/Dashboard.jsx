import React from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Badge from '@/Components/Badge';

export default function FinanceDashboard({ stats, recentPayments }) {
    const formatIDR = (amount) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(amount);
    };

    return (
        <DashboardLayout headerTitle="Dashboard Keuangan">
            <Head title="Finance Dashboard" />

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <Badge variant="success">+{stats.pending_bills} Tagihan</Badge>
                    </div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Revenue Bulan Ini</p>
                    <h3 className="text-2xl font-black text-slate-800 font-outfit mt-1">{formatIDR(stats.monthly_revenue)}</h3>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl">
                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                        </div>
                    </div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Tagihan Tertunda</p>
                    <h3 className="text-2xl font-black text-slate-800 font-outfit mt-1">{stats.pending_bills} <span className="text-base text-slate-400 font-medium">Siswa</span></h3>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        </div>
                    </div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Database Siswa Aktif</p>
                    <h3 className="text-2xl font-black text-slate-800 font-outfit mt-1">{stats.total_students_billed} <span className="text-base text-slate-400 font-medium">Total</span></h3>
                </div>
            </div>

            {/* Transactions */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden mb-8">
                <div className="p-8 border-b border-slate-50 flex justify-between items-center">
                    <h3 className="text-xl font-bold text-slate-800 font-outfit">Transaksi Terakhir</h3>
                    <button className="text-sm font-bold text-blue-600 hover:text-blue-800">Lihat Semua</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-slate-50 text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                            <tr>
                                <th className="px-8 py-4">Siswa</th>
                                <th className="px-6 py-4">Kategori Tagihan</th>
                                <th className="px-6 py-4">Metode</th>
                                <th className="px-6 py-4">Nominal</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-8 py-4 text-right">Tanggal</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {recentPayments.map((p) => (
                                <tr key={p.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-500">
                                                {p.student?.user?.name?.substring(0, 1)}
                                            </div>
                                            <span className="font-bold text-slate-700">{p.student?.user?.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-slate-500 font-medium">{p.title || 'SPP Bulanan'}</span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <Badge variant="slate">{p.payment_type?.toUpperCase() || 'MANUAL'}</Badge>
                                    </td>
                                    <td className="px-6 py-5 font-bold text-slate-800">
                                        {formatIDR(p.amount)}
                                    </td>
                                    <td className="px-6 py-5">
                                        <Badge variant={p.status === 'paid' ? 'success' : 'warning'}>
                                            {p.status?.toUpperCase() || 'PENDING'}
                                        </Badge>
                                    </td>
                                    <td className="px-8 py-5 text-right text-slate-400 font-medium">
                                        {new Date(p.created_at).toLocaleDateString('id-ID')}
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
