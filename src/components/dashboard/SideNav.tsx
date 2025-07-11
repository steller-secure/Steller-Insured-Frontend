"use client"
import Link from "next/link";

import { navLinks } from "@/src/data/dashboard/navlinks";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-darkBlue text-white">
      {/* Logo */}
      <div className="mb-8 flex justify-center items-center h-16">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-white text-center">
            Stark<span className="text-[#22BBF9]">Insured</span>
          </span>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav>
        {navLinks.slice(0, 5).map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`px-4 py-3 mb-4 text-sm font-medium rounded-md  flex items-center gap-2 transition-colors  ${pathname === href
                ? 'bg-[#1E2433]/50'
                : 'hover:bg-[#1E2433]/30'
              }`}
          >
            <Icon className="h-5 w-5 text-white" />
            {label}
          </Link>
        ))}
      </nav>

      {/* Bottom Navigation Links */}
      <div className="mt-auto mb-auto space-y-2">
        {
          navLinks.slice(5).map(({ href, icon: Icon, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-3 mb-4 text-sm font-medium rounded-md flex items-center gap-2  ${pathname === href
                ? 'bg-[#1E2433]/50'
                : 'hover:bg-[#1E2433]/30'
                }`}
            >
              <Icon className="h-5 w-5 text-white" />
              {label}
            </Link>
          ))
        }
      </div>
    </div>
  );
}