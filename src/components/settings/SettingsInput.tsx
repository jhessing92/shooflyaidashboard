import React from 'react';

interface SettingsInputProps {
  type: 'text' | 'email';
  value: string;
}

export const SettingsInput = ({ type, value }: SettingsInputProps) => {
  return (
    <input
      type={type}
      defaultValue={value}
      className="w-64 px-4 py-2 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
      placeholder={type === 'email' ? 'Enter email' : 'Enter text'}
    />
  );
};