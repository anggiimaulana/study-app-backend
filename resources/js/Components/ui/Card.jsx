import React from 'react';

export function Card({ children, className = '', padding = true }) {
    return (
        <div className={`bg-white rounded-2xl border border-gray-100 ${padding ? 'p-5' : ''} ${className}`}>
            {children}
        </div>
    );
}

export function CardHeader({ title, subtitle, action, className = '' }) {
    return (
        <div className={`flex items-center justify-between ${className}`}>
            <div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
                {subtitle && <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>}
            </div>
            {action && <div>{action}</div>}
        </div>
    );
}

export function CardSection({ title, action, children, className = '' }) {
    return (
        <div className={`bg-white rounded-2xl border border-gray-100 overflow-hidden ${className}`}>
            {title && (
                <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">{title}</h3>
                    {action}
                </div>
            )}
            <div className="p-5">{children}</div>
        </div>
    );
}
