import React from 'react';
import { Link } from '@inertiajs/react';

export default function Pagination({ links }) {
    if (links.length <= 3) return null;

    return (
        <div className="flex flex-wrap gap-1 justify-center mt-8">
            {links.map((link, idx) => (
                <Link
                    key={idx}
                    href={link.url}
                    className={`
                        px-4 py-2 text-sm rounded-xl border transition-all
                        ${link.active 
                            ? 'bg-primary-500 text-white border-primary-500 font-semibold' 
                            : 'bg-white text-gray-600 border-gray-100 hover:border-gray-300 hover:bg-gray-50'
                        }
                        ${!link.url ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}
                    `}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                />
            ))}
        </div>
    );
}
