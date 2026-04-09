import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import getSidebarItems from "./sidebarConfig";

export default function DashboardLayout({
    children,
    headerTitle,
    backHref,
    backLabel = "Kembali",
}) {
    const { auth } = usePage().props;
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

    const dbRole = auth?.user?.role || "student";
    const roleMap = {
        admin_sekolah: "school-admin",
        guru_bk: "guidance",
        guru: "teacher",
        siswa: "student",
        keuangan: "finance",
        jurusan: "department",
        akademik: "academic",
        perpustakawan: "librarian",
        bkk: "career",
        ppdb: "admission",
        super_admin: "super-admin",
    };

    const mappedRole = roleMap[dbRole] || dbRole;
    const sidebarItems = getSidebarItems(mappedRole);
    const profileHref =
        dbRole === "student"
            ? route("student.profile")
            : route("profile.index");
    const notificationHref =
        dbRole === "student" ? route("student.notifications") : null;

    const displayHeaderTitle = headerTitle || "Dashboard";

    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_30%),linear-gradient(180deg,#f8fbff_0%,#f2f6fb_100%)] text-slate-900 font-inter flex overflow-hidden">
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-sm lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <aside
                className={`fixed inset-y-0 left-0 z-50 w-72 bg-white/90 backdrop-blur-xl border-r border-slate-200/80 transform transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-auto flex flex-col shadow-[0_0_40px_rgba(15,23,42,0.04)] ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex items-center gap-3 h-20 px-6 border-b border-slate-100/80 shrink-0">
                    <div className="w-11 h-11 rounded-2xl bg-linear-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-blue-500/20">
                        L
                    </div>
                    <div className="leading-tight">
                        <span className="block text-lg font-black tracking-tight text-slate-900 font-outfit">
                            EduSpace<span className="text-blue-600">.</span>
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.28em] text-slate-400 font-bold">
                            Learning Space
                        </span>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                    <nav className="space-y-1">
                        <p className="px-3 text-[10px] font-black text-slate-400 uppercase tracking-[0.24em] mb-3">
                            Menu Utama
                        </p>
                        {sidebarItems.map((item, index) => {
                            const isActive =
                                route().current(item.route) ||
                                route().current(item.route + ".*");

                            return (
                                <Link
                                    key={index}
                                    href={route(item.route)}
                                    className={`group flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 ${isActive ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20" : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900"}`}
                                >
                                    <div
                                        className={
                                            isActive
                                                ? "text-white"
                                                : "text-slate-400 group-hover:text-blue-600"
                                        }
                                    >
                                        {React.cloneElement(item.icon, {
                                            className: "w-5 h-5",
                                        })}
                                    </div>
                                    <span>{item.label}</span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div className="p-4 border-t border-slate-100/80">
                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                        </svg>
                        <span>Keluar</span>
                    </Link>
                </div>
            </aside>

            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                <header className="h-16 bg-white/80 backdrop-blur-xl border-b border-slate-200/70 flex items-center justify-between px-4 lg:px-6 z-40 shrink-0 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                    <div className="flex items-center gap-4 min-w-0">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden p-2.5 text-slate-500 hover:bg-slate-100 rounded-xl"
                        >
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
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                        <div className="min-w-0">
                            <h2 className="text-lg font-black text-slate-900 font-outfit tracking-tight truncate">
                                {displayHeaderTitle}
                            </h2>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 lg:gap-4">
                        {dbRole === "student" && (
                            <Link
                                href={route("student.notifications")}
                                className="p-2.5 text-slate-400 hover:text-blue-600 hover:bg-slate-50 rounded-xl relative"
                            >
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
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    />
                                </svg>
                                <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-white" />
                            </Link>
                        )}

                        <div className="relative">
                            <button
                                type="button"
                                onClick={() =>
                                    setProfileDropdownOpen((open) => !open)
                                }
                                className="flex items-center gap-3 pl-4 border-l border-slate-200/80"
                            >
                                <div className="hidden sm:block text-right">
                                    <p className="text-sm font-bold text-slate-900 leading-none">
                                        {auth?.user?.name || "Pengguna"}
                                    </p>
                                    <p className="text-[10px] text-slate-400 font-medium uppercase mt-1">
                                        Akun aktif
                                    </p>
                                </div>
                                <img
                                    src={`https://ui-avatars.com/api/?name=${auth?.user?.name || "A"}&background=2563eb&color=ffffff&bold=true`}
                                    alt="Avatar"
                                    className="w-10 h-10 rounded-2xl border border-slate-200 shadow-sm"
                                />
                            </button>

                            {profileDropdownOpen && (
                                <div className="absolute right-0 top-full mt-3 w-72 rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden z-50">
                                    <div className="px-5 py-4 bg-linear-to-r from-slate-50 to-white border-b border-slate-100">
                                        <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-400">
                                            Akun Aktif
                                        </p>
                                        <p className="mt-1 text-sm font-bold text-slate-900">
                                            {auth?.user?.name || "Pengguna"}
                                        </p>
                                        <p className="text-xs text-slate-500 mt-1">
                                            {auth?.user?.email ||
                                                "akun@eduspace.local"}
                                        </p>
                                    </div>
                                    <div className="p-2">
                                        <Link
                                            href={profileHref}
                                            className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                                        >
                                            <span className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                                <svg
                                                    className="w-5 h-5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                    />
                                                </svg>
                                            </span>
                                            Profil Saya
                                        </Link>

                                        <Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                            className="w-full flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors text-left"
                                        >
                                            <span className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                                                <svg
                                                    className="w-5 h-5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                                    />
                                                </svg>
                                            </span>
                                            Keluar
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-4 lg:p-6 shrink-0">
                    <div className="max-w-7xl mx-auto">{children}</div>
                </main>
            </div>
        </div>
    );
}
