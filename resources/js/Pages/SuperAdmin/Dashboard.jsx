import React from "react";
import { Head, Link } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";

export default function Dashboard({ stats, auth }) {
    const userName = auth?.user?.name || "Admin";
    const firstName = userName.split(" ")[0];

    return (
        <DashboardLayout headerTitle="Dashboard">
            <Head title="Super Admin Dashboard" />
            <div className="space-y-6">
                {/* Welcome */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">Selamat Datang, {firstName}! 👋</h2>
                    <p className="text-gray-500 text-sm">Pantau semua sekolah dan kelola sistem secara keseluruhan.</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", value: stats?.total_schools || "12", label: "Total Sekolah", color: "bg-primary-50", iconColor: "text-primary-500" },
                        { icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", value: stats?.total_users || "2,450", label: "Total Pengguna", color: "bg-blue-50", iconColor: "text-blue-500" },
                        { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", value: stats?.active_licenses || "10", label: "Lisensi Aktif", color: "bg-green-50", iconColor: "text-green-500", badge: { label: "Aktif", className: "bg-green-50 text-green-600" } },
                        { icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", value: stats?.uptime || "99.9%", label: "System Uptime", color: "bg-purple-50", iconColor: "text-purple-500" },
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

                {/* Schools Table */}
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                    <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">Daftar Sekolah</h3>
                        <Link href={route("super-admin.schools")} className="text-sm text-primary-500 hover:text-primary-600 font-medium">Kelola Semua</Link>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Nama Sekolah</th>
                                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Kota</th>
                                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Siswa</th>
                                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: "SMK Negeri 1 Jakarta", city: "Jakarta", students: 850, status: "Aktif" },
                                    { name: "SMA Harapan Bangsa", city: "Bandung", students: 620, status: "Aktif" },
                                    { name: "SMK Tekno Mandiri", city: "Surabaya", students: 430, status: "Trial" },
                                ].map((school, idx) => (
                                    <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50 transition">
                                        <td className="px-5 py-3.5 text-sm font-medium text-gray-900">{school.name}</td>
                                        <td className="px-5 py-3.5 text-sm text-gray-600">{school.city}</td>
                                        <td className="px-5 py-3.5 text-sm text-gray-600">{school.students}</td>
                                        <td className="px-5 py-3.5">
                                            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${school.status === "Aktif" ? "bg-green-50 text-green-600" : "bg-amber-50 text-amber-600"}`}>
                                                {school.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
