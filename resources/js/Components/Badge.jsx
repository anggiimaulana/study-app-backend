import React from 'react';

export default function Badge({ children, variant = 'primary', className = '' }) {
    const variants = {
        primary: 'bg-blue-50 text-blue-600 border-blue-100',
        success: 'bg-emerald-50 text-emerald-600 border-emerald-100',
        warning: 'bg-amber-50 text-amber-600 border-amber-100',
        danger: 'bg-red-50 text-red-600 border-red-100',
        info: 'bg-indigo-50 text-indigo-600 border-indigo-100',
        slate: 'bg-slate-50 text-slate-600 border-slate-100',
    };

    return (
        <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${variants[variant] || variants.primary} ${className}`}>
            {children}
        </span>
    );
}
