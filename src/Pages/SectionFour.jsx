import { motion } from "framer-motion";
import React from "react";
import AnalyzeCode from "../codes/AnalyzeCode";

const SectionFour = () => {
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

  return (
    <div className="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-12 bg-gradient-to-br from-gray-900 to-gray-800">
      <motion.div
        className="max-w-7xl mx-auto w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h1
          className="text-white text-center text-3xl md:text-5xl font-bold leading-tight mb-6"
          variants={itemVariants}
        >
          Why Choose
          <span className="text-blue-500"> Code-Analyzer</span>
        </motion.h1>
        
        <motion.p
          className="text-gray-300 text-lg text-center leading-relaxed max-w-3xl mx-auto mb-12"
          variants={itemVariants}
        >
          Transform your coding experience with powerful insights and performance optimization
        </motion.p>
      
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Features Grid */}
          <motion.div className="w-full lg:w-1/2">
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" variants={containerVariants}>
              <motion.div 
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-blue-500 mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-white">Boost Productivity</h3>
                <p className="text-gray-400 text-center">Save hours of manual analysis time with instant complexity detection</p>
              </motion.div>

              <motion.div 
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-green-500 mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-white">Write Better Code</h3>
                <p className="text-gray-400 text-center">Identify performance bottlenecks early and optimize effectively</p>
              </motion.div>

              <motion.div 
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-yellow-500 mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-white">Educational Insights</h3>
                <p className="text-gray-400 text-center">Learn as you code with detailed explanations and suggestions</p>
              </motion.div>

              <motion.div 
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-purple-500 mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-white">Seamless Integration</h3>
                <p className="text-gray-400 text-center">Works right in your browser with popular coding platforms</p>
              </motion.div>          
            </motion.div>
          </motion.div>

          {/* Example Component */}
          <motion.div 
            className="w-full lg:w-1/2 bg-gray-800/50 p-8 rounded-xl relative"
            variants={itemVariants}
          >    
            <div className='absolute top-4 right-4  bg-orange-400 text-white px-3 py-1 rounded-lg text-sm font-mono'>
                Detected: O(n log n)
            </div>      
            <AnalyzeCode/>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionFour;
