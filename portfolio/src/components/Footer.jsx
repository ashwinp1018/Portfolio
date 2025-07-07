import React, { useState, useEffect } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 50); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white py-12 px-6 relative">
     
      <div className="border-t border-white/10 mb-10" />

    
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
    
        <div className="text-xs text-white/40 text-center md:text-left">
          Designed by <span className="hover:underline">Ashwin Parashar</span>
        </div>

   
        <div className="flex items-center gap-5">
          <a href="https://www.instagram.com/_ashwin018/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition">
            <FaInstagram className="text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/ashwin-parashar-824792256/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
            <FaLinkedin className="text-xl" />
          </a>
          <a href="https://github.com/ashwinp1018" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
            <FaGithub className="text-xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
            <FaTwitter className="text-xl" />
          </a>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
