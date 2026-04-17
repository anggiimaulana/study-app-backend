import React from 'react';

const VARIANTS = {
    success:  { bg: 'bg-green-50',  text: 'text-green-700',  border: 'border-green-200',  dot: 'bg-green-500' },
    info:     { bg: 'bg-blue-50',   text: 'text-blue-700',   border: 'border-blue-200',   dot: 'bg-blue-500' },
    warning:  { bg: 'bg-amber-50',  text: 'text-amber-700',  border: 'border-amber-200',  dot: 'bg-amber-500' },
    danger:   { bg: 'bg-red-50',    text: 'text-red-700',    border: 'border-red-200',     dot: 'bg-red-500' },
    neutral:  { bg: 'bg-gray-50',   text: 'text-gray-600',   border: 'border-gray-200',   dot: 'bg-gray-400' },
    purple:   { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200',  dot: 'bg-purple-500' },
};

export default function StatusBadge({ label, variant = 'neutral', dot = false, className = '' }) {
    const v = VARIANTS[variant] || VARIANTS.neutral;

    return (
        <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${v.bg} ${v.text} ${v.border} ${className}`}>
            {dot && <span className={`w-1.5 h-1.5 rounded-full ${v.dot}`} />}
            {label}
        </span>
    );
}
