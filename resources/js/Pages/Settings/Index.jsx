import React, { useState } from 'react';
import { Head, usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function Settings() {
    const { auth } = usePage().props;
    const [passwords, setPasswords] = useState({ current: '', new_password: '', confirm: '' });
    const [notifSettings, setNotifSettings] = useState({ email: true, push: true, sms: false });

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (passwords.new_password !== passwords.confirm) {
            if (window.AppAlert) window.AppAlert.toast('error', 'Konfirmasi password tidak cocok!');
            return;
        }
        if (window.AppAlert) window.AppAlert.toast('success', 'Password berhasil diubah!');
        setPasswords({ current: '', new_password: '', confirm: '' });
    };

    const Toggle = ({ checked, onChange }) => (
        <button type="button" onClick={() => onChange(!checked)} className={`relative w-10 h-[22px] rounded-full transition-colors ${checked ? 'bg-primary-500' : 'bg-gray-200'}`}>
            <span className={`absolute top-0.5 h-4 w-4 bg-white rounded-full shadow-sm transition-transform ${checked ? 'translate-x-5' : 'translate-x-0.5'}`} />
        </button>
    );

    const inputClass = 'w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all placeholder:text-gray-400';

    return (
        <DashboardLayout headerTitle="Pengaturan">
            <Head title="Pengaturan" />
            <div className="space-y-6 max-w-3xl">
                {/* Header */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Pengaturan Akun</h2>
                            <p className="text-sm text-gray-500">Kelola keamanan, notifikasi, dan preferensi akun Anda.</p>
                        </div>
                    </div>
                </div>

                {/* Change Password */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center">
                            <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900">Ubah Password</h3>
                            <p className="text-xs text-gray-400">Perbarui password login Anda secara berkala.</p>
                        </div>
                    </div>
                    <form onSubmit={handlePasswordSubmit} className="space-y-3">
                        <div>
                            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">Password Saat Ini</label>
                            <input type="password" value={passwords.current} onChange={e => setPasswords(p => ({ ...p, current: e.target.value }))} className={inputClass} placeholder="••••••••" required />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">Password Baru</label>
                                <input type="password" value={passwords.new_password} onChange={e => setPasswords(p => ({ ...p, new_password: e.target.value }))} className={inputClass} placeholder="Minimal 8 karakter" required />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">Konfirmasi Password</label>
                                <input type="password" value={passwords.confirm} onChange={e => setPasswords(p => ({ ...p, confirm: e.target.value }))} className={inputClass} placeholder="Ulangi password baru" required />
                            </div>
                        </div>
                        <div className="pt-2">
                            <button type="submit" className="px-5 py-2.5 bg-primary-500 text-white text-sm font-semibold rounded-xl hover:bg-primary-600 transition">Simpan Password</button>
                        </div>
                    </form>
                </div>

                {/* Notification Settings */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900">Preferensi Notifikasi</h3>
                            <p className="text-xs text-gray-400">Atur cara Anda menerima pemberitahuan.</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {[
                            { key: 'email', label: 'Notifikasi Email', desc: 'Kirim pemberitahuan ke alamat email Anda.' },
                            { key: 'push', label: 'Notifikasi Push', desc: 'Tampilkan notifikasi di browser Anda.' },
                            { key: 'sms', label: 'Notifikasi SMS', desc: 'Kirim SMS untuk pemberitahuan penting.' },
                        ].map(item => (
                            <div key={item.key} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">{item.label}</p>
                                    <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                                </div>
                                <Toggle checked={notifSettings[item.key]} onChange={v => setNotifSettings(s => ({ ...s, [item.key]: v }))} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Account Info */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center">
                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900">Informasi Akun</h3>
                            <p className="text-xs text-gray-400">Detail dan versi platform.</p>
                        </div>
                    </div>
                    <div className="space-y-2">
                        {[
                            { label: 'Nama', value: auth?.user?.name || '-' },
                            { label: 'Email', value: auth?.user?.email || '-' },
                            { label: 'Role', value: auth?.user?.role || '-' },
                            { label: 'Versi Platform', value: 'EduSpace v2.0.0' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                                <span className="text-xs font-medium text-gray-500">{item.label}</span>
                                <span className="text-sm font-semibold text-gray-900">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
