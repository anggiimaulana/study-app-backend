import React from 'react';

export default function Button({ children, variant = 'primary', size = 'md', className = '', ...props }) {
    const variants = {
        primary: 'bg-primary-500 text-white hover:bg-primary-600',
        secondary: 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50',
        success: 'bg-green-500 text-white hover:bg-green-600',
        danger: 'bg-red-500 text-white hover:bg-red-600',
        ghost: 'bg-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-700',
        outline: 'bg-transparent text-primary-500 border border-primary-200 hover:bg-primary-50',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-4 py-2.5 text-sm',
        lg: 'px-6 py-3 text-base',
    };

    return (
        <button
            className={`inline-flex items-center justify-center font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
