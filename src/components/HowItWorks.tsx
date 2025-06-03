import React from "react";
import {
  Wallet,
  ShieldCheck,
  FileCheck,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import "@/src/styles/how-it-works-card.css";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Wallet className="h-8 w-8" />,
      title: "Sign Up & Connect Wallet",
      description:
        "Create an account and connect your StarkNet-compatible wallet to get started.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Choose a Policy",
      description:
        "Select an insurance policy, specify coverage terms, and pay premiums.",
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "Submit Claims",
      description:
        "If an insured event occurs, submit a claim through the platform.",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Receive Automatic Payout",
      description:
        "Verified claims trigger instant payouts via smart contracts.",
    },
  ];

  return (
    <section
      className="py-20 bg-navyBlue relative overflow-hidden"
      id="how-it-works"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            How It Works
          </h2>
          <p className="text-lg text-gray-300">
            Our streamlined process makes securing and managing your insurance
            policies simple and efficient.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="how-it-works-card">
                  <div className="icon-wrapper">{step.icon}</div>
                  <h3 className="title">{step.title}</h3>
                  <p className="description">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-lightBlue">
                    <ArrowRight className="h-8 w-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-lightBlue opacity-5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-600 opacity-5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default HowItWorks;
