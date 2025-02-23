import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SectionFive = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white py-4 px-6 flex flex-col md:flex-row
       justify-evenly
      items-center "
    >
      <p className="text-sm">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      
      <div className=" gap-4 mt-2">
        <motion.a
          href="https://github.com/sagarchaurasia176/Analyzer-chrome-extension.git"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="text-xl text-gray-400 hover:text-white transition-all"
        >
          <FaGithub />
        </motion.a>
      </div>
    </motion.footer>
  );
};

export default SectionFive;
