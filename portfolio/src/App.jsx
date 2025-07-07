import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Particles from './components/Particles';
import Hero from './components/Hero';          
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

const App = () => {

  
  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      <Particles />
      <Header />
      <main>
        <section id="hero"><Hero /></section>              
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
