import React from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaRegEnvelope, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiRedux, SiExpress, SiTailwindcss } from 'react-icons/si';
import { DiJavascript } from 'react-icons/di';
import { BiCode } from 'react-icons/bi';

function App() {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen font-inter">
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 flex justify-between items-center p-6 bg-gray-800/95 backdrop-blur-sm shadow-xl">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          Athashri Keny
        </h1>
        <div className="space-x-8">
          <a href="#about" className="hover:text-blue-400 transition-colors duration-300 font-medium">About</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors duration-300 font-medium">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors duration-300 font-medium">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 text-center px-6 pb-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-6 animate-fade-in">
            Frontend Developer
          </h2>
          <p className="text-xl text-gray-400 mb-8">Crafting beautiful digital experiences with React & modern web tech</p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#contact" 
              className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              Let's Connect
            </a>
            <a 
              href="#projects" 
              className="border border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              View Work
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-850">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-300 mb-8 text-center">About Me</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                As a passionate second-year Computer Science student, I specialize in creating engaging web experiences 
                using modern technologies. My focus is on building responsive, accessible, and performant applications.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <FaReact className="text-blue-400" />
                  <span>React</span>
                </div>
                <div className='flex items-center space-x-2'>
                 <BiCode className = "text-orange-400"/>
                 <span> HTML </span>
                </div>
                <div className="flex items-center space-x-2">
                  <SiTailwindcss className="text-blue-400" />
                  <span>Tailwind CSS / CSS </span>
                </div>
                <div className="flex items-center space-x-2">
                  <SiRedux className="text-purple-400" />
                  <span>Redux Toolkit</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <DiJavascript className='text-yellow-300'/>
                  <span> JavaScript </span>
                </div>
                <div className='flex items-center space-x-2'>
                  <FaGithub className='text-gray-400'/>
                  <span> Git/GitHub </span>
                </div>
              </div>
            </div>
            <div className="bg-gray-700 rounded-xl p-6 shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300">
              <h4 className="text-xl font-semibold mb-4">Current Focus</h4>
              <ul className="space-y-3 list-disc list-inside text-gray-400">
                <li>Full-stack development patterns</li>
                <li>Web performance optimization</li>
                <li>Accessibility best practices</li>
                <li>Looking For An InternShip </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-300 mb-12 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-2xl hover:transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="mb-4 relative overflow-hidden rounded-lg h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20" />
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  <span className="bg-gray-900/80 px-3 py-1 rounded-full text-sm text-blue-400">React</span>
                  <span className="bg-gray-900/80 px-3 py-1 rounded-full text-sm text-green-400">Node.js</span>
                  <span className="bg-gray-900/80 px-3 py-1 rounded-full text-sm text-purple-400">Redux</span>
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-2">Video Streaming Platform</h4>
              <p className="text-gray-400 mb-4">Full-stack video streaming solution and user authentication</p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/athashri-keny/Full-Stack-Video-Streaming-Project" 
                  target="_blank"
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <FaGithub />
                  <span>Code</span>
                </a>
                <a 
                  href="https://full-stack-video-streaming-project-hlxr.onrender.com" 
                  target="_blank"
                  className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                >
                  <FaRegEnvelope />
                  <span>Demo</span>
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-2xl hover:transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="mb-4 relative overflow-hidden rounded-lg h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20" />
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  <span className="bg-gray-900/80 px-3 py-1 rounded-full text-sm text-blue-400">React</span>
                  <span className="bg-gray-900/80 px-3 py-1 rounded-full text-sm text-red-400">Appwrite</span>
                  <span className="bg-gray-900/80 px-3 py-1 rounded-full text-sm text-yellow-400">RTK Query</span>
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-2">Modern Blog Application</h4>
              <p className="text-gray-400 mb-4">Feature-rich blog platform with real-time updates and rich text editing</p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/athashri-keny/Blog-App" 
                  target="_blank"
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <FaGithub />
                  <span>Code</span>
                </a>
                <a 
                  href="https://blog-app-seven-tan.vercel.app/" 
                  target="_blank"
                  className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                >
                  <FaRegEnvelope />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-850">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-300 mb-8">Let's Connect</h3>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto">
            Whether you have a project idea, need a collaborator, or just want to chat about tech - I'm always open to new opportunities!
          </p>
          <div className="flex justify-center space-x-8">
            <a 
              href="https://github.com/athashri-keny" 
              target="_blank"
              className="p-4 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
            >
              <FaGithub size={24} className="text-gray-300" />
            </a>
            <a 
              href="https://www.linkedin.com/in/athashri-keny-98b92732a/" 
              target="_blank"
              className="p-4 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
            >
              <FaLinkedin size={24} className="text-gray-300" />
            </a>
            <a 
              href="mailto:athashrikeny38@gmail.com" 
              className="p-4 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
            >
              <FaRegEnvelope size={24} className="text-gray-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="text-center text-gray-500 text-sm">
          <p>Built with React & Tailwind CSS • © 2024 Athashri Keny</p>
        </div>
      </footer>
    </div>
  );
}

export default App;