"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useToast } from "@/src/hooks/use-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();

  // Check authentication status when component mounts or location changes
  useEffect(() => {
    const authStatus = localStorage.getItem("isSignedIn") === "true";
    setIsSignedIn(authStatus);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignIn = () => {
    router.push("/sign-in");
  };

  const handleSignUp = () => {
    router.push("/sign-up");
  };

  const handleSignOut = () => {
    localStorage.removeItem("isSignedIn");
    setIsSignedIn(false);
    toast({
      title: "Signed out",
      description: "You have been successfully signed out.",
    });
    router.push("/");
  };

  const handleGetStarted = () => {
    if (isSignedIn) {
      router.push("/dashboard");
    } else {
      router.push("/sign-up");
    }
  };

  // Don't show navbar on dashboard
  if (pathname === "/dashboard") {
    return null;
  }

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-[#1a2332]/95 backdrop-blur-xl border border-[#22BBF9]/20 rounded-full px-6 py-3 shadow-lg shadow-[#22BBF9]/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-white">
                Stark<span className="text-[#22BBF9]">Insured</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-[#0f1419]/50 rounded-full px-4 py-2 border border-[#22BBF9]/10">
            <Link
              href="/"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                pathname === "/"
                  ? "bg-[#22BBF9]/20 text-[#22BBF9] border border-[#22BBF9]/30"
                  : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                pathname === "/about"
                  ? "bg-[#22BBF9]/20 text-[#22BBF9] border border-[#22BBF9]/30"
                  : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
            >
              About
            </Link>
            <Link
              href="/features"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                pathname === "/features"
                  ? "bg-[#22BBF9]/20 text-[#22BBF9] border border-[#22BBF9]/30"
                  : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
            >
              Features
            </Link>
            <Link
              href="/insurance"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                pathname === "/insurance"
                  ? "bg-[#22BBF9]/20 text-[#22BBF9] border border-[#22BBF9]/30"
                  : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
            >
              Insurance
            </Link>
            <Link
              href="/contact"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                pathname === "/contact"
                  ? "bg-[#22BBF9]/20 text-[#22BBF9] border border-[#22BBF9]/30"
                  : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            {isSignedIn ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-[#22BBF9] hover:text-[#22BBF9]/80 transition-colors px-4 py-2 rounded-full hover:bg-[#22BBF9]/10 text-sm font-medium"
                >
                  Dashboard
                </Link>
                <Button
                  onClick={handleSignOut}
                  className="bg-transparent border border-[#22BBF9]/50 text-[#22BBF9] hover:bg-[#22BBF9]/10 rounded-full px-6 py-2 text-sm font-medium transition-all duration-200"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={handleSignIn}
                  className="bg-transparent border border-[#22BBF9]/50 text-[#22BBF9] hover:bg-[#22BBF9]/10 rounded-full px-6 py-2 text-sm font-medium transition-all duration-200"
                >
                  Sign In
                </Button>
                <Button
                  onClick={handleSignUp}
                  className="bg-[#22BBF9] text-white hover:bg-[#22BBF9]/90 rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 shadow-lg shadow-[#22BBF9]/20"
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white p-2 focus:outline-none hover:bg-white/10 rounded-full transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in border-t border-[#22BBF9]/20 pt-4">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className={`px-4 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  pathname === "/"
                    ? "bg-[#22BBF9]/20 text-[#22BBF9] border border-[#22BBF9]/30"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`px-4 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  pathname === "/about"
                    ? "bg-[#22BBF9]/20 text-[#22BBF9] border border-[#22BBF9]/30"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                About
              </Link>
              <Link
                href="/features"
                className={`px-4 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  pathname === "/features"
                    ? "bg-[#22BBF9]/20 text-[#22BBF9] border border-[#22BBF9]/30"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                Features
              </Link>
              <Link
                href="/insurance"
                className={`px-4 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  pathname === "/insurance"
                    ? "bg-[#22BBF9]/20 text-[#22BBF9] border border-[#22BBF9]/30"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                Insurance
              </Link>
              <Link
                href="/contact"
                className={`px-4 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  pathname === "/contact"
                    ? "bg-[#22BBF9]/20 text-[#22BBF9] border border-[#22BBF9]/30"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                Contact
              </Link>
              {isSignedIn && (
                <Link
                  href="/dashboard"
                  className="text-[#22BBF9] hover:text-[#22BBF9]/80 transition-colors px-4 py-3 rounded-full hover:bg-[#22BBF9]/10 text-sm font-medium"
                >
                  Dashboard
                </Link>
              )}
              <div className="flex flex-col space-y-2 pt-2">
                {isSignedIn ? (
                  <Button
                    onClick={handleSignOut}
                    className="bg-transparent border border-[#22BBF9]/50 text-[#22BBF9] hover:bg-[#22BBF9]/10 rounded-full w-full py-3 text-sm font-medium"
                  >
                    Sign Out
                  </Button>
                ) : (
                  <>
                    <Button
                      onClick={handleSignIn}
                      className="bg-transparent border border-[#22BBF9]/50 text-[#22BBF9] hover:bg-[#22BBF9]/10 rounded-full w-full py-3 text-sm font-medium"
                    >
                      Sign In
                    </Button>
                    <Button
                      onClick={handleSignUp}
                      className="bg-[#22BBF9] text-white hover:bg-[#22BBF9]/90 rounded-full w-full py-3 text-sm font-medium shadow-lg shadow-[#22BBF9]/20"
                    >
                      Sign Up
                    </Button>
                  </>
                )}
                {!isSignedIn && (
                  <Button
                    onClick={handleGetStarted}
                    className="bg-[#22BBF9] text-white hover:bg-[#22BBF9]/90 rounded-full w-full py-3 text-sm font-medium shadow-lg shadow-[#22BBF9]/20"
                  >
                    Get Started
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
