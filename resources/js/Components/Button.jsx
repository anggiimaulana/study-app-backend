import React from 'react';

export default function Button({ children, variant = 'primary', size = 'md', className = '', ...props }) {
    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/20',
        secondary: 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 shadow-sm',
        success: 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-600/20',
        danger: 'bg-red-600 text-white hover:bg-red-700 shadow-red-600/20',
        ghost: 'bg-transparent text-slate-500 hover:bg-slate-100',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-6 py-2.5 text-sm',
        lg: 'px-8 py-3.5 text-base',
    };

    return (
        <button 
            className={`inline-flex items-center justify-center font-bold rounded-xl transition-all active:scale-[0.98] shadow-md disabled:opacity-50 disabled:pointer-events-none ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
