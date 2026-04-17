import React from "react";
import { Head, Link } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";

// ─── Stat Card ────────────────────────────────────────────────────────────────
const StatCard = ({ icon, value, label, sublabel, color, iconColor, badge }) => (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-sm transition-all duration-200">
        <div className="flex items-center justify-between mb-4">
            <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center`}>
                {icon}
            </div>
            {badge && (
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${badge.className}`}>
                    {badge.label}
                </span>
            )}
        </div>
        <p className="text-2xl font-bold text-gray-900 mb-1">{value}</p>
        <p className="text-sm text-gray-500">{label}</p>
        {sublabel && <p className="text-xs text-gray-400 mt-1">{sublabel}</p>}
    </div>
);

// ─── Activity Item ────────────────────────────────────────────────────────────
const ActivityItem = ({ icon, iconBg, title, time }) => (
    <div className="flex items-start gap-4">
        <div className={`w-10 h-10 rounded-full ${iconBg} flex items-center justify-center shrink-0`}>
            {icon}
        </div>
        <div className="flex-1">
            <p className="text-sm text-gray-900 font-medium">{title}</p>
            <p className="text-xs text-gray-500 mt-0.5">{time}</p>
        </div>
    </div>
);

// ─── Quick Action ─────────────────────────────────────────────────────────────
const QuickAction = ({ icon, iconBg, hoverBg, label, href }) => (
    <Link
        href={href}
        className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition group"
    >
        <div className={`w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center ${hoverBg} transition`}>
            {icon}
        </div>
        <span className="text-sm font-medium text-gray-700">{label}</span>
    </Link>
);

