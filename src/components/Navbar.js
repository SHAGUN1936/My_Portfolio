import React from 'react';

const Navbar = () => (
  <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
    <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Shagun Garg</h1>
      <ul className="flex space-x-4 text-sm font-semibold">
        <li><a href="#home" className="hover:text-blue-600">Home</a></li>
        <li><a href="#about" className="hover:text-blue-600">About</a></li>
        <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
        <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
