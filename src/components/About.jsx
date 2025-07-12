import React from 'react';
import { Code, Database, Globe, Cpu } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Expertise in React, Node.js, and modern web technologies"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Proficient in MongoDB, SQL, and database optimization"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "Modern responsive design with Tailwind CSS and best practices"
    },
    {
      icon: Cpu,
      title: "Problem Solving",
      description: "Strong foundation in DSA with 600+ problems solved"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Passionate Developer & Problem Solver
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I'm a dedicated Computer Science Engineering student with a strong passion for 
                  building innovative web applications and solving complex problems. My journey in 
                  technology has led me to master modern development stacks and create impactful 
                  digital solutions.
                </p>
                <p>
                  With hands-on experience in full-stack development, I've successfully built and 
                  deployed production-ready applications like StudyNotion (an EdTech platform) and 
                  Social Fusion (a real-time social media platform), showcasing my ability to 
                  handle complex, scalable projects.
                </p>
                <p>
                  My technical expertise spans across frontend and backend technologies, with a 
                  particular focus on React ecosystem, Node.js, and modern database solutions. 
                  I'm also passionate about competitive programming and have solved 600+ DSA problems.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
            <p className="text-blue-100 mb-6">
              I'm always excited to work on challenging projects and contribute to innovative solutions.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;