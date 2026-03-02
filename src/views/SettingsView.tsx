import React from 'react';
import { Settings, Shield, Plus, Mail } from 'lucide-react';

export function SettingsView() {
    return (
        <div className="space-y-8">
            <div className="mb-8">
                <div className="flex items-center gap-2 mb-1">
                    <Settings className="text-pink-500" size={20} />
                    <h2 className="text-xl font-bold">Dark Web Monitoring Settings</h2>
                </div>
                <p className="text-slate-400 text-sm">Configure your monitoring preferences and alerts</p>
            </div>

            <div className="bg-[#112240] rounded-xl border border-slate-800 p-8 shadow-2xl space-y-8">
                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <Shield className="text-blue-400" size={20} />
                        <h3 className="text-lg font-bold">Grant User Access</h3>
                    </div>
                    <p className="text-slate-400 text-xs mb-6">Add team members who should receive access to the product</p>

                    <div className="grid grid-cols-1 gap-6 max-w-2xl">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                            <input type="email" placeholder="user@example.com" className="w-full bg-[#0a192f] border border-slate-700 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-blue-500/50" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                            <input type="text" placeholder="John Doe" className="w-full bg-[#0a192f] border border-slate-700 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-blue-500/50" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Department</label>
                            <input type="text" placeholder="Security, IT, etc." className="w-full bg-[#0a192f] border border-slate-700 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-blue-500/50" />
                        </div>
                        <button className="w-fit flex items-center gap-2 bg-pink-600 hover:bg-pink-500 text-white font-bold px-6 py-2 rounded-lg transition-colors">
                            <Plus size={18} />
                            Add
                        </button>
                    </div>
                </section>

                <section className="pt-8 border-t border-slate-800">
                    <h4 className="font-bold mb-2">Users with Access (0)</h4>
                    <p className="text-slate-500 text-sm italic">No users added yet.</p>
                </section>

                <section className="bg-[#0a192f]/50 p-6 rounded-xl border border-blue-500/20">
                    <div className="flex gap-4">
                        <div className="bg-blue-500/10 p-2 rounded-lg h-fit">
                            <Mail className="text-blue-400" size={20} />
                        </div>
                        <div className="space-y-3">
                            <h4 className="font-bold text-slate-200">What happens when you add a user?</h4>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    They receive an email with login credentials and access instructions
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    Access is granted immediately
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    They can log in and start using the Dark Web Monitoring product
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    You can revoke access anytime by removing them from the list
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            <div className="bg-[#112240] rounded-xl border border-slate-800 p-8 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                    <Mail className="text-pink-500" size={20} />
                    <h3 className="text-lg font-bold">Breach Notification Emails</h3>
                </div>
                <p className="text-slate-400 text-xs mb-6">Add email addresses where you want to receive breach notifications</p>

                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <input type="email" placeholder="notification@example.com" className="flex-1 bg-[#0a192f] border border-slate-700 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-pink-500/50" />
                    <button className="flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-500 text-white font-bold px-6 py-2 rounded-lg transition-colors whitespace-nowrap">
                        <Plus size={18} />
                        Add
                    </button>
                </div>

                <p className="text-slate-500 text-sm italic">No notification emails added yet.</p>
            </div>
        </div>
    );
}
