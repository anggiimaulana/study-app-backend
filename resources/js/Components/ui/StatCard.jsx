import React from 'react';

export default function StatCard({ icon, value, label, sublabel, color = 'bg-primary-50', iconColor = 'text-primary-500', badge }) {
    return (
        <div className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-sm transition-all duration-200">
            <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center`}>
                    {icon && React.cloneElement(icon, { className: `w-5 h-5 ${iconColor}` })}
                </div>
                {badge && (
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${badge.className || 'bg-green-50 text-green-600'}`}>
                        {badge.label}
                    </span>
                )}
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">{value}</p>
            <p className="text-sm text-gray-500">{label}</p>
            {sublabel && <p className="text-xs text-gray-400 mt-1">{sublabel}</p>}
        </div>
    );
}
