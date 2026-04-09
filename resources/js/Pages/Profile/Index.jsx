import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";

const fallbackAvatar = (name) =>
    `https://ui-avatars.com/api/?name=${encodeURIComponent(name || "Pengguna")}&background=2563eb&color=ffffff&bold=true`;

export default function ProfileIndex({ user }) {
    const [profile, setProfile] = useState(user || null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        const loadProfile = async () => {
            try {
                const response = await fetch("/api/v1/profile", {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        Accept: "application/json",
                    },
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error("Gagal memuat profil");
                }

                const payload = await response.json();
                setProfile(payload?.data || user || null);
            } catch (error) {
                if (error.name !== "AbortError") {
                    setProfile(user || null);
                }
            } finally {
                setLoading(false);
            }
        };

        loadProfile();

        return () => controller.abort();
    }, [user]);

    const displayName = profile?.name || "Pengguna";
    const avatar =
        profile?.avatar_url ||
        profile?.photo_url ||
        fallbackAvatar(displayName);
    const student = profile?.student || {};

    const profileCards = [
        {
            label: "Kelas",
            value: student.classroom?.name || "Belum ditetapkan",
        },
        { label: "Jurusan", value: student.major?.name || "Belum ditetapkan" },
        { label: "Sekolah", value: profile?.school?.name || "Belum tersedia" },
        { label: "Status", value: "Aktif" },
    ];

    return (
        <DashboardLayout
            headerTitle="Profil Akun"
            headerSubtitle="Data profil ditarik langsung dari endpoint sesi aktif agar selalu mengikuti keadaan terbaru."
            headerBadge="Profil"
            backHref={route("student.dashboard")}
            backLabel="Kembali ke Dashboard Utama"
        >
            <Head title="Profil Akun" />

            <div className="space-y-6">
                <section className="rounded-4xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                    <div className="h-36 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.35),transparent_45%),linear-gradient(135deg,#2563eb_0%,#4f46e5_55%,#0f172a_100%)]" />

                    <div className="px-6 lg:px-8 pb-8 -mt-14">
                        <div className="flex flex-col md:flex-row md:items-end gap-6">
                            <div className="relative w-28 h-28 lg:w-32 lg:h-32 rounded-[30px] border-4 border-white shadow-2xl overflow-hidden bg-white shrink-0">
                                {loading ? (
                                    <div className="w-full h-full animate-pulse bg-slate-100" />
                                ) : (
                                    <img
                                        src={avatar}
                                        alt={displayName}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>

                            <div className="flex-1 pb-2">
                                <p className="text-xs font-black uppercase tracking-[0.28em] text-slate-400 mb-2">
                                    Akun Aktif
                                </p>
                                <h1 className="text-3xl lg:text-4xl font-black text-slate-900 font-outfit tracking-tight">
                                    {displayName}
                                </h1>
                                <p className="text-slate-500 mt-2 max-w-2xl leading-relaxed">
                                    Profil ini memperlihatkan data sesi aktif,
                                    identitas sekolah, dan relasi siswa yang
                                    terkait langsung dari server.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                            {profileCards.map((card) => (
                                <div
                                    key={card.label}
                                    className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5"
                                >
                                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-400">
                                        {card.label}
                                    </p>
                                    <p className="mt-2 text-lg font-bold text-slate-900">
                                        {card.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="rounded-4xl border border-slate-200 bg-white shadow-sm p-6 lg:p-7">
                        <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-400 mb-2">
                            Informasi Personal
                        </p>
                        <h3 className="text-2xl font-black text-slate-900 font-outfit">
                            Detail dasar akun
                        </h3>

                        <div className="mt-6 space-y-4">
                            <div className="rounded-3xl border border-slate-100 bg-slate-50/80 p-4">
                                <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-400">
                                    Nama Lengkap
                                </p>
                                <p className="mt-2 font-bold text-slate-900">
                                    {displayName}
                                </p>
                            </div>
                            <div className="rounded-3xl border border-slate-100 bg-slate-50/80 p-4">
                                <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-400">
                                    Email
                                </p>
                                <p className="mt-2 font-bold text-slate-900">
                                    {profile?.email || "-"}
                                </p>
                            </div>
                            <div className="rounded-3xl border border-slate-100 bg-slate-50/80 p-4">
                                <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-400">
                                    NISN
                                </p>
                                <p className="mt-2 font-bold text-slate-900">
                                    {student.nisn || "-"}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-4xl border border-slate-200 bg-white shadow-sm p-6 lg:p-7">
                        <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-400 mb-2">
                            Keamanan & Sesi
                        </p>
                        <h3 className="text-2xl font-black text-slate-900 font-outfit">
                            Status sesi terkini
                        </h3>

                        <div className="mt-6 space-y-4">
                            <div className="rounded-3xl border border-slate-100 bg-slate-50/80 p-4">
                                <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-400">
                                    Status Akun
                                </p>
                                <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-black uppercase tracking-[0.24em] text-emerald-700">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                    Aktif
                                </p>
                            </div>
                            <div className="rounded-3xl border border-slate-100 bg-slate-50/80 p-4">
                                <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-400">
                                    Sekolah
                                </p>
                                <p className="mt-2 font-bold text-slate-900">
                                    {profile?.school?.name || "Belum tersedia"}
                                </p>
                            </div>
                            <div className="rounded-3xl border border-slate-100 bg-slate-50/80 p-4">
                                <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-400">
                                    Terakhir Diperbarui
                                </p>
                                <p className="mt-2 font-bold text-slate-900">
                                    {profile?.updated_at
                                        ? new Date(
                                              profile.updated_at,
                                          ).toLocaleDateString("id-ID", {
                                              year: "numeric",
                                              month: "long",
                                              day: "numeric",
                                          })
                                        : "-"}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </DashboardLayout>
    );
}
