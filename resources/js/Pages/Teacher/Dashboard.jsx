import React from "react";
import { Head, Link } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";

export default function Dashboard({ stats, auth }) {
    const userName = auth?.user?.name || "Guru";
    const firstName = userName.split(" ")[0];

    return (
        <DashboardLayout headerTitle="Dashboard">
            <Head title="Dashboard Guru" />
            <div className="space-y-6">
                {/* Welcome */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">Selamat Datang, {firstName}! 👋</h2>
                    <p className="text-gray-500 text-sm">Kelola kelas dan pantau perkembangan siswa Anda.</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", value: stats?.total_students || "156", label: "Total Siswa", color: "bg-primary-50", iconColor: "text-primary-500" },
                        { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", value: stats?.pending_tasks || "8", label: "Tugas Belum Dinilai", color: "bg-amber-50", iconColor: "text-amber-500" },
                        { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", value: stats?.schedule_today || "5", label: "Jadwal Hari Ini", color: "bg-blue-50", iconColor: "text-blue-500" },
                        { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", value: stats?.cbt_active || "3", label: "CBT Aktif", color: "bg-green-50", iconColor: "text-green-500" },
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-5 border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center`}>
                                    <svg className={`w-5 h-5 ${stat.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                            <p className="text-sm text-gray-500">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left: Today's schedule */}
                    <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 overflow-hidden">
                        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                            <h3 className="font-semibold text-gray-900">Jadwal Mengajar Hari Ini</h3>
                            <Link href={route("teacher.teaching-schedule")} className="text-sm text-primary-500 hover:text-primary-600 font-medium">Lihat Semua</Link>
                        </div>
                        <div className="p-5 space-y-3">
                            {[
                                { subject: "Pemrograman Web", class: "X RPL 1", time: "07:30 - 09:00", room: "Lab Komputer 1" },
                                { subject: "Basis Data", class: "XI RPL 2", time: "09:15 - 10:45", room: "Lab Komputer 2" },
                                { subject: "Pemrograman Web", class: "XII RPL 1", time: "11:00 - 12:30", room: "Lab Komputer 1" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${idx === 0 ? 'bg-primary-100' : 'bg-gray-100'}`}>
                                            <svg className={`w-5 h-5 ${idx === 0 ? 'text-primary-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{item.subject}</p>
                                            <p className="text-xs text-gray-500">{item.class} · {item.room}</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-medium text-gray-600">{item.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Quick Actions */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                            <div className="px-5 py-4 border-b border-gray-100">
                                <h3 className="font-semibold text-gray-900">Aksi Cepat</h3>
                            </div>
                            <div className="p-3 space-y-1">
                                {[
                                    { label: "Buat Tugas Baru", href: route("teacher.task-management"), color: "bg-primary-50", iconColor: "text-primary-500", icon: "M12 4v16m8-8H4" },
                                    { label: "Penilaian CBT", href: route("teacher.cbt-grading"), color: "bg-blue-50", iconColor: "text-blue-500", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
                                    { label: "Evaluasi Siswa", href: route("teacher.student-evaluation"), color: "bg-green-50", iconColor: "text-green-500", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
                                ].map((action, idx) => (
                                    <Link key={idx} href={action.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition group">
                                        <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center transition`}>
                                            <svg className={`w-5 h-5 ${action.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={action.icon} />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium text-gray-700">{action.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* MyFess Alert */}
                        <div className="bg-amber-50 rounded-2xl border border-amber-100 p-5">
                            <h3 className="font-semibold text-amber-700 mb-2">⚠️ Moderasi MyFess</h3>
                            <p className="text-sm text-amber-600 mb-3">Ada 3 postingan baru yang perlu direview.</p>
                            <Link href={route("teacher.myfess-moderation")} className="inline-flex items-center gap-2 bg-amber-500 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-amber-600 transition">
                                Review Sekarang
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
