import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import Modal from "@/Components/ui/Modal";

export default function Information({ announcements }) {
    const [detailItem, setDetailItem] = useState(null);
    const items =
        announcements?.length > 0
            ? announcements
            : [
                  {
                      id: 1,
                      title: "Rapat Dewan Guru - Evaluasi Semester",
                      content:
                          "Seluruh guru wajib hadir pada rapat evaluasi semester genap tanggal 25 April 2026 pukul 13:00 di Aula Utama. Harap menyiapkan laporan kemajuan masing-masing.",
                      type: "urgent",
                      author: "Kepala Sekolah",
                      category: "Rapat",
                      created_at: "2026-04-16",
                  },
                  {
                      id: 2,
                      title: "Pengumpulan Silabus Semester Ganjil",
                      content:
                          "Batas akhir pengumpulan silabus semester ganjil 2026/2027 adalah 30 April 2026. Serahkan ke bagian kurikulum.",
                      type: "info",
                      author: "Wakakurikulum",
                      category: "Kurikulum",
                      created_at: "2026-04-14",
                  },
                  {
                      id: 3,
                      title: "Pelatihan Google Workspace",
                      content:
                          "Pelatihan penggunaan Google Workspace for Education akan diadakan tanggal 20 April 2026. Tersedia sertifikat bagi peserta.",
                      type: "info",
                      author: "Admin IT",
                      category: "Pelatihan",
                      created_at: "2026-04-12",
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
        info: {
            label: "INFO",
            bg: "bg-blue-50",
            text: "text-blue-600",
            border: "border-blue-100",
            accent: "border-l-blue-500",
        },
    };

    return (
        <DashboardLayout headerTitle="Informasi & Pengumuman">
            <Head title="Informasi" />
            <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
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
                                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                                />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">
                                Informasi Internal
                            </h2>
                            <p className="text-sm text-gray-500">
                                Pengumuman internal khusus untuk guru dan staf
                                pengajar.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    {items.map((ann) => {
                        const tc = typeConfig[ann.type] || typeConfig.info;
                        return (
                            <div
                                key={ann.id}
                                onClick={() => setDetailItem(ann)}
                                className={`bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-sm transition cursor-pointer border-l-4 ${tc.accent} group`}
                            >
                                <div className="flex justify-between items-start gap-2 mb-2">
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
                                    <span className="text-xs text-gray-400 flex items-center gap-1.5">
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
                                        {ann.author}
                                    </span>
                                    <span className="text-xs font-medium text-primary-500 group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                                        Baca{" "}
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

            <Modal
                open={!!detailItem}
                onClose={() => setDetailItem(null)}
                title="Detail Pengumuman"
                maxWidth="max-w-2xl"
            >
                {detailItem && (
                    <>
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-gray-900">
                                {detailItem.title}
                            </h2>
                            <div className="flex items-center gap-3 text-xs text-gray-400">
                                <span>{detailItem.author}</span>
                                <span>·</span>
                                <span>
                                    {new Date(
                                        detailItem.created_at,
                                    ).toLocaleDateString("id-ID", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">
                                {detailItem.content}
                            </p>
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
