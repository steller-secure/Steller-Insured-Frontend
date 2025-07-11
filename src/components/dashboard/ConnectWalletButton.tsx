"use client";

import { Button } from "@/src/components/ui/button";
import Link from "next/link";

const ConnectWalletButton = () => {
    return (
            <div className="bg-darkBlue/95 backdrop-blur-xl  px-6 py-3 ">
                    <div className="flex items-center">
                        <Link href="#" className="flex items-center">
                            <Button className="text-darkBlue bg-lightBlue font-bold p-2 shadow-md hover:bg-[#2ea4d4]">
                                Connect Wallet
                            </Button>
                        </Link>
                </div>
            </div>
    );
};

export default ConnectWalletButton;
