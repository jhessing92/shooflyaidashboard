import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SettingsSection } from '../components/settings/SettingsSection';
import { settingsSections } from '../config/settings';
import FloatingOrb from '../components/chat/FloatingOrb';

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background gradient orbs */}
      <FloatingOrb color="blue" initialPosition={{ x: 25, y: 25 }} />
      <FloatingOrb color="green" initialPosition={{ x: 75, y: 75 }} mirrorOf={{ x: 25, y: 25 }} />

      <div className="relative min-h-screen backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex items-center mb-8">
            <button
              onClick={() => navigate('/dashboard')}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-white ml-4">Settings</h1>
              <p className="text-gray-400 ml-4 mt-1">Manage your account settings and preferences</p>
            </div>
          </div>

          <div className="grid gap-6">
            {settingsSections.map((section, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden">
                <SettingsSection
                  title={section.title}
                  icon={section.icon}
                  settings={section.settings}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;