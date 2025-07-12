import React from 'react';
import { ExternalLink, Github, Calendar, TrendingUp, Users, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "StudyNotion: EdTech Platform",
      description: "A comprehensive educational technology platform that simulates a real-world course marketplace, enabling instructors to create multi-section courses and learners to explore, enroll, and track progress.",
      image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800",
      techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "JWT", "Razorpay", "Cloudinary"],
      features: [
        "Role-based authentication with JWT and OTP verification",
        "Integrated Razorpay for seamless payment processing",
        "Cloudinary integration for efficient media uploads",
        "Redux Toolkit for optimized state management",
        "30% increase in user retention and engagement",
        "35% increase in successful transactions"
      ],
      metrics: {
        userRetention: "30%",
        transactions: "35%",
        loadTime: "30%"
      },
      date: "Jan 2025",
      status: "Live",
      liveUrl: "https://study-notion-edtech-platform-6na5.vercel.app/",
      githubUrl: "https://github.com/pky92/StudyNotion-edtech-platform"
    },
    {
      title: "Social Fusion: Social Media Platform",
      description: "A real-time social media platform featuring instant messaging, dynamic stories, live notifications, and comprehensive social networking capabilities with scalable architecture.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "Redux", "Socket.io", "Tailwind CSS"],
      features: [
        "Real-time messaging and live notifications",
        "Dynamic stories and post management (text, images, videos)",
        "In-house authentication with OTP-based verification",
        "Role-based access control (RBAC)",
        "Follow/unfollow system with activity feeds",
        "Support for 1000+ simultaneous logins"
      ],
      metrics: {
        engagement: "30%",
        users: "1000+",
        performance: "30%"
      },
      date: "May 2024",
      status: "Live",
      liveUrl: "https://social-fusion.onrender.com/",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing my expertise in building scalable, production-ready applications with modern technologies
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-3">
                        <a
                          href={project.liveUrl}
                          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                          target='_blank'
                        >
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </a>
                        <a
                          href={project.githubUrl}
                          className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-lg transition-colors"
                           target='_blank'
                        >
                          <Github size={16} />
                          <span>Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-2 text-sm text-blue-600 font-medium">
                      <Calendar size={16} />
                      <span>{project.date}</span>
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-800">{project.title}</h3>
                  
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Zap size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 px-3 py-1 rounded-full text-sm transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <a
                      href={project.liveUrl}
                       target='_blank'
                      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink size={20} />
                      <span>View Live</span>
                    </a>
                    <a
                      href={project.githubUrl}
                       target='_blank'
                      className="flex items-center space-x-2 border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <Github size={20} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;