"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import "@/src/styles/button.css";

const Hero = () => {
  const coinsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateCoins = () => {
      const coins = coinsRef.current?.querySelectorAll(".coin") || [];

      coins.forEach((coin, index) => {
        const coinEl = coin as HTMLElement;
        // Circular motion variables
        const radius = 40; // Increased radius for wider circular motion
        const speed = 0.0005; // Reduced speed for smoother animation
        const startOffset = index * ((Math.PI * 2) / coins.length);

        let animationFrameId: number;

        // Animation function
        const animate = (timestamp: number) => {
          const time = timestamp * speed;
          const x = Math.cos(time + startOffset) * radius;
          const y = Math.sin(time + startOffset) * radius;

          coinEl.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${
            time * 5
          }deg)`;
          animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        // Cleanup function
        return () => {
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
          }
        };
      });
    };

    animateCoins();
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-[#080D24] via-[#101935] to-[#1A1F35]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Decentralized Insurance for the{" "}
                <span className="text-[#22BBF9]">StarkNet</span> Ecosystem
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Secure your digital assets with transparent, automated, and
                tamper-proof insurance policies powered by blockchain
                technology.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="wrapper text-black">
                  <button className="button3D">
                    <span>Get Started</span>
                  </button>
                </div>
                <div className="wrapper">
                  <button
                    className="button3D"
                    style={{
                      background: "transparent",
                      color: "#22BBF9",
                      border: "1px solid #22BBF9",
                    }}
                  >
                    <span>Learn More</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#22BBF9]/30 to-purple-500/30 blur-[100px] opacity-75"></div>
              <div className="relative rounded-lg p-6">
                <div className="absolute inset-0 bg-gradient-to-r from-[#22BBF9]/10 to-purple-500/10 rounded-lg animate-spin-slow"></div>
                <div
                  ref={coinsRef}
                  className="coins-container relative w-full h-[600px] rounded-lg bg-[#080D24]/50 backdrop-blur-sm border border-[#22BBF9]/20"
                >
                  {Array.from({ length: 10 }).map((_, index) => (
                    <div
                      key={index}
                      className={`coin absolute transition-all duration-1000 ease-in-out`}
                      style={{
                        top: "50%",
                        left: "50%",
                        zIndex: 10 - index,
                      }}
                    >
                      <Image
                        src="/lovable-uploads/2ba584db-1b9c-4677-ac61-9460bd8c09e8.png"
                        alt="Stark Coin"
                        width={96}
                        height={96}
                        className="object-contain drop-shadow-[0_0_15px_rgba(34,187,249,0.3)]"
                        style={{
                          opacity: 1 - index * 0.05,
                          transform: `scale(${1 - index * 0.05})`,
                        }}
                      />
                    </div>
                  ))}

                  {/* Add a base image in the background */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/lovable-uploads/2ba584db-1b9c-4677-ac61-9460bd8c09e8.png"
                      alt="Stark Coins Collection"
                      width={600}
                      height={600}
                      className="w-full h-auto object-contain opacity-30"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#22BBF9] opacity-10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600 opacity-10 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
