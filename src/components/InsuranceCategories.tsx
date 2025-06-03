
import React from 'react';
import { Heart, Car, Home, Globe, Database } from 'lucide-react';
import { Button } from './ui/button';



const InsuranceCategories = () => {
    const categories = [
      {
        icon: <Heart className="h-10 w-10" />,
        title: "Health Insurance",
        description: "Protect yourself with blockchain-based health coverage that ensures transparent claims and instant payouts.",
        color: "from-blue-500/20 to-blue-600/20"
      },
      {
        icon: <Car className="h-10 w-10" />,
        title: "Vehicle Insurance",
        description: "Comprehensive coverage for your vehicles with automated claim processing powered by smart contracts.",
        color: "from-green-500/20 to-green-600/20"
      },
      {
        icon: <Home className="h-10 w-10" />,
        title: "Property Insurance",
        description: "Secure your property with tamper-proof policies that provide reliable protection and fast settlements.",
        color: "from-yellow-500/20 to-yellow-600/20"
      },
      {
        icon: <Globe className="h-10 w-10" />,
        title: "Travel Insurance",
        description: "Worry-free travel with instant coverage and automated payouts for delayed flights and other travel issues.",
        color: "from-purple-500/20 to-purple-600/20"
      },
      {
        icon: <Database className="h-10 w-10" />,
        title: "Crypto-Asset Insurance",
        description: "Protect your digital assets, wallets, and NFTs against hacks, theft, and other crypto-specific risks.",
        color: "from-pink-500/20 to-pink-600/20"
      }
    ];
  
    return (
      <section className="py-20 bg-darkBlue relative overflow-hidden" id="insurance">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Insurance Categories</h2>
            <p className="text-lg text-gray-300">
              We offer a wide range of insurance products to protect what matters most to you, all powered by blockchain technology.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <div
                key={index}
                className="card-gradient border border-lightBlue/20 rounded-lg p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`rounded-lg p-4 mb-4 bg-gradient-to-r ${category.color} text-white inline-block`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{category.title}</h3>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <Button variant="outline" className="border-lightBlue text-lightBlue hover:bg-lightBlue/10">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
  
        {/* Background elements */}
        <div className="absolute top-40 left-10 w-72 h-72 bg-lightBlue opacity-5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600 opacity-5 rounded-full filter blur-3xl"></div>
      </section>
    );
  };
  
  export default InsuranceCategories;
