import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Particles from '../components/Particles';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Layout = () => {
  return (
    <main className="relative bg-black text-white">
      <Particles />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Layout;
