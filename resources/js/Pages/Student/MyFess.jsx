import React, { useCallback, useMemo, useState, useEffect } from "react";
import { Head, usePage } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import Modal from "@/Components/ui/Modal";

// ─── Constants ──────────────────────────────────────────────────────
const EMOTIONS = [
    {
        id: "sangat_baik",
        label: "Sangat Baik",
        color: "#10b981",
        bg: "#ecfdf5",
        border: "#a7f3d0",
        icon: "😊",
    },
    {
        id: "baik",
        label: "Baik",
        color: "#3b82f6",
        bg: "#eff6ff",
        border: "#bfdbfe",
        icon: "🙂",
    },
    {
        id: "cukup",
        label: "Cukup",
        color: "#f59e0b",
        bg: "#fffbeb",
        border: "#fde68a",
        icon: "😐",
    },
    {
        id: "kurang_baik",
        label: "Kurang Baik",
        color: "#f97316",
        bg: "#fff7ed",
        border: "#fed7aa",
        icon: "😟",
    },
    {
        id: "buruk",
        label: "Buruk",
        color: "#ef4444",
        bg: "#fef2f2",
        border: "#fecaca",
        icon: "😢",
    },
];

const COUNSELING_REASONS = [
    "Masalah akademik",
    "Hubungan sosial",
    "Tekanan keluarga",
    "Kondisi emosi",
    "Perundungan (bullying)",
    "Konsultasi karier",
    "Lainnya",
];

const fmtDate = (v) =>
    (() => {
        if (!v) return "-";
        const d = new Date(v);
        if (Number.isNaN(d.getTime())) return "-";
        return d.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    })();
const fmtDateTime = (v) =>
    (() => {
        if (!v) return "-";
        const d = new Date(v);
        if (Number.isNaN(d.getTime())) return "-";
        return (
            d.toLocaleDateString("id-ID", {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            }) + " WIB"
        );
    })();

const statusStyles = {
    pending: {
        label: "Menunggu",
        bg: "bg-amber-50",
        text: "text-amber-700",
        dot: "bg-amber-400",
        border: "border-amber-100",
    },
    scheduled: {
        label: "Dijadwalkan",
        bg: "bg-blue-50",
        text: "text-blue-700",
        dot: "bg-blue-500",
        border: "border-blue-100",
    },
    confirmed: {
        label: "Siap",
        bg: "bg-green-50",
        text: "text-green-700",
        dot: "bg-green-500",
        border: "border-green-100",
    },
    completed: {
        label: "Selesai",
        bg: "bg-gray-50",
        text: "text-gray-700",
        dot: "bg-gray-500",
        border: "border-gray-100",
    },
    cancelled: {
        label: "Batal",
        bg: "bg-red-50",
        text: "text-red-700",
        dot: "bg-red-500",
        border: "border-red-100",
    },
};

const StatusBadge = ({ status }) => {
    const s = statusStyles[status] || statusStyles["pending"];
    return (
        <span
            className={`inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded ${s.bg} ${s.text} border ${s.border}`}
        >
            <span className={`w-1 h-1 rounded-full ${s.dot}`} />
            {s.label}
        </span>
    );
};

