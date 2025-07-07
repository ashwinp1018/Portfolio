import React from 'react';
import profilePic from '../assets/abcaa.jpg';

const About = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <link rel="stylesheet" href="/#about" />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start scroll-smooth">


        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
              Hi, I'm Ashwin.
              <br className="hidden sm:block" />
              <span className="text-blue-500">A Passionate Full Stack Developer.</span>
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              I specialize in building responsive, scalable, and intuitive digital solutions from scratch. Whether it’s frontend user interfaces or robust backend systems, I bridge the gap between vision and functionality with clean, maintainable code and performance-driven architecture.
            </p>
          </div>

          <div className="relative z-20 isolate">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
              aria-label="Contact me"
            >
              Let’s Discuss →
            </a>
          </div>

        </div>


        <div className="space-y-10">


          <div>
            <h3 className="text-3xl font-bold mb-5 border-b border-white/10 pb-2 text-blue-500">Education</h3>

            <div className="space-y-4">


              <div className="flex justify-between items-start md:items-center border-b border-white/10 pb-3">
                <div>
                  <p className="font-semibold text-white">UPES Dehradun</p>
                  <p className="text-gray-400 text-sm">B.Tech in CSE (Dev-Sec-Ops)</p>
                </div>
                <span className="text-sm text-gray-400 whitespace-nowrap">2022 – 2026</span>
              </div>


              <div className="flex justify-between items-start md:items-center border-b border-white/10 pb-3">
                <div>
                  <p className="font-semibold text-white">Maxfort School</p>
                  <p className="text-gray-400 text-sm">12th (CBSE, PCM + CS)</p>
                </div>
                <span className="text-sm text-gray-400 whitespace-nowrap">2017 – 2022</span>
              </div>

            </div>
          </div>
          <div className="w-full">
            <div className="rounded-lg overflow-hidden shadow-2xl border border-white/10">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-64 sm:h-72 md:h-80 object-cover brightness-105 rounded-xl shadow-2xl border border-white/10 -mt-12 z-20 relative transform transition duration-300 hover:scale-105 hover:shadow-blue-500/30"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
