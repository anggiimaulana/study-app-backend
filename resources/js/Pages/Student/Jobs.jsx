import React from "react";
import { Head } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";

export default function Jobs({ jobs }) {
    const dummyJobs = [
        {
            id: 1,
            title: "Junior Web Developer",
            company: "Global Tech",
            location: "Jakarta",
            salary: "Rp 5M - 8M",
            type: "Magang",
        },
        {
            id: 2,
            title: "UI Designer Trainee",
            company: "Creative Studio",
            location: "Bandung",
            salary: "Kompetitif",
            type: "Full-time",
        },
    ];

    const displayJobs = jobs && jobs.length > 0 ? jobs : dummyJobs;

    return (
        <DashboardLayout
            headerTitle="Portal Loker"
            headerSubtitle="Anda berada di ruang modul Portal Loker. Modul dinamis ini masih dalam tahap scaffolding."
            headerBadge="Portal Loker"
            backHref={route("student.dashboard")}
            backLabel="Kembali ke Dashboard Utama"
        >
            <Head title="Karir" />

            <div className="space-y-8">
                <div className="text-left">
                    <h2 className="text-2xl font-bold text-slate-900 font-outfit uppercase tracking-tight">
                        Lowongan Kerja
                    </h2>
                    <p className="text-slate-500 text-sm mt-1">
                        Peluang karir dan magang eksklusif untuk alumni & siswa.
                    </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
                    <input
                        className="flex-1 bg-slate-50 border border-slate-100 rounded-lg px-4 py-2.5 text-sm font-medium text-slate-900 outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                        placeholder="Cari posisi pekerjaan..."
                    />
                    <button className="bg-slate-900 text-white px-6 py-2.5 rounded-lg font-bold text-xs uppercase hover:bg-black transition-all">
                        Cari
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayJobs.map((job) => (
                        <div
                            key={job.id}
                            className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:border-blue-300 transition-all flex flex-col h-full relative"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400">
                                    <svg
                                        className="w-8 h-8"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                        />
                                    </svg>
                                </div>
                                <span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-[9px] font-bold rounded uppercase tracking-widest">
                                    {job.type}
                                </span>
                            </div>

                            <div className="flex-1 text-left">
                                <h3 className="text-lg font-bold text-slate-900 font-outfit uppercase tracking-tight leading-tight mb-1">
                                    {job.title}
                                </h3>
                                <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-6">
                                    {job.company}
                                </p>

                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center gap-3 text-slate-400">
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
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                        </svg>
                                        <span className="text-xs font-bold uppercase tracking-widest">
                                            {job.location}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 text-emerald-600">
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
                                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span className="text-xs font-bold">
                                            {job.salary}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full py-3 bg-slate-900 text-white font-bold text-xs uppercase rounded-lg hover:bg-black transition-all">
                                Lamar Kerja
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}
