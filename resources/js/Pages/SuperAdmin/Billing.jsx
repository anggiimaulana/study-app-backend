import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function Billing() {
    const [detailItem, setDetailItem] = useState(null);

    const plans = [
        { name: 'Starter', price: 'Rp 500K', period: '/bulan', features: ['50 siswa', '5 guru', 'Dashboard dasar', 'Support email'], color: 'border-gray-200' },
        { name: 'Professional', price: 'Rp 1.5M', period: '/bulan', features: ['500 siswa', 'Unlimited guru', 'CBT + MyFess', 'Priority support', 'Custom branding'], color: 'border-primary-500', popular: true },
        { name: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited siswa', 'Unlimited guru', 'All features', 'Dedicated server', 'SLA 99.9%', 'On-site training'], color: 'border-gray-200' },
    ];

    const transactions = [
        { id: 'INV-2026-001', school: 'SMKN 1 Denpasar', plan: 'Professional', amount: 'Rp 1.500.000', status: 'paid', date: '2026-04-01' },
        { id: 'INV-2026-002', school: 'SMAN 4 Jakarta', plan: 'Professional', amount: 'Rp 1.500.000', status: 'paid', date: '2026-04-01' },
        { id: 'INV-2026-003', school: 'SMK Telkom Bandung', plan: 'Enterprise', amount: 'Rp 3.000.000', status: 'pending', date: '2026-04-05' },
        { id: 'INV-2026-004', school: 'SMKN 2 Surabaya', plan: 'Starter', amount: 'Rp 500.000', status: 'overdue', date: '2026-03-01' },
    ];

    const statusMap = { paid: { label: 'Lunas', bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-100' }, pending: { label: 'Menunggu', bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100' }, overdue: { label: 'Terlambat', bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-100' } };

    return (
        <DashboardLayout headerTitle="Billing & SaaS">
            <Head title="Billing" />
            <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center"><svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg></div>
                        <div><h2 className="text-lg font-semibold text-gray-900">Billing & Langganan</h2><p className="text-sm text-gray-500">Kelola paket berlangganan dan riwayat pembayaran sekolah.</p></div>
                    </div>
                </div>

                {/* Revenue Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[{ label: 'MRR', value: 'Rp 6.5M' }, { label: 'Sekolah Aktif', value: '4' }, { label: 'Pembayaran Lunas', value: '2' }, { label: 'Overdue', value: '1' }].map((s, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-gray-100 p-4"><p className="text-xs text-gray-400 mb-1">{s.label}</p><p className="text-xl font-bold text-gray-900">{s.value}</p></div>
                    ))}
                </div>

                {/* Plans */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Paket Berlangganan</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {plans.map((plan, i) => (
                            <div key={i} className={`bg-white rounded-2xl border-2 p-5 relative ${plan.color} ${plan.popular ? 'ring-2 ring-primary-100' : ''}`}>
                                {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-semibold bg-primary-500 text-white px-3 py-1 rounded-full">POPULER</span>}
                                <h4 className="text-base font-semibold text-gray-900 mb-1">{plan.name}</h4>
                                <div className="mb-4"><span className="text-2xl font-bold text-gray-900">{plan.price}</span><span className="text-sm text-gray-400">{plan.period}</span></div>
                                <ul className="space-y-2">{plan.features.map((f, j) => <li key={j} className="text-xs text-gray-600 flex items-center gap-2"><svg className="w-3.5 h-3.5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>{f}</li>)}</ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Transactions */}
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                    <div className="px-5 py-4 border-b border-gray-100"><h3 className="text-sm font-semibold text-gray-900">Riwayat Transaksi</h3></div>
                    <div className="overflow-x-auto"><table className="w-full"><thead><tr className="bg-gray-50">
                        {['Invoice', 'Sekolah', 'Paket', 'Jumlah', 'Status', 'Tanggal'].map(h => <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">{h}</th>)}
                    </tr></thead><tbody>
                        {transactions.map(t => { const st = statusMap[t.status] || statusMap.pending; return (
                            <tr key={t.id} className="border-b border-gray-50 hover:bg-gray-50 transition">
                                <td className="px-5 py-3.5 text-xs font-mono text-primary-600">{t.id}</td>
                                <td className="px-5 py-3.5 text-sm font-medium text-gray-900">{t.school}</td>
                                <td className="px-5 py-3.5 text-xs text-gray-500">{t.plan}</td>
                                <td className="px-5 py-3.5 text-sm font-semibold text-gray-900">{t.amount}</td>
                                <td className="px-5 py-3.5"><span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${st.bg} ${st.text} ${st.border}`}>{st.label}</span></td>
                                <td className="px-5 py-3.5 text-xs text-gray-500">{new Date(t.date).toLocaleDateString('id-ID')}</td>
                            </tr>
                        ); })}
                    </tbody></table></div>
                </div>
            </div>
        </DashboardLayout>
    );
}
