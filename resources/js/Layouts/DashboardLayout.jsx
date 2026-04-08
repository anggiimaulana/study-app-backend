import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import getSidebarItems from './sidebarConfig';

export default function DashboardLayout({ children, userRole, headerTitle }) {
    const { auth } = usePage().props;
    const [sidebarOpen, setSidebarOpen] = useState(false);
    
    // Automatically determine sidebar icons and arrays using user role from DB or props
    const dbRole = auth?.user?.role || 'student';
    // Translate DB role syntax to English route format for SidebarConfig
    const roleMap = {
        'admin_sekolah': 'school-admin',
        'guru_bk': 'guidance',
        'guru': 'teacher',
        'siswa': 'student',
        'keuangan': 'finance',
        'jurusan': 'department',
        'akademik': 'academic',
        'perpustakawan': 'librarian',
        'bkk': 'career',
        'ppdb': 'admission',
        'super_admin': 'super-admin'
    };
    
    const sidebarItems = getSidebarItems(roleMap[dbRole] || dbRole);

    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-inter flex overflow-hidden">
            {/* Sidebar Overlay */}
            {sidebarOpen && (
                <div 
                    className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden transition-all duration-300" 
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200/60 transform transition-all duration-300 ease-out lg:translate-x-0 lg:static lg:inset-auto ${sidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}`}>
                <div className="flex items-center gap-3 h-20 px-8 border-b border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30 ring-4 ring-blue-50">
                        LM
                    </div>
                    <span className="text-xl font-extrabold font-outfit tracking-tighter text-slate-900">EduSpace<span className="text-blue-600">.</span></span>
                </div>

                <div className="h-[calc(100vh-5rem)] overflow-y-auto px-4 py-6 scrollbar-hide">
                    <div className="mb-8 px-5 py-4 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-12 h-12 bg-blue-500/5 rounded-full -mr-4 -mt-4 group-hover:scale-125 transition-transform"></div>
                        <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                            Verified Role
                        </p>
                        <p className="font-bold text-slate-800 capitalize font-outfit text-sm tracking-tight">{userRole?.replace(/[_-]/g, ' ') || dbRole.replace(/[_-]/g, ' ')}</p>
                    </div>

                    <nav className="space-y-1">
                        <p className="px-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Main Navigation</p>
                        {sidebarItems.map((item, index) => {
                            const isActive = route().current(item.route) || route().current(item.route + '.*');
                            return (
                                <Link 
                                    key={index} 
                                    href={route(item.route)} 
                                    className={`flex items-center gap-3.5 px-5 py-3.5 rounded-xl transition-all duration-300 group relative ${
                                        isActive 
                                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                                            : 'text-slate-500 hover:bg-blue-50/50 hover:text-blue-700'
                                    }`}
                                >
                                    <div className={`${isActive ? 'text-white' : 'text-slate-400 group-hover:text-blue-600'} transition-colors duration-300`}>
                                        {React.cloneElement(item.icon, { className: 'w-5 h-5' })}
                                    </div>
                                    <span className={`text-sm tracking-tight ${isActive ? 'font-bold' : 'font-semibold'}`}>{item.label}</span>
                                    {isActive && <div className="absolute right-3 w-1.5 h-1.5 rounded-full bg-white/40"></div>}
                                </Link>
                            )
                        })}
                    </nav>

                    <div className="mt-12 pt-6 border-t border-slate-100">
                        <Link 
                            href={route('logout')} 
                            method="post" 
                            as="button"
                            className="w-full flex items-center gap-3.5 px-5 py-3.5 rounded-xl text-slate-400 hover:bg-red-50 hover:text-red-600 transition-all duration-300 group"
                        >
                            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                            <span className="text-sm font-bold tracking-tight">Keluar Sistem</span>
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Header */}
                <header className="h-24 glass flex items-center justify-between px-8 lg:px-12 z-40 relative">
                    <div className="flex items-center gap-6">
                        <button 
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden p-3 rounded-xl bg-white border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </button>
                        <div className="hidden sm:block">
                            <p className="text-[10px] font-black text-blue-600/60 uppercase tracking-[0.2em]">Platform Navigasi</p>
                            <h2 className="text-2xl font-black text-slate-900 font-outfit tracking-tight leading-7">{headerTitle}</h2>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 sm:gap-8">
                        <div className="hidden md:flex items-center gap-4 bg-white/50 p-2 pl-4 rounded-2xl border border-slate-100 shadow-sm">
                            <div className="text-right">
                                <p className="text-sm font-bold text-slate-900 tracking-tight">{auth?.user?.name || 'Administrator'}</p>
                                <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest leading-none mt-1">LMN Member ID</p>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-slate-200 border-2 border-white shadow-md overflow-hidden ring-4 ring-blue-50/50">
                                <img src={`https://ui-avatars.com/api/?name=${auth?.user?.name || 'A'}&background=2563eb&color=ffffff&bold=true`} alt="Avatar" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto bg-[#f8fafc] scrollbar-hide">
                    <div className="max-w-[1400px] mx-auto p-8 lg:p-12 pb-24 animation-fade-in relative">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
