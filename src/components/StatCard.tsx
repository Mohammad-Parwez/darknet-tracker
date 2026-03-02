import React from 'react';

interface StatCardProps {
    title: string;
    value: string;
    change: string;
    icon: React.ReactNode;
}

export function StatCard({ title, value, change, icon }: StatCardProps) {
    return (
        <div className="bg-[#112240] p-6 rounded-xl border border-slate-800 relative overflow-hidden group">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-slate-200 font-bold">{title}</h3>
                {icon}
            </div>
            <div className="text-4xl font-bold mb-2">{value}</div>
            <div className="text-emerald-400 text-sm font-medium">{change}</div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:w-full" />
        </div>
    );
}