// ─── Dashboard Page ───────────────────────────────────────────────────────────
export default function Dashboard({ stats, schedules, tasks, auth }) {
    const userName = auth?.user?.name || "Siswa";
    const firstName = userName.split(" ")[0];

    const todaySchedules = schedules?.length > 0 ? schedules.slice(0, 4) : [
        { subject: { name: "Matematika" }, start_time: "07:30", end_time: "09:00", room: "X-RPL 1", teacher: { user: { name: "Pak Ahmad" } } },
        { subject: { name: "Bahasa Indonesia" }, start_time: "09:15", end_time: "10:45", room: "X-RPL 1", teacher: { user: { name: "Bu Sari" } } },
        { subject: { name: "Pemrograman Web" }, start_time: "11:00", end_time: "12:30", room: "Lab Komputer 2", teacher: { user: { name: "Pak Budi" } } },
    ];

    const pendingTasks = tasks?.length > 0 ? tasks.slice(0, 3) : [
        { id: 1, title: "Tugas Matematika Bab 5", subject: "Matematika", due: "Besok" },
        { id: 2, title: "Laporan Praktikum Fisika", subject: "Fisika", due: "3 hari lagi" },
        { id: 3, title: "Essay Bahasa Inggris", subject: "B. Inggris", due: "Minggu ini" },
    ];

    return (
        <DashboardLayout headerTitle="Dashboard">
            <Head title="Dashboard Siswa" />

            <div className="space-y-6">
                {/* ─── Welcome Section ──────────────────────────────────── */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">
                        Selamat Datang, {firstName}! 👋
                    </h2>
                    <p className="text-gray-500 text-sm">
                        Semoga harimu menyenangkan. Berikut adalah ringkasan aktivitasmu.
                    </p>
                </div>

                {/* ─── Stats Cards ──────────────────────────────────────── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatCard
                        icon={<svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>}
                        value={stats?.total_courses || "8"}
                        label="Total Mata Pelajaran"
                        color="bg-primary-50"
                        badge={{ label: "Aktif", className: "bg-green-50 text-green-600" }}
                    />
                    <StatCard
                        icon={<svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>}
                        value={stats?.completed_tasks || "24"}
                        label="Tugas Selesai"
                        color="bg-blue-50"
                        badge={{ label: "+8%", className: "bg-green-50 text-green-600" }}
                    />
                    <StatCard
                        icon={<svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                        value={stats?.pending_tasks || pendingTasks.length}
                        label="Tugas Pending"
                        color="bg-amber-50"
                        badge={{ label: "Aktif", className: "bg-amber-50 text-amber-600" }}
                    />
                    <StatCard
                        icon={<svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                        value={stats?.checkin_count || "12"}
                        label="Check-in MyFess"
                        color="bg-purple-50"
                        badge={{ label: "Baik", className: "bg-green-50 text-green-600" }}
                    />
                </div>

                {/* ─── CTA Card (Check-in) ─────────────────────────────── */}
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                    <div className="relative z-10">
                        <h3 className="text-lg font-semibold mb-2">Bagaimana perasaanmu hari ini?</h3>
                        <p className="text-white/80 text-sm mb-4">
                            Luangkan waktu sebentar untuk check-in di Ruang Aman (MyFess). Ceritakan kondisimu secara aman dan rahasia.
                        </p>
                        <Link
                            href={route("student.myfess")}
                            className="inline-flex items-center gap-2 bg-white text-primary-600 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Check-in Sekarang
                        </Link>
                    </div>
                </div>

                {/* ─── Main Grid ────────────────────────────────────────── */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Schedule & Tasks */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Today's Schedule */}
                        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                                <h3 className="font-semibold text-gray-900">Jadwal Hari Ini</h3>
                                <Link
                                    href={route("student.class-schedule")}
                                    className="text-sm text-primary-500 hover:text-primary-600 font-medium"
                                >
                                    Lihat Semua
                                </Link>
                            </div>
                            <div className="p-5">
                                <div className="space-y-3">
                                    {todaySchedules.map((schedule, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${idx === 0 ? 'bg-primary-100' : 'bg-gray-100'}`}>
                                                    <svg className={`w-5 h-5 ${idx === 0 ? 'text-primary-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">
                                                        {schedule.subject?.name || schedule.name}
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                        {schedule.teacher?.user?.name || schedule.teacher} · R. {schedule.room || "-"}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xs font-medium text-gray-700">
                                                    {schedule.start_time?.substring(0, 5)} - {schedule.end_time?.substring(0, 5)}
                                                </p>
                                                {idx === 0 && (
                                                    <span className="text-[10px] font-semibold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                                                        Sedang Berlangsung
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Pending Tasks */}
                        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                                <h3 className="font-semibold text-gray-900">Tugas Mendatang</h3>
                                <Link
                                    href={route("student.task-exam")}
                                    className="text-sm text-primary-500 hover:text-primary-600 font-medium"
                                >
                                    Lihat Semua
                                </Link>
                            </div>
                            <div className="p-5">
                                <div className="space-y-3">
                                    {pendingTasks.map((task, idx) => {
                                        const urgencyColors = [
                                            { bg: "bg-red-50", text: "text-red-600", border: "border-red-100", label: "HARI INI" },
                                            { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-100", label: "BESOK" },
                                            { bg: "bg-gray-50", text: "text-gray-500", border: "border-gray-100", label: "MENDATANG" },
                                        ];
                                        const urgency = urgencyColors[idx] || urgencyColors[2];

                                        return (
                                            <div key={task.id || idx} className={`p-3 rounded-xl border ${urgency.bg} ${urgency.border}`}>
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <span className={`text-[10px] font-bold uppercase tracking-wide ${urgency.text}`}>
                                                            {urgency.label}
                                                        </span>
                                                        <p className="text-sm font-medium text-gray-800 mt-1">{task.title}</p>
                                                        <p className="text-xs text-gray-500 mt-0.5">{task.subject}</p>
                                                    </div>
                                                    <span className="text-xs text-gray-400">{task.due}</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Activity & Quick Actions */}
                    <div className="space-y-6">
                        {/* Recent Activity */}
                        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                            <div className="px-5 py-4 border-b border-gray-100">
                                <h3 className="font-semibold text-gray-900">Aktivitas Terbaru</h3>
                            </div>
                            <div className="p-5">
                                <div className="space-y-4">
                                    <ActivityItem
                                        icon={<svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                                        iconBg="bg-green-100"
                                        title='Menyelesaikan tugas "Matematika Bab 5"'
                                        time="2 jam yang lalu"
                                    />
                                    <ActivityItem
                                        icon={<svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                                        iconBg="bg-blue-100"
                                        title="Check-in MyFess: Kondisi Baik"
                                        time="5 jam yang lalu"
                                    />
                                    <ActivityItem
                                        icon={<svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>}
                                        iconBg="bg-amber-100"
                                        title="Pengumuman baru dari sekolah"
                                        time="Kemarin"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                            <div className="px-5 py-4 border-b border-gray-100">
                                <h3 className="font-semibold text-gray-900">Aksi Cepat</h3>
                            </div>
                            <div className="p-3 space-y-1">
                                <QuickAction
                                    icon={<svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                                    iconBg="bg-primary-50"
                                    hoverBg="group-hover:bg-primary-100"
                                    label="Lihat Jadwal"
                                    href={route("student.class-schedule")}
                                />
                                <QuickAction
                                    icon={<svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
                                    iconBg="bg-blue-50"
                                    hoverBg="group-hover:bg-blue-100"
                                    label="Lihat Tugas"
                                    href={route("student.task-exam")}
                                />
                                <QuickAction
                                    icon={<svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                                    iconBg="bg-green-50"
                                    hoverBg="group-hover:bg-green-100"
                                    label="Cari Lowongan"
                                    href={route("student.jobs")}
                                />
                            </div>
                        </div>

                        {/* Tips Card */}
                        <div className="bg-white rounded-2xl border border-gray-100 p-5">
                            <h3 className="font-semibold text-gray-900 mb-3">💡 Tips Belajar</h3>
                            <div className="space-y-2">
                                <div className="p-3 bg-blue-50 rounded-xl">
                                    <p className="text-sm text-blue-700">Buat jadwal belajar harian yang konsisten</p>
                                </div>
                                <div className="p-3 bg-green-50 rounded-xl">
                                    <p className="text-sm text-green-700">Jangan lupa istirahat 10 menit setiap jam</p>
                                </div>
                                <div className="p-3 bg-purple-50 rounded-xl">
                                    <p className="text-sm text-purple-700">Diskusi dengan teman untuk materi sulit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
