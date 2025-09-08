import React from 'react';
import { Facebook, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const footerSections = {
    products: [
      'Health Insurance',
      'Vehicle Insurance',
      'Property Insurance',
      'Travel Insurance',
      'Crypto-Asset Insurance'
    ],
    company: [
      'About us',
      'Teams',
      'Career',
      'Blog',
      'Contact'
    ],
    legal: [
      'Terms of Service',
      'Privacy Preference',
      'Product Governance',
      'Correspondence',
      'Crypto-Asset Insurance'
    ]
  };

  return (
    <footer className="bg-slate-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-blue-400">Stark</span>
              <span className="text-2xl font-bold text-white">Insured</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              A decentralized insurance platform built on the StarkNet ecosystem. 
              Providing transparent and automated insurance solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-3">
              {footerSections.products.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 text-sm hover:text-blue-400 transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerSections.company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 text-sm hover:text-blue-400 transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerSections.legal.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 text-sm hover:text-blue-400 transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Stark Insured. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;