// import React, { useEffect, useState } from 'react'
// import Logo from '../log/logs.png'
// const NavBar = () => {
//     // states
//     const [isScrolled, setIsScrolled] = useState(false);

//         useEffect(() => {
//             const handleScroll = () => {
//                 if (window.scrollY > 0) {
//                     setIsScrolled(true);
//                 } else {
//                     setIsScrolled(false);
//                 }
//             }
//             // add event listener
//             window.addEventListener('scroll', handleScroll);
//             return () => {
//                 window.removeEventListener('scroll', handleScroll);
//             }
//         }, []); 

//   return (
//     <div className={` sticky top-0 z-50 shadow-lg w-full transition-all p-3 lg:p-4 sm:p-2 bg-slate-900 ${isScrolled ? "navbar-blur" : "bg-slate-900"}`}>

//     </div>
//   )
// }

// export default NavBar
