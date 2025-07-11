'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '@/src/data/dashboard/navlinks';


export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <>
      {/* Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-darkBlue z-50 h-16 flex items-center justify-between px-4 border-b border-white/10">
        <Link href="/" className="text-xl font-bold text-white">
          Stark<span className="text-[#22BBF9]">Insured</span>
        </Link>
        <button onClick={() => setOpen(true)}>
          <Menu className="text-white w-6 h-6" />
        </button>
      </div>

      {/* Slide-In Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Drawer */}
            <motion.div
              ref={drawerRef}
              className="fixed top-0 left-0 bottom-0 w-64 bg-darkBlue text-white z-50 shadow-lg p-4 flex flex-col"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween' }}
            >
              <div className="flex items-center justify-between mb-8 h-16 px-1">
                <Link href="/" className="text-xl font-bold text-white">
                  Stark<span className="text-[#22BBF9]">Insured</span>
                </Link>
                <button onClick={() => setOpen(false)}>
                  <X className="text-white w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {navLinks.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                      pathname === href
                        ? 'bg-[#1E2433]/50'
                        : 'hover:bg-[#1E2433]/30'
                    }`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                    {label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
