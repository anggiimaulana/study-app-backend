import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import Modal from "@/Components/ui/Modal";

export default function Tasks({ tasks }) {
    const [filter, setFilter] = useState("all");
    const [detailTask, setDetailTask] = useState(null);

    const dummyTasks = [
        {
            id: 101,
            title: "Laporan Praktikum Jaringan Komputer",
            description:
                "Simulasi Cisco Packet Tracer untuk routing statis dan dinamis. Gunakan topologi star dan ring.",
            due_date: "2026-04-15T23:59:00",
            type: "tugas",
            category: "Technopreneurship",
            session: 8,
            courseCode: "D4SIKC2C",
            subject: { name: "TKJ" },
            teacher: { user: { name: "Bpk. Heru Setiawan" } },
            submissions: [],
            attachments: [
                {
                    name: "Panduan_Praktikum_TKJ.pdf",
                    size: "2.4 MB",
                    type: "PDF",
                },
                {
                    name: "https://youtu.be/example",
                    size: "Video Tutorial",
                    type: "LINK",
                },
            ],
        },
        {
            id: 102,
            title: "Ujian Tengah Semester - Matematika",
            description:
                "Materi Integral, Turunan, dan Statistika. Open book diperbolehkan.",
            due_date: "2026-04-12T10:00:00",
            type: "exam",
            category: "Akademik",
            session: 4,
            courseCode: "MATX01",
            subject: { name: "Matematika" },
            teacher: { user: { name: "Ibu Sari Dewi" } },
            submissions: [
                {
                    submitted_at: "2026-04-12T09:45:00",
                    file: "Jawaban_UTS_Mat.pdf",
                    size: "1.2 MB",
                },
            ],
            attachments: [
                {
                    name: "Soal_UTS_Matematika.pdf",
                    size: "540 KB",
                    type: "PDF",
                },
            ],
        },
        {
            id: 103,
            title: "Essay Bahasa Inggris - Global Warming",
            description:
                "Tulis essay 500 kata tentang dampak global warming terhadap kehidupan sehari-hari.",
            due_date: "2026-04-18T23:59:00",
            type: "tugas",
            category: "Bahasa",
            session: 6,
            courseCode: "ENGX02",
            subject: { name: "B. Inggris" },
            teacher: { user: { name: "Ibu Rina Marlina" } },
            submissions: [],
            attachments: [],
        },
        {
            id: 104,
            title: "Latihan Pemrograman Web - HTML & CSS",
            description:
                "Buat halaman web portofolio sederhana menggunakan HTML5 dan CSS3 dengan responsif design.",
            due_date: "2026-04-20T23:59:00",
            type: "latihan",
            category: "Pemrograman",
            session: 10,
            courseCode: "WEBX01",
            subject: { name: "Pemrograman Web" },
            teacher: { user: { name: "Bpk. Ahmad Fauzi" } },
            submissions: [],
            attachments: [
                {
                    name: "Template_Portofolio.zip",
                    size: "890 KB",
                    type: "FILE",
                },
            ],
        },
    ];

    const displayTasks = tasks?.length > 0 ? tasks : dummyTasks;

    const filteredTasks = displayTasks.filter((task) => {
        if (filter === "all") return true;
        const isSubmitted = task.submissions?.length > 0;
        if (filter === "pending") return !isSubmitted;
        if (filter === "submitted") return isSubmitted;
        return true;
    });

    const typeConfig = {
        tugas: {
            label: "Tugas",
            bg: "bg-blue-50",
            text: "text-blue-600",
            border: "border-blue-100",
        },
        exam: {
            label: "Ujian",
            bg: "bg-red-50",
            text: "text-red-600",
            border: "border-red-100",
        },
        latihan: {
            label: "Latihan",
            bg: "bg-green-50",
            text: "text-green-600",
            border: "border-green-100",
        },
    };

    return (
        <DashboardLayout headerTitle="Tugas, Ujian & Latihan">
            <Head title="Tugas & Ujian" />
            <div className="space-y-6">
                {/* Page Header */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-3 flex-1">
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
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">
                                Daftar Aktivitas
                            </h2>
                            <p className="text-base text-gray-500">
                                Kelola tugas mandiri, ujian, dan latihan Anda.
                            </p>
                        </div>
                    </div>
                    <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-100 shrink-0">
                        {[
                            { key: "all", label: "Semua" },
                            { key: "pending", label: "Tertunda" },
                            { key: "submitted", label: "Selesai" },
                        ].map((f) => (
                            <button
                                key={f.key}
                                onClick={() => setFilter(f.key)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === f.key ? "bg-primary-500 text-white shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tasks Grid */}
                {filteredTasks.length === 0 ? (
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
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <p className="text-base font-medium text-gray-700">
                            Tidak ada tugas
                        </p>
                        <p className="text-sm text-gray-400 mt-1">
                            Coba ubah filter untuk melihat tugas lainnya.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {filteredTasks.map((task) => {
                            const isSubmitted = task.submissions?.length > 0;
                            const tc =
                                typeConfig[task.type] || typeConfig.tugas;
                            const isPast =
                                new Date(task.due_date) < new Date() &&
                                !isSubmitted;

                            return (
                                <div
                                    key={task.id}
                                    onClick={() => setDetailTask(task)}
                                    className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-sm transition-all cursor-pointer flex flex-col group"
                                >
                                    <div className="p-5 flex-1">
                                        <div className="flex justify-between items-start mb-3">
                                            <span
                                                className={`text-sm px-2.5 py-1 rounded-full ${tc.bg} ${tc.text} border ${tc.border}`}
                                            >
                                                {tc.label}
                                            </span>
                                            <div className="text-right">
                                                <span
                                                    className={`text-sm ${isPast ? "text-red-500 font-medium" : "text-gray-400"}`}
                                                >
                                                    {new Date(
                                                        task.due_date,
                                                    ).toLocaleDateString(
                                                        "id-ID",
                                                        {
                                                            day: "numeric",
                                                            month: "short",
                                                        },
                                                    )}
                                                </span>
                                                <p className="text-[12px] text-gray-400">
                                                    {new Date(
                                                        task.due_date,
                                                    ).toLocaleTimeString(
                                                        "id-ID",
                                                        {
                                                            hour: "2-digit",
                                                            minute: "2-digit",
                                                        },
                                                    )}{" "}
                                                    WIB
                                                </p>
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition">
                                            {task.title}
                                        </h3>
                                        <p className="text-base text-gray-500 leading-relaxed line-clamp-2 mb-4">
                                            {task.description}
                                        </p>

                                        <div className="pt-3 border-t border-gray-50 flex items-center justify-between">
                                            <div>
                                                <p className="text-base font-medium text-primary-600">
                                                    {task.subject?.name}
                                                </p>
                                                <p className="text-base text-gray-500">
                                                    {task.teacher?.user?.name}
                                                </p>
                                            </div>
                                            <span
                                                className={`inline-flex items-center gap-1 text-[12px] px-2 py-1 rounded-full ${isSubmitted ? "bg-green-50 text-green-600" : isPast ? "bg-red-50 text-red-500" : "bg-gray-50 text-gray-500"}`}
                                            >
                                                <span
                                                    className={`w-1.5 h-1.5 rounded-full ${isSubmitted ? "bg-green-500" : isPast ? "bg-red-500" : "bg-gray-300"}`}
                                                />
                                                {isSubmitted
                                                    ? "Selesai"
                                                    : isPast
                                                      ? "Terlambat"
                                                      : "Pending"}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* — Task Detail Modal — */}
            {detailTask && (
                <TaskDetailModal
                    task={detailTask}
                    onClose={() => setDetailTask(null)}
                />
            )}
        </DashboardLayout>
    );
}

function TaskDetailModal({ task, onClose }) {
    const [submitted, setSubmitted] = useState(task.submissions?.length > 0);
    const [answerText, setAnswerText] = useState("");
    const [showTextEditor, setShowTextEditor] = useState(false);
    const isSubmitted = submitted || task.submissions?.length > 0;
    const tc = { tugas: "Tugas", exam: "Ujian", latihan: "Latihan" };

    const handleSubmitAnswer = () => {
        setSubmitted(true);
        setShowTextEditor(false);
        if (window.AppAlert)
            window.AppAlert.toast("success", "Jawaban berhasil dikirim!");
    };

    return (
        <Modal
            open={!!task}
            onClose={onClose}
            title={`Detail ${tc[task.type] || "Tugas"}`}
            maxWidth="max-w-2xl"
        >
            <div className="space-y-5">
                <p className="text-sm text-gray-400">
                    Sesi {task.session || "—"} ·{" "}
                    {task.category || task.subject?.name} (
                    {task.courseCode || "—"})
                </p>

                <div>
                    <h2 className="text-xl font-semibold text-primary-600 mb-3">
                        {task.title}
                    </h2>
                    <div className="space-y-2">
                        {[
                            {
                                icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
                                text: `Sesi ${task.session || "—"} · ${task.category || "Umum"}`,
                            },
                            {
                                icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
                                text: task.teacher?.user?.name || "Guru",
                            },
                            {
                                icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5",
                                text: `Deadline: ${new Date(task.due_date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })} · ${new Date(task.due_date).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })} WIB`,
                            },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2.5">
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
                                            d={item.icon}
                                        />
                                    </svg>
                                </div>
                                <span className="text-base text-gray-700">
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-2">
                        Deskripsi
                    </h4>
                    <div className="h-px bg-gray-100 mb-3" />
                    <p className="text-base text-gray-600 leading-relaxed">
                        {task.description}
                    </p>
                </div>

                {task.attachments?.length > 0 && (
                    <div>
                        <h4 className="text-base font-semibold text-gray-900 mb-2">
                            Lampiran Materi
                        </h4>
                        <div className="h-px bg-gray-100 mb-3" />
                        <div className="space-y-2">
                            {task.attachments.map((att, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 p-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition cursor-pointer"
                                >
                                    <div
                                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${att.type === "LINK" ? "bg-blue-50" : att.type === "PDF" ? "bg-red-50" : "bg-gray-50"}`}
                                    >
                                        {att.type === "LINK" ? (
                                            <svg
                                                className="w-5 h-5 text-blue-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={1.5}
                                                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.02a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                className="w-5 h-5 text-red-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={1.5}
                                                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-base font-medium text-gray-900 truncate">
                                            {att.name}
                                        </p>
                                        <p className="text-[11px] text-gray-400">
                                            {att.size}
                                        </p>
                                    </div>
                                    <svg
                                        className="w-4 h-4 text-gray-300"
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
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h4 className="text-base font-semibold text-gray-900">
                            Jawaban Anda {isSubmitted ? "(1)" : ""}
                        </h4>
                        {isSubmitted && (
                            <span className="text-sm text-primary-500 font-medium cursor-pointer hover:underline">
                                Riwayat Pengerjaan
                            </span>
                        )}
                    </div>
                    <div className="h-px bg-gray-100 mb-3" />

                    {isSubmitted && (
                        <div className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-100 rounded-xl mb-3">
                            <div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center text-white text-[10px] font-bold">
                                PDF
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-base font-medium text-gray-900 truncate">
                                    {task.submissions?.[0]?.file ||
                                        "Jawaban_Tugas.pdf"}
                                </p>
                                <p className="text-[11px] text-gray-400">
                                    {task.submissions?.[0]?.size || "2.45 MB"}
                                </p>
                            </div>
                            <button className="text-red-400 hover:text-red-600 transition p-1">
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                </svg>
                            </button>
                        </div>
                    )}

                    {showTextEditor ? (
                        <div className="space-y-3">
                            <textarea
                                value={answerText}
                                onChange={(e) => setAnswerText(e.target.value)}
                                rows={5}
                                placeholder="Tuliskan jawaban atau tempelkan link di sini..."
                                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-base outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all resize-none"
                            />
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setShowTextEditor(false)}
                                    className="px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition"
                                >
                                    Batal
                                </button>
                                <button
                                    onClick={handleSubmitAnswer}
                                    className="px-4 py-2 text-sm font-semibold bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition"
                                >
                                    Simpan & Kumpulkan
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-2">
                            <button
                                onClick={() => {}}
                                className="w-full py-3 border-2 border-dashed border-primary-200 text-primary-600 rounded-xl text-base font-semibold hover:bg-primary-50 transition flex items-center justify-center gap-2"
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                                    />
                                </svg>
                                Lampirkan file (Max 10 MB)
                            </button>
                            <button
                                onClick={() => setShowTextEditor(true)}
                                className="w-full py-3 border border-gray-200 text-gray-700 rounded-xl text-base font-medium hover:bg-gray-50 transition flex items-center justify-center gap-2"
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                    />
                                </svg>
                                Teks editor / Link
                            </button>
                        </div>
                    )}
                </div>

                <div className="-mx-6 mt-5 px-6 py-4 border-t border-gray-100 flex justify-between items-center bg-gray-50">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-base  transition bg-red-500 text-white hover:bg-red-600 rounded-xl"
                    >
                        Tutup
                    </button>
                    <button
                        onClick={handleSubmitAnswer}
                        disabled={isSubmitted}
                        className={`px-5 py-2.5 text-base font-semibold rounded-xl transition flex items-center gap-2 ${isSubmitted ? "bg-green-100 text-green-600 cursor-default" : "bg-primary-500 text-white hover:bg-primary-600"}`}
                    >
                        {isSubmitted ? (
                            <>
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                Sudah Dikumpulkan
                            </>
                        ) : (
                            <>
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                                    />
                                </svg>
                                Kirim Jawaban
                            </>
                        )}
                    </button>
                </div>
            </div>
        </Modal>
    );
}
