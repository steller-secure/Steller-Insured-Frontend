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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080D24]/90 backdrop-blur-lg border-b border-[#22BBF9]/20">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">
                Stark<span className="text-[#22BBF9]">Insured</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-[#22BBF9] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-[#22BBF9] transition-colors"
            >
              About
            </Link>
            <Link
              href="/features"
              className="text-white hover:text-[#22BBF9] transition-colors"
            >
              Features
            </Link>
            <Link
              href="/insurance"
              className="text-white hover:text-[#22BBF9] transition-colors"
            >
              Insurance
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-[#22BBF9] transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {isSignedIn ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-[#22BBF9] hover:text-[#22BBF9]/80 transition-colors"
                >
                  Dashboard
                </Link>
                <Button
                  onClick={handleSignOut}
                  
                  className="border-[#22BBF9] text-[#22BBF9] hover:bg-[#22BBF9]/10"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={handleSignIn}
                 
                  className="border-lightBlue text-lightBlue hover:bg-lightBlue/1 bg-[#ffffff] rounded"
                >
                  Sign In
                </Button>
                <Button
                  onClick={handleSignUp}
                  className="bg-[#22BBF9] text-[#080D24] hover:bg-[#22BBF9]/90 rounded"
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
              className="text-white p-2 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white hover:text-[#22BBF9] transition-colors py-2"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-[#22BBF9] transition-colors py-2"
              >
                About
              </Link>
              <Link
                href="/features"
                className="text-white hover:text-[#22BBF9] transition-colors py-2"
              >
                Features
              </Link>
              <Link
                href="/insurance"
                className="text-white hover:text-[#22BBF9] transition-colors py-2"
              >
                Insurance
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-[#22BBF9] transition-colors py-2"
              >
                Contact
              </Link>
              {isSignedIn && (
                <Link
                  href="/dashboard"
                  className="text-[#22BBF9] hover:text-[#22BBF9]/80 transition-colors py-2"
                >
                  Dashboard
                </Link>
              )}
              <div className="flex flex-col space-y-2 pt-2">
                {isSignedIn ? (
                  <Button
                    onClick={handleSignOut}
                   
                    className="border-[#22BBF9] text-[#22BBF9] hover:bg-[#22BBF9]/10 w-full"
                  >
                    Sign Out
                  </Button>
                ) : (
                  <>
                    <Button
                      onClick={handleSignIn}
                     
                      className="border-[#22BBF9] text-[#22BBF9] hover:bg-[#22BBF9]/10 w-full"
                    >
                      Sign In
                    </Button>
                    <Button
                      onClick={handleSignUp}
                      className="bg-[#22BBF9] text-[#080D24] hover:bg-[#22BBF9]/90 w-full"
                    >
                      Sign Up
                    </Button>
                  </>
                )}
                {!isSignedIn && (
                  <Button
                    onClick={handleGetStarted}
                    className="bg-[#22BBF9] text-[#080D24] hover:bg-[#22BBF9]/90 w-full"
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
