import React from 'react';

const projects = [
  {
    title: "Tic Tac Toe",
    tech: "React.js",
    desc: "A smooth 2-player game with turn indicators, game state, and restarts."
  },
  {
    title: "Calculator",
    tech: "HTML, CSS, JavaScript",
    desc: "A responsive calculator with keyboard input support and accurate arithmetic."
  },
  {
    title: "PostIt - Social Media Platform",
    tech: "React, Redux, Express, MongoDB",
    desc: "A full-stack app enabling content sharing, commenting, and real-time discussion."
  }
];

const Projects = () => (
  <section id="projects" className="max-w-6xl mx-auto py-16 px-6">
    <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {projects.map((proj, i) => (
        <div key={i} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
          <p className="text-sm text-blue-600 font-medium mb-2">{proj.tech}</p>
          <p className="text-sm">{proj.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
