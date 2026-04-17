import React from "react";
import { Head, usePage } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";

export default function GenericPage({ pageTitle, pageSubtitle, moduleName }) {
    const { auth } = usePage().props;
    const title = pageTitle || moduleName || "Halaman";

    return (
        <DashboardLayout headerTitle={title}>
            <Head title={title} />
            <div className="space-y-6">
                {/* Page Header */}
                <div className="bg-white rounded-2xl p-5 border border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                            <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                            <p className="text-sm text-gray-500">{pageSubtitle || "Modul ini sedang dalam pengembangan."}</p>
                        </div>
                    </div>
                </div>

                {/* Content Placeholder */}
                <div className="bg-white rounded-2xl border border-gray-100 p-12">
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Dalam Pengembangan</h3>
                        <p className="text-sm text-gray-400 max-w-md">
                            Modul <strong>{title}</strong> sedang dalam tahap pengembangan dan akan segera tersedia.
                            Terima kasih atas kesabaran Anda.
                        </p>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
