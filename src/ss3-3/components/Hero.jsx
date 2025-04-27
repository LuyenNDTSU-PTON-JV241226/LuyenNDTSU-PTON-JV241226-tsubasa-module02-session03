import React from 'react';
import Navbar from './Navbar';

function Hero() {
  return (
    <section className="bg-slate-900 text-white py-20 text-center relative overflow-hidden">
      {/* navbar */}
      <Navbar/>
      <div className="flex">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Get More Done with whitepace</h1>
        <p className="text-lg mb-8">
          Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
        </p>
        <button className="bg-indigo-600 px-6 py-3 rounded text-lg">
          Try Whitepace free →
        </button>
      </div>

        {/* Ảnh hero */}
        <div className="mt-12">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoWX5Ak-uyiKs8N2f_ZMnxEskOukSD7jbOkg&s" 
            alt="Dashboard Illustration" 
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
