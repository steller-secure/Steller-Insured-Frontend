import {
    Home as LayoutDashboard,
    FileText,
    ClipboardList,
    Wallet,
    CreditCard,
    Settings,
    HelpCircle,
  } from 'lucide-react';
  
 export const navLinks = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/policies', label: 'Policies', icon: FileText },
    { href: '/claims', label: 'Claims', icon: ClipboardList },
    { href: '/wallet', label: 'Wallet', icon: Wallet },
    { href: '/payments', label: 'Payments', icon: CreditCard },
    { href: '/settings', label: 'Settings', icon: Settings },
    { href: '/help', label: 'Help & Support', icon: HelpCircle },
  ];