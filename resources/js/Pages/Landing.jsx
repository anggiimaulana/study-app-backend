import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function Landing() {
    return (
        <>
            <Head title="EduSpace — Platform Pendidikan Digital" />
            <div className="min-h-screen bg-white font-inter text-slate-800 overflow-hidden">
                {/* Navigation */}
                <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="flex items-center justify-between h-20">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30">
                                    LM
                                </div>
                                <span className="text-xl font-extrabold font-outfit tracking-tighter text-slate-900">EduSpace<span className="text-blue-600">.</span></span>
                            </div>
                            <div className="hidden md:flex items-center gap-8">
                                <a href="#features" className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">Fitur</a>
                                <a href="#stats" className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">Statistik</a>
                                <a href="#modules" className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">Modul</a>
                                <a href="#testimonials" className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">Testimoni</a>
                            </div>
                            <Link href="/login" className="px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all">
                                Masuk Platform
                            </Link>
                        </div>
                    </div>
                </nav>

                {/* Hero */}
                <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] -mr-48 -mt-24"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] -ml-24"></div>
                    
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                        <div className="text-center max-w-4xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-xs font-black tracking-[0.2em] uppercase mb-8">
                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                                Platform Pendidikan Masa Depan
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-black font-outfit leading-[1.05] tracking-tight mb-8">
                                Wujudkan <span className="text-blue-600 italic">Mimpimu</span> Di Sekolah Digital.
                            </h1>
                            <p className="text-lg lg:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-12">
                                EduSpace menghubungkan seluruh ekosistem pendidikan dalam satu platform modern. Dari manajemen sekolah hingga kesejahteraan siswa.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link href="/login" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-xl shadow-blue-600/30 transition-all active:scale-95 text-lg">
                                    Mulai Sekarang — Gratis
                                </Link>
                                <a href="#features" className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-2xl transition-colors text-lg">
                                    Pelajari Fitur
                                </a>
                            </div>
                        </div>

                        {/* Stats Bar */}
                        <div id="stats" className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { value: '98%', label: 'Kehadiran Siswa', icon: '📊' },
                                { value: '#04', label: 'Peringkat Rata-rata', icon: '🏆' },
                                { value: '142', label: 'Poin Aktif', icon: '⭐' },
                                { value: '3.92', label: 'GPA Rata-rata', icon: '📈' },
                            ].map((stat, idx) => (
                                <div key={idx} className="bg-white rounded-2xl border border-slate-100 p-6 text-center shadow-sm hover:shadow-md transition-shadow group">
                                    <span className="text-3xl mb-3 block">{stat.icon}</span>
                                    <div className="text-3xl font-black text-slate-900 font-outfit tracking-tighter mb-1 group-hover:text-blue-600 transition-colors">{stat.value}</div>
                                    <p className="text-sm font-medium text-slate-400">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section id="features" className="py-20 lg:py-32 bg-slate-50/50">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-4 block">Fitur Unggulan</span>
                            <h2 className="text-4xl lg:text-5xl font-black font-outfit tracking-tight text-slate-900">Semua yang Dibutuhkan Sekolah</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: 'Dashboard Real-time', desc: 'Pantau statistik sekolah, kehadiran, dan performa akademik dalam satu tampilan.', icon: '📊', color: 'bg-blue-50 text-blue-600' },
                                { title: 'MyFess — Ruang Aman', desc: 'Platform anonim untuk siswa berbagi cerita dan mengakses layanan konseling.', icon: '🛡️', color: 'bg-indigo-50 text-indigo-600' },
                                { title: 'CBT & Ujian Digital', desc: 'Computer-based testing dengan auto-grading dan analisis performa.', icon: '💻', color: 'bg-emerald-50 text-emerald-600' },
                                { title: 'Manajemen Jadwal', desc: 'Kalender akademik interaktif dengan detail sesi dan materi.', icon: '📅', color: 'bg-amber-50 text-amber-600' },
                                { title: 'Multi-Role Access', desc: '12 role operasional dari Super Admin hingga siswa dengan akses terkontrol.', icon: '👥', color: 'bg-violet-50 text-violet-600' },
                                { title: 'Portal Karir', desc: 'Hubungkan siswa dengan peluang kerja melalui BKK sekolah.', icon: '🚀', color: 'bg-red-50 text-red-600' },
                            ].map((feature, idx) => (
                                <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300 group">
                                    <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold font-outfit text-slate-900 mb-3">{feature.title}</h3>
                                    <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Modules */}
                <section id="modules" className="py-20 lg:py-32">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-4 block">Modul Lengkap</span>
                            <h2 className="text-4xl lg:text-5xl font-black font-outfit tracking-tight text-slate-900">12 Role, 1 Platform</h2>
                            <p className="text-slate-500 mt-4 max-w-xl mx-auto">Setiap peran memiliki dashboard khusus dengan fitur yang disesuaikan</p>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {[
                                { name: 'Super Admin', desc: 'Platform-wide control', emoji: '👑' },
                                { name: 'Admin Sekolah', desc: 'Manajemen sekolah', emoji: '🏫' },
                                { name: 'Guru', desc: 'Pengajaran & tugas', emoji: '👨‍🏫' },
                                { name: 'Siswa', desc: 'Belajar & MyFess', emoji: '🎓' },
                                { name: 'Guru BK', desc: 'Bimbingan konseling', emoji: '💚' },
                                { name: 'Keuangan', desc: 'Billing & kas', emoji: '💰' },
                                { name: 'Akademik', desc: 'Kurikulum & data', emoji: '📚' },
                                { name: 'Kejuruan', desc: 'Program keahlian', emoji: '🔧' },
                                { name: 'Perpustakaan', desc: 'Katalog & sirkulasi', emoji: '📖' },
                                { name: 'PPDB', desc: 'Penerimaan siswa', emoji: '📝' },
                                { name: 'BKK', desc: 'Bursa kerja', emoji: '💼' },
                                { name: 'Tata Usaha', desc: 'Administrasi', emoji: '📁' },
                            ].map((role, idx) => (
                                <div key={idx} className="bg-white rounded-2xl border border-slate-100 p-5 hover:border-blue-200 hover:shadow-md transition-all text-center group cursor-default">
                                    <span className="text-3xl block mb-3 group-hover:scale-125 transition-transform">{role.emoji}</span>
                                    <h4 className="font-bold text-slate-800 text-sm mb-1">{role.name}</h4>
                                    <p className="text-xs text-slate-400">{role.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="py-20 lg:py-32 bg-slate-900 text-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-xs font-black text-blue-400 uppercase tracking-[0.2em] mb-4 block">Testimoni</span>
                            <h2 className="text-4xl lg:text-5xl font-black font-outfit tracking-tight">Dipercaya oleh Sekolah Terbaik</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { name: 'Budi Santoso', role: 'Kepala Sekolah, SMKN 1', text: 'EduSpace mengubah cara kami mengelola sekolah. Semua data terpusat dan akses mudah.' },
                                { name: 'Sari Dewi', role: 'Guru BK, SMAN 4', text: 'Fitur MyFess membantu kami memahami kondisi mental siswa lebih dini.' },
                                { name: 'Reza Pratama', role: 'Siswa, SMKN 2', text: 'Akhirnya ada platform yang benar-benar mendengarkan suara siswa.' },
                            ].map((t, idx) => (
                                <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-colors">
                                    <p className="text-slate-300 leading-relaxed mb-6 text-lg italic">"{t.text}"</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                                            {t.name.substring(0, 1)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-sm">{t.name}</p>
                                            <p className="text-xs text-slate-400">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 lg:py-32">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                        <h2 className="text-4xl lg:text-5xl font-black font-outfit tracking-tight text-slate-900 mb-6">
                            Siap Transformasi Digital?
                        </h2>
                        <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto">
                            Bergabung dengan ratusan sekolah yang sudah menggunakan EduSpace untuk pengelolaan pendidikan modern.
                        </p>
                        <Link href="/login" className="inline-block px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-xl shadow-blue-600/30 transition-all active:scale-95 text-lg">
                            Mulai Sekarang — Gratis 🚀
                        </Link>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-12 border-t border-slate-100">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-700 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">LM</div>
                            <span className="font-bold text-slate-500 text-sm">EduSpace © 2026. All rights reserved.</span>
                        </div>
                        <div className="flex gap-6">
                            <a href="#" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">Privacy</a>
                            <a href="#" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">Terms</a>
                            <a href="#" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">Contact</a>
                        </div>
                    </div>
                </footer>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800;900&display=swap');
                .font-inter { font-family: 'Inter', sans-serif; }
                .font-outfit { font-family: 'Outfit', sans-serif; }
            `}</style>
        </>
    );
}
