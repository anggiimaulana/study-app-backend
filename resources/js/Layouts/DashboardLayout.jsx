import React, { useState, useEffect, useRef } from "react";
import { Link, usePage } from "@inertiajs/react";
import getSidebarItems from "./sidebarConfig";

export default function DashboardLayout({ children, headerTitle }) {
    const { auth } = usePage().props;
    const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);
    const [profileOpen, setProfileOpen] = useState(false);
    const [notifOpen, setNotifOpen] = useState(false);
    const profileRef = useRef(null);
    const notifRef = useRef(null);

    const demoNotifications = [
        { id: 1, title: 'Tugas Baru', message: 'Laporan Praktikum Jaringan telah diunggah.', time: '5 menit lalu', read: false },
        { id: 2, title: 'Jadwal Berubah', message: 'Kelas Matematika pindah ke Ruang Lab 2.', time: '1 jam lalu', read: false },
        { id: 3, title: 'Pengumuman', message: 'Ujian Tengah Semester dimulai 20 April.', time: '3 jam lalu', read: true },
        { id: 4, title: 'Konseling Disetujui', message: 'Sesi konseling Anda telah dikonfirmasi.', time: 'Kemarin', read: true },
    ];
    const unreadCount = demoNotifications.filter(n => !n.read).length;

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

    const profileHref = dbRole === "student" ? route("student.profile") : route("profile.index");
    const displayHeaderTitle = headerTitle || "Dashboard";

    const roleLabels = {
        student: "Siswa", "school-admin": "Admin Sekolah", teacher: "Guru",
        "super-admin": "Super Admin", guidance: "Guru BK", finance: "Keuangan",
        department: "Jurusan", academic: "Akademik", librarian: "Perpustakawan",
        career: "BKK", admission: "PPDB",
    };

    // Close profile dropdown on outside click
    useEffect(() => {
        const handler = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false);
            if (notifRef.current && !notifRef.current.contains(e.target)) setNotifOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    // Responsive sidebar
    useEffect(() => {
        const handler = () => {
            if (window.innerWidth >= 768) setSidebarOpen(true);
            else setSidebarOpen(false);
        };
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, []);

    return (
        <div className="min-h-screen flex bg-gray-50">
            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-20 md:hidden transition-opacity"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* ─── Sidebar ────────────────────────────────────────────────────── */}
            <aside
                className={`w-[250px] bg-white border-r border-gray-100 flex flex-col fixed h-full z-40 transition-transform duration-300 ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {/* Logo */}
                <div className="px-5 py-5 flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center text-white font-bold text-lg">
                        E
                    </div>
                    <span className="text-lg font-semibold text-gray-900">EduSpace</span>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-3 py-4 overflow-y-auto">
                    <p className="px-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-3">
                        Main Menu
                    </p>
                    <ul className="space-y-1">
                        {sidebarItems.map((item, index) => {
                            const isActive =
                                route().current(item.route) ||
                                route().current(item.route + ".*");

                            return (
                                <li key={index}>
                                    <Link
                                        href={route(item.route)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                                            isActive
                                                ? "bg-primary-500 text-white"
                                                : "text-gray-600 hover:bg-gray-100"
                                        }`}
                                    >
                                        <span className={isActive ? "text-white" : "text-gray-400"}>
                                            {React.cloneElement(item.icon, { className: "w-5 h-5" })}
                                        </span>
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Sidebar Footer */}
                <div className="px-3 py-4 border-t border-gray-100">
                    <p className="px-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-3">
                        Settings
                    </p>
                    <ul className="space-y-1">
                        <li>
                            <Link
                                href={route("settings.index")}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 transition-all"
                            >
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Pengaturan
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route("logout")}
                                method="post"
                                as="button"
                                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-all"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                Keluar
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>

            {/* ─── Main Content Area ──────────────────────────────────────────── */}
            <div
                className="flex-1 flex flex-col min-h-screen transition-all duration-300"
                style={{ marginLeft: sidebarOpen && window.innerWidth >= 768 ? "250px" : "0" }}
            >
                {/* ─── Header ─────────────────────────────────────────────────── */}
                <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
                    <div className="flex items-center gap-3">
                        {/* Sidebar Toggle */}
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                            <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6.016 3C5.25148 2.99996 4.51585 3.29233 3.95958 3.81728C3.40331 4.34224 3.06853 5.06011 3.02368 5.824L3.01868 6V18C3.01864 18.7652 3.31075 19.5015 3.83524 20.0583C4.35974 20.615 5.07697 20.9501 5.84019 20.995L6.016 21H18.0054C18.77 21 19.5056 20.7077 20.0619 20.1827C20.6181 19.6578 20.953 18.9399 20.9978 18.176L21.0028 18V6C21.0028 5.23479 20.7107 4.49849 20.1862 3.94174C19.6617 3.38499 18.9445 3.04989 18.1813 3.005L18.0054 3H6.016ZM9.01343 5H18.0054C18.2502 5.00003 18.4864 5.08996 18.6692 5.25272C18.8521 5.41547 18.9689 5.63975 18.9976 5.883L19.0046 6V18C19.0045 18.2449 18.9147 18.4813 18.7521 18.6644C18.5894 18.8474 18.3654 18.9643 18.1223 18.993L18.0054 19H9.01343V5ZM12.3035 9.293C12.1314 9.46519 12.0281 9.69429 12.0128 9.93732C11.9976 10.1803 12.0714 10.4206 12.2205 10.613L12.3035 10.707L13.5943 12L12.3035 13.293C12.1314 13.4652 12.0281 13.6943 12.0128 13.9373C11.9976 14.1803 12.0714 14.4206 12.2205 14.613L12.3035 14.707C12.4755 14.8792 12.7044 14.9826 12.9472 14.9979C13.19 15.0132 13.4301 14.9393 13.6223 14.79L13.7162 14.707L15.7144 12.707C15.8865 12.5348 15.9898 12.3057 16.0051 12.0627C16.0203 11.8197 15.9465 11.5794 15.7974 11.387L15.7144 11.293L13.7162 9.293C13.5289 9.10553 13.2748 9.00021 13.0098 9.00021C12.7449 9.00021 12.4908 9.10553 12.3035 9.293Z" />
                            </svg>
                        </button>
                        <h1 className="text-base font-semibold text-gray-900">
                            {displayHeaderTitle}
                        </h1>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        {/* Role Badge */}
                        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg">
                            <span className="text-xs text-gray-500 font-medium">
                                {roleLabels[mappedRole] || mappedRole}
                            </span>
                        </div>

                        {/* Notification Dropdown */}
                        <div className="relative" ref={notifRef}>
                            <button onClick={() => setNotifOpen(!notifOpen)} className="relative w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
                                {unreadCount > 0 && <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500" />}
                            </button>
                            {notifOpen && (
                                <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-lg border border-gray-100 z-50 overflow-hidden animation-scale-in">
                                    <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                                        <h3 className="text-sm font-semibold text-gray-900">Notifikasi</h3>
                                        {unreadCount > 0 && <span className="text-[10px] font-semibold bg-red-50 text-red-500 px-2 py-0.5 rounded-full">{unreadCount} baru</span>}
                                    </div>
                                    <div className="max-h-80 overflow-y-auto">
                                        {demoNotifications.map(n => (
                                            <div key={n.id} className={`px-4 py-3 border-b border-gray-50 hover:bg-gray-50 transition cursor-pointer ${!n.read ? 'bg-blue-50/30' : ''}`}>
                                                <div className="flex items-start gap-3">
                                                    <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${!n.read ? 'bg-primary-500' : 'bg-transparent'}`} />
                                                    <div className="flex-1 min-w-0">
                                                        <p className={`text-sm ${!n.read ? 'font-semibold text-gray-900' : 'font-medium text-gray-700'}`}>{n.title}</p>
                                                        <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{n.message}</p>
                                                        <p className="text-[10px] text-gray-400 mt-1">{n.time}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="px-4 py-2.5 border-t border-gray-100 text-center">
                                        <button onClick={() => setNotifOpen(false)} className="text-xs font-medium text-primary-500 hover:text-primary-600 transition">Tandai semua sudah dibaca</button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* User Dropdown */}
                        <div className="relative" ref={profileRef}>
                            <button
                                onClick={() => setProfileOpen(!profileOpen)}
                                className="flex items-center gap-3 hover:bg-gray-50 rounded-lg px-2 py-1.5 transition"
                            >
                                <img
                                    src={`https://ui-avatars.com/api/?name=${auth?.user?.name || "A"}&background=2563eb&color=ffffff&bold=true&size=36`}
                                    alt="Avatar"
                                    className="w-9 h-9 rounded-full object-cover border border-gray-200"
                                />
                                <div className="text-left hidden sm:block">
                                    <p className="text-sm font-medium text-gray-900 leading-none">
                                        {auth?.user?.name || "Pengguna"}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        {auth?.user?.email || "-"}
                                    </p>
                                </div>
                                <svg className="w-4 h-4 text-gray-400 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {profileOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50 animation-scale-in">
                                    <Link
                                        href={profileHref}
                                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        Profile
                                    </Link>
                                    <hr className="my-1 border-gray-100" />
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                        className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                        Logout
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* ─── Page Content ───────────────────────────────────────────── */}
                <main className="flex-1 p-6 overflow-x-hidden">
                    <div className="max-w-7xl mx-auto animation-slide-up">
                        {children}
                    </div>
                </main>

                {/* ─── Footer ─────────────────────────────────────────────────── */}
                <footer className="bg-white border-t border-gray-100 px-6 py-4 flex items-center justify-between">
                    <span className="text-xs text-gray-400">© EduSpace. All rights reserved</span>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-xs text-gray-400 hover:text-primary-500 transition">
                            Terms of service
                        </a>
                        <a href="#" className="text-xs text-gray-400 hover:text-primary-500 transition">
                            Help & Support
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
}
