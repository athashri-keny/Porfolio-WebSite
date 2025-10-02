import React from 'react'

function Navbar() {
  return (
<>

     <nav className="fixed w-full top-0 z-50 flex justify-between items-center p-6 bg-gray-800/95 backdrop-blur-sm shadow-xl">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent font-rubik">
          Athashri Keny
        </h1>
        <div className="space-x-8">
          <a href="#about" className="hover:text-blue-400 transition-colors duration-300 font-rubik">About</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors duration-300 font-rubik">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors duration-300 font-rubik">Contact</a>
          <a href="https://drive.google.com/file/d/1CFGH2qrSaYJwF1pU1IVfQ7PRq0slxNrc/view?usp=sharing " target='_blank ' className='font-rubik'>Resume Pdf </a>
          <a href="#Education" className="hover:text-blue-400 transition-colors duration-300 font-rubik">Education</a>
        </div>
           
      </nav>
</>
  )
}

export default Navbar