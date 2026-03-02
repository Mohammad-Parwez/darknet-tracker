import React from 'react';
import { TrendingUp, AlertTriangle, CheckCircle2, Shield } from 'lucide-react';
import { StatCard } from '../components/StatCard';

export function DashboardView() {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                    title="Total Incidents"
                    value="0"
                    change="+0% from last month"
                    icon={<TrendingUp className="text-blue-400" size={20} />}
                />
                <StatCard
                    title="Open Incidents"
                    value="0"
                    change="+0% from last month"
                    icon={<AlertTriangle className="text-pink-500" size={20} />}
                />
                <StatCard
                    title="Resolved"
                    value="0"
                    change="+0% from last month"
                    icon={<CheckCircle2 className="text-emerald-400" size={20} />}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#112240] p-6 rounded-xl border border-slate-800 h-80 flex flex-col">
                    <div className="flex items-center gap-2 mb-6">
                        <Shield className="text-pink-500" size={20} />
                        <h3 className="font-bold text-lg">Incidents by Severity</h3>
                    </div>
                    <div className="flex-1 flex items-center justify-center text-slate-500 italic">
                        No incidents data available
                    </div>
                </div>
                <div className="bg-[#112240] p-6 rounded-xl border border-slate-800 h-80 flex flex-col">
                    <div className="flex items-center gap-2 mb-6">
                        <TrendingUp className="text-purple-500" size={20} />
                        <h3 className="font-bold text-lg">Breach Types</h3>
                    </div>
                    <div className="flex-1 flex items-center justify-center text-slate-500 italic">
                        No breach type data available
                    </div>
                </div>
            </div>
        </div>
    );
}
