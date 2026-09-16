import React from "react";
import bannerimage from "/assets/banner-stack.png";

const Hero: React.FC = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Image: first row on mobile, right side on desktop */}
        <div className="shrink-0 order-1 md:order-2">
          <img
            src={bannerimage}
            alt="banner stack image"
            className="w-105 h-auto"
          />
        </div>

        {/* Text: shows second on mobile, left side on desktop */}
        <div className="max-w-xl text-center md:text-left order-2 md:order-1">
          <h1 className="text-5xl font-extrabold leading-tight">
            <span className="text-gray-900">Build Your Ideal</span>
            <br />
            <span className="bg-linear-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 text-gray-500 text-lg leading-relaxed">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
            <button className="bg-linear-to-r from-orange-500 to-pink-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition">
              <a href="#">Explore Technologies</a>
            </button>
            <button className="border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-lg hover:bg-gray-50 transition">
              <a href="#">Learn More</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};  

export default Hero;