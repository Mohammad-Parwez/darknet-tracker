import React, { useState } from 'react';
import { Globe, Mail, User, Lock, FileText, Type, CreditCard, Search } from 'lucide-react';

export function OverviewView() {
    const [subTab, setSubTab] = useState<'domain' | 'email' | 'executive' | 'passwords' | 'files' | 'acronyms' | 'credit_cards'>('domain');

    const subTabConfig = {
        domain: { label: 'Domain Name', placeholder: 'example.com', icon: <Globe size={18} />, tabName: 'Domains', contentTitle: 'Domains' },
        email: { label: 'Email Address', placeholder: 'user@example.com', icon: <Mail size={18} />, tabName: 'Emails', contentTitle: 'Emails' },
        executive: { label: 'Executive Name', placeholder: 'John Doe', icon: <User size={18} />, tabName: 'Executives', contentTitle: 'Executive Names' },
        passwords: { label: 'Password Hash', placeholder: 'e.g., md5, sha256...', icon: <Lock size={18} />, tabName: 'Passwords', contentTitle: 'Password Hashes' },
        files: { label: 'Internal File Name', placeholder: 'confidential_report.pdf', icon: <FileText size={18} />, tabName: 'Files', contentTitle: 'Internal Files' },
        acronyms: { label: 'Company Acronym', placeholder: 'ACME', icon: <Type size={18} />, tabName: 'Acronyms', contentTitle: 'Company Acronyms' },
        credit_cards: { label: 'Credit Card Number', placeholder: 'XXXX-XXXX-XXXX-XXXX', icon: <CreditCard size={18} />, tabName: 'Credit Cards', contentTitle: 'Credit Cards' },
    };

    const currentConfig = subTabConfig[subTab];

    return (
        <div className="bg-[#112240] rounded-2xl border border-slate-800/60 overflow-hidden shadow-2xl backdrop-blur-sm">
            <div className="flex overflow-x-auto p-4 gap-3 border-b border-slate-800/60 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {(Object.keys(subTabConfig) as Array<keyof typeof subTabConfig>).map((key) => {
                    const isActive = subTab === key;
                    const config = subTabConfig[key];
                    return (
                        <button
                            key={key}
                            onClick={() => setSubTab(key)}
                            className={`whitespace-nowrap flex items-center gap-2 py-2.5 px-5 rounded-full font-medium transition-all duration-300 text-sm ${isActive
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-pink-900/20 ring-1 ring-white/10'
                                    : 'bg-slate-800/40 text-slate-400 hover:bg-slate-800 hover:text-slate-200 hover:ring-1 hover:ring-slate-700'
                                }`}
                        >
                            {config.icon}
                            {config.tabName}
                        </button>
                    );
                })}
            </div>

            <div className="p-8 space-y-8">
                <div>
                    <div className="flex items-center gap-3 text-pink-500 mb-3">
                        <div className="p-2.5 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-pink-500/20 shadow-inner">
                            {currentConfig.icon}
                        </div>
                        <h3 className="font-bold text-2xl text-slate-100 tracking-tight">Monitor {currentConfig.contentTitle}</h3>
                    </div>
                    <p className="text-slate-400 text-sm mb-8 leading-relaxed max-w-2xl text-balance">
                        Enter the {currentConfig.label.toLowerCase()} below to proactively scan the dark web and relevant data sources for any exposure or potential breaches.
                    </p>

                    <div className="space-y-2.5 bg-[#0a192f]/50 p-6 rounded-xl border border-slate-800/50">
                        <label className="block text-sm font-semibold text-slate-300 ml-1">{currentConfig.label}</label>
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder={currentConfig.placeholder}
                                className="w-full bg-[#0a192f] border border-slate-700/80 rounded-lg pl-4 pr-12 py-3.5 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500/40 focus:border-pink-500/50 transition-all shadow-inner font-mono text-sm sm:text-base group-hover:border-slate-600"
                            />
                            <div className="absolute inset-y-0 right-0 w-12 flex items-center justify-center pointer-events-none text-slate-500 group-focus-within:text-pink-500 transition-colors">
                                <Search size={18} />
                            </div>
                        </div>
                    </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(236,72,153,0.15)] hover:shadow-[0_0_25px_rgba(236,72,153,0.25)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 duration-200">
                    <Search size={20} className="stroke-[2.5]" />
                    <span className="text-lg tracking-wide">Check Now</span>
                </button>
            </div>
        </div>
    );
}
