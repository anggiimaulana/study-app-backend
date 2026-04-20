import React from "react";
import { Head, Link } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";

export default function Dashboard({ stats, auth }) {
    const userName = auth?.user?.name || "Admin";
    const firstName = userName.split(" ")[0];

    return (
        <DashboardLayout headerTitle="Dashboard">
            <Head title="Dashboard Admin Sekolah" />
            <div className="space-y-6">
                {/* Welcome */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">Selamat Datang, {firstName}! 👋</h2>
                    <p className="text-gray-500 text-sm">Kelola data sekolah dan pantau operasional harian.</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", value: stats?.total_students || "450", label: "Total Siswa", color: "bg-primary-50", iconColor: "text-primary-500" },
                        { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", value: stats?.total_teachers || "38", label: "Total Guru", color: "bg-blue-50", iconColor: "text-blue-500" },
                        { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", value: stats?.total_classes || "18", label: "Kelas Aktif", color: "bg-green-50", iconColor: "text-green-500" },
                        { icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z", value: stats?.pending_complaints || "5", label: "Aduan Masuk", color: "bg-red-50", iconColor: "text-red-500", badge: { label: "Baru", className: "bg-red-50 text-red-600" } },
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-5 border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center`}>
                                    <svg className={`w-5 h-5 ${stat.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                                    </svg>
                                </div>
                                {stat.badge && <span className={`text-xs font-medium px-2 py-1 rounded-full ${stat.badge.className}`}>{stat.badge.label}</span>}
                            </div>
                            <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                            <p className="text-sm text-gray-500">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        {/* Recent Activity */}
                        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                            <div className="px-5 py-4 border-b border-gray-100">
                                <h3 className="font-semibold text-gray-900">Aktivitas Terbaru</h3>
                            </div>
                            <div className="p-5 space-y-4">
                                {[
                                    { title: "Siswa baru terdaftar: Budi Santoso", time: "30 menit lalu", color: "bg-green-100", iconColor: "text-green-600" },
                                    { title: "Pengumuman baru dipublikasi", time: "2 jam lalu", color: "bg-blue-100", iconColor: "text-blue-600" },
                                    { title: "Aduan masuk: Fasilitas kelas", time: "5 jam lalu", color: "bg-red-100", iconColor: "text-red-600" },
                                    { title: "Ujian CBT Matematika dijadwalkan", time: "Kemarin", color: "bg-amber-100", iconColor: "text-amber-600" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center shrink-0`}>
                                            <svg className={`w-5 h-5 ${item.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-900">{item.title}</p>
                                            <p className="text-xs text-gray-500 mt-0.5">{item.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                            <div className="px-5 py-4 border-b border-gray-100">
                                <h3 className="font-semibold text-gray-900">Aksi Cepat</h3>
                            </div>
                            <div className="p-3 space-y-1">
                                {[
                                    { label: "Kelola Data Siswa", href: route("school-admin.master-data"), color: "bg-primary-50", iconColor: "text-primary-500", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
                                    { label: "Kelola CBT", href: route("school-admin.cbt-management"), color: "bg-blue-50", iconColor: "text-blue-500", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                                    { label: "Buat Pengumuman", href: route("school-admin.broadcast"), color: "bg-green-50", iconColor: "text-green-500", icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" },
                                    { label: "Lihat Aduan", href: route("school-admin.incoming-complaint"), color: "bg-red-50", iconColor: "text-red-500", icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" },
                                ].map((action, idx) => (
                                    <Link key={idx} href={action.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition">
                                        <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center`}>
                                            <svg className={`w-5 h-5 ${action.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={action.icon} />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium text-gray-700">{action.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
