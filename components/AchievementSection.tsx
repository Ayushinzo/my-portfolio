'use client';

import { Trophy, Award, Calendar, Target, Star, Medal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AchievementSection = () => {
  const achievements = [
    {
      title: 'MAH MCA CET 2024',
      category: 'Academic Excellence',
      description: 'Successfully qualified for Maharashtra MCA Common Entrance Test with outstanding performance',
      details: {
        percentage: '97%',
        rank: '1020',
        year: '2025',
        totalCandidates: '40,000+'
      },
      icon: Award,
      color: 'from-yellow-500 to-orange-500',
      featured: true
    },
  ];

  const stats = [
    { number: '97%', label: 'MCA CET Score', icon: Award }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent mb-4">
            Achievements
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognition of academic excellence, technical proficiency, and professional accomplishments
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="flex justify-center mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="flex justify-center">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 hover:shadow-2xl group overflow-hidden relative max-w-2xl w-full">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {achievement.featured && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg animate-pulse">
                  Featured
                </div>
              )}
              
              <CardContent className="p-8 relative z-10">
                <div className="flex items-start gap-6">
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                        {achievement.title}
                      </h3>
                    </div>
                    
                    <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/30 mb-4">
                      {achievement.category}
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {achievement.description}
                    </p>

                    {/* Achievement Details */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Object.entries(achievement.details).map(([key, value], detailIndex) => (
                        <div key={detailIndex} className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                          <div className="text-emerald-400 font-bold text-lg mb-1">
                            {value}
                          </div>
                          <div className="text-gray-400 text-sm capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              This achievement represents my commitment to excellence and continuous improvement. 
              I'm always eager to take on new challenges and expand my skill set in the ever-evolving field of technology.
            </p>
            <div className="flex justify-center">
              <div className="flex items-center text-emerald-400">
                <Award className="w-5 h-5 mr-2" />
                <span className="font-semibold">Striving for Excellence</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AchievementSection;