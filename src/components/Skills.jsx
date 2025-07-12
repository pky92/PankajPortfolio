import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["C++", "JavaScript", "TypeScript", "SQL"]
    },
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: ["HTML", "CSS", "Tailwind CSS", "React", "Redux"]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"]
    },
    {
      title: "Database & Cloud",
      icon: "🗄️",
      skills: ["MongoDB", "SQL", "Cloudinary", "Database Optimization"]
    },
    {
      title: "Development Tools",
      icon: "🛠️",
      skills: ["VS Code", "Git", "GitHub", "Postman", "Vite"]
    },
    {
      title: "Computer Science",
      icon: "🧠",
      skills: ["DSA", "DBMS", "OOP", "Computer Networks", "Software Engineering"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks for building robust, scalable applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-lg text-center transform hover:scale-105 transition-transform duration-200 cursor-default"
                    >
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default Skills;