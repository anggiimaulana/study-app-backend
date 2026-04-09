import React, { useMemo, useState } from "react";
import { Head, usePage } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";

const moodOptions = [
    {
        id: "excellent",
        label: "Sangat Baik",
        hint: "Kondisi stabil dan siap beraktivitas.",
    },
    {
        id: "good",
        label: "Baik",
        hint: "Perasaan cukup positif sepanjang hari.",
    },
    {
        id: "neutral",
        label: "Biasa",
        hint: "Kondisi netral, tidak naik dan tidak turun.",
    },
    { id: "poor", label: "Kurang Baik", hint: "Ada beban yang cukup terasa." },
    { id: "bad", label: "Buruk", hint: "Membutuhkan dukungan lanjutan." },
];

const conditionAxes = [
    {
        key: "energy",
        label: "Energi",
        description: "Daya tahan untuk menjalani aktivitas harian.",
    },
    {
        key: "focus",
        label: "Fokus",
        description: "Kemampuan berkonsentrasi saat belajar.",
    },
    {
        key: "stress",
        label: "Stres",
        description: "Tekanan yang sedang dirasakan.",
    },
    {
        key: "sleep",
        label: "Tidur",
        description: "Kualitas istirahat yang didapat semalam.",
    },
    {
        key: "social",
        label: "Sosial",
        description: "Kenyamanan berinteraksi dengan orang lain.",
    },
];

const triggerOptions = [
    "Kurang tidur",
    "Banyak tugas",
    "Masalah sosial",
    "Keluarga",
    "Kesehatan",
    "Tekanan akademik",
    "Perubahan suasana hati",
];

const forumTagOptions = [
    "Akademik",
    "Sosial",
    "Keluarga",
    "Kesehatan",
    "Motivasi",
    "Lainnya",
];

const counselingReasons = [
    "Masalah akademik",
    "Hubungan sosial",
    "Tekanan keluarga",
    "Kondisi emosi",
    "Perundungan",
    "Konsultasi pribadi",
    "Lainnya",
];

