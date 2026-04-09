import React, { useState, useMemo } from "react";
import { Head } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";

export default function Schedule({ schedules }) {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [selectedDate, setSelectedDate] = useState(today.getDate());
    const [detailModal, setDetailModal] = useState(null);

    const monthNames = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];
    const shortDays = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

    const holidays = {
        "2026-01-01": "Tahun Baru",
        "2026-03-29": "Hari Raya Nyepi",
        "2026-03-31": "Idul Fitri",
        "2026-04-01": "Idul Fitri",
    };

    const getScheduleForJsDay = (jsDay) => {
        const dbDay = jsDay === 0 ? 7 : jsDay;
        return schedules[dbDay] || [];
    };

    const calendarDays = useMemo(() => {
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(
            currentYear,
            currentMonth + 1,
            0,
        ).getDate();
        const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();

        const days = [];
        for (let i = firstDay - 1; i >= 0; i--) {
            days.push({ day: prevMonthDays - i, current: false });
        }
        for (let d = 1; d <= daysInMonth; d++) {
            const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
            const jsDay = new Date(currentYear, currentMonth, d).getDay();
            days.push({
                day: d,
                current: true,
                isToday:
                    d === today.getDate() &&
                    currentMonth === today.getMonth() &&
                    currentYear === today.getFullYear(),
                isHoliday: holidays[dateStr],
                hasSchedule:
                    getScheduleForJsDay(jsDay).length > 0 &&
                    jsDay !== 0 &&
                    jsDay !== 6,
                jsDay,
            });
        }
        const remaining = 42 - days.length;
        for (let i = 1; i <= remaining; i++) {
            days.push({ day: i, current: false });
        }
        return days;
    }, [currentMonth, currentYear, schedules]);

    const prevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else setCurrentMonth(currentMonth - 1);
    };

    const nextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else setCurrentMonth(currentMonth + 1);
    };

    const selectedJsDay = new Date(
        currentYear,
        currentMonth,
        selectedDate,
    ).getDay();
    const todaysSchedule = getScheduleForJsDay(selectedJsDay);
    const selectedDateKey = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(selectedDate).padStart(2, "0")}`;
    const selectedDayLabel = holidays[selectedDateKey]
        ? "Libur Nasional"
        : selectedJsDay === 0 || selectedJsDay === 6
          ? "Weekend"
          : todaysSchedule.length > 0
            ? "Hari Masuk"
            : "Tidak Ada Jadwal";

    return (
        <DashboardLayout
            headerTitle="Jadwal Kelas"
            headerSubtitle="Kalender akademik yang menyesuaikan hari, bulan, dan detail jadwal harian. Klik tanggal untuk melihat agenda pada tanggal tersebut."
            headerBadge="Kalender Akademik"
            backHref={route("student.dashboard")}
            backLabel="Kembali ke Dashboard Utama"
        >
            <Head title="Jadwal Pelajaran" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Calendar */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white focus-within:ring-2 focus-within:ring-blue-500">
                        <button
                            onClick={prevMonth}
                            className="p-2 text-slate-400 hover:text-slate-900 border border-slate-100 rounded-lg hover:bg-slate-50 transition-all"
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
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                        <div className="text-center">
                            <h3 className="font-bold text-slate-900 font-outfit uppercase tracking-tight">
                                {monthNames[currentMonth]} {currentYear}
                            </h3>
                        </div>
                        <button
                            onClick={nextMonth}
                            className="p-2 text-slate-400 hover:text-slate-900 border border-slate-100 rounded-lg hover:bg-slate-50 transition-all"
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
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="grid grid-cols-7 p-4 gap-1">
                        {shortDays.map((d, i) => (
                            <div
                                key={d}
                                className={`text-center text-[10px] font-bold uppercase tracking-widest p-2 ${i === 0 ? "text-red-500" : "text-slate-400"}`}
                            >
                                {d}
                            </div>
                        ))}
                        {calendarDays.map((dayObj, idx) => {
                            const isSelected =
                                dayObj.current && dayObj.day === selectedDate;
                            return (
                                <button
                                    key={idx}
                                    onClick={() =>
                                        dayObj.current &&
                                        setSelectedDate(dayObj.day)
                                    }
                                    disabled={!dayObj.current}
                                    className={`relative h-12 rounded-lg text-sm font-bold transition-all flex flex-col items-center justify-center ${
                                        !dayObj.current
                                            ? "text-slate-200"
                                            : isSelected
                                              ? "bg-blue-600 text-white shadow-lg shadow-blue-100 scale-105 z-10"
                                              : dayObj.isToday
                                                ? "bg-blue-50 text-blue-600 ring-1 ring-blue-100"
                                                : dayObj.isHoliday
                                                  ? "text-red-600"
                                                  : "text-slate-600 hover:bg-slate-50"
                                    }`}
                                >
                                    <span>{dayObj.day}</span>
                                    {dayObj.current && dayObj.hasSchedule && (
                                        <span
                                            className={`w-1 h-1 rounded-full absolute bottom-2 ${isSelected ? "bg-white" : "bg-blue-600"}`}
                                        ></span>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    <div className="px-4 pb-4 flex flex-wrap gap-2">
                        {[
                            { label: "Hari Masuk", color: "bg-blue-600" },
                            { label: "Weekend", color: "bg-slate-400" },
                            { label: "Libur Nasional", color: "bg-rose-500" },
                            { label: "Ada Jadwal", color: "bg-emerald-500" },
                        ].map((item) => (
                            <span
                                key={item.label}
                                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-slate-500"
                            >
                                <span
                                    className={`w-2 h-2 rounded-full ${item.color}`}
                                />
                                {item.label}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Agenda */}
                <div className="space-y-6 text-left">
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                        <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-400">
                            Tanggal Terpilih
                        </p>
                        <h3 className="mt-2 text-2xl font-black text-slate-900 font-outfit">
                            {selectedDate} {monthNames[currentMonth]}{" "}
                            {currentYear}
                        </h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <span
                                className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] ${selectedDayLabel === "Libur Nasional" ? "bg-rose-100 text-rose-700" : selectedDayLabel === "Weekend" ? "bg-slate-100 text-slate-600" : "bg-emerald-100 text-emerald-700"}`}
                            >
                                {selectedDayLabel}
                            </span>
                            <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-blue-700">
                                {todaysSchedule.length} jadwal
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {todaysSchedule.length > 0 ? (
                            todaysSchedule.map((item, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setDetailModal(item)}
                                    className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm hover:border-blue-300 transition-all cursor-pointer group flex items-center gap-6"
                                >
                                    <div className="hidden sm:block text-center w-14 shrink-0">
                                        <p className="text-xs font-bold text-slate-400">
                                            {item.start_time?.substring(0, 5)}
                                        </p>
                                        <div className="h-4 w-px bg-slate-200 mx-auto my-1"></div>
                                        <p className="text-xs font-bold text-slate-400">
                                            {item.end_time?.substring(0, 5)}
                                        </p>
                                    </div>
                                    <div className="flex-1 text-left">
                                        <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight">
                                            {item.subject?.name}
                                        </h4>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                                            {item.teacher?.user?.name} · Ruang{" "}
                                            {item.room || "Utama"}
                                        </p>
                                    </div>
                                    <svg
                                        className="w-5 h-5 text-slate-200 group-hover:text-blue-600 transition-all"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            ))
                        ) : (
                            <div className="md:col-span-2 bg-slate-50 border border-slate-100 border-dashed rounded-3xl p-12 text-center text-slate-400 font-medium">
                                Tidak ada jadwal belajar.
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {detailModal && (
                <div className="fixed inset-0 z-150 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white rounded-xl shadow-xl max-w-lg w-full scale-in-center overflow-hidden flex flex-col">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <h3 className="font-bold text-slate-900 font-outfit uppercase">
                                Detail Pembelajaran
                            </h3>
                            <button
                                onClick={() => setDetailModal(null)}
                                className="text-slate-300 hover:text-slate-900 transition-colors"
                            >
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
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="p-8 space-y-6 text-left">
                            <div>
                                <h4 className="text-2xl font-bold text-slate-900 font-outfit uppercase tracking-tight leading-tight">
                                    {detailModal.subject?.name}
                                </h4>
                                <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mt-2">
                                    {detailModal.teacher?.user?.name}
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                                        Waktu
                                    </p>
                                    <p className="font-bold text-slate-800">
                                        {detailModal.start_time?.substring(
                                            0,
                                            5,
                                        )}{" "}
                                        —{" "}
                                        {detailModal.end_time?.substring(0, 5)}{" "}
                                        WIB
                                    </p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                                        Ruangan
                                    </p>
                                    <p className="font-bold text-slate-800">
                                        Ruang {detailModal.room || "A01"}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 border-t border-slate-50 bg-slate-50/50 flex justify-end">
                            <button
                                onClick={() => setDetailModal(null)}
                                className="px-8 py-2.5 bg-slate-900 text-white font-bold text-xs uppercase rounded-lg shadow-lg shadow-slate-100 transition-all"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </DashboardLayout>
    );
}
