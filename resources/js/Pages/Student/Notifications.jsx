import React, { useMemo, useState } from "react";
import { Head } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import Modal from "@/Components/ui/Modal";

const formatDateTime = (value) => {
    if (!value) return "-";

    return new Intl.DateTimeFormat("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    }).format(new Date(value));
};

const buildInitialNotifications = () => [
    {
        id: 1,
        type: "call",
        title: "Panggilan Konseling Baru",
        teacherName: "Ibu Rani",
        role: "Guru BK",
        message:
            "Check-in harian menunjukkan penurunan mood selama 3 hari terakhir.",
        detail: "Kami ingin memastikan kamu dalam kondisi yang aman dan nyaman. Silakan konfirmasi waktu yang sesuai.",
        schedule: "Selasa, 10:30 WIB",
        status: "Menunggu konfirmasi siswa",
        action: "Disarankan hadir lebih awal untuk sesi awal.",
        createdAt: "2026-04-08T08:45:00Z",
        read: false,
    },
    {
        id: 2,
        type: "call",
        title: "Tindak Lanjut Konseling",
        teacherName: "Pak Dimas",
        role: "Wali Kelas",
        message:
            "Sesi lanjutan sudah dijadwalkan untuk membahas tekanan akademik.",
        detail: "Kami menyiapkan sesi singkat agar kamu dapat menceritakan kendala yang dihadapi.",
        schedule: "Kamis, 13:00 WIB",
        status: "Disetujui",
        action: "Siapkan catatan singkat agar diskusi lebih terarah.",
        createdAt: "2026-04-07T10:15:00Z",
        read: true,
    },
    {
        id: 3,
        type: "announcement",
        title: "Pengumuman Jadwal",
        teacherName: "Sistem Sekolah",
        role: "Notifikasi Akademik",
        message: "Jadwal kelas hari ini sudah menyesuaikan kalender akademik.",
        detail: "Buka halaman jadwal untuk melihat kalender dan detail per tanggal.",
        schedule: "Hari ini",
        status: "Info",
        action: "Klik jadwal untuk melihat detail.",
        createdAt: "2026-04-09T02:00:00Z",
        read: false,
    },
];

const statusTone = (status) => {
    if (status === "Disetujui") return "bg-emerald-100 text-emerald-700";
    if (status === "Selesai") return "bg-blue-100 text-blue-700";
    if (status === "Ditolak") return "bg-rose-100 text-rose-700";
    if (status === "Info") return "bg-slate-100 text-slate-600";
    return "bg-amber-100 text-amber-700";
};

const initials = (name = "S") =>
    name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

export default function Notifications() {
    const [activeFilter, setActiveFilter] = useState("Semua");
    const [selectedNotification, setSelectedNotification] = useState(null);
    const [notifications, setNotifications] = useState(
        buildInitialNotifications(),
    );

    const filteredNotifications = useMemo(() => {
        if (activeFilter === "Semua") return notifications;
        if (activeFilter === "Konseling")
            return notifications.filter((item) => item.type === "call");
        if (activeFilter === "Info")
            return notifications.filter((item) => item.type !== "call");
        return notifications;
    }, [activeFilter, notifications]);

    const markAs = (status) => {
        if (!selectedNotification) return;

        setNotifications((current) =>
            current.map((item) =>
                item.id === selectedNotification.id
                    ? { ...item, status, read: true }
                    : item,
            ),
        );
        setSelectedNotification((current) =>
            current ? { ...current, status, read: true } : current,
        );
    };

    return (
        <DashboardLayout
            headerTitle="Notifikasi"
            headerSubtitle="Pusat panggilan konseling, pengumuman, dan tindak lanjut yang muncul dari aktivitas siswa."
            headerBadge="Pemberitahuan"
            backHref={route("student.dashboard")}
            backLabel="Kembali ke Dashboard Utama"
        >
            <Head title="Notifikasi" />

            <div className="space-y-6">
                <section className="rounded-4xl border border-slate-200 bg-white shadow-sm p-6 lg:p-7">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
                        <div>
                            <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-400 mb-2">
                                Ringkasan
                            </p>
                            <h3 className="text-2xl font-black text-slate-900 font-outfit">
                                Notifikasi yang perlu kamu perhatikan
                            </h3>
                            <p className="text-sm text-slate-500 mt-2">
                                Panggilan konseling dan info akademik
                                ditampilkan di satu halaman agar mudah dipantau.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="rounded-3xl border border-slate-200 bg-slate-50/70 px-4 py-3">
                                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-400">
                                    Belum Dibaca
                                </p>
                                <p className="mt-1 text-2xl font-black text-slate-900 font-outfit">
                                    {
                                        notifications.filter(
                                            (item) => !item.read,
                                        ).length
                                    }
                                </p>
                            </div>
                            <div className="rounded-3xl border border-slate-200 bg-slate-50/70 px-4 py-3">
                                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-400">
                                    Panggilan BK
                                </p>
                                <p className="mt-1 text-2xl font-black text-slate-900 font-outfit">
                                    {
                                        notifications.filter(
                                            (item) => item.type === "call",
                                        ).length
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="rounded-[28px] border border-slate-200 bg-white shadow-sm p-3 overflow-x-auto">
                    <div className="flex min-w-max gap-2">
                        {["Semua", "Konseling", "Info"].map((filter) => (
                            <button
                                key={filter}
                                type="button"
                                onClick={() => setActiveFilter(filter)}
                                className={`rounded-2xl px-5 py-3 text-sm font-bold transition-all ${
                                    activeFilter === filter
                                        ? "bg-slate-900 text-white shadow-lg shadow-slate-900/10"
                                        : "text-slate-500 hover:bg-slate-50"
                                }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredNotifications.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => setSelectedNotification(item)}
                            className={`text-left rounded-[28px] border bg-white shadow-sm p-6 hover:border-blue-200 hover:shadow-md transition-all ${!item.read ? "border-blue-100" : "border-slate-200"}`}
                        >
                            <div className="flex items-start gap-4">
                                <div
                                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black ${item.type === "call" ? "bg-linear-to-tr from-blue-600 to-indigo-600" : "bg-linear-to-tr from-slate-700 to-slate-900"}`}
                                >
                                    {initials(item.teacherName)}
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h4 className="font-black text-slate-900">
                                            {item.title}
                                        </h4>
                                        <span
                                            className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] ${statusTone(item.status)}`}
                                        >
                                            {item.status}
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-400 mt-1">
                                        {item.teacherName} · {item.role}
                                    </p>
                                    <p className="mt-3 text-sm leading-7 text-slate-600">
                                        {item.message}
                                    </p>
                                    <p className="mt-3 text-xs font-black uppercase tracking-[0.24em] text-slate-400">
                                        {formatDateTime(item.createdAt)}
                                    </p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            <Modal
                open={!!selectedNotification}
                onClose={() => setSelectedNotification(null)}
                title="Detail Notifikasi"
                maxWidth="max-w-2xl"
            >
                {selectedNotification && (
                    <>
                        <div className="space-y-5">
                            <h3 className="text-2xl font-black text-slate-900 font-outfit">
                                {selectedNotification.title}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-4">
                                    <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-400">
                                        Pemberi Notifikasi
                                    </p>
                                    <p className="mt-2 font-bold text-slate-900">
                                        {selectedNotification.teacherName}
                                    </p>
                                </div>
                                <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-4">
                                    <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-400">
                                        Jadwal
                                    </p>
                                    <p className="mt-2 font-bold text-slate-900">
                                        {selectedNotification.schedule}
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-4 space-y-3">
                                <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-400">
                                    Alasan
                                </p>
                                <p className="text-sm leading-7 text-slate-600">
                                    {selectedNotification.message}
                                </p>
                            </div>

                            <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-4 space-y-3">
                                <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-400">
                                    Deskripsi Resmi
                                </p>
                                <p className="text-sm leading-7 text-slate-600">
                                    {selectedNotification.detail}
                                </p>
                                <p className="text-sm leading-7 text-slate-600">
                                    <span className="font-bold text-slate-900">
                                        Catatan:
                                    </span>{" "}
                                    {selectedNotification.action}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {["Siap", "Belum nyaman", "Ditunda"].map(
                                    (option) => (
                                        <button
                                            key={option}
                                            type="button"
                                            onClick={() =>
                                                markAs(
                                                    option === "Siap"
                                                        ? "Disetujui"
                                                        : option === "Ditunda"
                                                          ? "Ditunda"
                                                          : "Menunggu konfirmasi siswa",
                                                )
                                            }
                                            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                                        >
                                            {option}
                                        </button>
                                    ),
                                )}
                            </div>
                        </div>
                    </>
                )}
            </Modal>
        </DashboardLayout>
    );
}
