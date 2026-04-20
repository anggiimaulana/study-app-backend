import React, { useState } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <>
            <Head title="Login — EduSpace" />
            <div className="min-h-screen flex font-[Outfit,sans-serif]">
                {/* Left — Branding Panel */}
                <div className="hidden lg:flex lg:w-[55%] relative bg-gradient-to-br from-[#1e3a5f] via-[#1d4ed8] to-[#2563eb] overflow-hidden">
                    {/* Decorative shapes */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -mr-64 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full -ml-48 -mb-32" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/[0.03] rounded-full" />

                    <div className="relative z-10 w-full flex flex-col justify-between p-12 lg:p-16">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                                <span className="text-blue-600 font-bold text-lg">E</span>
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">EduSpace</span>
                        </div>

                        {/* Main content */}
                        <div className="max-w-md">
                            <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight mb-5">
                                Sistem Manajemen<br />Akademik Terpadu
                            </h1>
                            <p className="text-blue-100/80 text-base leading-relaxed mb-10">
                                Platform pendidikan modern yang menghubungkan guru, siswa, dan manajemen sekolah dalam satu ekosistem digital.
                            </p>

                            {/* Stats */}
                            <div className="flex gap-8">
                                {[
                                    { value: '12+', label: 'Role Operasional' },
                                    { value: '1000+', label: 'Pengguna Aktif' },
                                    { value: '99%', label: 'Uptime Server' },
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                                        <p className="text-sm text-blue-200/70">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Footer */}
                        <p className="text-sm text-blue-200/60">
                            &copy; {new Date().getFullYear()} EduSpace. Hak Cipta Dilindungi.
                        </p>
                    </div>
                </div>

                {/* Right — Login Form */}
                <div className="w-full lg:w-[45%] flex items-center justify-center bg-gray-50 p-6 sm:p-10">
                    <div className="w-full max-w-[400px]">
                        {/* Mobile logo */}
                        <div className="lg:hidden flex items-center gap-3 mb-10">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-lg">E</span>
                            </div>
                            <span className="text-2xl font-bold text-gray-900 tracking-tight">EduSpace</span>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Selamat Datang!</h2>
                            <p className="text-gray-500 text-sm leading-relaxed">Masuk menggunakan kredensial yang telah diberikan oleh administrator sekolah.</p>
                        </div>

                        {/* Error alert */}
                        {errors.email && (
                            <div className="mb-5 p-3.5 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl font-medium flex items-center gap-2.5">
                                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                {errors.email}
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-5">
                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">Alamat Email</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                        <svg className="w-[18px] h-[18px] text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                                    </div>
                                    <input
                                        id="email" type="email" value={data.email} onChange={e => setData('email', e.target.value)}
                                        className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all outline-none text-sm text-gray-800"
                                        placeholder="nama@sekolah.sch.id" required autoFocus
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="password">Password</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                        <svg className="w-[18px] h-[18px] text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
                                    </div>
                                    <input
                                        id="password" type={showPassword ? 'text' : 'password'} value={data.password} onChange={e => setData('password', e.target.value)}
                                        className="w-full pl-11 pr-11 py-3 bg-white border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all outline-none text-sm text-gray-800"
                                        placeholder="Masukkan password" required
                                    />
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition-colors">
                                        {showPassword ? (
                                            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>
                                        ) : (
                                            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Remember + Forgot */}
                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" checked={data.remember} onChange={e => setData('remember', e.target.checked)} />
                                    <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">Ingat saya</span>
                                </label>
                                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">Lupa password?</a>
                            </div>

                            {/* Submit */}
                            <button type="submit" disabled={processing} className={`w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all text-sm ${processing ? 'opacity-70 cursor-not-allowed' : ''}`}>
                                {processing ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                                        Memproses...
                                    </span>
                                ) : 'Masuk ke Platform'}
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <p className="text-center text-xs text-gray-400">
                                Dengan masuk, Anda menyetujui <a href="#" className="text-blue-600 hover:underline">Ketentuan Layanan</a> dan <a href="#" className="text-blue-600 hover:underline">Kebijakan Privasi</a>
                            </p>
                        </div>

                        {/* Trust badges */}
                        <div className="mt-6 flex items-center justify-center gap-4">
                            {['SSL Encrypted', 'GDPR Ready', '24/7 Support'].map((badge, i) => (
                                <span key={i} className="inline-flex items-center gap-1 text-[10px] text-gray-400 font-medium">
                                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
