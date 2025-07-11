export default function PoliciesCard() {
    return (
        <div className="bg-[#1A1F35] p-4 rounded-lg shadow-md font-bold">
            <div className="flex-col items-center mb-4">
                <h3 className="text-lg font-semibold">My Policies</h3>
                <p className="text-sm text-gray-400 mb-2">Overview of your active policies</p>
            </div>

            <div className="space-y-2 ml-3 min-w-3/4">
                <div className="flex items-baseline justify-between  mb-6">
                    <div className="flex-col">
                        <p className="text-sm">Crypto Asset Protection</p>
                        <span className="text-sm text-[#A79E9E]">Coverage: $75,000</span>
                    </div>
                    <span className="text-[#5AAE3B] text-xs bg-[#B6FA9E] rounded-full py-1 px-2">Active</span>
                </div>

                <div className="flex items-baseline justify-between">
                    <div className="flex-col">
                        <p className="text-sm">Smart Contract Coverage</p>
                        <span className="text-sm text-[#A79E9E]">Coverage: $30,000</span>
                    </div>
                    <span className="text-[#5AAE3B] text-xs bg-[#B6FA9E] rounded-full py-1 px-2">Active</span>
                </div>

                <div className="flex items-baseline justify-between mt-6">
                    <div className="flex-col">
                        <p className="text-sm">DeFi Protocol Insurance</p>
                        <span className="text-sm text-[#A79E9E]">Coverage: $20,000</span>
                    </div>
                    <span className="text-[#5AAE3B] text-xs bg-[#B6FA9E] rounded-full py-1 px-2">Active</span>
                </div>
            </div>
        </div>

    )
}


