import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Button from '@/Components/Button';

export default function MyFess({ posts }) {
    const { data, setData, post, processing, reset } = useForm({
        content: '',
        is_anonymous: true,
    });

    const submit = (e) => {
        e.preventDefault();
        // In real app, we would send post request here.
        // For now, it's a UI demonstration.
        reset();
    };

    return (
        <DashboardLayout headerTitle="MyFess - Ruang Aman">
            <Head title="MyFess - Ruang Aman" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: Feed */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Create Post */}
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                        <h3 className="text-lg font-bold text-slate-800 font-outfit mb-4">Bagikan Ceritamu Secara Anonim</h3>
                        <form onSubmit={submit}>
                            <textarea 
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all resize-none min-h-[120px]"
                                placeholder="Apa yang sedang kamu pikirkan hari ini? Luapkan saja di sini secara rahasia..."
                                value={data.content}
                                onChange={e => setData('content', e.target.value)}
                            />
                            <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input 
                                        type="checkbox" 
                                        checked={data.is_anonymous}
                                        onChange={e => setData('is_anonymous', e.target.checked)}
                                        className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-800 transition-colors">Post sebagai Anonim</span>
                                </label>
                                <Button disabled={processing || !data.content}>Kirim ke Menfess ✨</Button>
                            </div>
                        </form>
                    </div>

                    {/* Feed Posts */}
                    <div className="space-y-6">
                        {posts.data.map((post) => (
                            <div key={post.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:border-blue-100 transition-colors group">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${post.is_anonymous ? 'bg-slate-800 text-white' : 'bg-blue-100 text-blue-600'}`}>
                                            {post.is_anonymous ? '?' : (post.student?.user?.name?.substring(0, 1) || 'S')}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-800">{post.is_anonymous ? 'Anonim (User #'+post.id+')' : post.student?.user?.name}</p>
                                            <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest">{new Date(post.created_at).toLocaleString('id-ID', { hour: '2-digit', minute: '2-digit', day: 'numeric', month: 'short' })}</p>
                                        </div>
                                    </div>
                                    <button className="text-slate-300 hover:text-slate-500">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                                    </button>
                                </div>
                                <p className="text-slate-700 leading-relaxed font-inter text-base whitespace-pre-wrap">
                                    {post.content}
                                </p>
                                <div className="mt-6 pt-6 border-t border-slate-50 flex items-center gap-6">
                                    <button className="flex items-center gap-2 text-slate-400 hover:text-pink-500 transition-colors font-bold text-sm">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                        42
                                    </button>
                                    <button className="flex items-center gap-2 text-slate-400 hover:text-blue-500 transition-colors font-bold text-sm">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                        12 Komentar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Rules/About */}
                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-indigo-900 to-blue-900 rounded-3xl p-6 text-white shadow-xl shadow-blue-900/10">
                        <h3 className="text-xl font-bold font-outfit mb-4">Kenapa Ruang Aman? 🛡️</h3>
                        <p className="text-blue-100 text-sm leading-relaxed mb-6">
                            MyFess adalah inisiatif sekolah untuk mendengar keluhan, saran, atau sekadar cerita harian tanpa rasa takut dihakimi. Identitasmu sepenuhnya terjaga.
                        </p>
                        <div className="space-y-3">
                            {['Kritik & Saran Sekolah', 'Konseling Anonim', 'Cerita & Hobi', 'Apresiasi'].map((i) => (
                                <div key={i} className="flex items-center gap-2 text-xs font-bold bg-white/10 px-3 py-2 rounded-xl">
                                    <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    {i}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                        <h4 className="text-sm font-bold text-slate-800 mb-4">Sedang Tren di Sekolahmu 🔥</h4>
                        <div className="space-y-4">
                            {['#UjianTengahSemester', '#FascinatingEnglish', '#EkskulBasket', '#StudyHard'].map((tag) => (
                                <div key={tag} className="flex justify-between items-center cursor-pointer hover:text-blue-600 transition-colors">
                                    <span className="text-sm font-bold text-slate-700">{tag}</span>
                                    <span className="text-xs text-slate-400 font-semibold">12.4K</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
