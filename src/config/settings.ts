import { 
  User, Shield, Bell, Globe, Key, Wallet, 
  Mail, Lock, Eye, BellRing, Languages, Clock,
  CreditCard, Building2, Smartphone, Activity,
  Database, Fingerprint, UserCog, Share2
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Setting {
  title: string;
  description: string;
  type: 'toggle' | 'text' | 'email' | 'button' | 'profile-picture' | 'select';
  enabled?: boolean;
  value?: string;
  buttonText?: string;
  options?: string[];
}

interface SettingsSection {
  title: string;
  icon: LucideIcon;
  settings: Setting[];
}

export const settingsSections: SettingsSection[] = [
  {
    title: 'Account',
    icon: User,
    settings: [
      {
        title: 'Profile Picture',
        description: 'Upload a profile picture for chat and your profile',
        type: 'profile-picture',
      },
      {
        title: 'Display Name',
        description: 'Set your display name for chat and collaboration',
        type: 'text',
        value: 'User',
      },
      {
        title: 'Email Address',
        description: 'Manage your email address for notifications and recovery',
        type: 'email',
        value: '',
      },
      {
        title: 'Account Verification',
        description: 'Verify your account for enhanced security',
        type: 'button',
        buttonText: 'Verify Account',
      }
    ],
  },
  {
    title: 'Security',
    icon: Shield,
    settings: [
      {
        title: 'Two-Factor Authentication',
        description: 'Add an extra layer of security to your account',
        type: 'toggle',
        enabled: false,
      },
      {
        title: 'Password',
        description: 'Change your password regularly to keep your account secure',
        type: 'button',
        buttonText: 'Change Password',
      },
      {
        title: 'Login History',
        description: 'View and manage your recent login sessions',
        type: 'button',
        buttonText: 'View History',
      },
      {
        title: 'Biometric Login',
        description: 'Enable fingerprint or face recognition for login',
        type: 'toggle',
        enabled: false,
      }
    ],
  },
  {
    title: 'Privacy',
    icon: Eye,
    settings: [
      {
        title: 'Profile Visibility',
        description: 'Control who can see your profile and activity',
        type: 'select',
        value: 'Public',
        options: ['Public', 'Private', 'Team Only'],
      },
      {
        title: 'Data Collection',
        description: 'Choose what data we can collect to improve your experience',
        type: 'toggle',
        enabled: true,
      },
      {
        title: 'Chat History',
        description: 'Control how long we keep your chat history',
        type: 'select',
        value: '30 days',
        options: ['7 days', '30 days', '90 days', 'Forever'],
      }
    ],
  },
  {
    title: 'API Configuration',
    icon: Key,
    settings: [
      {
        title: 'OpenAI API Key',
        description: 'Configure your OpenAI API credentials',
        type: 'text',
        value: '••••••••••••••••',
      },
      {
        title: 'API Usage Limits',
        description: 'Set monthly limits for API calls',
        type: 'select',
        value: '1000 calls',
        options: ['500 calls', '1000 calls', '5000 calls', 'Unlimited'],
      },
      {
        title: 'Rate Limiting',
        description: 'Configure rate limiting for API requests',
        type: 'toggle',
        enabled: true,
      }
    ],
  },
  {
    title: 'Notifications',
    icon: Bell,
    settings: [
      {
        title: 'Email Notifications',
        description: 'Receive important updates via email',
        type: 'toggle',
        enabled: true,
      },
      {
        title: 'Push Notifications',
        description: 'Get real-time notifications on your device',
        type: 'toggle',
        enabled: true,
      },
      {
        title: 'Notification Sound',
        description: 'Play a sound when receiving notifications',
        type: 'toggle',
        enabled: true,
      },
      {
        title: 'Do Not Disturb',
        description: 'Set quiet hours for notifications',
        type: 'button',
        buttonText: 'Configure',
      }
    ],
  },
  {
    title: 'Billing',
    icon: Wallet,
    settings: [
      {
        title: 'Current Plan',
        description: 'View and manage your subscription plan',
        type: 'button',
        buttonText: 'Manage Plan',
      },
      {
        title: 'Payment Method',
        description: 'Update your payment information',
        type: 'button',
        buttonText: 'Update',
      },
      {
        title: 'Billing History',
        description: 'View your past invoices and payments',
        type: 'button',
        buttonText: 'View History',
      },
      {
        title: 'Usage Alerts',
        description: 'Get notified when approaching usage limits',
        type: 'toggle',
        enabled: true,
      }
    ],
  },
  {
    title: 'Preferences',
    icon: Globe,
    settings: [
      {
        title: 'Language',
        description: 'Choose your preferred language',
        type: 'select',
        value: 'English',
        options: ['English', 'Spanish', 'French', 'German', 'Japanese'],
      },
      {
        title: 'Time Zone',
        description: 'Set your local time zone',
        type: 'select',
        value: 'UTC-5',
        options: ['UTC-8', 'UTC-5', 'UTC+0', 'UTC+1', 'UTC+8'],
      },
      {
        title: 'Theme',
        description: 'Choose between light and dark mode',
        type: 'select',
        value: 'Dark',
        options: ['Light', 'Dark', 'System'],
      }
    ],
  },
];