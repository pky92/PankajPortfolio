import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                PANKAJ
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Full Stack Developer passionate about creating innovative web solutions 
                and solving complex problems through code.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/pankajy9287"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/pankaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:pankajy9287@gmail.com"
                  className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Education', href: '#education' },
                  { name: 'Achievements', href: '#achievements' },
                  { name: 'Contact', href: '#contact' }
                ].map((link, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>📧 pankajy9287@gmail.com</p>
                <p>📱 +91-9310269321</p>
                <p>📍 Delhi, India</p>
                <p>💼 Available for opportunities</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-400">
                <span>© {currentYear} Pankaj. Made with</span>
                <Heart size={16} className="text-red-500" />
                <span>using React & Tailwind CSS</span>
              </div>
              
              <button
                onClick={scrollToTop}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                ↑ Back to Top
              </button>
            </div>

            <div className="mt-6 text-center text-gray-500 text-sm">
              <p>
                This portfolio showcases my journey as a developer. Always learning, always growing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;