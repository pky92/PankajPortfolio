import React from 'react';
import { Trophy, Star, Target, Code, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Star,
      title: "GeeksforGeeks 3-Star Rating",
      description: "Achieved 3-star rating with contest rating above 1700",
      category: "Competitive Programming",
      color: "from-yellow-500 to-orange-500",
      link: "#",
      stats: "1700+ Rating"
    },
    {
      icon: Code,
      title: "600+ DSA Problems Solved",
      description: "Solved over 600 Data Structures and Algorithms problems across multiple platforms",
      category: "Problem Solving",
      color: "from-blue-500 to-purple-500",
      link: "#",
      stats: "600+ Problems"
    },
    {
      icon: Trophy,
      title: "CodeChef Global Rank 1466",
      description: "Achieved global rank of 1466 in CodeChef Starter 150 contest",
      category: "Competitive Programming",
      color: "from-green-500 to-blue-500",
      link: "#",
      stats: "Rank 1466"
    },
    {
      icon: Target,
      title: "Production-Ready Projects",
      description: "Successfully developed and deployed 2 major full-stack applications",
      category: "Development",
      color: "from-purple-500 to-pink-500",
      link: "#",
      stats: "2 Projects Live"
    }
  ];

  const platforms = [
    { name: "LeetCode", problems: "300+", color: "bg-orange-500" },
    { name: "GeeksforGeeks", problems: "200+", color: "bg-green-500" },
    { name: "CodeChef", problems: "100+", color: "bg-blue-500" },
    { name: "HackerRank", problems: "50+", color: "bg-purple-500" }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Achievements & Recognition
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating milestones in competitive programming, problem-solving, and software development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 group"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`bg-gradient-to-r ${achievement.color} p-4 rounded-xl`}>
                      <Icon size={32} className="text-white" />
                    </div>
                    <a
                      href={achievement.link}
                      className="text-gray-400 hover:text-blue-600 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  <div className="mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {achievement.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{achievement.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent font-bold text-lg`}>
                      {achievement.stats}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Problem Solving Statistics</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {platforms.map((platform, index) => (
                <div key={index} className="text-center">
                  <div className={`${platform.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <Code size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800">{platform.name}</h4>
                  <p className="text-2xl font-bold text-blue-600">{platform.problems}</p>
                  <p className="text-sm text-gray-600">Problems Solved</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">600+</div>
                <div className="text-gray-600">Total Problems</div>
                <div className="text-sm text-gray-500">Across All Platforms</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">1700+</div>
                <div className="text-gray-600">Contest Rating</div>
                <div className="text-sm text-gray-500">GeeksforGeeks</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-purple-600 mb-2">1466</div>
                <div className="text-gray-600">Global Rank</div>
                <div className="text-sm text-gray-500">CodeChef Starter 150</div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Continuous Learning & Growth</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                These achievements reflect my commitment to continuous learning, problem-solving excellence, 
                and building impactful software solutions. Always striving for the next challenge!
              </p>
              <div className="flex justify-center space-x-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  View Profiles
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;