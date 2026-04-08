import React from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function Dashboard() {
    const sidebarItems = [
        {
            label: 'Dashboard Overview',
            route: 'super_admin.dashboard',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        {
            label: 'Manage Schools',
            route: 'super_admin.schools',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
    ];

    const stats = [
        { label: 'Active Schools', value: '1,248', trend: '+12%', color: 'from-blue-500 to-blue-600' },
        { label: 'Total Users', value: '84.5K', trend: '+5.2%', color: 'from-emerald-500 to-emerald-600' },
        { label: 'Server Load', value: '42%', trend: '-2%', color: 'from-indigo-500 to-indigo-600' },
        { label: 'Revenue (MRR)', value: '$124K', trend: '+15%', color: 'from-amber-500 to-amber-600' },
    ];

    return (
        <DashboardLayout userRole="Super Admin" sidebarItems={sidebarItems} headerTitle="Dashboard Overview">
            <Head title="Super Admin Dashboard" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 mt-2">
                {stats.map((item, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                        <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${item.color} rounded-l-2xl`} />
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-slate-500">{item.label}</p>
                                <h3 className="text-3xl font-bold text-slate-800 mt-2 font-outfit">{item.value}</h3>
                            </div>
                            <div className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded-lg text-xs font-semibold">
                                {item.trend}
                            </div>
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                            <span className="text-xs text-slate-400">vs last month</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 overflow-hidden relative">
                    <h3 className="text-lg font-bold text-slate-800 font-outfit mb-4">Platform Activity</h3>
                    <div className="h-64 w-full rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100/50">
                        <p className="text-slate-400 text-sm">Interactive Chart Component (Recharts/Chart.js)</p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                    <h3 className="text-lg font-bold text-slate-800 font-outfit mb-4">Recent Onboarding</h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100">
                                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold font-outfit">
                                    {String.fromCharCode(64 + i)}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-800">SMA Negeri {i} Jakarta</p>
                                    <p className="text-xs text-slate-500">2 hours ago • Free Trial</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
