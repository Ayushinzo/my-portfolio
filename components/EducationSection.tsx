'use client';

import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EducationSection = () => {
  const education = [
    {
      degree: 'BCA (Bachelor of Computer Application)',
      institution: 'Nagpur University',
      location: 'Nagpur, Maharashtra',
      period: '2021 - 2024',
      achievements: [
        'Specialized in Computer Applications',
        'Strong foundation in programming languages',
        'Database management and web development',
        'Software engineering principles'
      ],
      description: 'Comprehensive program covering computer applications, programming languages, database management, and software development methodologies.'
    },
    {
      degree: 'HSC (Computer Science)',
      institution: 'Keshav Nagar Junior College',
      location: 'Nagpur, Maharashtra',
      period: '2019 - 2021',
      percentage: '83%',
      achievements: [
        'Computer Science specialization',
        'Mathematics and Physics foundation',
        'Programming fundamentals',
        'Academic excellence'
      ],
      description: 'Higher Secondary Certificate with Computer Science specialization, building strong foundation in mathematics, physics, and computer programming.'
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey and educational background in computer science
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 hover:shadow-2xl group overflow-hidden relative animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardContent className="p-8 relative z-10">
                <div className="flex flex-col items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg animate-float">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <p className="text-xl text-emerald-400 font-semibold mb-2">
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap gap-4 text-gray-300 mb-6">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-emerald-400" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-emerald-400" />
                            <span>{edu.period}</span>
                          </div>
                          {
                            edu.percentage &&
                            <div className="flex items-center">
                              <Award className="w-4 h-4 mr-2 text-emerald-400" />
                              <span>Percentage: {edu.percentage}</span>
                            </div>
                          }
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    {/* <div className="mb-4">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Highlights</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <div
                            key={achievementIndex}
                            className="flex items-start text-gray-300"
                          >
                            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">2024</div>
            <div className="text-gray-300">Graduation Year</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">BCA</div>
            <div className="text-gray-300">Latest Degree</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">83%</div>
            <div className="text-gray-300">HSC Score</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">MCA</div>
            <div className="text-gray-300">Persuning</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
