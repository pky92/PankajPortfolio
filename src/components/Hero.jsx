import React from 'react';
import { Github, Linkedin, Mail, Phone, Download, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              PANKAJ
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 font-light">
              Full Stack Developer & Software Engineer
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Passionate Computer Science Engineer specializing in modern web technologies. 
              Building scalable applications with React, Node.js, and cutting-edge tools. 
              Transforming ideas into impactful digital solutions.
            </p>
          </div>

          <div className="animate-fade-in-up-delay-1 mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="mailto:pankajy9287@gmail.com"
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Mail size={20} />
                <span>Get In Touch</span>
              </a>
              <button className="flex items-center space-x-2 border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                <Download size={20} />
                <span>Download CV</span>
              </button>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/pankajy9287"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-900 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/pankaj"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="tel:+919310269321"
                className="p-3 bg-green-600 hover:bg-green-700 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>

          <div className="animate-fade-in-up-delay-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">600+</div>
                <div className="text-gray-600 text-sm">DSA Problems</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">2</div>
                <div className="text-gray-600 text-sm">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">3★</div>
                <div className="text-gray-600 text-sm">GeeksforGeeks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">7.8</div>
                <div className="text-gray-600 text-sm">CGPA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;