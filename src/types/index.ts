// Core type definitions for the application
export interface DonationAmount {
  amount: number;
  description: string;
}

export type DonationType = 'one-time' | 'monthly';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface NavigationLink {
  label: string;
  href: string;
  dropdownItems?: { label: string; href: string }[];
}

export interface TimelineItem {
  year: string;
  status: 'completed' | 'current' | 'future';
  title: string;
  description: string;
}

export interface ProgramItem {
  title: string;
  description: string;
  image: string;
  category: string;
  isZakatEligible: boolean;
  href: string;
}

export interface ValueItem {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
}

export interface WayToHelp {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
  action: string;
  color: 'teal' | 'slate';
}