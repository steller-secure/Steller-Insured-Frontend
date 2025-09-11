import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-[#1f2647] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#080D24] mb-6 leading-tight">
          Ready to Secure Your Digital Assets?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of users who trust Stark Insured for transparent and reliable blockchain-based
          insurance coverage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-lightBlue text-blue-900 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg">
            Get Started
          </button>
          <button className="border-2 bg-white border-white text-lightBlue font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-200">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;