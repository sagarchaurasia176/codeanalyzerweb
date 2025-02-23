import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaChrome, FaCode, FaChartLine } from "react-icons/fa";

const SectionThree = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % 100);
    }, 50); // Adjusted speed for a smoother effect
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

  return (
    <div className=" min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-12 bg-gradient-to-br from-gray-900 to-gray-800">
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
          How It
          <span className="text-blue-500"> Works</span>
        </motion.h1>
        <motion.p
          className="text-gray-300 text-lg text-center leading-relaxed max-w-3xl mx-auto mb-12"
          variants={itemVariants}
        >
          Simple steps to analyze your code's complexity in real-time
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          <motion.div
            className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <div className="text-blue-500 mb-4 flex items-center justify-center">
              <FaChrome className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Install Extension
            </h3>
            <p className="text-gray-400 text-center">
              Add our extension to Chrome with just one click from the Chrome
              Web Store.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <div className="text-green-500 mb-4 flex items-center justify-center">
              <FaCode className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Write Your Code
            </h3>
            <p className="text-gray-400 text-center">
              Continue coding as usual in your favorite online editor or
              platform.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <div className="text-purple-500 mb-4 flex items-center justify-center">
              <FaChartLine className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Get Instant Analysis
            </h3>
            <p className="text-gray-400 text-center">
              See real-time complexity analysis appear right in your editor.
            </p>
          </motion.div>
        </motion.div>
        <br />

        {/* left */}
        <div className="text-purple-500 mb-4 bg-slate-800 flex flex-col md:flex-row px-6 md:px-12 py-8 items-center justify-between gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left space-y-2">
            <h3 className="text-2xl font-bold">Ready to optimize your code?</h3>
            <p className="text-lg">
              Start analyzing your code complexity in seconds
            </p>
          </div>

          {/* right */}
          <div className="w-full md:w-1/2 flex flex-col sm:flex-row items-center justify-center md:justify-end gap-4">
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Install Now
            </motion.button>
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="w-full sm:w-auto border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionThree;
