import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';

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
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-8 font-inter">
            <Head title="Log In" />
            
            <div className="max-w-[1000px] w-full flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl shadow-blue-900/5 overflow-hidden">
                {/* Left side (Branding & Branding Visual) */}
                <div className="w-full md:w-1/2 bg-blue-600 p-10 flex flex-col justify-between relative overflow-hidden text-white">
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-500/30 blur-3xl" />
                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-blue-700/30 blur-3xl" />
                    
                    <div className="relative z-10 flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 font-bold text-xl shadow-lg">
                            LM
                        </div>
                        <span className="text-2xl font-bold font-outfit tracking-tight">EduSpace</span>
                    </div>
                    
                    <div className="relative z-10 mt-16 mb-8 md:my-auto">
                        <h1 className="text-3xl lg:text-4xl font-bold font-outfit leading-tight mb-4 text-white">
                            Sistem Manajemen Akademik Generasi Baru.
                        </h1>
                        <p className="text-blue-100 text-sm lg:text-base mb-8 max-w-sm">
                            Platform terpadu untuk efisiensi sekolah. Pantau kehadiran, ujian, hingga report secara real-time.
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <img key={i} src={`https://ui-avatars.com/api/?name=${i}&background=eff6ff&color=2563eb`} alt="User" className="w-10 h-10 rounded-full border-2 border-blue-600 shadow-sm" />
                                ))}
                            </div>
                            <span className="text-sm font-medium text-blue-100">Ditonton oleh 1k+ praktisi pendidikan</span>
                        </div>
                    </div>

                    <div className="relative z-10 text-sm font-medium text-blue-200">
                        &copy; {new Date().getFullYear()} EduSpace. Hak Cipta Dilindungi.
                    </div>
                </div>

                {/* Right side (Form) */}
                <div className="w-full md:w-1/2 p-8 lg:p-14 xl:p-16 flex items-center justify-center">
                    <div className="w-full max-w-md">
                        <h2 className="text-3xl font-bold font-outfit text-slate-800 mb-2">Selamat Datang!</h2>
                        <p className="text-slate-500 text-sm mb-8">Silakan masuk menggunakan kredensial yang telah diberikan oleh administrator.</p>

                        {errors.email && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl font-medium animate-pulse">
                                {errors.email}
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="email">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>
                                    </div>
                                    <input 
                                        id="email"
                                        type="email" 
                                        value={data.email}
                                        onChange={e => setData('email', e.target.value)}
                                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none text-sm text-slate-800 font-medium" 
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="password">
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                    </div>
                                    <input 
                                        id="password"
                                        type={showPassword ? "text" : "password"} 
                                        value={data.password}
                                        onChange={e => setData('password', e.target.value)}
                                        className="w-full pl-11 pr-11 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none text-sm text-slate-800 font-medium" 
                                        placeholder="Min. 8 characters"
                                        required
                                    />
                                    <button 
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                                    >
                                        {showPassword ? (
                                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pb-2">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input 
                                        type="checkbox" 
                                        className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                                        checked={data.remember}
                                        onChange={e => setData('remember', e.target.checked)}
                                    />
                                    <span className="text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors">Remember me</span>
                                </label>
                                <a href="#" className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
                                    Forgot password?
                                </a>
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className={`w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-md active:scale-[0.98] ${processing ? 'opacity-70 cursor-not-allowed' : 'shadow-blue-600/30'}`}
                            >
                                {processing ? 'Memproses...' : 'Masuk ke Platform'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
