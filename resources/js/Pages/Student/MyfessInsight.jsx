import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';

const IconTrendingUp = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
    </svg>
);

const IconHeart = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
);

const IconAlertTriangle = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
);

const IconActivity = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
);

const IconEyeOff = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
);

const IconMessageCircle = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
);

const IconTag = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
        <line x1="7" y1="7" x2="7.01" y2="7"/>
    </svg>
);

const mockInsightPosts = [
    {
        id: 1,
        content: 'Lagi ngerasa overwhelmed sama semua tugas. Kayak gak ada habisnya dan gak ada yang ngerti gimana rasanya.',
        is_anonymous: true,
        status: 'flagged',
        created_at: new Date(Date.now() - 1800000).toISOString(),
        tags: ['stress', 'akademik'],
        sentiment: 'negative',
        likes_count: 8,
        comments_count: 3,
    },
    {
        id: 2,
        content: 'Hari ini ekskul basket latihan keras banget tapi menyenangkan! Siap buat kompetisi bulan depan.',
        is_anonymous: false,
        status: 'published',
        created_at: new Date(Date.now() - 7200000).toISOString(),
        tags: ['ekskul', 'positif'],
        sentiment: 'positive',
        likes_count: 15,
        comments_count: 7,
    },
    {
        id: 3,
        content: 'Ada teman yang suka gangguin waktu jam belajar. Udah bilang tapi tetap aja.',
        is_anonymous: true,
        status: 'flagged',
        created_at: new Date(Date.now() - 10800000).toISOString(),
        tags: ['pertemanan', 'masalah'],
        sentiment: 'concerning',
        likes_count: 4,
        comments_count: 1,
    },
];

const sentimentConfig = {
    positive: { label: 'Positif', bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', dot: 'bg-emerald-400' },
    negative: { label: 'Perlu Perhatian', bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', dot: 'bg-amber-400' },
    concerning: { label: 'Perlu Tindak Lanjut', bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', dot: 'bg-red-400' },
};

function timeAgo(dateString) {
    const now = new Date();
    const date = new Date(dateString);
    const diff = Math.floor((now - date) / 1000);
    if (diff < 60) return `${diff}d lalu`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m lalu`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}j lalu`;
    return `${Math.floor(diff / 86400)}h lalu`;
}

export default function MyfessInsight({ posts = mockInsightPosts }) {
    const [activeTab, setActiveTab] = useState('all');

    const stats = {
        total: posts.length,
        positive: posts.filter(p => p.sentiment === 'positive').length,
        concerning: posts.filter(p => p.sentiment === 'concerning' || p.sentiment === 'negative').length,
        flagged: posts.filter(p => p.status === 'flagged').length,
    };

    const filtered = activeTab === 'all'
        ? posts
        : posts.filter(p => p.sentiment === activeTab || (activeTab === 'concerning' && (p.sentiment === 'concerning' || p.sentiment === 'negative')));

    return (
        <DashboardLayout headerTitle="MyFess Insight">
            <Head title="MyFess Insight" />

            <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                    <h1 className="text-xl font-bold text-slate-800 font-outfit">MyFess Insight</h1>
                    <p className="text-sm text-slate-500 mt-0.5">Pantau kesehatan mental dan tren percakapan siswa.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    <div className="bg-white border border-slate-200/70 rounded-2xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="p-1.5 bg-slate-100 rounded-lg text-slate-500">
                                <IconActivity />
                            </div>
                        </div>
                        <p className="text-2xl font-bold text-slate-800 font-outfit">{stats.total}</p>
                        <p className="text-xs text-slate-500 mt-0.5">Total postingan</p>
                    </div>
                    <div className="bg-white border border-slate-200/70 rounded-2xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="p-1.5 bg-emerald-50 rounded-lg text-emerald-500">
                                <IconTrendingUp />
                            </div>
                        </div>
                        <p className="text-2xl font-bold text-emerald-600 font-outfit">{stats.positive}</p>
                        <p className="text-xs text-slate-500 mt-0.5">Sentimen positif</p>
                    </div>
                    <div className="bg-white border border-slate-200/70 rounded-2xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="p-1.5 bg-amber-50 rounded-lg text-amber-500">
                                <IconAlertTriangle />
                            </div>
                        </div>
                        <p className="text-2xl font-bold text-amber-600 font-outfit">{stats.concerning}</p>
                        <p className="text-xs text-slate-500 mt-0.5">Perlu perhatian</p>
                    </div>
                    <div className="bg-white border border-slate-200/70 rounded-2xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="p-1.5 bg-red-50 rounded-lg text-red-500">
                                <IconHeart />
                            </div>
                        </div>
                        <p className="text-2xl font-bold text-red-600 font-outfit">{stats.flagged}</p>
                        <p className="text-xs text-slate-500 mt-0.5">Ditandai moderator</p>
                    </div>
                </div>

                <div className="bg-white border border-slate-200/70 rounded-2xl overflow-hidden">
                    <div className="flex border-b border-slate-100">
                        {[
                            { key: 'all', label: 'Semua' },
                            { key: 'positive', label: 'Positif' },
                            { key: 'concerning', label: 'Perlu Perhatian' },
                        ].map(tab => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`flex-1 py-3 text-sm font-medium transition-colors ${
                                    activeTab === tab.key
                                        ? 'text-blue-600 border-b-2 border-blue-500'
                                        : 'text-slate-500 hover:text-slate-700'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="divide-y divide-slate-100">
                        {filtered.length > 0 ? filtered.map(post => (
                            <InsightCard key={post.id} post={post} />
                        )) : (
                            <div className="py-16 text-center">
                                <p className="text-sm text-slate-400">Tidak ada data untuk kategori ini</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

function InsightCard({ post }) {
    const sentiment = sentimentConfig[post.sentiment] || sentimentConfig.positive;

    return (
        <div className="p-5 hover:bg-slate-50/30 transition-colors">
            <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-400">
                    {post.is_anonymous ? <IconEyeOff /> : (
                        <span className="text-sm font-medium text-slate-500">
                            {post.student?.user?.name?.charAt(0) || 'S'}
                        </span>
                    )}
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center flex-wrap gap-2 mb-2">
                        <span className="text-sm font-medium text-slate-600">
                            {post.is_anonymous ? 'Anonim' : (post.student?.user?.name || 'Siswa')}
                        </span>
                        <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-lg border font-medium ${sentiment.bg} ${sentiment.text} ${sentiment.border}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${sentiment.dot}`} />
                            {sentiment.label}
                        </span>
                        <span className="text-xs text-slate-400">{timeAgo(post.created_at)}</span>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">{post.content}</p>

                    <div className="flex items-center gap-4 mt-3">
                        {post.tags?.length > 0 && (
                            <div className="flex items-center gap-1.5 flex-wrap">
                                <IconTag />
                                {post.tags.map(tag => (
                                    <span key={tag} className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-lg">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div className="flex items-center gap-3 ml-auto">
                            <span className="flex items-center gap-1 text-xs text-slate-400">
                                <IconHeart />
                                {post.likes_count || 0}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-slate-400">
                                <IconMessageCircle />
                                {post.comments_count || 0}
                            </span>
                        </div>
                    </div>

                    {(post.sentiment === 'concerning' || post.sentiment === 'negative') && (
                        <div className="mt-3 pt-3 border-t border-slate-100 flex gap-2">
                            <button className="px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors">
                                Hubungi Siswa
                            </button>
                            <button className="px-3 py-1.5 text-xs font-medium text-slate-500 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors">
                                Catat Observasi
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}