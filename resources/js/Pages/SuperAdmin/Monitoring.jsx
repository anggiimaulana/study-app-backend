import React from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function Monitoring() {
    const systemHealth = [
        { label: 'Server Status', value: 'Operational', status: 'green' },
        { label: 'API Uptime', value: '99.97%', status: 'green' },
        { label: 'Database', value: 'Healthy', status: 'green' },
        { label: 'Queue Workers', value: '3/3 Active', status: 'green' },
        { label: 'Storage', value: '67% Used', status: 'amber' },
        { label: 'Redis Cache', value: 'Connected', status: 'green' },
    ];

    const activityLog = [
        { id: 1, action: 'User Login', user: 'admin@eduspace.id', ip: '192.168.1.10', time: '5 menit lalu', level: 'info' },
        { id: 2, action: 'School Created', user: 'admin@eduspace.id', ip: '192.168.1.10', time: '15 menit lalu', level: 'success' },
        { id: 3, action: 'Failed Login Attempt', user: 'unknown@test.com', ip: '103.45.67.89', time: '30 menit lalu', level: 'warning' },
        { id: 4, action: 'Billing Payment Received', user: 'system', ip: '-', time: '1 jam lalu', level: 'success' },
        { id: 5, action: 'Database Backup Completed', user: 'system', ip: '-', time: '3 jam lalu', level: 'info' },
        { id: 6, action: 'Rate Limit Exceeded', user: '103.45.67.89', ip: '103.45.67.89', time: '6 jam lalu', level: 'error' },
    ];

    const metrics = [
        { label: 'Active Users', value: '1,247', change: '+12%', up: true },
        { label: 'API Requests/min', value: '342', change: '+5%', up: true },
        { label: 'Avg Response', value: '128ms', change: '-8%', up: true },
        { label: 'Error Rate', value: '0.03%', change: '-15%', up: true },
    ];

    const levelStyles = { info: 'bg-blue-50 text-blue-600 border-blue-100', success: 'bg-green-50 text-green-600 border-green-100', warning: 'bg-amber-50 text-amber-600 border-amber-100', error: 'bg-red-50 text-red-600 border-red-100' };

    const statusDot = { green: 'bg-green-500', amber: 'bg-amber-500', red: 'bg-red-500' };

    return (
        <DashboardLayout headerTitle="System Monitoring">
            <Head title="Monitoring" />
            <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center"><svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg></div>
                        <div><h2 className="text-lg font-semibold text-gray-900">System Monitoring</h2><p className="text-sm text-gray-500">Pantau kesehatan sistem dan aktivitas platform secara real-time.</p></div>
                    </div>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {metrics.map((m, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-gray-100 p-4">
                            <p className="text-xs text-gray-400 mb-1">{m.label}</p>
                            <div className="flex items-end gap-2">
                                <p className="text-xl font-bold text-gray-900">{m.value}</p>
                                <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${m.up ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>{m.change}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* System Health */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <h3 className="text-sm font-semibold text-gray-900 mb-4">System Health</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {systemHealth.map((s, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                                <span className="text-xs font-medium text-gray-600">{s.label}</span>
                                <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-900"><span className={`w-2 h-2 rounded-full ${statusDot[s.status]}`} />{s.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Activity Log */}
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                    <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-gray-900">Activity Log</h3>
                        <span className="text-xs text-gray-400">Last 24 hours</span>
                    </div>
                    <div className="divide-y divide-gray-50">
                        {activityLog.map(log => (
                            <div key={log.id} className="px-5 py-3.5 flex items-center gap-4 hover:bg-gray-50 transition">
                                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${levelStyles[log.level]} uppercase w-16 text-center`}>{log.level}</span>
                                <div className="flex-1 min-w-0"><p className="text-sm font-medium text-gray-900">{log.action}</p><p className="text-xs text-gray-400 mt-0.5">{log.user}</p></div>
                                <span className="text-xs text-gray-400 font-mono">{log.ip}</span>
                                <span className="text-xs text-gray-400 shrink-0">{log.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
