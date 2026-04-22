import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import Modal from "@/Components/ui/Modal";

export default function Announcements({ announcements }) {
    const [detailItem, setDetailItem] = useState(null);

    const apiItems = Array.isArray(announcements)
        ? announcements
        : Array.isArray(announcements?.data)
          ? announcements.data
          : [];

    const fallbackItems = [
        {
            id: 1,
            title: "Ujian Tengah Semester 2026",
            content:
                "Persiapkan diri Anda untuk UTS Genap. Jadwal lengkap tersedia di menu kalender. Pastikan semua materi yang sudah diajarkan dari awal semester telah dipelajari dengan baik. Informasi lebih lanjut mengenai teknis pelaksanaan akan disampaikan oleh masing-masing guru pengajar.",
            type: "urgent",
            author: "Admin Sekolah",
            category: "Akademik",
            created_at: "2026-04-01",
        },
        {
            id: 2,
            title: "Libur Hari Raya",
            content:
                "Sekolah diliburkan mulai 28 Maret s/d 5 April 2026. Selama masa libur, siswa diharapkan tetap menjaga protokol kesehatan dan mengerjakan tugas yang telah diberikan masing-masing guru mata pelajaran.",
            type: "info",
            author: "Kepala Sekolah",
            category: "Umum",
            created_at: "2026-03-25",
        },
        {
            id: 3,
            title: "Pendaftaran Ekskul Semester Genap",
            content:
                "Pendaftaran ekskul semester genap dibuka mulai 10 April 2026. Kunjungi ruang OSIS atau akses formulir online melalui portal sekolah. Tersedia 15 pilihan ekskul mulai dari olahraga, seni, hingga teknologi.",
            type: "info",
            author: "Koordinator OSIS",
            category: "Kegiatan",
            created_at: "2026-03-20",
        },
        {
            id: 4,
            title: "Pemeliharaan Lab Komputer",
            content:
                "Lab Komputer 1 dan 2 akan ditutup sementara pada 15-16 April 2026 untuk pemeliharaan rutin. Seluruh kegiatan pratikum akan dilaksanakan di Lab 3 selama periode tersebut.",
            type: "warning",
            author: "Admin IT",
            category: "Fasilitas",
            created_at: "2026-03-18",
        },
    ];

    const items = apiItems.length > 0 ? apiItems : fallbackItems;

    const typeConfig = {
        urgent: {
            label: "Penting",
            bg: "bg-red-50",
            text: "text-red-600",
            border: "border-red-100",
            accent: "border-l-red-500",
        },
        warning: {
            label: "Perhatian",
            bg: "bg-amber-50",
            text: "text-amber-600",
            border: "border-amber-100",
            accent: "border-l-amber-500",
        },
        info: {
            label: "Info",
            bg: "bg-blue-50",
            text: "text-blue-600",
            border: "border-blue-100",
            accent: "border-l-blue-500",
        },
    };

    return (
        <DashboardLayout headerTitle="Pengumuman">
            <Head title="Pengumuman" />
            <div className="space-y-6">
                {/* Header */}
                <div className="bg-white rounded-2xl p-5 border border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                            <svg
                                className="w-5 h-5 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
                                />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">
                                Pusat Informasi
                            </h2>
                            <p className="text-base text-gray-500">
                                Berita terbaru dan pengumuman resmi sekolah.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Announcements List */}
                {items.length === 0 ? (
                    <div className="bg-white rounded-2xl border border-gray-100 p-16 text-center">
                        <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                            <svg
                                className="w-6 h-6 text-gray-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535"
                                />
                            </svg>
                        </div>
                        <p className="text-base font-medium text-gray-700">
                            Belum ada pengumuman
                        </p>
                        <p className="text-base text-gray-400 mt-1">
                            Informasi terbaru sekolah akan tampil di sini.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {items.map((ann) => {
                            const tc = typeConfig[ann.type] || typeConfig.info;
                            return (
                                <div
                                    key={ann.id}
                                    onClick={() => setDetailItem(ann)}
                                    className={`bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-sm transition-all cursor-pointer border-l-4 ${tc.accent} group`}
                                >
                                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-2">
                                        <div className="flex items-center gap-2">
                                            <span
                                                className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${tc.bg} ${tc.text} ${tc.border}`}
                                            >
                                                {tc.label}
                                            </span>
                                            {ann.category && (
                                                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100">
                                                    {ann.category}
                                                </span>
                                            )}
                                        </div>
                                        <span className="text-sm text-gray-400">
                                            {new Date(
                                                ann.created_at,
                                            ).toLocaleDateString("id-ID", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            })}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                                        {ann.title}
                                    </h3>
                                    <p className="text-base text-gray-500 leading-relaxed line-clamp-3">
                                        {ann.content}
                                    </p>
                                    <div className="mt-3 pt-3 border-t border-gray-50 flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-base text-gray-400">
                                            <svg
                                                className="w-3.5 h-3.5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={1.5}
                                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                                />
                                            </svg>
                                            <span>{ann.author || "Admin"}</span>
                                        </div>
                                        <span className="text-sm font-medium text-primary-500 group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                                            Baca selengkapnya{" "}
                                            <svg
                                                className="w-3 h-3"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Detail Modal */}
            <Modal
                open={!!detailItem}
                onClose={() => setDetailItem(null)}
                title="Detail Pengumuman"
                maxWidth="max-w-2xl"
            >
                {detailItem && (
                    <>
                        <div className="space-y-5">
                            <p className="text-sm text-gray-400">
                                {detailItem.category || "Umum"} ·{" "}
                                {new Date(
                                    detailItem.created_at,
                                ).toLocaleDateString("id-ID", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </p>

                            <div>
                                <h2 className="text-xl font-semibold text-primary-600 mb-3">
                                    {detailItem.title}
                                </h2>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-7 h-7 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                                            <svg
                                                className="w-3.5 h-3.5 text-primary-500"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={1.5}
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                                />
                                            </svg>
                                        </div>
                                        <span className="text-base text-gray-700">
                                            {detailItem.author || "Admin"}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2.5">
                                        <div className="w-7 h-7 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                                            <svg
                                                className="w-3.5 h-3.5 text-primary-500"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={1.5}
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                                                />
                                            </svg>
                                        </div>
                                        <span className="text-base text-gray-700">
                                            Dipublikasikan{" "}
                                            {new Date(
                                                detailItem.created_at,
                                            ).toLocaleDateString("id-ID", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            })}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2.5">
                                        <div className="w-7 h-7 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                                            <svg
                                                className="w-3.5 h-3.5 text-primary-500"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={1.5}
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M9 12.75l2.25 2.25L15 9.75"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span
                                                className={`text-sm font-medium px-2.5 py-1 rounded-full border ${(typeConfig[detailItem.type] || typeConfig.info).bg} ${(typeConfig[detailItem.type] || typeConfig.info).text} ${(typeConfig[detailItem.type] || typeConfig.info).border}`}
                                            >
                                                {
                                                    (
                                                        typeConfig[
                                                            detailItem.type
                                                        ] || typeConfig.info
                                                    ).label
                                                }
                                            </span>
                                            {detailItem.category && (
                                                <span className="text-sm font-medium px-2.5 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100">
                                                    {detailItem.category}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-base font-semibold text-gray-900 mb-2">
                                    Isi pengumuman
                                </h4>
                                <div className="h-px bg-gray-100 mb-3" />
                                <p className="text-base text-gray-600 leading-relaxed whitespace-pre-wrap">
                                    {detailItem.content}
                                </p>
                            </div>
                        </div>

                        <div className="-mx-6 mt-5 px-6 py-4 border-t border-gray-100 flex justify-between items-center bg-gray-50">
                            <button
                                onClick={() => setDetailItem(null)}
                                className="px-4 py-2 text-base  transition bg-red-500 text-white hover:bg-red-600 rounded-xl"
                            >
                                Tutup
                            </button>
                            <button
                                onClick={() => setDetailItem(null)}
                                className="px-5 py-2.5 bg-primary-500 text-white text-sm font-semibold rounded-xl hover:bg-primary-600 transition"
                            >
                                Oke, mengerti
                            </button>
                        </div>
                    </>
                )}
            </Modal>
        </DashboardLayout>
    );
}
