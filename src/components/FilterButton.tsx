import React from 'react';

interface FilterButtonProps {
    active: boolean;
    onClick: () => void;
    label: string;
}

export function FilterButton({ active, onClick, label }: FilterButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${active
                    ? 'bg-pink-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
        >
            {label}
        </button>
    );
}
