import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';

const IconCheck = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
    </svg>
);

const IconX = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
);

const IconFlag = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
    </svg>
);

const IconSearch = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
);

const IconFilter = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
    </svg>
);

const IconEyeOff = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
);

const IconClock = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
);

const IconShieldAlert = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
);

function timeAgo(dateString) {
    const now = new Date();
    const date = new Date(dateString);
    const diff = Math.floor((now - date) / 1000);
    if (diff < 60) return `${diff}d lalu`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m lalu`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}j lalu`;
    return `${Math.floor(diff / 86400)}h lalu`;
}

const statusConfig = {
    published: { label: 'Terbit', bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
    flagged: { label: 'Ditandai', bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
    archived: { label: 'Diarsipkan', bg: 'bg-slate-50', text: 'text-slate-500', border: 'border-slate-200' },
};

const mockPosts = [
    { id: 1, content: 'Kenapa tugas PBO-nya banyak banget? Deadline semua barengan padahal', is_anonymous: true, status: 'published', created_at: new Date(Date.now() - 3600000).toISOString(), tags: ['akademik'] },
    { id: 2, content: 'Ada yang ngerasain kantin sekolah makin sedikit pilihannya? Harga naik tapi porsinya gak sebanding', is_anonymous: true, status: 'flagged', created_at: new Date(Date.now() - 7200000).toISOString(), tags: ['fasilitas'] },
    { id: 3, content: 'Seneng banget ekskul basket akhirnya juara provinsi! Selamat buat timnya', is_anonymous: false, status: 'published', created_at: new Date(Date.now() - 86400000).toISOString(), tags: ['ekskul'] },
    { id: 4, content: 'Aku mau nanya, gimana cara daftar beasiswa dari sekolah? Ada info lengkapnya gak?', is_anonymous: true, status: 'published', created_at: new Date(Date.now() - 172800000).toISOString(), tags: ['beasiswa'] },
];

export default function MyfessModeration({ posts = mockPosts }) {
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');
    const [postStatuses, setPostStatuses] = useState(() =>
        Object.fromEntries(posts.map(p => [p.id, p.status]))
    );

    const updateStatus = (postId, newStatus) => {
        setPostStatuses(prev => ({ ...prev, [postId]: newStatus }));
    };

    const filtered = posts.filter(p => {
        const currentStatus = postStatuses[p.id];
        const matchFilter = filter === 'all' || currentStatus === filter;
        const matchSearch = p.content.toLowerCase().includes(search.toLowerCase());
        return matchFilter && matchSearch;
    });

    const counts = {
        all: posts.length,
        published: posts.filter(p => postStatuses[p.id] === 'published').length,
        flagged: posts.filter(p => postStatuses[p.id] === 'flagged').length,
        archived: posts.filter(p => postStatuses[p.id] === 'archived').length,
    };

    return (
        <DashboardLayout headerTitle="Moderasi MyFess">
            <Head title="Moderasi MyFess" />

            <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                    <h1 className="text-xl font-bold text-slate-800 font-outfit">Moderasi MyFess</h1>
                    <p className="text-sm text-slate-500 mt-0.5">Tinjau dan kelola postingan siswa di ruang aman.</p>
                </div>

                <div className="grid grid-cols-4 gap-3 mb-6">
                    {[
                        { key: 'all', label: 'Semua', color: 'text-slate-700' },
                        { key: 'published', label: 'Terbit', color: 'text-emerald-600' },
                        { key: 'flagged', label: 'Ditandai', color: 'text-amber-600' },
                        { key: 'archived', label: 'Diarsipkan', color: 'text-slate-400' },
                    ].map(({ key, label, color }) => (
                        <button
                            key={key}
                            onClick={() => setFilter(key)}
                            className={`p-4 bg-white border rounded-2xl text-left transition-all ${
                                filter === key
                                    ? 'border-blue-300 ring-2 ring-blue-100'
                                    : 'border-slate-200/70 hover:border-slate-300'
                            }`}
                        >
                            <p className={`text-2xl font-bold font-outfit ${color}`}>{counts[key]}</p>
                            <p className="text-xs text-slate-500 mt-1">{label}</p>
                        </button>
                    ))}
                </div>

                <div className="bg-white border border-slate-200/70 rounded-2xl overflow-hidden">
                    <div className="p-4 border-b border-slate-100 flex items-center gap-3">
                        <div className="flex items-center gap-2 flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2">
                            <IconSearch />
                            <input
                                type="text"
                                placeholder="Cari postingan..."
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                className="flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                            />
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 shrink-0">
                            <IconFilter />
                            <span>{filtered.length} postingan</span>
                        </div>
                    </div>

                    <div className="divide-y divide-slate-100">
                        {filtered.length > 0 ? filtered.map(post => (
                            <ModerationCard
                                key={post.id}
                                post={post}
                                currentStatus={postStatuses[post.id]}
                                onUpdateStatus={updateStatus}
                            />
                        )) : (
                            <div className="py-16 text-center">
                                <p className="text-sm text-slate-400">Tidak ada postingan ditemukan</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

function ModerationCard({ post, currentStatus, onUpdateStatus }) {
    const [expanded, setExpanded] = useState(false);
    const status = statusConfig[currentStatus] || statusConfig.published;

    return (
        <div className={`p-5 hover:bg-slate-50/50 transition-colors ${currentStatus === 'archived' ? 'opacity-60' : ''}`}>
            <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    {post.is_anonymous
                        ? <span className="text-slate-400"><IconEyeOff /></span>
                        : <span className="text-sm font-medium text-slate-500">
                            {post.student?.user?.name?.charAt(0) || 'S'}
                          </span>
                    }
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                        <span className="text-sm font-medium text-slate-600">
                            {post.is_anonymous ? 'Anonim' : (post.student?.user?.name || 'Siswa')}
                        </span>
                        <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-lg border font-medium ${status.bg} ${status.text} ${status.border}`}>
                            {currentStatus === 'flagged' && <IconShieldAlert />}
                            {status.label}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-400">
                            <IconClock />
                            {timeAgo(post.created_at)}
                        </span>
                    </div>

                    <p className={`text-sm text-slate-600 leading-relaxed ${!expanded && 'line-clamp-2'}`}>
                        {post.content}
                    </p>
                    {post.content.length > 120 && (
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="text-xs text-blue-500 mt-1 hover:underline"
                        >
                            {expanded ? 'Sembunyikan' : 'Baca selengkapnya'}
                        </button>
                    )}

                    {post.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                            {post.tags.map(tag => (
                                <span key={tag} className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-lg">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                    {currentStatus !== 'published' && (
                        <button
                            onClick={() => onUpdateStatus(post.id, 'published')}
                            title="Terbitkan"
                            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-lg hover:bg-emerald-100 transition-colors"
                        >
                            <IconCheck /> Terbitkan
                        </button>
                    )}
                    {currentStatus !== 'flagged' && (
                        <button
                            onClick={() => onUpdateStatus(post.id, 'flagged')}
                            title="Tandai"
                            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-amber-600 bg-amber-50 border border-amber-200 rounded-lg hover:bg-amber-100 transition-colors"
                        >
                            <IconFlag /> Tandai
                        </button>
                    )}
                    {currentStatus !== 'archived' && (
                        <button
                            onClick={() => onUpdateStatus(post.id, 'archived')}
                            title="Arsipkan"
                            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-500 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
                        >
                            <IconX /> Arsipkan
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}