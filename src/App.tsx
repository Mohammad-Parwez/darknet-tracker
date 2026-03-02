/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  LayoutDashboard,
  Eye,
  AlertTriangle,
  Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { Tab } from './types';
import { TabButton } from './components/TabButton';

import { DashboardView } from './views/DashboardView';
import { OverviewView } from './views/OverviewView';
import { IncidentsView } from './views/IncidentsView';
import { SettingsView } from './views/SettingsView';
import { ChatBot } from './components/ChatBot';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');

  return (
    <div className="min-h-screen bg-[#0a192f] text-slate-200 font-sans selection:bg-purple-500/30 relative">
      <ChatBot />
      {/* Header */}
      <header className="pt-12 pb-8 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4"
        >
          Protect Your Digital Assets
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 max-w-2xl mx-auto text-lg"
        >
          Monitor domains and email addresses for dark web exposure and data breaches in real-time
        </motion.p>
      </header>

      {/* Navigation Tabs */}
      <nav className="flex justify-center mb-12 px-4">
        <div className="bg-[#112240] p-1 rounded-lg flex gap-1 shadow-xl border border-slate-800">
          <TabButton
            active={activeTab === 'dashboard'}
            onClick={() => setActiveTab('dashboard')}
            icon={<LayoutDashboard size={18} />}
            label="Dashboard"
          />
          <TabButton
            active={activeTab === 'overview'}
            onClick={() => setActiveTab('overview')}
            icon={<Eye size={18} />}
            label="Overview"
          />
          <TabButton
            active={activeTab === 'incidents'}
            onClick={() => setActiveTab('incidents')}
            icon={<AlertTriangle size={18} />}
            label="Incidents"
          />
          <TabButton
            active={activeTab === 'settings'}
            onClick={() => setActiveTab('settings')}
            icon={<Settings size={18} />}
            label="Settings"
          />
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'dashboard' && <DashboardView />}
            {activeTab === 'overview' && <OverviewView />}
            {activeTab === 'incidents' && <IncidentsView />}
            {activeTab === 'settings' && <SettingsView />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