// ─── Main ───────────────────────────────────────────────────────────
export default function MyFess() {
    const [activeTab, setActiveTab] = useState("checkin");
    const [counselings, setCounselings] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCounselings = useCallback(async () => {
        setLoading(true);
        try {
            if (!window.axios) {
                throw new Error("Axios instance is not ready yet.");
            }

            const res = await window.axios.get("/api/v1/student/counselings");
            setCounselings(Array.isArray(res?.data?.data) ? res.data.data : []);
        } catch (e) {
            console.error(e);
            setCounselings([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchCounselings();
    }, [fetchCounselings]);

    useEffect(() => {
        if (activeTab === "counseling" || activeTab === "panggilan") {
            fetchCounselings();
        }
    }, [activeTab, fetchCounselings]);

    const tabs = [
        {
            key: "checkin",
            label: "Check-in & Refleksi",
        },
        {
            key: "counseling",
            label: "Konseling",
        },
        {
            key: "panggilan",
            label: "Panggilan",
        },
    ];

    return (
        <DashboardLayout headerTitle="MyFess">
            <Head title="MyFess" />
            <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                            <svg
                                className="w-5 h-5 text-primary-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                                />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 leading-tight">
                                My Confess - Ruang Aman Siswa
                            </h2>
                            <p className="text-base text-gray-500">
                                Cerita harimu, ajukan konseling, dan cek jadwal
                                panggilan BK.
                            </p>
                        </div>
                    </div>

                    <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-100 shrink-0">
                        {tabs.map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === tab.key ? "bg-primary-500 text-white shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {activeTab === "checkin" && <CheckinTab />}
                {activeTab === "counseling" && (
                    <CounselingTab
                        items={counselings.filter(
                            (c) => c.status === "pending",
                        )}
                        refresh={fetchCounselings}
                        loading={loading}
                    />
                )}
                {activeTab === "panggilan" && (
                    <PanggilanTab
                        items={counselings.filter((c) =>
                            ["scheduled", "confirmed"].includes(c.status),
                        )}
                        refresh={fetchCounselings}
                        loading={loading}
                    />
                )}
            </div>
        </DashboardLayout>
    );
}

// ─── Tab: Check-in ──────────────────────────────────────────────────
function CheckinTab() {
    const { auth } = usePage().props;
    const [emotion, setEmotion] = useState("");
    const [reflection, setReflection] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [history, setHistory] = useState([]);
    const emotionCount = EMOTIONS.length;

    const getCheckinPayload = (item) => {
        if (!item || typeof item !== "object") return {};
        if (item.attributes && typeof item.attributes === "object") {
            return item.attributes;
        }
        if (item.data && typeof item.data === "object") {
            return item.data;
        }
        return item;
    };

    const resolveCheckinId = (item, idx) => {
        const payload = getCheckinPayload(item);
        return item?.id ?? payload?.id ?? `history-${idx}`;
    };

    const resolveCheckinMood = (item) => {
        const payload = getCheckinPayload(item);
        return (
            payload?.mood ??
            payload?.current_condition ??
            payload?.emotion ??
            payload?.status ??
            ""
        );
    };

    const resolveCheckinDate = (item) => {
        const payload = getCheckinPayload(item);
        const raw =
            payload?.created_at ??
            payload?.createdAt ??
            payload?.date ??
            payload?.checkin_date ??
            payload?.checked_at ??
            payload?.timestamp ??
            null;

        if (raw && typeof raw === "object") {
            return raw.date ?? raw.datetime ?? raw.iso ?? raw.value ?? null;
        }

        return raw;
    };

    const resolveCheckinStory = (item) => {
        const payload = getCheckinPayload(item);
        const raw =
            payload?.story ??
            payload?.reflection ??
            payload?.notes ??
            payload?.experienced_event ??
            payload?.current_condition_desc ??
            payload?.current_condition ??
            "";
        const text = String(raw ?? "").trim();
        return text || "Tanpa cerita...";
    };

    const fetchHistory = async () => {
        try {
            const res = await window.axios.get(
                "/api/v1/student/emotion-checkins",
            );
            const payload =
                res?.data?.data ?? res?.data?.history ?? res?.data ?? [];
            const list = Array.isArray(payload)
                ? payload
                : Array.isArray(payload?.data)
                  ? payload.data
                  : [];
            setHistory(list);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        fetchHistory();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!emotion) return;
        setSubmitting(true);
        try {
            await window.axios.post("/api/v1/student/emotion-checkins", {
                mood: emotion,
                current_condition: emotion,
                story: reflection.trim(),
            });
            window.AppAlert?.toast(
                "success",
                "Check-in berhasil! Tetap semangat ya.",
            );
            setReflection("");
            setEmotion("");
            fetchHistory();
        } catch (err) {
            window.AppAlert?.toast(
                "error",
                err.response?.data?.message || "Gagal menyimpan check-in.",
            );
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        Hai {auth.user.name.split(" ")[0]}, apa kabarmu hari
                        ini?
                    </h3>
                    <p className="text-base text-gray-500 mb-6">
                        Bagikan kondisimu untuk mendapatkan dukungan yang tepat.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-5 gap-3">
                            {EMOTIONS.map((em, idx) => {
                                const isSecondLast = idx === emotionCount - 2;
                                const isLast = idx === emotionCount - 1;
                                const hasTwoItemsOnLastRow =
                                    emotionCount % 3 === 2;
                                const centeredRemainderClass =
                                    hasTwoItemsOnLastRow && isSecondLast
                                        ? "sm:col-start-2 md:col-start-2"
                                        : hasTwoItemsOnLastRow && isLast
                                          ? "sm:col-start-4 md:col-start-4"
                                          : "";

                                return (
                                    <button
                                        key={em.id}
                                        type="button"
                                        onClick={() => setEmotion(em.id)}
                                        className={`sm:col-span-2 md:col-span-2 lg:col-span-1 flex flex-col items-center p-3 rounded-xl border transition-all ${emotion === em.id ? "scale-[1.02]" : "border-gray-200 hover:border-gray-300 bg-gray-50/60"} ${centeredRemainderClass}`}
                                        style={
                                            emotion === em.id
                                                ? {
                                                      background: em.bg,
                                                      borderColor: em.color,
                                                      boxShadow: `0 6px 18px ${em.color}26`,
                                                  }
                                                : {}
                                        }
                                    >
                                        <span className="text-2xl mb-1.5">
                                            {em.icon}
                                        </span>
                                        <span
                                            className="text-sm font-medium"
                                            style={{
                                                color:
                                                    emotion === em.id
                                                        ? em.color
                                                        : "#94a3b8",
                                            }}
                                        >
                                            {em.label}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                        <textarea
                            value={reflection}
                            onChange={(e) => setReflection(e.target.value)}
                            rows={5}
                            minLength={25}
                            maxLength={750}
                            placeholder="Ceritakan apa yang ada di pikiranmu (min. 25 karakter)..."
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-base focus:bg-white focus:ring-2 focus:ring-primary-100 focus:border-primary-400 outline-none transition-all resize-none leading-relaxed"
                        />
                        <button
                            type="submit"
                            disabled={!emotion || submitting}
                            className="w-full py-3 bg-primary-500 text-white font-semibold text-base rounded-xl hover:bg-primary-600 transition disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            {submitting ? "Menyimpan..." : "Simpan Refleksi"}
                        </button>
                    </form>
                </div>
            </div>
            <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col h-full">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Riwayat Check-in
                    </h3>
                    {history.length === 0 ? (
                        <div className="flex-1 flex flex-col items-center justify-center text-center p-8 grayscale opacity-50">
                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3 text-2xl">
                                😴
                            </div>
                            <p className="text-sm font-medium text-gray-400">
                                Belum ada riwayat
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {(Array.isArray(history) ? history : []).map(
                                (item, idx) => {
                                    const mood = resolveCheckinMood(item);
                                    const emo =
                                        EMOTIONS.find((e) => e.id === mood) ||
                                        EMOTIONS[0];
                                    const checkinDate =
                                        resolveCheckinDate(item);
                                    const checkinStory =
                                        resolveCheckinStory(item);
                                    return (
                                        <div
                                            key={resolveCheckinId(item, idx)}
                                            className="p-3.5 rounded-xl border border-gray-100 bg-gray-50/70 flex items-center gap-3.5 hover:bg-white hover:border-gray-200 transition-all cursor-default group"
                                        >
                                            <div
                                                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-sm border border-white"
                                                style={{ background: emo.bg }}
                                            >
                                                {emo.icon}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between mb-0.5">
                                                    <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                                                        {emo.label}
                                                    </h4>
                                                    <span className="text-xs font-medium text-gray-400">
                                                        {fmtDate(checkinDate)}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-500 line-clamp-1 italic">
                                                    {checkinStory}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                },
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// ─── Tab: Konseling ─────────────────────────────────────────────────
function CounselingTab({ items, refresh, loading }) {
    const [showForm, setShowForm] = useState(false);
    const [detailItem, setDetailItem] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({
        reason: "",
        issue_description: "",
        target_role: "wali_kelas",
        urgency_level: "rendah",
        preferred_date: "",
        preferred_time: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Extra validation
        if (form.issue_description.length < 25) {
            window.AppAlert?.toast(
                "warning",
                "Deskripsi masalah minimal 25 karakter.",
            );
            return;
        }

        if (form.preferred_date) {
            const date = new Date(form.preferred_date);
            const day = date.getDay(); // 0 = Sun, 6 = Sat
            if (day === 0 || day === 6) {
                window.AppAlert?.toast(
                    "error",
                    "Konseling tidak tersedia pada hari Sabtu atau Minggu.",
                );
                return;
            }
        }

        if (form.preferred_time) {
            const [hours, minutes] = form.preferred_time.split(":").map(Number);
            if (hours < 8 || hours >= 15) {
                window.AppAlert?.toast(
                    "error",
                    "Waktu konseling harus di antara jam 08:00 - 15:00.",
                );
                return;
            }
        }

        setSubmitting(true);
        try {
            await window.axios.post("/api/v1/student/counselings", form);
            window.AppAlert?.toast(
                "success",
                "Pengajuan konseling berhasil dikirim!",
            );
            refresh();
            setForm({
                reason: "",
                issue_description: "",
                target_role: "wali_kelas",
                urgency_level: "rendah",
                preferred_date: "",
                preferred_time: "",
            });
            setShowForm(false);
        } catch (e) {
            window.AppAlert?.toast(
                "error",
                e.response?.data?.message || "Terjadi kesalahan.",
            );
        } finally {
            setSubmitting(false);
        }
    };

    const handleDelete = async (id) => {
        const r = await window.Swal?.fire({
            title: "Batalkan?",
            text: "Pengajuan akan dihapus.",
            icon: "warning",
            showCancelButton: true,
        });
        if (r?.isConfirmed) {
            await window.axios.delete(`/api/v1/student/counselings/${id}`);
            window.AppAlert?.toast("success", "Berhasil dibatalkan.");
            refresh();
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between px-1">
                <h3 className="text-base font-semibold text-gray-900">
                    {items.length} Pengajuan Menunggu
                </h3>
                <button
                    onClick={() => setShowForm(true)}
                    className="px-4 py-2 bg-primary-500 text-white text-sm font-semibold rounded-xl hover:bg-primary-600 transition flex items-center gap-2"
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
                            strokeWidth={2.5}
                            d="M12 4.5v15m7.5-7.5h-15"
                        />
                    </svg>
                    Ajukan Baru
                </button>
            </div>

            {loading ? (
                <div className="py-20 text-center animate-pulse text-gray-400">
                    Loading data...
                </div>
            ) : items.length === 0 ? (
                <div className="bg-white rounded-2xl border border-dashed border-gray-200 p-14 text-center">
                    <p className="text-base text-gray-500">
                        Belum ada pengajuan aktif.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {items.map((item, idx) => (
                        <div
                            key={item.id || `counseling-${idx}`}
                            className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-sm transition-all cursor-pointer group"
                            onClick={() => setDetailItem(item)}
                        >
                            <div className="flex justify-between items-start mb-3">
                                <StatusBadge status={item.status} />
                                <span
                                    className={`text-xs font-medium px-2 py-1 rounded-full border ${item.urgency_level === "urgen" ? "bg-red-50 text-red-600 border-red-100" : "bg-gray-50 text-gray-500 border-gray-100"}`}
                                >
                                    {item.urgency_level}
                                </span>
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                                {item.reason || "Sesi Konseling"}
                            </h4>
                            <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                                Tujuan:{" "}
                                {item.target_role === "bk"
                                    ? "Guru BK"
                                    : "Wali Kelas"}
                            </p>
                            <p className="text-base text-gray-600 mt-2.5 line-clamp-2 leading-relaxed italic">
                                "{item.issue_description}"
                            </p>
                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                                <span className="text-sm text-gray-500 font-medium">
                                    {fmtDate(item.created_at)}
                                </span>
                                <div className="flex gap-2">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDelete(item.id);
                                        }}
                                        className="px-2.5 py-1 text-xs font-semibold text-red-500 hover:bg-red-50 rounded-lg transition"
                                    >
                                        BATAL
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Request Modal */}
            <Modal
                open={showForm}
                onClose={() => setShowForm(false)}
                title="Formulir Konseling"
            >
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-500">
                                Target Konseling
                            </label>
                            <select
                                value={form.target_role}
                                onChange={(e) =>
                                    setForm((f) => ({
                                        ...f,
                                        target_role: e.target.value,
                                    }))
                                }
                                className="w-full rounded-xl border-gray-200 bg-gray-50 text-base focus:bg-white focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none py-3 px-4"
                            >
                                <option value="wali_kelas">Wali Kelas</option>
                                <option value="bk">Guru BK</option>
                            </select>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-500">
                                Urgensi
                            </label>
                            <select
                                value={form.urgency_level}
                                onChange={(e) =>
                                    setForm((f) => ({
                                        ...f,
                                        urgency_level: e.target.value,
                                    }))
                                }
                                className="w-full rounded-xl border-gray-200 bg-gray-50 text-base focus:bg-white focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none py-3 px-4"
                            >
                                <option value="rendah">Rendah</option>
                                <option value="sedang">Sedang</option>
                                <option value="mendesak">Mendesak</option>
                                <option value="urgen">Sangat Urgen</option>
                            </select>
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-500">
                            Topik Utama
                        </label>
                        <select
                            value={form.reason}
                            onChange={(e) =>
                                setForm((f) => ({
                                    ...f,
                                    reason: e.target.value,
                                }))
                            }
                            required
                            className="w-full rounded-xl border-gray-200 bg-gray-50 text-base focus:bg-white focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none py-3 px-4"
                        >
                            <option value="">Pilih topik...</option>
                            {COUNSELING_REASONS.map((r) => (
                                <option key={r} value={r}>
                                    {r}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-500">
                                Rencana Tanggal (Opsional)
                            </label>
                            <input
                                type="date"
                                value={form.preferred_date}
                                onChange={(e) =>
                                    setForm((f) => ({
                                        ...f,
                                        preferred_date: e.target.value,
                                    }))
                                }
                                className="w-full rounded-xl border-gray-200 bg-gray-50 text-base focus:bg-white focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none py-3 px-4"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-500">
                                Rencana Jam (Opsional)
                            </label>
                            <input
                                type="time"
                                value={form.preferred_time}
                                onChange={(e) =>
                                    setForm((f) => ({
                                        ...f,
                                        preferred_time: e.target.value,
                                    }))
                                }
                                className="w-full rounded-xl border-gray-200 bg-gray-50 text-base focus:bg-white focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none py-3 px-4"
                            />
                        </div>
                    </div>
                    <div className="space-y-1.5 pb-6">
                        <label className="text-sm font-medium text-gray-500">
                            Deskripsi Masalah
                        </label>
                        <textarea
                            value={form.issue_description}
                            onChange={(e) =>
                                setForm((f) => ({
                                    ...f,
                                    issue_description: e.target.value,
                                }))
                            }
                            rows={6}
                            minLength={25}
                            maxLength={750}
                            placeholder="Ceritakan apa yang sedang kamu alami agar kami bisa membantu lebih baik (min. 25 karakter)..."
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 text-base focus:bg-white focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none px-4 py-3 resize-none leading-relaxed"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-3 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition disabled:opacity-50"
                    >
                        AJUKAN KONSULTASI
                    </button>
                </form>
            </Modal>

            {/* Detail Modal */}
            <Modal
                open={!!detailItem}
                onClose={() => setDetailItem(null)}
                title="Detail Pengajuan"
            >
                {detailItem && (
                    <div className="p-6 space-y-5">
                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <StatusBadge status={detailItem.status} />
                                <span className="text-sm text-gray-500">
                                    {fmtDate(detailItem.created_at)}
                                </span>
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-1">
                                {detailItem.reason}
                            </h4>
                            <p className="text-base text-gray-600 leading-relaxed">
                                {detailItem.issue_description}
                            </p>
                        </div>
                        {detailItem.requested_date && (
                            <div className="flex items-center gap-2 p-3 rounded-xl bg-primary-50 text-primary-700">
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
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                                <span className="text-sm font-semibold">
                                    Rencana:{" "}
                                    {fmtDateTime(detailItem.requested_date)}
                                </span>
                            </div>
                        )}
                        <div className="flex justify-end pt-4">
                            <button
                                onClick={() => setDetailItem(null)}
                                className="px-6 py-2 bg-primary-500 text-white text-sm font-semibold rounded-xl hover:bg-primary-600 transition"
                            >
                                TUTUP
                            </button>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}

// ─── Tab: Panggilan ─────────────────────────────────────────────────
function PanggilanTab({ items, refresh, loading }) {
    const [detailCall, setDetailCall] = useState(null);
    const [showReschedule, setShowReschedule] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [resForm, setResForm] = useState({
        preferred_date: "",
        preferred_time: "",
    });

    const handleConfirm = async (id) => {
        try {
            await window.axios.put(`/api/v1/student/counselings/${id}/confirm`);
            window.AppAlert?.toast(
                "success",
                "Kehadiran dikonfirmasi! Sampai jumpa di sesi.",
            );
            refresh();
            setDetailCall(null);
        } catch (e) {
            window.AppAlert?.toast("error", "Gagal konfirmasi.");
        }
    };

    const handleReschedule = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            await window.axios.put(
                `/api/v1/student/counselings/${detailCall.id}/reschedule`,
                resForm,
            );
            window.AppAlert?.toast("success", "Permintaan reschedule dikirim.");
            refresh();
            setShowReschedule(false);
            setDetailCall(null);
        } catch (e) {
            window.AppAlert?.toast("error", "Gagal kirim permintaan.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="space-y-4">
            <h3 className="text-base font-semibold text-gray-900 px-1">
                {items.length} Panggilan Aktif
            </h3>
            {loading ? (
                <div className="py-20 text-center text-gray-400">
                    Loading calls...
                </div>
            ) : items.length === 0 ? (
                <div className="bg-white rounded-2xl border border-dashed border-gray-200 p-14 text-center">
                    <p className="text-base text-gray-500">
                        Tidak ada panggilan konseling saat ini.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {items.map((item, idx) => (
                        <div
                            key={item.id || `call-${idx}`}
                            className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-sm transition-all cursor-pointer overflow-hidden relative group"
                            onClick={() => setDetailCall(item)}
                        >
                            {/* Accent line */}
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-500" />

                            <div className="flex justify-between items-start mb-4">
                                <div className="space-y-1">
                                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                                        {item.reason || "Sesi Konseling"}
                                    </h4>
                                    <p className="text-sm text-gray-500 font-medium">
                                        Oleh:{" "}
                                        {item.counselor?.user?.name ||
                                            "Wali Kelas/BK"}
                                    </p>
                                </div>
                                <StatusBadge status={item.status} />
                            </div>

                            <div className="flex flex-wrap gap-4 items-center">
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-100 shadow-inner">
                                    <svg
                                        className="w-4 h-4 text-primary-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span className="text-sm font-medium text-gray-700">
                                        {fmtDate(
                                            item.schedule_date ||
                                                item.requested_date,
                                        )}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-100 shadow-inner">
                                    <svg
                                        className="w-4 h-4 text-primary-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span className="text-sm font-medium text-gray-700">
                                        {new Date(
                                            item.schedule_date ||
                                                item.requested_date,
                                        ).toLocaleTimeString("id-ID", {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}{" "}
                                        WIB
                                    </span>
                                </div>
                            </div>

                            <div className="mt-5 flex justify-between items-center bg-gray-50/50 -mx-5 -mb-5 px-5 py-3 border-t border-gray-100">
                                <span className="text-sm text-gray-500 font-medium">
                                    {item.student_confirmation === "ready"
                                        ? "Sudah Konfirmasi"
                                        : "Perlu Konfirmasi"}
                                </span>
                                <svg
                                    className="w-4 h-4 text-gray-300 group-hover:text-primary-400 transform group-hover:translate-x-1 transition-all"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Call Detail Modal */}
            <Modal
                open={!!detailCall}
                onClose={() => setDetailCall(null)}
                title="Detail Panggilan"
            >
                {detailCall && (
                    <div className="p-6 space-y-6">
                        <div className="flex flex-col items-center text-center space-y-2 mb-2">
                            <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mb-2">
                                <svg
                                    className="w-8 h-8"
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
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900">
                                {detailCall.reason}
                            </h4>
                            <p className="text-base text-gray-500 font-medium">
                                Ruang Konseling BK / Wali Kelas
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between items-center p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                <span className="text-sm font-medium text-gray-500">
                                    Waktu Sesi
                                </span>
                                <span className="text-sm font-semibold text-gray-900">
                                    {fmtDateTime(
                                        detailCall.schedule_date ||
                                            detailCall.requested_date,
                                    )}
                                </span>
                            </div>
                            <div className="flex justify-between items-center p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                <span className="text-sm font-medium text-gray-500">
                                    Status Siswa
                                </span>
                                <span
                                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${detailCall.student_confirmation === "ready" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}
                                >
                                    {detailCall.student_confirmation === "ready"
                                        ? "SIAP HADIR"
                                        : "MENUNGGU KONFIRMASI"}
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-2">
                            <button
                                onClick={() => setShowReschedule(true)}
                                className="py-3 px-4 border border-gray-200 text-gray-700 font-medium text-sm rounded-xl hover:bg-gray-50 transition"
                            >
                                AJUKAN JADWAL LAIN
                            </button>
                            {detailCall.student_confirmation !== "ready" && (
                                <button
                                    onClick={() => handleConfirm(detailCall.id)}
                                    className="py-3 px-4 bg-primary-500 text-white font-semibold text-sm rounded-xl transition active:scale-95 hover:bg-primary-600"
                                >
                                    SAYA BISA HADIR
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </Modal>

            {/* Reschedule Modal */}
            <Modal
                open={showReschedule}
                onClose={() => setShowReschedule(false)}
                title="Ajukan Reschedule"
            >
                <form onSubmit={handleReschedule} className="p-6 space-y-4">
                    <p className="text-sm text-gray-500 font-medium">
                        Pilih waktu baru yang memungkinkan bagi Anda.
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-500">
                                Tanggal Baru
                            </label>
                            <input
                                type="date"
                                required
                                value={resForm.preferred_date}
                                onChange={(e) =>
                                    setResForm((f) => ({
                                        ...f,
                                        preferred_date: e.target.value,
                                    }))
                                }
                                className="w-full rounded-xl border-gray-200 bg-gray-50 text-base focus:bg-white focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none py-3 px-4"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-500">
                                Jam Baru
                            </label>
                            <input
                                type="time"
                                required
                                value={resForm.preferred_time}
                                onChange={(e) =>
                                    setResForm((f) => ({
                                        ...f,
                                        preferred_time: e.target.value,
                                    }))
                                }
                                className="w-full rounded-xl border-gray-200 bg-gray-50 text-base focus:bg-white focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none py-3 px-4"
                            />
                        </div>
                    </div>
                    <div className="flex gap-3 pt-2">
                        <button
                            type="button"
                            onClick={() => setShowReschedule(false)}
                            className="flex-1 py-3 text-base font-medium text-gray-500"
                        >
                            BATAL
                        </button>
                        <button
                            type="submit"
                            disabled={submitting}
                            className="flex-2 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition disabled:opacity-50"
                        >
                            KIRIM PERMINTAAN
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
