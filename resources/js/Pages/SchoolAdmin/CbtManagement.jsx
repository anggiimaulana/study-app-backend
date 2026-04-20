import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import Modal from "@/Components/ui/Modal";

export default function CbtManagement({ exams }) {
    const [filter, setFilter] = useState("all");
    const [detailExam, setDetailExam] = useState(null);

    const dummyExams = [
        {
            id: 1,
            title: "UTS Pemrograman Web",
            subject: "Pemrograman Web",
            status: "active",
            total_questions: 40,
            duration: 90,
            classrooms: ["X RPL 1", "X RPL 2"],
            participants: 62,
            avg_score: 78,
            teacher: "Pak Budi",
            start_date: "2026-04-20",
            end_date: "2026-04-20",
        },
        {
            id: 2,
            title: "UTS Basis Data",
            subject: "Basis Data",
            status: "active",
            total_questions: 35,
            duration: 60,
            classrooms: ["XI RPL 1", "XI RPL 2"],
            participants: 58,
            avg_score: 72,
            teacher: "Pak Ahmad",
            start_date: "2026-04-21",
            end_date: "2026-04-21",
        },
        {
            id: 3,
            title: "Latihan Matematika Dasar",
            subject: "Matematika",
            status: "draft",
            total_questions: 25,
            duration: 45,
            classrooms: ["X RPL 1"],
            participants: 0,
            avg_score: 0,
            teacher: "Bu Sari",
            start_date: "2026-04-25",
            end_date: "2026-04-25",
        },
        {
            id: 4,
            title: "UAS Jaringan Komputer",
            subject: "Jaringan Komputer",
            status: "archived",
            total_questions: 50,
            duration: 120,
            classrooms: ["XII TKJ 1", "XII TKJ 2", "XII TKJ 3"],
            participants: 89,
            avg_score: 81,
            teacher: "Pak Rudi",
            start_date: "2026-03-15",
            end_date: "2026-03-15",
        },
    ];

    const items = exams?.length > 0 ? exams : dummyExams;
    const filtered =
        filter === "all" ? items : items.filter((e) => e.status === filter);

    const statusMap = {
        active: {
            label: "Aktif",
            bg: "bg-green-50",
            text: "text-green-600",
            border: "border-green-100",
            dot: "bg-green-500",
        },
        draft: {
            label: "Draft",
            bg: "bg-amber-50",
            text: "text-amber-600",
            border: "border-amber-100",
            dot: "bg-amber-500",
        },
        archived: {
            label: "Selesai",
            bg: "bg-gray-50",
            text: "text-gray-500",
            border: "border-gray-200",
            dot: "bg-gray-400",
        },
    };

    return (
        <DashboardLayout headerTitle="Manajemen CBT">
            <Head title="Manajemen CBT" />
            <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                            <svg
                                className="w-5 h-5 text-purple-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                                />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">
                                Computer Based Testing
                            </h2>
                            <p className="text-sm text-gray-500">
                                Kelola ujian digital untuk semua kelas dan mata
                                pelajaran.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 shrink-0">
                        {["all", "active", "draft", "archived"].map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-3 py-2 rounded-lg text-xs font-medium border transition ${filter === f ? "bg-primary-500 text-white border-primary-500" : "bg-white text-gray-600 border-gray-200"}`}
                            >
                                {f === "all"
                                    ? "Semua"
                                    : statusMap[f]?.label || f}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: "Total Ujian", value: items.length },
                        {
                            label: "Aktif",
                            value: items.filter((e) => e.status === "active")
                                .length,
                        },
                        {
                            label: "Total Peserta",
                            value: items.reduce(
                                (a, e) => a + (e.participants || 0),
                                0,
                            ),
                        },
                        {
                            label: "Rata-rata Nilai",
                            value: Math.round(
                                items
                                    .filter((e) => e.avg_score > 0)
                                    .reduce((a, e) => a + e.avg_score, 0) /
                                    (items.filter((e) => e.avg_score > 0)
                                        .length || 1),
                            ),
                        },
                    ].map((s, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl border border-gray-100 p-4"
                        >
                            <p className="text-xs text-gray-400 mb-1">
                                {s.label}
                            </p>
                            <p className="text-xl font-bold text-gray-900">
                                {s.value}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50">
                                    {[
                                        "Nama Ujian",
                                        "Mata Pelajaran",
                                        "Guru",
                                        "Soal",
                                        "Durasi",
                                        "Kelas",
                                        "Peserta",
                                        "Status",
                                        "",
                                    ].map((h) => (
                                        <th
                                            key={h}
                                            className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide"
                                        >
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((e) => {
                                    const st =
                                        statusMap[e.status] || statusMap.draft;
                                    return (
                                        <tr
                                            key={e.id}
                                            className="border-b border-gray-50 hover:bg-gray-50 transition"
                                        >
                                            <td className="px-5 py-3.5 text-sm font-medium text-gray-900">
                                                {e.title}
                                            </td>
                                            <td className="px-5 py-3.5 text-xs text-gray-500">
                                                {e.subject}
                                            </td>
                                            <td className="px-5 py-3.5 text-xs text-gray-500">
                                                {e.teacher}
                                            </td>
                                            <td className="px-5 py-3.5 text-xs font-semibold text-gray-900">
                                                {e.total_questions}
                                            </td>
                                            <td className="px-5 py-3.5 text-xs text-gray-500">
                                                {e.duration} mnt
                                            </td>
                                            <td className="px-5 py-3.5">
                                                <div className="flex flex-wrap gap-1">
                                                    {(e.classrooms || []).map(
                                                        (c, i) => (
                                                            <span
                                                                key={i}
                                                                className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded"
                                                            >
                                                                {c}
                                                            </span>
                                                        ),
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-5 py-3.5 text-xs font-semibold text-gray-900">
                                                {e.participants}
                                            </td>
                                            <td className="px-5 py-3.5">
                                                <span
                                                    className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${st.bg} ${st.text} ${st.border}`}
                                                >
                                                    <span
                                                        className={`w-1.5 h-1.5 rounded-full ${st.dot}`}
                                                    />
                                                    {st.label}
                                                </span>
                                            </td>
                                            <td className="px-5 py-3.5">
                                                <button
                                                    onClick={() =>
                                                        setDetailExam(e)
                                                    }
                                                    className="text-xs font-medium text-primary-500 hover:text-primary-600"
                                                >
                                                    Detail
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <Modal
                open={!!detailExam}
                onClose={() => setDetailExam(null)}
                title="Detail Ujian"
                maxWidth="max-w-2xl"
            >
                {detailExam && (
                    <>
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-gray-900">
                                {detailExam.title}
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {[
                                    { l: "Mapel", v: detailExam.subject },
                                    { l: "Guru", v: detailExam.teacher },
                                    {
                                        l: "Soal",
                                        v: detailExam.total_questions,
                                    },
                                    {
                                        l: "Durasi",
                                        v: detailExam.duration + " menit",
                                    },
                                    {
                                        l: "Peserta",
                                        v: detailExam.participants,
                                    },
                                    {
                                        l: "Rata-rata",
                                        v: detailExam.avg_score || "-",
                                    },
                                ].map((info, i) => (
                                    <div
                                        key={i}
                                        className="p-3 bg-gray-50 rounded-xl border border-gray-100"
                                    >
                                        <p className="text-[10px] text-gray-400 uppercase mb-1">
                                            {info.l}
                                        </p>
                                        <p className="text-sm font-semibold text-gray-900">
                                            {info.v}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase mb-2">
                                    KELAS PESERTA
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {(detailExam.classrooms || []).map(
                                        (c, i) => (
                                            <span
                                                key={i}
                                                className="text-xs bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full border border-blue-100"
                                            >
                                                {c}
                                            </span>
                                        ),
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="-mx-6 mt-5 px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-end">
                            <button
                                onClick={() => setDetailExam(null)}
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