const formatDateTime = (value) => {
    if (!value) return "-";

    return new Intl.DateTimeFormat("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    }).format(new Date(value));
};

const avatarUrl = (name) =>
    `https://ui-avatars.com/api/?name=${encodeURIComponent(name || "Siswa")}&background=2563eb&color=ffffff&bold=true`;

const initials = (name = "S") =>
    name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

const normalizePosts = (source) => {
    const items = Array.isArray(source) ? source : (source?.data ?? []);

    return items.map((post) => {
        const authorName = post.is_anonymous
            ? "Anonim"
            : post.student?.user?.name || post.user?.name || "Siswa";

        return {
            id: post.id,
            content: post.content || post.title || "",
            authorName,
            avatar: post.is_anonymous
                ? null
                : post.student?.user?.avatar_url ||
                  post.student?.user?.photo_url ||
                  avatarUrl(authorName),
            isAnonymous: Boolean(post.is_anonymous),
            createdAt: post.created_at,
            tags: Array.isArray(post.tags)
                ? post.tags
                : typeof post.tags === "string"
                  ? post.tags
                        .split(",")
                        .map((tag) => tag.trim())
                        .filter(Boolean)
                  : ["Akademik"],
            reactions: {
                like: post.likes_count ?? post.likes?.length ?? 0,
                support: post.loves_count ?? 0,
            },
            comments: Array.isArray(post.comments)
                ? post.comments.map((comment) => ({
                      id: comment.id,
                      authorName: comment.user?.name || "Pengguna",
                      content: comment.content,
                      createdAt: comment.created_at,
                  }))
                : [],
        };
    });
};

const CheckinTab = ({ onSuccess }) => {
    const [mood, setMood] = useState("good");
    const [conditions, setConditions] = useState({
        energy: 4,
        focus: 4,
        stress: 2,
        sleep: 3,
        social: 4,
    });
    const [triggers, setTriggers] = useState(["Kurang tidur"]);
    const [story, setStory] = useState("");

    const summary = useMemo(() => {
        const score =
            Object.values(conditions).reduce(
                (total, value) => total + value,
                0,
            ) / Object.keys(conditions).length;
        const moodLabel =
            moodOptions.find((item) => item.id === mood)?.label || "Baik";

        return {
            score: score.toFixed(1),
            moodLabel,
        };
    }, [conditions, mood]);

    const toggleTrigger = (trigger) => {
        setTriggers((current) =>
            current.includes(trigger)
                ? current.filter((item) => item !== trigger)
                : [...current, trigger],
        );
    };

    const submitCheckin = (event) => {
        event.preventDefault();

        onSuccess({
            title: "Check-in tersimpan",
            message: "Data check-in harian sudah berhasil dikirim.",
            summary: [
                `Mood: ${summary.moodLabel}`,
                `Skor rata-rata: ${summary.score}/5`,
                `Pemicu: ${triggers.join(", ") || "Tidak ada"}`,
            ],
        });
    };

    return (
        <form onSubmit={submitCheckin} className="space-y-4">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    Section 1
                </p>
                <h3 className="mt-1 text-lg font-black text-slate-900 font-outfit">
                    Mood Hari Ini
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                    Pilih suasana hati yang paling mendekati kondisimu saat ini.
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {moodOptions.map((item) => {
                        const active = mood === item.id;

                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setMood(item.id)}
                                className={`text-left rounded-xl border px-4 py-3 transition-colors ${active ? "bg-blue-600 border-blue-600 text-white" : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-white"}`}
                            >
                                <p className="text-sm font-bold">
                                    {item.label}
                                </p>
                                <p
                                    className={`mt-1 text-xs ${active ? "text-blue-100" : "text-slate-500"}`}
                                >
                                    {item.hint}
                                </p>
                            </button>
                        );
                    })}
                </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    Section 2
                </p>
                <h3 className="mt-1 text-lg font-black text-slate-900 font-outfit">
                    Kondisi Saat Ini
                </h3>

                <div className="mt-4 space-y-3">
                    {conditionAxes.map((axis) => (
                        <div
                            key={axis.key}
                            className="rounded-xl border border-slate-100 bg-slate-50/70 p-3"
                        >
                            <div className="flex items-center justify-between gap-3 mb-2">
                                <div>
                                    <p className="text-sm font-bold text-slate-900">
                                        {axis.label}
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        {axis.description}
                                    </p>
                                </div>
                                <span className="text-xs font-black text-blue-600">
                                    {conditions[axis.key]}
                                </span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                value={conditions[axis.key]}
                                onChange={(event) =>
                                    setConditions((current) => ({
                                        ...current,
                                        [axis.key]: Number(event.target.value),
                                    }))
                                }
                                className="w-full accent-blue-600"
                            />
                        </div>
                    ))}
                </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    Section 3
                </p>
                <h3 className="mt-1 text-lg font-black text-slate-900 font-outfit">
                    Apa yang Kamu Alami
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                    {triggerOptions.map((trigger) => {
                        const active = triggers.includes(trigger);

                        return (
                            <button
                                key={trigger}
                                type="button"
                                onClick={() => toggleTrigger(trigger)}
                                className={`rounded-full px-3 py-1.5 text-xs font-bold border transition-colors ${active ? "bg-slate-900 text-white border-slate-900" : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-white"}`}
                            >
                                {trigger}
                            </button>
                        );
                    })}
                </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    Section 4
                </p>
                <h3 className="mt-1 text-lg font-black text-slate-900 font-outfit">
                    Ceritakan Kondisimu
                </h3>
                <textarea
                    value={story}
                    onChange={(event) => setStory(event.target.value)}
                    placeholder="Tulis cerita singkat untuk melengkapi check-in harian..."
                    className="mt-4 w-full min-h-32 rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-sm text-slate-800 outline-none focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100 resize-none"
                />

                <div className="mt-4 flex items-center justify-between gap-3">
                    <p className="text-xs text-slate-500">
                        Ringkasan:{" "}
                        <span className="font-bold text-slate-700">
                            {summary.moodLabel}
                        </span>{" "}
                        · {summary.score}/5
                    </p>
                    <button
                        type="submit"
                        className="rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-black uppercase tracking-[0.2em] text-white"
                    >
                        Kirim Check-in
                    </button>
                </div>
            </section>
        </form>
    );
};

