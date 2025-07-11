"use client"

import SideNav from "@/src/components/dashboard/SideNav";
import ConnectWalletButton from "@/src/components/dashboard/ConnectWalletButton";
import MobileNav from "@/src/components/dashboard/MobileNav";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <main className="bg-darkBlue h-full relative">
      <MobileNav />
      <div className="grid grid-cols-1 md:grid-cols-[25%_75%] h-screen">
        <aside className="hidden md:block h-full p-6 bg-darkBlue border m-3 border-[#E0D7D7] rounded-3xl overflow-hidden">
          <SideNav />
        </aside>

        <div className="md:col-span-1 flex flex-col h-full">
          <section className="flex-1 bg-darkBlue overflow-y-auto p-4 pt-20 md:pt-16">
          <div className="flex items-center justify-items-end flex-row-reverse lg:mb-20">
            <ConnectWalletButton />
          </div>
            {children}
          </section>
        </div>
      </div>
    </main>

  );
}