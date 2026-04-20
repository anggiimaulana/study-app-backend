import React from 'react';

export default function Badge({ children, variant = 'primary', className = '' }) {
    const variants = {
        primary: 'bg-primary-50 text-primary-600 border-primary-100',
        success: 'bg-green-50 text-green-600 border-green-100',
        warning: 'bg-amber-50 text-amber-600 border-amber-100',
        danger: 'bg-red-50 text-red-600 border-red-100',
        info: 'bg-blue-50 text-blue-600 border-blue-100',
        indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100',
        purple: 'bg-purple-50 text-purple-600 border-purple-100',
        slate: 'bg-gray-50 text-gray-600 border-gray-100',
        neutral: 'bg-gray-100 text-gray-600 border-gray-200',
    };

    return (
        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border ${variants[variant] || variants.primary} ${className}`}>
            {children}
        </span>
    );
}
