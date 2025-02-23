import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";


const SectionTwo = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const marqueeVariants = {
    animate: {
      x: [0, 100],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-20 lg:px-16 py-12 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-[100px]" 
        style={{
          background: `radial-gradient(circle at ${position}% 50%, rgba(59, 130, 246, 0.15), transparent 25%)`
        }}
      />
      
      <motion.div
        className="max-w-7xl mx-auto w-full relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="text-center mb-12">
          <motion.h1
            variants={containerVariants}
            className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
          >
            Powerful <span className="text-blue-500">Features</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-base sm:text-lg max-w-5xl mx-auto leading-relaxed"
          >
            Stop guessing about your algorithm's performance. Our Chrome
            extension automatically analyzes your code and provides real-time
            Big O notation complexity insights.
          </motion.p>
        </div>

        <div className="overflow-hidden">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-nowrap"
            variants={marqueeVariants}
            animate="animate"
          >
            <motion.div variants={containerVariants} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <div className="text-blue-500 mb-4">
                <svg
                  className="w-8 h-8"
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
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Analysis</h3>
              <p className="text-gray-400">
                Get instant feedback on your code's time and space complexity as
                you write.
              </p>
            </motion.div>

            <motion.div variants={containerVariants} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
              <div className="text-green-500 mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
              <p className="text-gray-400">
                Works seamlessly with your favorite code editor and development
                environment.
              </p>
            </motion.div>

            <motion.div variants={containerVariants} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              <div className="text-purple-500 mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <motion.h3 variants={itemVariants} className="text-xl font-semibold mb-2">
                Multi-Language Support
              </motion.h3>
              <motion.p className="text-gray-400">
                Works with JavaScript, Python, Java, C++, and more popular
                programming languages.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionTwo;
