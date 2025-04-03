import React from 'react';
import './App.css';


function App() {
  

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-gray-800 shadow-lg">
        <h1 className="text-2xl font-bold text-gray-300">My Portfolio</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
      </nav>
  
      {/* Hero Section */}
      <header className="text-center py-20 bg-gray-800 shadow-md">
        <h2 className="text-4xl font-bold text-gray-300">Hi I am Athashri Keny</h2>
        <p className="mt-4 text-lg text-gray-400">A Web Developer passionate about building user-friendly websites.</p>
      </header>
  
      {/* About Section */}
      <section id="about" className="py-16 px-6 text-center bg-gray-850">
        <h3 className="text-3xl font-semibold text-gray-300">About Me</h3>
        <p className="mt-4 max-w-2xl mx-auto text-gray-400">
        A second-year Computer Science student focusing on Frontend Web Development. I have the skills to maintain best practices in designing websites using HTML, CSS, and JavaScript and am currently able to improve myself further through development of personal projects. As I am only in the starting phase of the career I would like to make use of the skills in actual fieldwork and work with others to enhance my knowledge.
I am very excited to meet any potential clients who are interested in a young driven developer who is ready to work and learn!
        </p>
      </section>
  
      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-gray-850 text-center">
        <h3 className="text-3xl font-semibold text-gray-300">Projects</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Project 1 - Video Streaming App */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600">
            <h4 className="text-xl font-semibold text-gray-300">A Video Streaming App</h4>
            <p className="mt-2 text-gray-400">A Full Stack Video Streaming Website made using React, Express, 
              Node JS, Cloudinary, Multer, Redux Toolkit, Axios, React Router DOM.
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <a 
                href="https://github.com/athashri-keny/Full-Stack-Video-Streaming-Project" 
                target="_blank" 
                className="text-blue-400 hover:underline"
              >
                GitHub Repo
              </a>
              <a 
                href="https://full-stack-video-streaming-project-hlxr.onrender.com" 
                target="_blank" 
                className="text-green-400 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
  
          {/* Project 2 - Blog App */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600">
            <h4 className="text-xl font-semibold text-gray-300">A Blog App</h4>
            <p className="mt-2 text-gray-400">Made a Blog app using React, Redux Toolkit, React Router DOM, and Appwrite as Backend Service.</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a 
                href="https://github.com/yourusername/project-2" 
                target="_blank" 
                className="text-blue-400 hover:underline"
              >
                GitHub Repo
              </a>
              <a 
                href="https://project-2.vercel.app" 
                target="_blank" 
                className="text-green-400 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>
  
      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 text-center bg-gray-800">
        <h3 className="text-3xl font-semibold text-gray-300">Contact Me</h3>
        <p className="mt-4 text-gray-400">Feel free to reach out via email or LinkedIn.</p>
        <div className="mt-4">
          <a href="mailto:youremail@example.com" className="text-gray-400 hover:text-gray-500">athashrikeny38@gmail.com</a>
        </div>
      </section>
  
      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-center text-gray-400">
        <p>&copy; 2025 Athashri Keny. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
