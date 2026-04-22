import React, { useState, useMemo } from "react";
import { Head } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import Modal from "@/Components/ui/Modal";

export default function Schedule({ schedules }) {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [selectedDate, setSelectedDate] = useState(today.getDate());
    const [detailItem, setDetailItem] = useState(null);

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
    const dayNames = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
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
        return schedules?.[dbDay] || [];
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
        for (let i = firstDay - 1; i >= 0; i--)
            days.push({ day: prevMonthDays - i, current: false });
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
        const rem = 42 - days.length;
        for (let i = 1; i <= rem; i++) days.push({ day: i, current: false });
        return days;
    }, [currentMonth, currentYear, schedules]);

    const prevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear((y) => y - 1);
        } else setCurrentMonth((m) => m - 1);
    };
    const nextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear((y) => y + 1);
        } else setCurrentMonth((m) => m + 1);
    };
    const goToday = () => {
        setCurrentMonth(today.getMonth());
        setCurrentYear(today.getFullYear());
        setSelectedDate(today.getDate());
    };

    const selJsDay = new Date(currentYear, currentMonth, selectedDate).getDay();
    const todaysSchedule = getScheduleForJsDay(selJsDay);
    const selectedDateKey = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(selectedDate).padStart(2, "0")}`;
    const isHol = holidays[selectedDateKey];
    const isWeekend = selJsDay === 0 || selJsDay === 6;

    return (
        <DashboardLayout headerTitle="Jadwal Kelas">
            <Head title="Jadwal Pelajaran" />
            <div className="space-y-6">
                {/* Page Header */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <div className="flex items-center gap-3">
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
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                                />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">
                                Kalender Akademik
                            </h2>
                            <p className="text-base text-gray-500">
                                Pilih tanggal untuk melihat jadwal kelas Anda.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
                    {/* Calendar - 3 cols */}
                    <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 overflow-hidden">
                        {/* Month nav */}
                        <div className="px-5 py-4 flex items-center justify-between border-b border-gray-50">
                            <button
                                onClick={prevMonth}
                                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-700 transition"
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
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>
                            <h3 className="text-base font-semibold text-gray-900">
                                {monthNames[currentMonth]} {currentYear}
                            </h3>
                            <button
                                onClick={nextMonth}
                                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-700 transition"
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
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Days header */}
                        <div className="grid grid-cols-7 px-4 pt-3 pb-1">
                            {shortDays.map((d, i) => (
                                <div
                                    key={d}
                                    className={`text-center text-[11px] font-medium py-2 ${i === 0 ? "text-red-400" : "text-gray-400"}`}
                                >
                                    {d}
                                </div>
                            ))}
                        </div>

                        {/* Days grid */}
                        <div className="grid grid-cols-7 px-4 pb-4 gap-1">
                            {calendarDays.map((dayObj, idx) => {
                                const isSel =
                                    dayObj.current &&
                                    dayObj.day === selectedDate;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() =>
                                            dayObj.current &&
                                            setSelectedDate(dayObj.day)
                                        }
                                        disabled={!dayObj.current}
                                        className={`relative h-10 rounded-xl text-base font-medium transition-all flex flex-col items-center justify-center ${!dayObj.current ? "text-gray-200" : isSel ? "bg-primary-500 text-white shadow-sm" : dayObj.isToday ? "bg-primary-50 text-primary-600 ring-1 ring-primary-100" : dayObj.isHoliday ? "text-red-500" : "text-gray-700 hover:bg-gray-50"}`}
                                    >
                                        <span>{dayObj.day}</span>
                                        {dayObj.current &&
                                            dayObj.hasSchedule && (
                                                <span
                                                    className={`w-1 h-1 rounded-full absolute bottom-1.5 ${isSel ? "bg-white" : "bg-primary-500"}`}
                                                />
                                            )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Legend + Today button */}
                        <div className="px-4 pb-4 flex items-center justify-between">
                            <div className="flex flex-wrap gap-3">
                                {[
                                    {
                                        label: "Ada Jadwal",
                                        color: "bg-primary-500",
                                    },
                                    { label: "Libur", color: "bg-red-500" },
                                    {
                                        label: "Hari Ini",
                                        color: "bg-primary-200",
                                    },
                                ].map((l) => (
                                    <span
                                        key={l.label}
                                        className="inline-flex items-center gap-1.5 text-[10px] font-medium text-gray-400"
                                    >
                                        <span
                                            className={`w-2 h-2 rounded-full ${l.color}`}
                                        />
                                        {l.label}
                                    </span>
                                ))}
                            </div>
                            <button
                                onClick={goToday}
                                className="text-sm font-medium text-primary-500 hover:text-primary-600 px-3 py-1.5 rounded-lg bg-primary-50 hover:bg-primary-100 transition flex items-center gap-1.5"
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
                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                                    />
                                </svg>
                                Hari Ini
                            </button>
                        </div>
                    </div>

                    {/* Agenda - 2 cols */}
                    <div className="lg:col-span-2 space-y-4">
                        {/* Date info card */}
                        <div className="bg-white rounded-2xl border border-gray-100 p-5">
                            <h4 className="text-gray-900 text-base">
                                Jadwal Hari Ini
                            </h4>
                            <h3 className="font-semibold text-lg md:text-xl text-gray-900">
                                {dayNames[selJsDay]}, {selectedDate}{" "}
                                {monthNames[currentMonth]}
                            </h3>
                            <div className="mt-3 flex items-center gap-2">
                                <span
                                    className={`text-sm font-medium px-2.5 py-1 rounded-full ${isHol ? "bg-red-50 text-red-600" : isWeekend ? "bg-gray-100 text-gray-500" : "bg-green-50 text-green-600"}`}
                                >
                                    {isHol ||
                                        (isWeekend
                                            ? "Weekend"
                                            : todaysSchedule.length > 0
                                              ? "Hari Masuk"
                                              : "Tidak Ada Jadwal")}
                                </span>
                                {!isWeekend && !isHol && (
                                    <span className="text-sm text-primary-500 bg-primary-50 px-2.5 py-1 rounded-full">
                                        {todaysSchedule.length} Sesi
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Schedule list */}
                        {todaysSchedule.length > 0 ? (
                            <div className="space-y-3">
                                {todaysSchedule.map((item, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setDetailItem(item)}
                                        className="bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-sm transition cursor-pointer group"
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <h4 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition">
                                                {item.subject?.name ||
                                                    "Mata Pelajaran"}
                                            </h4>
                                            <span className="text-sm font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full shrink-0">
                                                {item.room || "Lab 1"}
                                            </span>
                                        </div>
                                        <div className="space-y-1.5">
                                            <div className="flex items-center gap-2 text-base text-gray-500">
                                                <svg
                                                    className="w-3.5 h-3.5 text-gray-400"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                                                    />
                                                </svg>
                                                <span>
                                                    {item.classroom?.name ||
                                                        item.teacher?.user
                                                            ?.name ||
                                                        "Kelas"}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-base text-gray-500">
                                                <svg
                                                    className="w-3.5 h-3.5 text-gray-400"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                <span>
                                                    {item.start_time?.substring(
                                                        0,
                                                        5,
                                                    )}{" "}
                                                    —{" "}
                                                    {item.end_time?.substring(
                                                        0,
                                                        5,
                                                    )}{" "}
                                                    WIB
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-3 pt-3 border-t border-gray-50 flex items-center justify-between">
                                            <span className="text-sm text-gray-500">
                                                {item.session ||
                                                    `Sesi ${idx + 1}`}
                                            </span>
                                            <span className="text-sm font-medium text-primary-500 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
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
                        ) : (
                            <div className="bg-white rounded-2xl border border-gray-100 border-dashed p-10 text-center">
                                <svg
                                    className="w-10 h-10 text-gray-200 mx-auto mb-3"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                                    />
                                </svg>
                                <p className="text-base font-medium text-gray-600 mb-1">
                                    Tidak ada kelas
                                </p>
                                <p className="text-sm text-gray-400">
                                    {isWeekend
                                        ? "Nikmati akhir pekanmu!"
                                        : isHol
                                          ? holidays[selectedDateKey]
                                          : "Tidak ada jadwal hari ini."}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Detail Modal */}
            <Modal
                open={!!detailItem}
                onClose={() => setDetailItem(null)}
                title="Detail Pembelajaran"
            >
                {detailItem && (
                    <div className="p-6 space-y-5">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900">
                                {detailItem.subject?.name}
                            </h2>
                            <p className="text-base text-primary-500 font-medium mt-1">
                                {detailItem.teacher?.user?.name || "Guru"}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                {
                                    label: "Waktu",
                                    value: `${detailItem.start_time?.substring(0, 5)} — ${detailItem.end_time?.substring(0, 5)} WIB`,
                                },
                                {
                                    label: "Ruangan",
                                    value: `Ruang ${detailItem.room || "A01"}`,
                                },
                                {
                                    label: "Kelas",
                                    value:
                                        detailItem.classroom?.name || "X RPL 1",
                                },
                                {
                                    label: "Sesi",
                                    value: detailItem.session || "Sesi 1",
                                },
                            ].map((info, i) => (
                                <div
                                    key={i}
                                    className="p-3 bg-gray-50 rounded-xl border border-gray-100"
                                >
                                    <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wide mb-1">
                                        {info.label}
                                    </p>
                                    <p className="text-base font-semibold text-gray-900">
                                        {info.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={() => setDetailItem(null)}
                                className="px-5 py-2 bg-primary-500 text-white text-base font-semibold rounded-xl hover:bg-primary-600 transition"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                )}
            </Modal>
        </DashboardLayout>
    );
}
