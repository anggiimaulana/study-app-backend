import React from "react";
import { Head, Link } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";

export default function Dashboard({ stats, schedules, tasks, auth }) {
    const cards = [
        {
            title: "Tugas Aktif",
            value: stats?.active_tasks || 0,
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
            color: "text-blue-600",
            bg: "bg-blue-50",
        },
        {
            title: "Jadwal Hari Ini",
            value: schedules?.length || 0,
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                </svg>
            ),
            color: "text-emerald-600",
            bg: "bg-emerald-50",
        },
        {
            title: "Attendance",
            value: "98%",
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
            color: "text-indigo-600",
        },
        {
            title: "Rank",
            value: "#04",
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 21l1-14h12l1 14M9 7V5a3 3 0 016 0v2"
                    />
                </svg>
            ),
            color: "text-amber-600",
        },
        {
            title: "Credits",
            value: "142",
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
            color: "text-rose-600",
        },
        {
            title: "GPA",
            value: "3.92",
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                </svg>
            ),
            color: "text-violet-600",
        },
    ];

    return (
        <DashboardLayout
            headerTitle="Dashboard Siswa"
            headerSubtitle="Ringkasan utama aktivitasmu hari ini, dari tugas, jadwal, hingga statistik akademik penting."
            headerBadge="Overview"
        >
            <Head title="Dashboard Siswa" />

            <div className="bg-white border border-slate-200 rounded-xl p-6 lg:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">
                        Selamat datang kembali, {auth?.user?.name || "Siswa"}!
                    </h1>
                    <p className="text-slate-500 mt-1">
                        Anda memiliki {schedules?.length || 0} jadwal belajar
                        dan {stats?.active_tasks || 0} tugas baru hari ini.
                    </p>
                </div>
                <Link
                    href={route("student.class-schedule")}
                    className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors shrink-0 text-center"
                >
                    Lihat Jadwal
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div
                                className={`p-3 rounded-lg ${card.bg} ${card.color}`}
                            >
                                {card.icon}
                            </div>
                            <span className="text-sm font-bold text-slate-500 uppercase tracking-tight">
                                {card.title}
                            </span>
                        </div>
                        <div className="text-3xl font-bold text-slate-900">
                            {card.value}
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Tasks List */}
                <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-200 flex items-center justify-between">
                        <h3 className="font-bold text-slate-900">
                            Tugas Terdekat
                        </h3>
                        <Link
                            href={route("student.task-exam")}
                            className="text-sm font-bold text-blue-600 hover:text-blue-800"
                        >
                            Lihat Semua
                        </Link>
                    </div>
                    <div className="divide-y divide-slate-100">
                        {tasks && tasks.length > 0 ? (
                            tasks.slice(0, 3).map((task) => (
                                <div
                                    key={task.id}
                                    className="p-6 hover:bg-slate-50 transition-colors"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <span
                                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${task.type === "exam" ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-600"}`}
                                        >
                                            {task.type || "Tugas"}
                                        </span>
                                        <span className="text-xs text-slate-400 font-medium">
                                            Deadline:{" "}
                                            {new Date(
                                                task.due_date,
                                            ).toLocaleDateString("id-ID")}
                                        </span>
                                    </div>
                                    <h4 className="font-bold text-slate-800 leading-tight">
                                        {task.title}
                                    </h4>
                                    <p className="text-xs text-slate-500 mt-1 uppercase font-bold">
                                        {task.subject?.name}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <div className="p-10 text-center text-slate-400 text-sm">
                                Tidak ada tugas baru.
                            </div>
                        )}
                    </div>
                </div>

                {/* Schedule Brief */}
                <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-200 flex items-center justify-between">
                        <h3 className="font-bold text-slate-900">
                            Jadwal Hari Ini
                        </h3>
                        <Link
                            href={route("student.class-schedule")}
                            className="text-sm font-bold text-blue-600 hover:text-blue-800"
                        >
                            Kalender
                        </Link>
                    </div>
                    <div className="p-6 space-y-6">
                        {schedules && schedules.length > 0 ? (
                            schedules.map((schedule, idx) => (
                                <div
                                    key={idx}
                                    className="flex gap-4 items-start"
                                >
                                    <div className="text-center w-16 shrink-0">
                                        <p className="text-xs font-bold text-slate-400">
                                            {schedule.start_time?.substring(
                                                0,
                                                5,
                                            )}
                                        </p>
                                        <div className="h-4 w-px bg-slate-200 mx-auto my-1"></div>
                                        <p className="text-xs font-bold text-slate-400">
                                            {schedule.end_time?.substring(0, 5)}
                                        </p>
                                    </div>
                                    <div className="flex-1 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                        <h4 className="font-bold text-slate-900 leading-tight">
                                            {schedule.subject?.name}
                                        </h4>
                                        <p className="text-xs text-slate-500 mt-1">
                                            {schedule.teacher?.user?.name} · R.
                                            {schedule.room || "LMN"}
                                        </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-10 text-slate-400 text-sm">
                                Tidak ada jadwal belajar hari ini.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
