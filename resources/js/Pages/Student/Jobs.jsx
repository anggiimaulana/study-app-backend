import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import Pagination from "@/Components/ui/Pagination";
import Modal from "@/Components/ui/Modal";

export default function Jobs({ jobs }) {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");
    const [detailJob, setDetailJob] = useState(null);

    const dummyJobs = [
        {
            id: 1,
            title: "Junior Web Developer",
            company: "Global Tech",
            location: "Jakarta",
            salary: "Rp 5M - 8M",
            type: "Magang",
            description:
                "Kesempatan magang untuk siswa SMK jurusan RPL. Mengembangkan frontend dan backend.",
            requirements: [
                "Menguasai HTML, CSS, JavaScript",
                "Familiar dengan framework React/Vue",
                "Bisa bekerja dalam tim",
            ],
            qualifications: [
                "Siswa kelas 11/12 SMK",
                "Jurusan RPL/TKJ",
                "IPK minimal 3.0",
            ],
            benefits: [
                "Sertifikat",
                "Uang saku harian",
                "Mentoring senior developer",
            ],
            deadline: "2026-05-01",
            posted_at: "2026-04-10",
            contact: "hr@globaltech.co.id",
        },
        {
            id: 2,
            title: "UI/UX Designer Trainee",
            company: "Creative Studio",
            location: "Bandung",
            salary: "Kompetitif",
            type: "Full-time",
            description:
                "Belajar desain UI/UX di studio kreatif terkemuka bersama designer senior.",
            requirements: [
                "Familiar dengan Figma/Adobe XD",
                "Memiliki sense of design yang baik",
                "Portofolio diutamakan",
            ],
            qualifications: [
                "Fresh graduate SMK/SMA",
                "Tertarik bidang desain",
            ],
            benefits: [
                "Gaji tetap",
                "Training gratis",
                "Lingkungan kerja kreatif",
            ],
            deadline: "2026-04-30",
            posted_at: "2026-04-08",
            contact: "jobs@creativestudio.id",
        },
    ];

    const actualJobs = jobs?.data || [];
    const displayJobs = actualJobs.length > 0 ? actualJobs : dummyJobs;

    const types = ["all", ...new Set(displayJobs.map((j) => j.type))];
    const filteredJobs = displayJobs.filter((j) => {
        const ms =
            !search ||
            j.title.toLowerCase().includes(search.toLowerCase()) ||
            j.company.toLowerCase().includes(search.toLowerCase());
        const mf = filter === "all" || j.type === filter;
        return ms && mf;
    });

    const typeColors = {
        Magang: "bg-blue-50 text-blue-600 border-blue-100",
        "Full-time": "bg-green-50 text-green-600 border-green-100",
        "Part-time": "bg-amber-50 text-amber-600 border-amber-100",
    };

    return (
        <DashboardLayout headerTitle="Lowongan Kerja">
            <Head title="Lowongan Kerja" />
            <div className="space-y-6">
                {/* Header */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                            <svg
                                className="w-5 h-5 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                                />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">
                                Bursa Kerja
                            </h2>
                            <p className="text-sm text-gray-500">
                                Peluang karir, magang, dan lowongan eksklusif
                                dari BKK sekolah.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Search + Filter */}
                <div className="bg-white rounded-2xl border border-gray-100 p-4 flex flex-col sm:flex-row items-center gap-3">
                    <div className="relative flex-1 w-full">
                        <svg
                            className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                        <input
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all placeholder:text-gray-400"
                            placeholder="Cari posisi atau perusahaan..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2 shrink-0">
                        {types.map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilter(type)}
                                className={`px-3 py-2 rounded-lg text-xs font-medium border transition-all ${filter === type ? "bg-primary-500 text-white border-primary-500" : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"}`}
                            >
                                {type === "all" ? "Semua" : type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Job Cards */}
                {filteredJobs.length === 0 ? (
                    <div className="bg-white rounded-2xl border border-gray-100 p-16 text-center">
                        <svg
                            className="w-12 h-12 text-gray-200 mx-auto mb-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                            />
                        </svg>
                        <p className="text-sm font-medium text-gray-600">
                            Tidak ada lowongan
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                            Coba ubah kata kunci pencarian atau filter Anda.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredJobs.map((job) => (
                            <div
                                key={job.id}
                                onClick={() => setDetailJob(job)}
                                className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-sm transition cursor-pointer group"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-sm font-bold text-primary-600">
                                        {job.company?.substring(0, 2)}
                                    </div>
                                    <span
                                        className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${typeColors[job.type] || "bg-gray-50 text-gray-600 border-gray-100"}`}
                                    >
                                        {job.type}
                                    </span>
                                </div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition">
                                    {job.title}
                                </h3>
                                <p className="text-xs text-primary-500 font-medium mb-2">
                                    {job.company}
                                </p>
                                <p className="text-xs text-gray-500 line-clamp-2 mb-3 leading-relaxed">
                                    {job.description}
                                </p>
                                <div className="pt-3 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400">
                                    <div className="flex items-center gap-3">
                                        <span className="flex items-center gap-1">
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
                                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                                />
                                            </svg>
                                            {job.location}
                                        </span>
                                        <span className="font-medium text-gray-600">
                                            {job.salary}
                                        </span>
                                    </div>
                                    <span className="text-primary-500 font-medium group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                                        Detail{" "}
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
                        ))}
                    </div>
                )}
                <Pagination links={jobs?.links || []} />
            </div>

            {/* Job Detail Modal */}
            <Modal
                open={!!detailJob}
                onClose={() => setDetailJob(null)}
                title="Detail Lowongan"
                maxWidth="max-w-2xl"
            >
                {detailJob && (
                    <>
                        <div className="space-y-5">
                            {/* Company Header */}
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-lg font-bold text-primary-600">
                                    {detailJob.company?.substring(0, 2)}
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900">
                                        {detailJob.title}
                                    </h2>
                                    <p className="text-sm text-primary-500 font-medium">
                                        {detailJob.company}
                                    </p>
                                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                                        <span className="flex items-center gap-1">
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
                                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={1.5}
                                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                                />
                                            </svg>
                                            {detailJob.location}
                                        </span>
                                        <span className="font-medium text-gray-700">
                                            {detailJob.salary}
                                        </span>
                                        <span
                                            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${typeColors[detailJob.type] || ""}`}
                                        >
                                            {detailJob.type}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <h4 className="text-sm font-semibold text-gray-900 mb-2">
                                    Deskripsi Pekerjaan
                                </h4>
                                <div className="h-px bg-gray-100 mb-3" />
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {detailJob.description}
                                </p>
                            </div>

                            {/* Requirements */}
                            {detailJob.requirements?.length > 0 && (
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                                        Persyaratan
                                    </h4>
                                    <div className="h-px bg-gray-100 mb-3" />
                                    <ul className="space-y-1.5">
                                        {detailJob.requirements.map((r, i) => (
                                            <li
                                                key={i}
                                                className="text-sm text-gray-600 flex items-start gap-2"
                                            >
                                                <svg
                                                    className="w-4 h-4 text-primary-400 shrink-0 mt-0.5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                {r}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Qualifications */}
                            {detailJob.qualifications?.length > 0 && (
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                                        Kualifikasi
                                    </h4>
                                    <div className="h-px bg-gray-100 mb-3" />
                                    <div className="flex flex-wrap gap-2">
                                        {detailJob.qualifications.map(
                                            (q, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs bg-gray-50 text-gray-600 px-3 py-1.5 rounded-full border border-gray-100"
                                                >
                                                    {q}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Benefits */}
                            {detailJob.benefits?.length > 0 && (
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                                        Benefit
                                    </h4>
                                    <div className="h-px bg-gray-100 mb-3" />
                                    <div className="flex flex-wrap gap-2">
                                        {detailJob.benefits.map((b, i) => (
                                            <span
                                                key={i}
                                                className="text-xs bg-green-50 text-green-600 px-3 py-1.5 rounded-full border border-green-100"
                                            >
                                                {b}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Meta */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                                    <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wide mb-1">
                                        Deadline
                                    </p>
                                    <p className="text-sm font-semibold text-gray-900">
                                        {detailJob.deadline
                                            ? new Date(
                                                  detailJob.deadline,
                                              ).toLocaleDateString("id-ID", {
                                                  day: "numeric",
                                                  month: "long",
                                                  year: "numeric",
                                              })
                                            : "-"}
                                    </p>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                                    <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wide mb-1">
                                        Kontak
                                    </p>
                                    <p className="text-sm font-semibold text-primary-600">
                                        {detailJob.contact || "-"}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="-mx-6 mt-5 px-6 py-4 border-t border-gray-100 flex justify-between items-center bg-gray-50">
                            <button
                                onClick={() => setDetailJob(null)}
                                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition"
                            >
                                Tutup
                            </button>
                            <button className="px-5 py-2.5 text-sm font-semibold bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition flex items-center gap-2">
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
                                Lamar Sekarang
                            </button>
                        </div>
                    </>
                )}
            </Modal>
        </DashboardLayout>
    );
}
