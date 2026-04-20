import React from 'react';

// ─── Icon Components ──────────────────────────────────────────────────────────

const Icons = {
    Home: (p) => <svg {...p} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
    Tasks: (p) => <svg {...p} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    Calendar: (p) => <svg {...p} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    Heart: (p) => <svg {...p} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    Briefcase: (p) => <svg {...p} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    Megaphone: (p) => <svg {...p} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>,
    Users: (p) => <svg {...p} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    Clipboard: (p) => <svg {...p} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>,
    Book: (p) => <svg {...p} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    Bell: (p) => <svg {...p} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>,
    Building: (p) => <svg {...p} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    Chart: (p) => <svg {...p} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>,
    Shield: (p) => <svg {...p} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
    Cog: (p) => <svg {...p} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    Report: (p) => <svg {...p} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    Smile: (p) => <svg {...p} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    Money: (p) => <svg {...p} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
};

// ─── Sidebar Configuration ────────────────────────────────────────────────────

export default function getSidebarItems(role) {
    if (role === 'student') {
        return [
            { label: 'Dashboard', route: 'student.dashboard', icon: <Icons.Home /> },
            { label: 'Tugas & Ujian', route: 'student.task-exam', icon: <Icons.Tasks /> },
            { label: 'Jadwal Kelas', route: 'student.class-schedule', icon: <Icons.Calendar /> },
            { label: 'Ruang Aman (MyFess)', route: 'student.myfess', icon: <Icons.Heart /> },
            { label: 'Lowongan Kerja', route: 'student.jobs', icon: <Icons.Briefcase /> },
            { label: 'Pengumuman', route: 'student.announcement', icon: <Icons.Bell /> },
            { label: 'Aduanku', route: 'student.my-complaint', icon: <Icons.Megaphone /> },
        ];
    }

    if (role === 'teacher') {
        return [
            { label: 'Dashboard', route: 'teacher.dashboard', icon: <Icons.Home /> },
            { label: 'Manajemen Tugas', route: 'teacher.task-management', icon: <Icons.Tasks /> },
            { label: 'Penilaian CBT', route: 'teacher.cbt-grading', icon: <Icons.Clipboard /> },
            { label: 'Jadwal Mengajar', route: 'teacher.teaching-schedule', icon: <Icons.Calendar /> },
            { label: 'Evaluasi Siswa', route: 'teacher.student-evaluation', icon: <Icons.Chart /> },
            { label: 'Informasi', route: 'teacher.information', icon: <Icons.Bell /> },
            { label: 'Moderasi MyFess', route: 'teacher.myfess-moderation', icon: <Icons.Shield /> },
        ];
    }

    if (role === 'school-admin') {
        return [
            { label: 'Dashboard', route: 'school-admin.dashboard', icon: <Icons.Home /> },
            { label: 'Data Pegawai & Murid', route: 'school-admin.master-data', icon: <Icons.Users /> },
            { label: 'Manajemen CBT', route: 'school-admin.cbt-management', icon: <Icons.Tasks /> },
            { label: 'Tugas & Materi', route: 'school-admin.material', icon: <Icons.Book /> },
            { label: 'Laporan Aduan', route: 'school-admin.incoming-complaint', icon: <Icons.Megaphone /> },
            { label: 'Pengumuman', route: 'school-admin.broadcast', icon: <Icons.Bell /> },
        ];
    }

    if (role === 'super-admin') {
        return [
            { label: 'Dashboard', route: 'super-admin.dashboard', icon: <Icons.Home /> },
            { label: 'Kelola Sekolah', route: 'super-admin.schools', icon: <Icons.Building /> },
            { label: 'Billing', route: 'super-admin.billing', icon: <Icons.Money /> },
            { label: 'Monitoring', route: 'super-admin.monitoring', icon: <Icons.Chart /> },
            { label: 'Pengaturan', route: 'super-admin.settings', icon: <Icons.Cog /> },
        ];
    }

    if (role === 'guidance') {
        return [
            { label: 'Dashboard', route: 'guidance.dashboard', icon: <Icons.Home /> },
            { label: 'Analisis Siswa', route: 'guidance.analysis', icon: <Icons.Chart /> },
            { label: 'Jadwal Konseling', route: 'guidance.counseling-schedule', icon: <Icons.Calendar /> },
            { label: 'MyFess Insight', route: 'guidance.myfess-insight', icon: <Icons.Smile /> },
        ];
    }

    if (role === 'finance') {
        return [
            { label: 'Dashboard', route: 'finance.dashboard', icon: <Icons.Home /> },
            { label: 'Tagihan', route: 'finance.billing', icon: <Icons.Money /> },
            { label: 'Arus Kas', route: 'finance.cash', icon: <Icons.Report /> },
        ];
    }

    if (role === 'career') {
        return [
            { label: 'Dashboard', route: 'career.dashboard', icon: <Icons.Home /> },
            { label: 'Lowongan Kerja', route: 'career.job-vacancies', icon: <Icons.Briefcase /> },
            { label: 'Kandidat', route: 'career.candidate', icon: <Icons.Users /> },
            { label: 'Mitra', route: 'career.partner', icon: <Icons.Building /> },
        ];
    }

    // Default generic for other roles (admission, librarian, academic, department)
    const genericRoutes = {
        admission: [
            { label: 'Dashboard', route: 'admission.dashboard', icon: <Icons.Home /> },
            { label: 'Dashboard Utama', route: 'admission.main-dashboard', icon: <Icons.Chart /> },
            { label: 'Menu Operasional', route: 'admission.operational-menu', icon: <Icons.Cog /> },
            { label: 'Laporan', route: 'admission.report', icon: <Icons.Report /> },
        ],
        librarian: [
            { label: 'Dashboard', route: 'librarian.dashboard', icon: <Icons.Home /> },
            { label: 'Dashboard Utama', route: 'librarian.main-dashboard', icon: <Icons.Chart /> },
            { label: 'Menu Operasional', route: 'librarian.operational-menu', icon: <Icons.Book /> },
            { label: 'Laporan', route: 'librarian.report', icon: <Icons.Report /> },
        ],
        academic: [
            { label: 'Dashboard', route: 'academic.dashboard', icon: <Icons.Home /> },
            { label: 'Dashboard Utama', route: 'academic.main-dashboard', icon: <Icons.Chart /> },
            { label: 'Menu Operasional', route: 'academic.operational-menu', icon: <Icons.Cog /> },
            { label: 'Laporan', route: 'academic.report', icon: <Icons.Report /> },
        ],
        department: [
            { label: 'Dashboard', route: 'department.dashboard', icon: <Icons.Home /> },
            { label: 'Dashboard Utama', route: 'department.main-dashboard', icon: <Icons.Chart /> },
            { label: 'Menu Operasional', route: 'department.operational-menu', icon: <Icons.Cog /> },
            { label: 'Laporan', route: 'department.report', icon: <Icons.Report /> },
        ],
    };

    return genericRoutes[role] || [
        { label: 'Dashboard', route: `${role}.dashboard`, icon: <Icons.Home /> },
    ];
}
