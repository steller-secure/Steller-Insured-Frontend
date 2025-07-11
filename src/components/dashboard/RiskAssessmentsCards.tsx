export default function RiskOfAssessmentsCard() {
    return (
        <div className="bg-[#1A1F35] p-4 rounded-lg shadow-md flex-col items-center justify-between font-bold">
            <div className="flex-col items-center mb-4">
                <h3 className="text-lg font-semibold">Risk Assessment</h3>
                <p className="text-sm text-[#A79E9E] mb-2">Your current risk profile</p>
            </div>
            <div className="space-y-4 ml-3">
                <div>
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-[#A79E9E]">Overall Risk</p>
                        <p className="text-sm text-[#B84413FA] mt-1">Medium</p>
                    </div>
                    <div className="w-full bg-[#505250] rounded-full h-2.5 mt-1">
                        <div
                            className="bg-[#B84413FA] h-2.5 rounded-full"
                            style={{ width: "60%" }}
                        ></div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-[#A79E9E]">Coverage Ratio</p>
                        <p className="text-sm text-[#41830FFA] mt-1">Good</p>
                    </div>
                    <div className="w-full bg-[#505250] rounded-full h-2.5 mt-1">
                        <div
                            className="bg-[#41830FFA] h-2.5 rounded-full"
                            style={{ width: "90%" }}
                        ></div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-[#A79E9E]">Diversification</p>
                        <p className="text-sm text-[#A79E9E] mt-1">Medium</p>
                    </div>
                    <div className="w-full bg-[#505250] rounded-full h-2.5 mt-1">
                        <div
                            className="bg-[#B84413FA] h-2.5 rounded-full"
                            style={{ width: "40%" }}
                        ></div>
                    </div>
                </div>
                <button className="w-full bg-lightBlue text-darkBlue py-2 rounded-md hover:bg-[#1a99d1] transition-colors mt-4">
                    Improve risk profile
                </button>
            </div>
        </div>
    )
}