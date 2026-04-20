import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function Settings() {
    const [maintenanceMode, setMaintenanceMode] = useState(false);
    const [settings, setSettings] = useState({
        app_name: 'EduSpace',
        support_email: 'support@eduspace.id',
        max_schools: '100',
        default_plan: 'professional',
        smtp_host: 'smtp.mailtrap.io',
        smtp_port: '2525',
    });

    const Toggle = ({ checked, onChange, label, desc }) => (
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
            <div><p className="text-sm font-medium text-gray-900">{label}</p><p className="text-xs text-gray-400 mt-0.5">{desc}</p></div>
            <button type="button" onClick={() => onChange(!checked)} className={`relative w-10 h-[22px] rounded-full transition-colors ${checked ? 'bg-primary-500' : 'bg-gray-200'}`}><span className={`absolute top-0.5 h-4 w-4 bg-white rounded-full shadow-sm transition-transform ${checked ? 'translate-x-5' : 'translate-x-0.5'}`} /></button>
        </div>
    );

    const inputClass = 'w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all placeholder:text-gray-400';

    const handleSave = () => {
        if (window.AppAlert) window.AppAlert.toast('success', 'Pengaturan berhasil disimpan!');
    };

    return (
        <DashboardLayout headerTitle="Platform Settings">
            <Head title="Settings" />
            <div className="space-y-6 max-w-3xl">
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center"><svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
                        <div><h2 className="text-lg font-semibold text-gray-900">Pengaturan Platform</h2><p className="text-sm text-gray-500">Konfigurasi global platform EduSpace.</p></div>
                    </div>
                </div>

                {/* General Settings */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <div className="flex items-center gap-3 mb-5"><div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center"><svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg></div>
                        <div><h3 className="text-sm font-semibold text-gray-900">Konfigurasi Umum</h3><p className="text-xs text-gray-400">Pengaturan aplikasi dasar.</p></div>
                    </div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                            <div><label className="block text-xs font-medium text-gray-500 uppercase mb-1.5">Nama Aplikasi</label><input value={settings.app_name} onChange={e => setSettings(s => ({ ...s, app_name: e.target.value }))} className={inputClass} /></div>
                            <div><label className="block text-xs font-medium text-gray-500 uppercase mb-1.5">Email Support</label><input value={settings.support_email} onChange={e => setSettings(s => ({ ...s, support_email: e.target.value }))} className={inputClass} /></div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div><label className="block text-xs font-medium text-gray-500 uppercase mb-1.5">Max Sekolah</label><input type="number" value={settings.max_schools} onChange={e => setSettings(s => ({ ...s, max_schools: e.target.value }))} className={inputClass} /></div>
                            <div><label className="block text-xs font-medium text-gray-500 uppercase mb-1.5">Default Plan</label><select value={settings.default_plan} onChange={e => setSettings(s => ({ ...s, default_plan: e.target.value }))} className={inputClass}><option value="starter">Starter</option><option value="professional">Professional</option><option value="enterprise">Enterprise</option></select></div>
                        </div>
                    </div>
                </div>

                {/* Email Config */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <div className="flex items-center gap-3 mb-5"><div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center"><svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg></div>
                        <div><h3 className="text-sm font-semibold text-gray-900">Konfigurasi Email</h3><p className="text-xs text-gray-400">Setting SMTP untuk pengiriman email.</p></div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div><label className="block text-xs font-medium text-gray-500 uppercase mb-1.5">SMTP Host</label><input value={settings.smtp_host} onChange={e => setSettings(s => ({ ...s, smtp_host: e.target.value }))} className={inputClass} /></div>
                        <div><label className="block text-xs font-medium text-gray-500 uppercase mb-1.5">SMTP Port</label><input value={settings.smtp_port} onChange={e => setSettings(s => ({ ...s, smtp_port: e.target.value }))} className={inputClass} /></div>
                    </div>
                </div>

                {/* System Controls */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <div className="flex items-center gap-3 mb-5"><div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center"><svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg></div>
                        <div><h3 className="text-sm font-semibold text-gray-900">Kontrol Sistem</h3><p className="text-xs text-gray-400">Pengaturan lanjutan yang mempengaruhi operasional.</p></div>
                    </div>
                    <Toggle checked={maintenanceMode} onChange={setMaintenanceMode} label="Mode Maintenance" desc="Aktifkan untuk menonaktifkan akses publik sementara." />
                </div>

                <div className="flex justify-end">
                    <button onClick={handleSave} className="px-6 py-2.5 bg-primary-500 text-white text-sm font-semibold rounded-xl hover:bg-primary-600 transition">Simpan Semua Perubahan</button>
                </div>
            </div>
        </DashboardLayout>
    );
}
