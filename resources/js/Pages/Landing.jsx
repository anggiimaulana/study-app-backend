import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function Landing() {
    return (
        <>
            <Head title="EduSpace — Platform Pendidikan Digital" />
            <div className="min-h-screen bg-white text-gray-900 font-[Outfit,Inter,sans-serif]">
                {/* Navigation */}
                <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center gap-2.5">
                                <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-base">E</div>
                                <span className="text-lg font-bold text-gray-900 tracking-tight">EduSpace</span>
                            </div>
                            <div className="hidden md:flex items-center gap-8">
                                <a href="#features" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Fitur</a>
                                <a href="#stats" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Statistik</a>
                                <a href="#modules" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Modul</a>
                                <a href="#testimonials" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Testimoni</a>
                            </div>
                            <Link href="/login" className="px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-all">
                                Masuk
                            </Link>
                        </div>
                    </div>
                </nav>

                {/* Hero */}
                <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/[0.04] rounded-full blur-[100px] -mr-40 -mt-20" />
                    <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-indigo-500/[0.04] rounded-full blur-[80px] -ml-24" />

                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                        <div className="text-center max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-xs font-semibold tracking-wide uppercase mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                Platform Pendidikan Modern
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                                Kelola Sekolah dengan <span className="text-blue-600">Lebih Cerdas</span>
                            </h1>
                            <p className="text-base lg:text-lg text-gray-500 leading-relaxed max-w-xl mx-auto mb-10">
                                EduSpace menghubungkan seluruh ekosistem pendidikan dalam satu platform modern. Dari manajemen akademik hingga kesejahteraan siswa.
                            </p>
                            <div className="flex flex-wrap justify-center gap-3">
                                <Link href="/login" className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all text-sm">
                                    Mulai Sekarang
                                </Link>
                                <a href="#features" className="px-7 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors text-sm">
                                    Pelajari Fitur
                                </a>
                            </div>
                        </div>

                        {/* Stats */}
                        <div id="stats" className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { value: '12+', label: 'Role Operasional' },
                                { value: '1000+', label: 'Pengguna Aktif' },
                                { value: '99%', label: 'Uptime Server' },
                                { value: '3.92', label: 'GPA Rata-rata' },
                            ].map((stat, idx) => (
                                <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-5 text-center hover:shadow-sm transition-shadow">
                                    <div className="text-2xl font-bold text-gray-900 tracking-tight mb-1">{stat.value}</div>
                                    <p className="text-xs font-medium text-gray-400">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section id="features" className="py-16 lg:py-24 bg-gray-50/60">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3 block">Fitur Unggulan</span>
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Semua yang Dibutuhkan Sekolah</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {[
                                { title: 'Dashboard Real-time', desc: 'Pantau statistik sekolah, kehadiran, dan performa akademik.', icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z', color: 'bg-blue-50 text-blue-600' },
                                { title: 'MyFess — Ruang Aman', desc: 'Platform untuk check-in harian dan layanan konseling siswa.', icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z', color: 'bg-indigo-50 text-indigo-600' },
                                { title: 'CBT & Ujian Digital', desc: 'Computer-based testing dengan auto-grading dan analisis.', icon: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25', color: 'bg-emerald-50 text-emerald-600' },
                                { title: 'Manajemen Jadwal', desc: 'Kalender akademik interaktif dengan detail sesi dan materi.', icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5', color: 'bg-amber-50 text-amber-600' },
                                { title: 'Multi-Role Access', desc: '12 peran dengan dashboard khusus dan akses terkontrol.', icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z', color: 'bg-violet-50 text-violet-600' },
                                { title: 'Portal Karir', desc: 'Hubungkan siswa dengan peluang kerja melalui BKK.', icon: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z', color: 'bg-rose-50 text-rose-600' },
                            ].map((feature, idx) => (
                                <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-sm hover:border-blue-100 transition-all duration-300 group">
                                    <div className={`w-11 h-11 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} /></svg>
                                    </div>
                                    <h3 className="text-base font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Modules */}
                <section id="modules" className="py-16 lg:py-24">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3 block">Modul Lengkap</span>
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">12 Role, 1 Platform</h2>
                            <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm">Setiap peran memiliki dashboard khusus yang disesuaikan kebutuhan.</p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                            {[
                                { name: 'Super Admin', desc: 'Platform control', icon: 'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z' },
                                { name: 'Admin Sekolah', desc: 'Manajemen sekolah', icon: 'M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z' },
                                { name: 'Guru', desc: 'Pengajaran', icon: 'M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' },
                                { name: 'Siswa', desc: 'Belajar & MyFess', icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' },
                                { name: 'Guru BK', desc: 'Bimbingan', icon: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' },
                                { name: 'Keuangan', desc: 'Billing & kas', icon: 'M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z' },
                                { name: 'Akademik', desc: 'Kurikulum', icon: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25' },
                                { name: 'Kejuruan', desc: 'Program keahlian', icon: 'M11.42 15.17l-5.648-3.262a.748.748 0 01-.165-1.082L12 4.25l6.394 6.576a.748.748 0 01-.166 1.082l-5.648 3.262a2.25 2.25 0 01-2.16 0z' },
                                { name: 'Perpustakaan', desc: 'Katalog', icon: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25' },
                                { name: 'PPDB', desc: 'Penerimaan', icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' },
                                { name: 'BKK', desc: 'Bursa kerja', icon: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z' },
                                { name: 'Tata Usaha', desc: 'Administrasi', icon: 'M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z' },
                            ].map((role, idx) => (
                                <div key={idx} className="bg-white rounded-xl border border-gray-100 p-4 hover:border-blue-200 hover:shadow-sm transition-all text-center group cursor-default">
                                    <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center mx-auto mb-2.5 group-hover:bg-blue-50 group-hover:border-blue-100 transition">
                                        <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={role.icon} /></svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-800 text-xs">{role.name}</h4>
                                    <p className="text-[11px] text-gray-400 mt-0.5">{role.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="py-16 lg:py-24 bg-gray-900 text-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-3 block">Testimoni</span>
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Dipercaya oleh Sekolah Terbaik</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {[
                                { name: 'Budi Santoso', role: 'Kepala Sekolah, SMKN 1', text: 'EduSpace mengubah cara kami mengelola sekolah. Semua data terpusat dan mudah diakses.' },
                                { name: 'Sari Dewi', role: 'Guru BK, SMAN 4', text: 'Fitur MyFess membantu kami memahami kondisi mental siswa lebih dini.' },
                                { name: 'Reza Pratama', role: 'Siswa, SMKN 2', text: 'Akhirnya ada platform yang benar-benar mendengarkan suara siswa.' },
                            ].map((t, idx) => (
                                <div key={idx} className="bg-white/5 rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-colors">
                                    <p className="text-gray-300 leading-relaxed mb-5 text-sm">"{t.text}"</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">{t.name[0]}</div>
                                        <div>
                                            <p className="font-semibold text-white text-sm">{t.name}</p>
                                            <p className="text-xs text-gray-400">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 lg:py-24">
                    <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                            Siap Transformasi Digital?
                        </h2>
                        <p className="text-base text-gray-500 mb-8 max-w-lg mx-auto">
                            Bergabung dengan ratusan sekolah yang sudah menggunakan EduSpace.
                        </p>
                        <Link href="/login" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all text-sm">
                            Mulai Sekarang — Gratis
                        </Link>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-8 border-t border-gray-100">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">E</div>
                            <span className="text-sm text-gray-400">EduSpace © {new Date().getFullYear()}. All rights reserved.</span>
                        </div>
                        <div className="flex gap-6">
                            <a href="#" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">Privacy</a>
                            <a href="#" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">Terms</a>
                            <a href="#" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">Contact</a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
