import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import Modal from "@/Components/ui/Modal";

export default function Announcements({ announcements }) {
    const [detailItem, setDetailItem] = useState(null);

    const items =
        announcements?.length > 0
            ? announcements
            : [
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

    const typeConfig = {
        urgent: {
            label: "PENTING",
            bg: "bg-red-50",
            text: "text-red-600",
            border: "border-red-100",
            accent: "border-l-red-500",
        },
        warning: {
            label: "PERHATIAN",
            bg: "bg-amber-50",
            text: "text-amber-600",
            border: "border-amber-100",
            accent: "border-l-amber-500",
        },
        info: {
            label: "INFO",
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
                            <p className="text-sm text-gray-500">
                                Berita terbaru dan pengumuman resmi sekolah.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Announcements List */}
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
                                            className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${tc.bg} ${tc.text} ${tc.border}`}
                                        >
                                            {tc.label}
                                        </span>
                                        {ann.category && (
                                            <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100">
                                                {ann.category}
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-xs text-gray-400">
                                        {new Date(
                                            ann.created_at,
                                        ).toLocaleDateString("id-ID", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </span>
                                </div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                                    {ann.title}
                                </h3>
                                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                                    {ann.content}
                                </p>
                                <div className="mt-3 pt-3 border-t border-gray-50 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-xs text-gray-400">
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
                                    <span className="text-xs font-medium text-primary-500 group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
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
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <span
                                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${(typeConfig[detailItem.type] || typeConfig.info).bg} ${(typeConfig[detailItem.type] || typeConfig.info).text} ${(typeConfig[detailItem.type] || typeConfig.info).border}`}
                                >
                                    {
                                        (
                                            typeConfig[detailItem.type] ||
                                            typeConfig.info
                                        ).label
                                    }
                                </span>
                                {detailItem.category && (
                                    <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100">
                                        {detailItem.category}
                                    </span>
                                )}
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900">
                                {detailItem.title}
                            </h2>
                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                                <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center">
                                    <svg
                                        className="w-4 h-4 text-primary-500"
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
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">
                                        {detailItem.author || "Admin"}
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        {new Date(
                                            detailItem.created_at,
                                        ).toLocaleDateString("id-ID", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-1 h-4 bg-primary-500 rounded-full" />
                                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                        Isi Pengumuman
                                    </span>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                                        {detailItem.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="-mx-6 mt-5 px-6 py-4 border-t border-gray-100 flex justify-end bg-gray-50">
                            <button
                                onClick={() => setDetailItem(null)}
                                className="px-5 py-2 bg-primary-500 text-white text-sm font-semibold rounded-xl hover:bg-primary-600 transition"
                            >
                                Tutup
                            </button>
                        </div>
                    </>
                )}
            </Modal>
        </DashboardLayout>
    );
}
