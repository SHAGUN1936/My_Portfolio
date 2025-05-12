import React from 'react';

const skills = [
  "Java", "C++", "C", "JavaScript", "React.js", "Redux",
  "Node.js", "Express.js", "MongoDB", "Git", "GitHub", "Tailwind CSS"
];

const Skills = () => (
  <section id="skills" className="bg-gray-100 dark:bg-gray-800 py-16 px-6">
    <h2 className="text-3xl font-semibold mb-6 text-center">Skills</h2>
    <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
      {skills.map(skill => (
        <div key={skill} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow hover:shadow-lg transition">
          {skill}
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
