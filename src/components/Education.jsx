import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "GB PANT DSEU OKHLA-1",
      location: "Delhi, India",
      duration: "2021 - 2025",
      cgpa: "7.8",
      status: "Pursuing",
      description: "Comprehensive curriculum covering software engineering, data structures, algorithms, database management, and modern web technologies."
    },
    {
      degree: "CBSE (Class XII)",
      institution: "SARVODAYA VIDYALAYA",
      location: "Delhi, India",
      duration: "2019 - 2020",
      cgpa: "86.4%",
      status: "Completed",
      description: "Strong foundation in mathematics, physics, and computer science with excellent academic performance."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My academic journey building a strong foundation in computer science and engineering
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full">
                      <GraduationCap size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800">{edu.degree}</h3>
                      <p className="text-blue-600 font-semibold">{edu.institution}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      edu.status === 'Pursuing' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin size={16} className="text-blue-600" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar size={16} className="text-blue-600" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Award size={16} className="text-blue-600" />
                    <span className="font-semibold">
                      {edu.degree.includes('B.Tech') ? `CGPA: ${edu.cgpa}` : `Aggregate: ${edu.cgpa}`}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {edu.description}
                </p>

                {edu.degree.includes('B.Tech') && (
                  <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Subjects & Skills Acquired:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {[
                        'Data Structures',
                        'Algorithms',
                        'DBMS',
                        'SQL',
                        'Computer Networks',
                        'Software Engineering',
                        'OOPS Concepts',
                        'Web Development',
                        
                      ].map((subject, subIndex) => (
                        <span
                          key={subIndex}
                          className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 text-center"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Academic Excellence</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-blue-600">7.8</div>
                <div className="text-gray-600">Current CGPA</div>
                <div className="text-sm text-gray-500">B.Tech CSE</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-purple-600">86.4%</div>
                <div className="text-gray-600">Class XII</div>
                <div className="text-sm text-gray-500">CBSE Board</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-green-600">4</div>
                <div className="text-gray-600">Years</div>
                <div className="text-sm text-gray-500">Academic Journey</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;