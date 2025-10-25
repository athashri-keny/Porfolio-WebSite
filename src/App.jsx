import React, { useRef } from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaRegEnvelope, FaReact, FaNodeJs, FaFileDownload } from 'react-icons/fa';
import { SiRedux, SiExpress, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { DiJavascript } from 'react-icons/di';
import { BiCode } from 'react-icons/bi';
import Navbar from './components/Navbar';
import Project2 from '../src/assets/Pics/Project2.png';
import Project1 from '../src/assets/Pics/Project1.png';
import Project3 from '../src/assets/Pics/Project3.png';
import Project4 from '../src/assets/Pics/Project4.png'


import { FaDiagramNext } from 'react-icons/fa6';

function App() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    fetch('https://formspree.io/f/xanjjevz', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        formRef.current.reset();
      } else {
        alert('Error sending message. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
  };

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen font-inter scroll-smooth">

      <Navbar />
      <header className="pt-32 text-center px-6 pb-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-44 mb-6">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent animate-fade-in font-rubik">
              Full Stack Developer
            </h2>          
          </div>
          <p className="text-xl text-gray-400 mb-8 font-rubik">
            Crafting beautiful digital experiences with React,Next.js and modern web tech
          </p>


          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-medium transition-all duration-300 font-rubik transform hover:-translate-y-1 shadow-lg shadow-blue-500/20"
            >
              Let's Connect
            </a>
            <a
              href="#projects"
              className="border border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-3 rounded-lg font-medium transition-all duration-300 font-rubik transform hover:-translate-y-1"
            >
              View Work
            </a>
            
            <a
              href="https://drive.google.com/file/d/1s7i0ld-pGUee3py2XKv3yInHN6-82Ifj/view? usp=sharing"
              target='_'
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 px-8 py-3 rounded-lg font-medium transition-all duration-300 font-rubik transform hover:-translate-y-1 shadow-lg shadow-emerald-500/20"
            >
              <FaFileDownload />
              View Resume
            </a>
          </div>
        </div>
      </header>

      
      <section id="about" className="py-20 px-6 bg-gray-850">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-300 mb-8 text-center animate-fade-in">About Me</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-gray-400 leading-relaxed animate-fade-in-up">
              <p>
                As a passionate Third-year Computer Science student, I specialize in creating engaging web experiences 
                using modern technologies. My focus is on building accessible, and performant applications.
              </p>
              <p>
                Currently seeking internship opportunities to apply my skills in real-world projects and contribute to 
                innovative teams.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <FaReact className="text-blue-400" />
                  <span>React</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaDiagramNext className="text-blue-400" />
                  <span>Next.js</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <BiCode className="text-orange-400" />
                  <span>HTML</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SiTailwindcss className="text-blue-400" />
                  <span>Tailwind CSS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SiRedux className="text-purple-400" />
                  <span>Redux Toolkit</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <DiJavascript className='text-yellow-300' />
                  <span>JavaScript</span>
                </div>
                 <div className='flex items-center space-x-2'>
                  <SiTypescript className='text-yellow-300' />
                  <span>TypeScript</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-700 rounded-xl p-6 shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up">
              <h4 className="text-xl font-semibold mb-4">Current Focus</h4>
              <ul className="space-y-3 list-disc list-inside text-gray-400">
                <li>Full-stack development patterns</li>
                <li>Web performance optimization</li>
                <li>Accessibility best practices</li>
                <li className="font-bold text-emerald-400">Seeking Full Stack  Development Internship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

 <section id="experience" class="py-20 px-6 bg-gray-900">
        <div class="max-w-4xl mx-auto">
            <h3 class="text-3xl font-bold text-gray-300 mb-12 text-center animate-fade-in">Work Experience</h3>
            
            <div class="relative">
                <div class="relative md:pl-16 animate-fade-in-up">
                   
                    
                    <div class="bg-gray-800 rounded-xl p-6 shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300">
                        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                            <div>
                                <h4 class="text-2xl font-bold text-blue-400 mb-1">Full Stack Developer Intern</h4>
                                <p class="text-xl text-gray-300 mb-2">Algoric</p>
                                <p class="text-gray-400 flex items-center gap-2">
                                    <i class="fas fa-map-marker-alt"></i>
                                    Remote
                                </p>
                            </div>
                            <div class="mt-2 md:mt-0">
                                <span class="inline-block bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium border border-emerald-500/30">
                                    <i class="far fa-calendar-alt mr-1"></i>
                                    June 2025 – October 2025
                                </span>
                            </div>
                        </div>
                        
                        <div class="border-t border-gray-700 pt-4 mt-4">
                            <h5 class="text-lg font-semibold text-gray-200 mb-3 flex items-center gap-2">
                                <i class="fas fa-tasks text-blue-400"></i>
                                Key Contributions
                            </h5>
                            <ul class="space-y-3 text-gray-400">
                                <li class="flex items-start gap-3">
                                    <i class="fas fa-check-circle text-green-400 mt-1 flex-shrink-0"></i>
                                    <span>Contributed to development of <strong class="text-gray-300">Microestate</strong>, a real estate management platform</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <i class="fas fa-check-circle text-green-400 mt-1 flex-shrink-0"></i>
                                    <span>Worked on backend development using <strong class="text-gray-300">Node.js</strong> and <strong class="text-gray-300">Express</strong>, designing and integrating REST APIs with MongoDB</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <i class="fas fa-check-circle text-green-400 mt-1 flex-shrink-0"></i>
                                    <span>Developed backend logic and integrated <strong className='text-gray-300'> REST APIs</strong> with <strong className='text-gray-300'>MongoDB</strong> to enable features like property listing, booking, and billing</span>
                                </li>
                                   <li class="flex items-start gap-3">
                                    <i class="fas fa-check-circle text-green-400 mt-1 flex-shrink-0"></i>
                                    <span>Integrated frontend and backend for smooth data flow and functionality </span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <i class="fas fa-check-circle text-green-400 mt-1 flex-shrink-0"></i>
                                    <span>Collaborated with team to ensure secure user authentication and smooth data flow between client and server</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <i class="fas fa-check-circle text-green-400 mt-1 flex-shrink-0"></i>
                                    <span>Gained experience in working with team, debugging, and deploying full-stack applications</span>
                                </li>
                              
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      <section id="projects" className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-300 mb-12 text-center animate-fade-in">Featured Projects</h3>
          <div className="grid md:grid-cols-3 gap-8">


                        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={Project4} 
                  alt="Modern Blog Application" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  <span className=" px-3 py-1 rounded-full text-sm text-black bg-white">Next.js</span>
                  <span className="bg-gray-900/80 px-3 py-1 rounded-full text-sm text-yellow-400">TypeScript</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">Stay-Finder</h4>
                <p className="text-gray-400 mb-4">Find Your Perfect Home Stay!</p>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/athashri-keny/stay-finder" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                  <a 
                    href="https://stay-finder-umber.vercel.app/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                  >
                    <FaRegEnvelope />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={Project1} 
                  alt="Video Streaming Platform" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  <span className="bg-gray-900/80 px-3 py-1 rounded-full text-sm text-blue-400">React</span>
                  <span className="bg-gray-900/80 px-3 py-1 rounded-full text-sm text-green-400">Node.js</span>
                  <span className="bg-gray-900/80 px-3 py-1 rounded-full text-sm text-purple-400">Redux</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">Video Streaming Platform</h4>
                <p className="text-gray-400 mb-4">Full-stack video streaming solution with user authentication</p>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/athashri-keny/Full-Stack-Video-Streaming-Project" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                  <a 
                    href="https://full-stack-video-streaming-project-hlxr.onrender.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                  >
                    <FaRegEnvelope />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={Project3} 
                  alt="E-Commerce Dashboard" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  <span className="bg-gray-900/80 px-3 py-1 rounded-full text-sm text-blue-400">React</span>
                  <span className="bg-gray-900/80 px-3 py-1 rounded-full text-sm text-red-400">Appwrite</span>  
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">Pet Adopation Website</h4>
                <p className="text-gray-400 mb-4">A Pet Website Where you Browse , Adopt Pets</p>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/athashri-keny/Pet-Adoption-Project" 
                    target='_'
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                  <a 
                    href="https://pet-adoption-project-bntc.vercel.app/"
                    target='_' 
                    className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                  >
                    <FaRegEnvelope />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="education" className="py-20 px-6 bg-gray-850">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-300 mb-12 text-center animate-fade-in">Education</h3>
          
          <div className="space-y-8 relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-500 transform -translate-x-1/2 ml-8"></div>
            <div className="relative pl-16 animate-fade-in-right">
              <div className="absolute left-0 top-4 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="text-xl font-bold text-blue-400">Tilak Maharashtra Vidyapeeth</h4>
              <p className="text-gray-400"> (BCA) Bachelor of Computer Science </p>
              <p className="text-gray-500">2023 - 2026 (Current)</p>
            </div>
            <div className="relative pl-16 mt-12 animate-fade-in-right">
              <div className="absolute left-0 top-4 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="text-xl font-bold text-green-400">Maharshi Dayanand College</h4>
              <p className="text-gray-400">Higher Secondary Education</p>
              <p className="text-gray-500">2021 - 2023</p>

            </div>
            <div className="relative pl-16 mt-12 animate-fade-in-right">
              <div className="absolute left-0 top-4 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="text-xl font-bold text-purple-400">St. Paul High School</h4>
              <p className="text-gray-400">Secondary Education</p>
              <p className="text-gray-500">2008 - 2020</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-300 mb-8 text-center animate-fade-in">Let's Connect</h3>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto text-center">
            I'm actively seeking internship opportunities! Feel free to reach out for collaborations or job inquiries.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in-left">
              <form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="bg-gray-800 rounded-xl p-8 h-full">
                <h4 className="text-xl font-semibold mb-6 text-blue-400">Contact Information</h4>
                
                <p className="text-gray-300 mb-6">
                  I'm currently available for internship opportunities and freelance work. 
                  Feel free to reach out if you want to collaborate or just say hi!
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:athashrikeny38@gmail.com" 
                    className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <FaRegEnvelope className="text-xl" />
                    <span>athashrikeny38@gmail.com</span>
                  </a>
                  
                  <div className="flex gap-6 mt-8">
                    <a 
                      href="https://github.com/athashri-keny" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-full bg-gray-700 hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <FaGithub size={24} className="text-gray-300" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/athashri-keny-98b92732a/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-full bg-gray-700 hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <FaLinkedin size={24} className="text-gray-300" />
                    </a>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-700">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="text-center text-gray-500 text-sm">
          <p>Built with React & Tailwind CSS • © {new Date().getFullYear()} Athashri Keny</p>
       
        </div>
      </footer>
    </div>
  );
}

export default App;