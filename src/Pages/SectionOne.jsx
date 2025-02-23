import React, { useEffect, useState } from "react";
import ExampleComponent from "../codes/HeaderCode";
import { motion } from "framer-motion";

const SectionOne = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % 100);
    }, 50); // Adjusted speed for a smoother effect
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col md:flex-row justify-between px-4 md:px-20 py-12 bg-gradient-to-br from-gray-900 to-gray-800 items-center gap-8">
      {/* Background Gradient Animation */}
      <div
        className="absolute inset-0 backdrop-blur-[60px] z-0"
        style={{
          background: `radial-gradient(circle at ${position}% 50%, rgba(59, 130, 246, 0.2), transparent 40%)`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full md:w-1/2 space-y-8">
        <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
          Instantly Analyze Your
          <span className="text-blue-500"> Code Complexity</span>
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Stop guessing about your algorithm's performance. Our Chrome
          extension automatically analyzes your code and provides real-time Big
          O notation complexity insights.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-6 py-3 rounded-lg font-semibold">
            Install Extension
          </button>

          <button className="bg-transparent border-2 border-blue-500 hover:bg-blue-500/10 transition-colors text-white px-6 py-3 rounded-lg font-semibold">
            Watch Demo
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
          <div className="flex items-center gap-3">
            <svg
              className="w-6 h-6 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <p className="text-gray-300">Real Time Analysis</p>
          </div>
          <div className="flex items-center gap-3">
            <svg
              className="w-6 h-6 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-gray-300">Free to use</p>
          </div>
          <div className="flex items-center gap-3">
            <svg
              className="w-6 h-6 text-purple-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            <p className="text-gray-300">Works on all browsers</p>
          </div>
        </div>
      </div>

      {/* Right Side (Example Component) */}
      <div className="relative z-10 w-full md:w-1/2 bg-gray-800/50 p-8 rounded-xl">
        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-mono">
          Detected: O(n²)
        </div>
        <ExampleComponent />
      </div>
    </div>
  );
};

export default SectionOne;
