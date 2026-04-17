import React from 'react';

export default function PageHeader({ title, description, icon, action, children }) {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                    {icon && (
                        <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                            {React.cloneElement(icon, { className: 'w-5 h-5 text-primary-500' })}
                        </div>
                    )}
                    <div className="min-w-0">
                        <h2 className="text-lg font-semibold text-gray-900 truncate">{title}</h2>
                        {description && <p className="text-sm text-gray-500 mt-0.5">{description}</p>}
                    </div>
                </div>
                {action && <div className="shrink-0">{action}</div>}
            </div>
            {children && <div className="mt-4">{children}</div>}
        </div>
    );
}
