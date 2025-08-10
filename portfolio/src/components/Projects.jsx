import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';

const projects = [
  {
    id: 1,
    title: 'MooN Thrifts',
    index: '(01)',
    description: 'MooN Thrifts is a MERN-based e-commerce platform with browsing, cart, secure checkout, and admin-only product management. Optimized with lazy loading and efficient APIs, it loads 35% faster, features a sleek black-and-white UI, and is deployed via Vercel with a cloud backend.',
    image: project1,
    link: 'https://github.com/ashwinp1018/OmniFood',
  },
  {
    id: 2,
    title: 'Whisper App',
    index: '(02)',
    description: ' A secure, privacy-focused web application that allows users to anonymously submit, edit, and manage their secrets. Built with Node.js, Express, MongoDB, and JWT authentication, featuring a clean and responsive Bootstrap UI.',
    image: project2,
    link: 'https://github.com/ashwinp1018/Secrets-Whisper-App',
  },
  {
    id: 3,
    title: 'Task Manager',
    index: '(03)',
    description: 'A modern, responsive Todo List web application built with Node.js, Express, EJS, and MongoDB Atlas. This app allows users to create, edit, and delete tasks — all with persistent storage and a clean, dark-themed UI inspired by Render.com.',
    image: project3,
    link: 'https://github.com/ashwinp1018/Task-Manager-App',
  },
  {
    id: 4,
    title: 'OmniFood',
    index: '(04)',
    description: 'A fully responsive front-end website for a fictional premium food delivery service, Omnifood. Built using HTML5, CSS3, and custom grid systems, this project showcases modern design principles, mobile-first responsiveness, and engaging UI components without any external frameworks.',
    image: project4,
    link: 'https://github.com/ashwinp1018/OmniFood',
  },
];

const Projects = () => {
  return (
    <section className="bg-black text-white px-6 py-20 max-w-7xl mx-auto space-y-16 scroll-smooth">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
          <h2 className='text-blue-500'>Featured</h2>
          <h2>Projects</h2>
        </div>
        <div className="max-w-xl text-white/80 text-sm">
          <p>
            As a full stack developer, I craft purposeful digital experiences rooted in functionality, elegance, and scalability.
          </p>
          <div className="relative z-20 isolate">
            <button className="mt-4 border border-white px-6 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
              Let’s discuss →
            </button>
          </div>

        </div>
      </div>


      <div className="space-y-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-white/10 gap-6"
          >

            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-semibold uppercase">
                {project.title} <span className="text-white/40">{project.index}</span>
              </h3>
              <p className="text-white/70 mt-2 text-sm">{project.description}</p>
            </div>


            <div className="relative w-full md:w-64 h-36 rounded-lg shadow-lg z-10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg z-10 relative"
                style={{ backgroundColor: '#000' }}
              />
            </div>
            <div className="relative z-20 isolate">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white  hover:text-blue-500  transition whitespace-nowrap"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
