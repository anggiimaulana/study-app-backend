import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";

export default function Dashboard() {
    const { auth } = usePage().props;
    const userName = auth?.user?.name || "Staff";
    const firstName = userName.split(" ")[0];

    const dbRole = auth?.user?.role || "staff";
    const roleLabels = {
        admin_sekolah: "Admin Sekolah", guru_bk: "Guru BK", guru: "Guru",
        siswa: "Siswa", keuangan: "Keuangan", jurusan: "Jurusan",
        akademik: "Akademik", perpustakawan: "Perpustakawan", bkk: "BKK",
        ppdb: "PPDB", super_admin: "Super Admin",
    };
    const roleLabel = roleLabels[dbRole] || dbRole;

    return (
        <DashboardLayout headerTitle="Dashboard">
            <Head title={`Dashboard ${roleLabel}`} />
            <div className="space-y-6">
                {/* Welcome */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">Selamat Datang, {firstName}! 👋</h2>
                    <p className="text-gray-500 text-sm">Anda login sebagai <span className="font-medium text-primary-600">{roleLabel}</span>. Gunakan menu di samping untuk navigasi.</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z", value: "—", label: "Total Data", color: "bg-primary-50", iconColor: "text-primary-500" },
                        { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", value: "—", label: "Aktivitas Hari Ini", color: "bg-blue-50", iconColor: "text-blue-500" },
                        { icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", value: "—", label: "Laporan", color: "bg-green-50", iconColor: "text-green-500" },
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

                {/* Info Card */}
                <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6">
                    <h3 className="font-semibold text-blue-800 mb-2">ℹ️ Informasi</h3>
                    <p className="text-sm text-blue-700">
                        Dashboard ini akan menampilkan data operasional sesuai modul Anda.
                        Gunakan menu navigasi di samping untuk mengakses fitur-fitur yang tersedia.
                    </p>
                </div>
            </div>
        </DashboardLayout>
    );
}
