import React, { useEffect, useState } from 'react'

const NavBar = () => {
    // states
    const [isScrolled, setIsScrolled] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY > 0) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            }
            // add event listener
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            }
        }, []); 

  return (
    <div className={` sticky top-0 z-50 shadow-lg w-full transition-all p-3 lg:p-4 sm:p-2 bg-slate-900 ${isScrolled ? "navbar-blur" : "bg-slate-900"}`}>
      <div className="flex items-center">
        <svg 
          className="w-10 h-10 text-blue-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
        <h1 className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          TC-Analyzer
        </h1>
      </div>
    </div>
  )
}

export default NavBar
