import React from 'react';

interface SettingsButtonProps {
  text: string;
}

export const SettingsButton = ({ text }: SettingsButtonProps) => {
  return (
    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-black transition-colors">
      {text}
    </button>
  );
};