import React from 'react';

const Home = () => (
  <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
    <h1 className="text-4xl font-bold mb-4">Hey, I'm <span className="text-blue-600">Shagun Garg</span></h1>
    <p className="text-lg text-center max-w-xl">
      A passionate full-stack developer focused on creating modern, scalable web apps with clean UI and efficient backend logic.
    </p>
    <a href="https://drive.google.com/file/d/1aUWVafZec8h6zJmCSsNrvTFEgkn2a7uW/view?usp=sharing" download className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
      Download Resume
    </a>
  </section>
);

export default Home;
