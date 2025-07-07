import React from 'react';
import previewImage from '../assets/pfp.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        <div className="w-full md:w-1/2 text-center md:text-right font-sans">
          <p className="text-sm sm:text-base uppercase tracking-wider font-medium mb-6">
            HELLO, I AM A
          </p>

          <h1 className="mb-8 leading-tight">
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold block">FULL</span>
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl italic font-light font-serif inline-block">stack</span>
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold block">DEVELOPER</span>
          </h1>

          <p className="text-sm sm:text-base max-w-md leading-relaxed mb-8 mx-auto md:ml-auto">
            I craft seamless digital experiences from front to back and build fast, scalable and beautiful web solutions that work.
          </p>

          <div className="flex justify-center md:justify-end z-10 relative">
            <a
              href="/resume.pdf"
              download="Ashwin-Parashar-Resume.pdf"
              aria-label="Download Resume"
            >
              <button
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-full 
                hover:bg-white hover:text-black hover:shadow-xl 
                transition-all duration-300 ease-in-out 
                focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black 
                transform hover:scale-105"
              >
                My Resume →
              </button>
            </a>
          </div>
        </div>


        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="w-72 sm:w-80 md:w-[28rem] lg:w-[34rem] h-72 sm:h-80 md:h-[24rem] lg:h-[28rem] overflow-hidden relative group">
            <div className="w-full h-full flex items-center justify-center relative">
              <img
                src={previewImage}
                alt="Portfolio Preview"
                className="z-10 max-w-[95%] max-h-[95%] object-contain rounded-xl shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-105"
              />


              <div className="absolute top-6 right-6 w-3 h-3 bg-white rounded-full opacity-40" />
              <div className="absolute bottom-6 left-6 w-2 h-2 bg-white rounded-full opacity-30" />
              <div className="absolute top-1/2 left-8 w-1 h-8 bg-white rounded-full opacity-20" />
              <div className="absolute top-1/3 right-8 w-1 h-12 bg-white rounded-full opacity-20" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
