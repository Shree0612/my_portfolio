// src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    title: 'Sign Galaxy Website',
    description: 'Responsive React + Tailwind site with animated hero, smooth image transitions, and mobile-first design.',
    tech: ['React', 'Tailwind', 'Vercel'],
    live: 'https://sign-galaxy.vercel.app/',
    github: 'https://github.com/Shree0612/sign-galaxy',
  },
  {
    title: 'Collegemate Job Portal',
    description: 'Frontend module for students to discover jobs with dynamic filters, smooth navigation, and clean design.',
    tech: ['React', 'Context API'],
    live: '',
    github: 'https://github.com/yourusername/collegemate-jobportal',
  },
  {
    title: 'E-commerce Microservices',
    description: 'Microservices-based system with Node.js, Docker, and MongoDB. Research-backed and modular structure.',
    tech: ['Node.js', 'Docker', 'MongoDB'],
    live: '',
    github: 'https://github.com/yourusername/ecommerce-microservices',
  },
];

const Projects = () => (
  <section id="projects" className="min-h-screen flex flex-col justify-center px-6 md:px-20">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Projects</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <div
          key={i}
          className="bg-gradient-to-br from-indigo-600 to-indigo-800/80 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
        >
          <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
          <p className="text-sm text-indigo-100 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, j) => (
              <span
                key={j}
                className="bg-white/20 px-2 py-1 text-xs rounded-full font-medium text-indigo-100"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="underline text-sm">
                Live Site
              </a>
            )}
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="underline text-sm">
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
