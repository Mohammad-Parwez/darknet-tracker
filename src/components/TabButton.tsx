import React from 'react';

interface TabButtonProps {
    active: boolean;
    onClick: () => void;
    icon: React.ReactNode;
    label: string;
}

export function TabButton({ active, onClick, icon, label }: TabButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-2 px-6 py-2 rounded-md transition-all duration-200 ${active
                    ? 'bg-[#1d3557] text-white shadow-inner'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-[#1d3557]/50'
                }`}
        >
            {icon}
            <span className="font-medium">{label}</span>
        </button>
    );
}