const ForumTab = ({ initialPosts, onSuccess }) => {
    const { auth } = usePage().props;
    const [posts, setPosts] = useState(initialPosts);
    const [composerOpen, setComposerOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    const [commentDraft, setCommentDraft] = useState("");
    const [draft, setDraft] = useState({
        content: "",
        tags: ["Akademik"],
        isAnonymous: true,
    });

    const selectedComments = selectedPost
        ? posts.find((post) => post.id === selectedPost.id)?.comments || []
        : [];

    const toggleReaction = (postId, type) => {
        setPosts((current) =>
            current.map((post) => {
                if (post.id !== postId) return post;

                return {
                    ...post,
                    reactions: {
                        ...post.reactions,
                        [type]: post.reactions[type] + 1,
                    },
                };
            }),
        );
    };

    const toggleTag = (tag) => {
        setDraft((current) => ({
            ...current,
            tags: current.tags.includes(tag)
                ? current.tags.filter((item) => item !== tag)
                : [...current.tags, tag],
        }));
    };

    const createPost = () => {
        if (!draft.content.trim() || draft.tags.length === 0) return;

        const authorName = draft.isAnonymous
            ? "Anonim"
            : auth?.user?.name || "Siswa";
        const newPost = {
            id: Date.now(),
            content: draft.content.trim(),
            authorName,
            avatar: draft.isAnonymous ? null : avatarUrl(authorName),
            isAnonymous: draft.isAnonymous,
            createdAt: new Date().toISOString(),
            tags: draft.tags,
            reactions: { like: 0, support: 0 },
            comments: [],
        };

        setPosts((current) => [newPost, ...current]);
        setDraft({ content: "", tags: ["Akademik"], isAnonymous: true });
        setComposerOpen(false);

        onSuccess({
            title: "Postingan berhasil ditambahkan",
            message: "Cerita baru sudah tampil di daftar forum.",
            summary: [
                `Mode: ${newPost.isAnonymous ? "Anonim" : "Terbuka"}`,
                `Tag: ${newPost.tags.join(", ")}`,
            ],
        });
    };

    const submitComment = () => {
        if (!selectedPost || !commentDraft.trim()) return;

        setPosts((current) =>
            current.map((post) => {
                if (post.id !== selectedPost.id) return post;

                return {
                    ...post,
                    comments: [
                        ...post.comments,
                        {
                            id: Date.now(),
                            authorName: auth?.user?.name || "Kamu",
                            content: commentDraft.trim(),
                            createdAt: new Date().toISOString(),
                        },
                    ],
                };
            }),
        );

        setCommentDraft("");
    };

    return (
        <div className="space-y-4">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex items-center justify-between gap-4">
                <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                        Forum Cerita
                    </p>
                    <h3 className="mt-1 text-lg font-black text-slate-900 font-outfit">
                        Daftar cerita dan postingan siswa
                    </h3>
                </div>
                <button
                    type="button"
                    onClick={() => setComposerOpen(true)}
                    className="rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-black uppercase tracking-[0.2em] text-white"
                >
                    Tambah Cerita
                </button>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {posts.map((post) => (
                    <article
                        key={post.id}
                        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-4"
                    >
                        <div className="flex items-start gap-3">
                            {post.isAnonymous ? (
                                <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 11c1.657 0 3-1.567 3-3.5S13.657 4 12 4 9 5.567 9 7.5 10.343 11 12 11zm0 2c-3.866 0-7 2.239-7 5v1h14v-1c0-2.761-3.134-5-7-5z"
                                        />
                                    </svg>
                                </div>
                            ) : (
                                <img
                                    src={
                                        post.avatar ||
                                        avatarUrl(post.authorName)
                                    }
                                    alt={post.authorName}
                                    className="w-11 h-11 rounded-xl object-cover border border-slate-200 shrink-0"
                                />
                            )}

                            <div className="min-w-0 flex-1">
                                <p className="text-sm font-black text-slate-900">
                                    {post.authorName}
                                </p>
                                <p className="text-xs text-slate-400 mt-0.5">
                                    {formatDateTime(post.createdAt)}
                                </p>
                            </div>
                        </div>

                        <p className="text-sm leading-6 text-slate-600">
                            {post.content}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-blue-700 border border-blue-100"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() =>
                                        toggleReaction(post.id, "like")
                                    }
                                    className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600"
                                >
                                    <svg
                                        className="w-3.5 h-3.5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 9V5a3 3 0 00-6 0v4M5 9h14l-1 10H6L5 9z"
                                        />
                                    </svg>
                                    {post.reactions.like}
                                </button>
                                <button
                                    type="button"
                                    onClick={() =>
                                        toggleReaction(post.id, "support")
                                    }
                                    className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600"
                                >
                                    <svg
                                        className="w-3.5 h-3.5"
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
                                    {post.reactions.support}
                                </button>
                            </div>

                            <button
                                type="button"
                                onClick={() => setSelectedPost(post)}
                                className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-bold text-white"
                            >
                                <svg
                                    className="w-3.5 h-3.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                    />
                                </svg>
                                Komentar ({post.comments.length})
                            </button>
                        </div>
                    </article>
                ))}
            </div>

            {composerOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
                    <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl overflow-hidden">
                        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                            <h3 className="text-base font-black text-slate-900 font-outfit">
                                Buat Postingan
                            </h3>
                            <button
                                type="button"
                                onClick={() => setComposerOpen(false)}
                                className="text-slate-400 hover:text-slate-800"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="p-5 space-y-4">
                            <textarea
                                value={draft.content}
                                onChange={(event) =>
                                    setDraft((current) => ({
                                        ...current,
                                        content: event.target.value,
                                    }))
                                }
                                placeholder="Tulis cerita atau pengalamanmu..."
                                className="w-full min-h-32 rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-sm text-slate-800 outline-none focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100 resize-none"
                            />

                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                                    Tag
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {forumTagOptions.map((tag) => {
                                        const selected =
                                            draft.tags.includes(tag);
                                        return (
                                            <button
                                                key={tag}
                                                type="button"
                                                onClick={() => toggleTag(tag)}
                                                className={`rounded-full px-3 py-1.5 text-xs font-bold border ${selected ? "bg-blue-600 text-white border-blue-600" : "bg-slate-50 text-slate-600 border-slate-200"}`}
                                            >
                                                {tag}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <label className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3">
                                <div>
                                    <p className="text-sm font-bold text-slate-900">
                                        Posting anonim
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        Aktifkan untuk menyembunyikan identitas.
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() =>
                                        setDraft((current) => ({
                                            ...current,
                                            isAnonymous: !current.isAnonymous,
                                        }))
                                    }
                                    className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${draft.isAnonymous ? "bg-blue-600" : "bg-slate-300"}`}
                                >
                                    <span
                                        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${draft.isAnonymous ? "translate-x-6" : "translate-x-1"}`}
                                    />
                                </button>
                            </label>

                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setComposerOpen(false)}
                                    className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600"
                                >
                                    Batal
                                </button>
                                <button
                                    type="button"
                                    onClick={createPost}
                                    className="rounded-xl bg-slate-900 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white"
                                >
                                    Kirim
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {selectedPost && (
                <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-900/45 backdrop-blur-sm">
                    <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl overflow-hidden max-h-[88vh] flex flex-col">
                        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                            <h3 className="text-base font-black text-slate-900 font-outfit">
                                Komentar Postingan
                            </h3>
                            <button
                                type="button"
                                onClick={() => setSelectedPost(null)}
                                className="text-slate-400 hover:text-slate-800"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="p-5 space-y-4 overflow-y-auto">
                            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
                                <p className="text-sm font-bold text-slate-900">
                                    {selectedPost.authorName}
                                </p>
                                <p className="text-xs text-slate-400 mt-0.5">
                                    {formatDateTime(selectedPost.createdAt)}
                                </p>
                                <p className="mt-2 text-sm text-slate-600 leading-6">
                                    {selectedPost.content}
                                </p>
                            </div>

                            <div className="space-y-2">
                                {selectedComments.length > 0 ? (
                                    selectedComments.map((comment) => (
                                        <div
                                            key={comment.id}
                                            className="rounded-xl border border-slate-200 bg-white p-3"
                                        >
                                            <div className="flex items-center justify-between gap-3">
                                                <p className="text-sm font-bold text-slate-900">
                                                    {comment.authorName}
                                                </p>
                                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                                                    {formatDateTime(
                                                        comment.createdAt,
                                                    )}
                                                </p>
                                            </div>
                                            <p className="mt-1.5 text-sm text-slate-600 leading-6">
                                                {comment.content}
                                            </p>
                                        </div>
                                    ))
                                ) : (
                                    <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/70 p-4 text-center text-sm text-slate-400">
                                        Belum ada komentar.
                                    </div>
                                )}
                            </div>

                            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3">
                                <textarea
                                    value={commentDraft}
                                    onChange={(event) =>
                                        setCommentDraft(event.target.value)
                                    }
                                    placeholder="Tulis komentar..."
                                    className="w-full min-h-24 rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-800 outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100 resize-none"
                                />
                                <div className="mt-2 flex justify-end">
                                    <button
                                        type="button"
                                        onClick={submitComment}
                                        className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white"
                                    >
                                        Kirim
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const CounselingTab = ({ onSuccess }) => {
    const [requests, setRequests] = useState([
        {
            id: 1,
            reason: "Tekanan akademik",
            details: "Saya merasa sulit mengejar tugas yang menumpuk.",
            preference: "Guru BK",
            status: "Menunggu konfirmasi siswa",
            createdAt: "2026-04-08T08:45:00Z",
        },
        {
            id: 2,
            reason: "Hubungan sosial",
            details: "Ada hal yang ingin saya diskusikan terkait pertemanan.",
            preference: "Wali kelas",
            status: "Disetujui",
            createdAt: "2026-04-07T10:15:00Z",
        },
    ]);

    const [modalOpen, setModalOpen] = useState(false);
    const [form, setForm] = useState({
        reason: counselingReasons[0],
        details: "",
        preference: "Guru BK",
        note: "",
    });

    const submitRequest = (event) => {
        event.preventDefault();

        const nextRequest = {
            id: Date.now(),
            reason: form.reason,
            details: form.details,
            preference: form.preference,
            status: "Menunggu konfirmasi siswa",
            createdAt: new Date().toISOString(),
            note: form.note,
        };

        setRequests((current) => [nextRequest, ...current]);
        setForm({
            reason: counselingReasons[0],
            details: "",
            preference: "Guru BK",
            note: "",
        });
        setModalOpen(false);

        onSuccess({
            title: "Permohonan terkirim",
            message: "Form konseling berhasil dikirim ke sistem.",
            summary: [
                `Alasan: ${nextRequest.reason}`,
                `Tujuan: ${nextRequest.preference}`,
                `Status: ${nextRequest.status}`,
            ],
        });
    };

    return (
        <div className="space-y-4">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex items-center justify-between gap-4">
                <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                        Konseling
                    </p>
                    <h3 className="mt-1 text-lg font-black text-slate-900 font-outfit">
                        Riwayat pengajuan konseling
                    </h3>
                </div>
                <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-black uppercase tracking-[0.2em] text-white"
                >
                    Ajukan Konseling
                </button>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requests.map((request) => (
                    <div
                        key={request.id}
                        className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="text-sm font-black text-slate-900">
                                    {request.reason}
                                </p>
                                <p className="text-xs text-slate-400 mt-0.5">
                                    {formatDateTime(request.createdAt)}
                                </p>
                            </div>
                            <span
                                className={`rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${request.status === "Disetujui" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}
                            >
                                {request.status}
                            </span>
                        </div>
                        <p className="mt-2 text-sm text-slate-600 leading-6">
                            {request.details}
                        </p>
                        <p className="mt-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                            Tujuan: {request.preference}
                        </p>
                    </div>
                ))}
            </div>

            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
                    <div className="w-full max-w-xl rounded-2xl bg-white shadow-2xl overflow-hidden">
                        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                            <h3 className="text-base font-black text-slate-900 font-outfit">
                                Form Konseling
                            </h3>
                            <button
                                type="button"
                                onClick={() => setModalOpen(false)}
                                className="text-slate-400 hover:text-slate-800"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        <form
                            onSubmit={submitRequest}
                            className="p-5 space-y-4"
                        >
                            <label className="block space-y-1.5">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                                    Alasan
                                </span>
                                <select
                                    value={form.reason}
                                    onChange={(event) =>
                                        setForm((current) => ({
                                            ...current,
                                            reason: event.target.value,
                                        }))
                                    }
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                                >
                                    {counselingReasons.map((reason) => (
                                        <option key={reason} value={reason}>
                                            {reason}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <label className="block space-y-1.5">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                                    Tujuan
                                </span>
                                <div className="grid grid-cols-2 gap-2">
                                    {["Guru BK", "Wali kelas"].map(
                                        (preference) => (
                                            <button
                                                key={preference}
                                                type="button"
                                                onClick={() =>
                                                    setForm((current) => ({
                                                        ...current,
                                                        preference,
                                                    }))
                                                }
                                                className={`rounded-xl border px-3 py-2 text-xs font-bold ${form.preference === preference ? "bg-blue-600 text-white border-blue-600" : "bg-slate-50 text-slate-600 border-slate-200"}`}
                                            >
                                                {preference}
                                            </button>
                                        ),
                                    )}
                                </div>
                            </label>

                            <label className="block space-y-1.5">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                                    Detail Masalah
                                </span>
                                <textarea
                                    value={form.details}
                                    onChange={(event) =>
                                        setForm((current) => ({
                                            ...current,
                                            details: event.target.value,
                                        }))
                                    }
                                    className="w-full min-h-28 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-800 outline-none focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100 resize-none"
                                    placeholder="Jelaskan masalah secara ringkas dan jelas..."
                                />
                            </label>

                            <label className="block space-y-1.5">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                                    Catatan Tambahan
                                </span>
                                <input
                                    value={form.note}
                                    onChange={(event) =>
                                        setForm((current) => ({
                                            ...current,
                                            note: event.target.value,
                                        }))
                                    }
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                                    placeholder="Opsional"
                                />
                            </label>

                            <div className="flex justify-end gap-2 pt-1">
                                <button
                                    type="button"
                                    onClick={() => setModalOpen(false)}
                                    className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-xl bg-slate-900 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white"
                                >
                                    Kirim
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

const NotificationsTab = () => {
    const [selectedNotification, setSelectedNotification] = useState(null);
    const [calls, setCalls] = useState([
        {
            id: 1,
            teacherName: "Ibu Rani",
            role: "Guru BK",
            reason: "Check-in harian menunjukkan penurunan mood selama 3 hari terakhir.",
            description:
                "Kami ingin memastikan kondisi siswa tetap aman dan nyaman.",
            schedule: "Selasa, 10:30 WIB",
            status: "Menunggu konfirmasi siswa",
            action: "Disarankan hadir lebih awal untuk sesi awal.",
        },
        {
            id: 2,
            teacherName: "Pak Dimas",
            role: "Wali Kelas",
            reason: "Pengajuan konseling terkait tekanan akademik.",
            description:
                "Sesi lanjutan dijadwalkan agar diskusi lebih terarah.",
            schedule: "Kamis, 13:00 WIB",
            status: "Disetujui",
            action: "Siapkan catatan singkat untuk sesi tindak lanjut.",
        },
    ]);

    const updateStatus = (status) => {
        if (!selectedNotification) return;

        setCalls((current) =>
            current.map((call) =>
                call.id === selectedNotification.id
                    ? { ...call, status }
                    : call,
            ),
        );
        setSelectedNotification((current) =>
            current ? { ...current, status } : current,
        );
    };

    return (
        <div className="space-y-4">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    Notifikasi Konseling
                </p>
                <h3 className="mt-1 text-lg font-black text-slate-900 font-outfit">
                    Panggilan resmi dan tindak lanjut
                </h3>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {calls.map((call) => (
                    <button
                        key={call.id}
                        type="button"
                        onClick={() => setSelectedNotification(call)}
                        className="text-left rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:border-blue-200"
                    >
                        <div className="flex items-start gap-3">
                            <div className="w-11 h-11 rounded-xl bg-linear-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xs font-black">
                                {initials(call.teacherName)}
                            </div>
                            <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                    <h4 className="text-sm font-black text-slate-900">
                                        {call.teacherName}
                                    </h4>
                                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                                        {call.role}
                                    </span>
                                </div>
                                <p className="text-xs text-slate-400 mt-0.5">
                                    {call.schedule}
                                </p>
                                <p className="mt-2 text-sm text-slate-600 leading-6">
                                    {call.reason}
                                </p>
                            </div>
                        </div>
                    </button>
                ))}
            </div>

            {selectedNotification && (
                <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-900/45 backdrop-blur-sm">
                    <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl overflow-hidden">
                        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                            <h3 className="text-base font-black text-slate-900 font-outfit">
                                Detail Panggilan
                            </h3>
                            <button
                                type="button"
                                onClick={() => setSelectedNotification(null)}
                                className="text-slate-400 hover:text-slate-800"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="p-5 space-y-3">
                            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3">
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                                    Pemberi Panggilan
                                </p>
                                <p className="mt-1 text-sm font-bold text-slate-900">
                                    {selectedNotification.teacherName} ·{" "}
                                    {selectedNotification.role}
                                </p>
                            </div>
                            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3">
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                                    Alasan
                                </p>
                                <p className="mt-1 text-sm text-slate-600 leading-6">
                                    {selectedNotification.reason}
                                </p>
                            </div>
                            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3">
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                                    Deskripsi
                                </p>
                                <p className="mt-1 text-sm text-slate-600 leading-6">
                                    {selectedNotification.description}
                                </p>
                                <p className="mt-2 text-sm text-slate-600 leading-6">
                                    <span className="font-bold text-slate-900">
                                        Catatan:
                                    </span>{" "}
                                    {selectedNotification.action}
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                {[
                                    "Disetujui",
                                    "Menunggu konfirmasi siswa",
                                    "Ditunda",
                                ].map((status) => (
                                    <button
                                        key={status}
                                        type="button"
                                        onClick={() => updateStatus(status)}
                                        className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600"
                                    >
                                        {status}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default function MyFess({ posts = [] }) {
    const [activeTab, setActiveTab] = useState("checkin");
    const [success, setSuccess] = useState({
        open: false,
        title: "",
        message: "",
        summary: [],
    });

    const normalizedPosts = useMemo(() => normalizePosts(posts), [posts]);

    const menu = [
        {
            id: "checkin",
            name: "Check-in",
            icon: (
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
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
        },
        {
            id: "forum",
            name: "Forum",
            icon: (
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
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                </svg>
            ),
        },
        {
            id: "konseling",
            name: "Konseling",
            icon: (
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                </svg>
            ),
        },
        {
            id: "notifikasi",
            name: "Panggilan",
            icon: (
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
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                </svg>
            ),
        },
    ];

    return (
        <DashboardLayout headerTitle="MyFess">
            <Head title="MyFess" />

            {success.open && (
                <div className="fixed inset-0 z-70 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
                    <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl p-5 text-center">
                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <h4 className="text-lg font-black text-slate-900 font-outfit">
                            {success.title}
                        </h4>
                        <p className="text-sm text-slate-500 mt-1">
                            {success.message}
                        </p>
                        {success.summary?.length > 0 && (
                            <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-left">
                                {success.summary.map((item) => (
                                    <p
                                        key={item}
                                        className="text-xs text-slate-700"
                                    >
                                        • {item}
                                    </p>
                                ))}
                            </div>
                        )}
                        <button
                            onClick={() =>
                                setSuccess({
                                    open: false,
                                    title: "",
                                    message: "",
                                    summary: [],
                                })
                            }
                            className="mt-4 w-full rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-black uppercase tracking-[0.2em] text-white"
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            )}

            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-2 mb-4 overflow-x-auto">
                <div className="flex min-w-max gap-1.5">
                    {menu.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => setActiveTab(item.id)}
                            className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition-all ${activeTab === item.id ? "bg-slate-900 text-white" : "text-slate-500 hover:bg-slate-50"}`}
                        >
                            {item.icon}
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>

            {activeTab === "checkin" && (
                <CheckinTab
                    onSuccess={(payload) =>
                        setSuccess({ open: true, ...payload })
                    }
                />
            )}
            {activeTab === "forum" && (
                <ForumTab
                    initialPosts={normalizedPosts}
                    onSuccess={(payload) =>
                        setSuccess({ open: true, ...payload })
                    }
                />
            )}
            {activeTab === "konseling" && (
                <CounselingTab
                    onSuccess={(payload) =>
                        setSuccess({ open: true, ...payload })
                    }
                />
            )}
            {activeTab === "notifikasi" && <NotificationsTab />}
        </DashboardLayout>
    );
}
