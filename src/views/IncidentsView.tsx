import React, { useState } from 'react';
import { AlertTriangle, Shield } from 'lucide-react';
import { FilterButton } from '../components/FilterButton';

export function IncidentsView() {
    const [filter, setFilter] = useState<'all' | 'open' | 'resolved'>('all');

    return (
        <div className="bg-[#112240] rounded-xl border border-slate-800 p-8 shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
                <div className="flex items-center gap-3">
                    <AlertTriangle className="text-pink-500" size={24} />
                    <h2 className="text-2xl font-bold">Incident Management</h2>
                </div>

                <div className="flex bg-[#0a192f] p-1 rounded-lg border border-slate-700">
                    <FilterButton active={filter === 'all'} onClick={() => setFilter('all')} label="All (0)" />
                    <FilterButton active={filter === 'open'} onClick={() => setFilter('open')} label="Open (0)" />
                    <FilterButton active={filter === 'resolved'} onClick={() => setFilter('resolved')} label="Resolved (0)" />
                </div>
            </div>

            <div className="py-20 flex flex-col items-center justify-center text-slate-500">
                <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4">
                    <Shield size={32} className="opacity-20" />
                </div>
                <p className="text-lg italic">No incidents found.</p>
            </div>
        </div>
    );
}
