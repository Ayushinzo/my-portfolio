'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500', icon: '⚛️' },
    { name: 'Next.js', level: 90, color: 'from-gray-800 to-gray-600', icon: '▲' },
    { name: 'Node.js', level: 88, color: 'from-green-600 to-green-400', icon: '🟢' },
    { name: 'MongoDB', level: 85, color: 'from-green-500 to-emerald-500', icon: '🍃' },
    { name: 'SQL', level: 90, color: 'from-blue-600 to-blue-400', icon: '🗄️' },
    { name: 'PostgreSQL', level: 87, color: 'from-blue-700 to-indigo-500', icon: '🐘' },
    { name: 'Tailwind CSS', level: 92, color: 'from-cyan-500 to-blue-500', icon: '🎨' },
    { name: 'Firebase', level: 83, color: 'from-yellow-500 to-orange-500', icon: '🔥' },
    { name: 'Supabase', level: 80, color: 'from-green-400 to-emerald-400', icon: '⚡' },
    { name: 'Authentication', level: 88, color: 'from-purple-500 to-pink-500', icon: '🔐' },
    { name: 'GSAP', level: 85, color: 'from-green-500 to-lime-400', icon: '✨' },
    { name: 'REST API', level: 85, color: 'from-red-500 to-yellow-400', icon: '🚀' },
    { name: 'Redux', level: 87, color: 'from-purple-600 to-purple-400', icon: '🔄' },
    { name: 'SCSS', level: 89, color: 'from-pink-500 to-rose-400', icon: '💅' }
  ];

  const SkillCard = ({ skill, index }: { skill: typeof skills[0], index: number }) => (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl group relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardContent className="p-6">
        {/* Skill Icon and Name */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mr-4 text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
              {skill.icon}
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
              {skill.name}
            </h3>
          </div>
          <span className="text-emerald-400 font-bold text-lg">
            {skill.level}%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/20 rounded-full h-3 mb-2 overflow-hidden">
          <div
            className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
            style={{
              width: isVisible ? `${skill.level}%` : '0%',
              transitionDelay: `${index * 100}ms`
            }}
          />
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
        </div>

        {/* Proficiency Level */}
        <div className="text-center">
          <span className="text-gray-300 text-sm font-medium">
            {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Beginner'}
          </span>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My core web development skills and proficiency levels
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;