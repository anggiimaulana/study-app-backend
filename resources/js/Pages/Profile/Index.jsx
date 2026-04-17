import React, { useEffect, useState } from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';

const fallbackAvatar = (name) =>
    `https://ui-avatars.com/api/?name=${encodeURIComponent(name || 'Pengguna')}&background=2563eb&color=ffffff&bold=true&size=128`;

export default function ProfileIndex({ user }) {
    const [profile, setProfile] = useState(user || null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        const loadProfile = async () => {
            try {
                const response = await fetch('/api/v1/profile', {
                    method: 'GET', credentials: 'include',
                    headers: { Accept: 'application/json' },
                    signal: controller.signal,
                });
                if (!response.ok) throw new Error('Gagal memuat profil');
                const payload = await response.json();
                setProfile(payload?.data || user || null);
            } catch (error) {
                if (error.name !== 'AbortError') setProfile(user || null);
            } finally {
                setLoading(false);
            }
        };
        loadProfile();
        return () => controller.abort();
    }, [user]);

    const displayName = profile?.name || 'Pengguna';
    const avatar = profile?.avatar_url || profile?.photo_url || fallbackAvatar(displayName);
    const student = profile?.student || {};

    return (
        <DashboardLayout headerTitle="Profil Akun">
            <Head title="Profil Akun" />
            <div className="space-y-6">
                {/* Hero Card */}
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                    {/* Banner */}
                    <div className="h-32 bg-gradient-to-br from-[#1e3a5f] via-[#1d4ed8] to-[#2563eb] relative">
                        <div className="absolute top-0 right-0 w-60 h-60 bg-white/5 rounded-full -mr-20 -mt-20" />
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full -ml-10 -mb-16" />
                    </div>

                    <div className="px-6 pb-6 -mt-12 relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-end gap-5">
                            {/* Avatar */}
                            <div className="w-24 h-24 rounded-2xl border-4 border-white shadow-lg overflow-hidden bg-white shrink-0">
                                {loading ? (
                                    <div className="w-full h-full animate-pulse bg-gray-100" />
                                ) : (
                                    <img src={avatar} alt={displayName} className="w-full h-full object-cover" />
                                )}
                            </div>

                            {/* Name + Role */}
                            <div className="flex-1 pb-1">
                                <h1 className="text-2xl font-bold text-gray-900">{displayName}</h1>
                                <p className="text-sm text-gray-500 mt-0.5">{profile?.email || '-'}</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-green-50 text-green-600 border border-green-100">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />Aktif
                                    </span>
                                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">Siswa</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stat Cards */}
                        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {[
                                { label: 'Kelas', value: student.classroom?.name || 'Belum ditetapkan', icon: 'M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' },
                                { label: 'Jurusan', value: student.major?.name || 'Belum ditetapkan', icon: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25' },
                                { label: 'Sekolah', value: profile?.school?.name || 'Belum tersedia', icon: 'M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z' },
                                { label: 'Status', value: 'Aktif', icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                            ].map((card, i) => (
                                <div key={i} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="flex items-center gap-2 mb-2">
                                        <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={card.icon} /></svg>
                                        <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">{card.label}</p>
                                    </div>
                                    <p className="text-sm font-semibold text-gray-900 truncate">{card.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Detail Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Personal Info */}
                    <div className="bg-white rounded-2xl border border-gray-100 p-5">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
                                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">Informasi Personal</h3>
                                <p className="text-xs text-gray-400">Data identitas akun Anda.</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {[
                                { label: 'Nama Lengkap', value: displayName },
                                { label: 'Email', value: profile?.email || '-' },
                                { label: 'NISN', value: student.nisn || '-' },
                                { label: 'NIS', value: student.nis || '-' },
                                { label: 'Jenis Kelamin', value: student.gender === 'L' ? 'Laki-laki' : student.gender === 'P' ? 'Perempuan' : '-' },
                                { label: 'No. Telepon', value: profile?.phone || student.phone || '-' },
                            ].map((field, i) => (
                                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                                    <span className="text-xs font-medium text-gray-500">{field.label}</span>
                                    <span className="text-sm font-semibold text-gray-900">{field.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Security & Session */}
                    <div className="bg-white rounded-2xl border border-gray-100 p-5">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center">
                                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">Keamanan & Sesi</h3>
                                <p className="text-xs text-gray-400">Status dan informasi sesi aktif.</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                                <span className="text-xs font-medium text-gray-500">Status Akun</span>
                                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-green-50 text-green-600 border border-green-100">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />Aktif
                                </span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                                <span className="text-xs font-medium text-gray-500">Sekolah</span>
                                <span className="text-sm font-semibold text-gray-900">{profile?.school?.name || 'Belum tersedia'}</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                                <span className="text-xs font-medium text-gray-500">Terakhir Diperbarui</span>
                                <span className="text-sm font-semibold text-gray-900">
                                    {profile?.updated_at ? new Date(profile.updated_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }) : '-'}
                                </span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                                <span className="text-xs font-medium text-gray-500">Role</span>
                                <span className="text-sm font-semibold text-primary-600">{profile?.role || 'siswa'}</span>
                            </div>
                        </div>

                        {/* Action */}
                        <div className="mt-5 pt-5 border-t border-gray-100">
                            <button className="w-full py-2.5 bg-gray-50 border border-gray-200 text-gray-600 text-sm font-medium rounded-xl hover:bg-gray-100 transition flex items-center justify-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
                                Ubah Password
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
