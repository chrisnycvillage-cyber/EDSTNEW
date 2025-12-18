'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Target,
  Users,
  UserPlus,
  Receipt,
  Wallet,
  CreditCard,
  Trophy,
  RefreshCw,
  Calendar,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Settings,
} from 'lucide-react';

const navItems = [
  { href: '/partner', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/partner/pipeline', icon: Target, label: 'Pipeline', badge: '4' },
  { href: '/partner/clients', icon: Users, label: 'Clients' },
  { href: '/partner/team', icon: UserPlus, label: 'Team' },
  { href: '/partner/transactions', icon: Receipt, label: 'Transactions' },
  { href: '/partner/payout', icon: Wallet, label: 'Payout' },
  { href: '/partner/billing', icon: CreditCard, label: 'Billing' },
  { href: '/partner/leaderboard', icon: Trophy, label: 'Leaderboard' },
  { href: '/partner/renewals', icon: RefreshCw, label: 'Renewals' },
  { href: '/partner/calendar', icon: Calendar, label: 'Calendar' },
];

export function PartnerSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside 
      className={`${
        collapsed ? 'w-[72px]' : 'w-[240px]'
      } h-screen sticky top-0 bg-edst-charcoal/30 border-r border-edst-slate/10 flex flex-col transition-all duration-300 hidden md:flex`}
    >
      {/* Logo */}
      <div className="p-4 border-b border-edst-slate/10">
        <div className="flex items-center justify-between">
          <Link href="/partner" className="flex items-center gap-2">
            <span className={`text-xl font-heading font-bold text-gradient-gold ${collapsed ? 'hidden' : ''}`}>
              EDST
            </span>
            {collapsed && (
              <span className="text-xl font-heading font-bold text-gradient-gold">E</span>
            )}
          </Link>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-lg hover:bg-edst-slate/20 text-edst-silver hover:text-edst-white transition-colors"
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2 px-2 py-1 rounded-lg bg-edst-gold/10 text-center"
          >
            <span className="text-xs font-medium text-edst-gold">Partner Portal</span>
          </motion.div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 overflow-y-auto scrollbar-hide">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== '/partner' && pathname.startsWith(item.href));
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group ${
                    isActive
                      ? 'bg-edst-gold/10 text-edst-gold'
                      : 'text-edst-silver hover:text-edst-white hover:bg-edst-slate/10'
                  }`}
                >
                  <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-edst-gold' : ''}`} />
                  {!collapsed && (
                    <>
                      <span className="text-sm font-medium">{item.label}</span>
                      {item.badge && (
                        <span className="ml-auto px-1.5 py-0.5 text-xs font-bold rounded-full bg-red-500/20 text-red-400">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                  {collapsed && item.badge && (
                    <span className="absolute left-12 px-1.5 py-0.5 text-xs font-bold rounded-full bg-red-500/20 text-red-400">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Section */}
      <div className="p-3 border-t border-edst-slate/10">
        <div className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'} p-2`}>
          <div className="w-9 h-9 rounded-full bg-edst-gold/20 flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-bold text-edst-gold">M</span>
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-edst-white truncate">Matheus</p>
              <p className="text-xs text-edst-silver truncate">Senior Manager</p>
            </div>
          )}
        </div>
        
        {!collapsed && (
          <div className="flex gap-1 mt-2">
            <Link
              href="/partner/profile"
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-edst-silver hover:text-edst-white hover:bg-edst-slate/10 transition-colors"
            >
              <Settings className="w-4 h-4" />
              <span className="text-xs">Settings</span>
            </Link>
            <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-edst-silver hover:text-red-400 hover:bg-red-500/10 transition-colors">
              <LogOut className="w-4 h-4" />
              <span className="text-xs">Logout</span>
            </button>
          </div>
        )}
        
        {collapsed && (
          <button className="w-full flex items-center justify-center p-2 rounded-lg text-edst-silver hover:text-red-400 hover:bg-red-500/10 transition-colors mt-2">
            <LogOut className="w-4 h-4" />
          </button>
        )}
      </div>
    </aside>
  );
}






