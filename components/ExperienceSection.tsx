'use client';

import { Briefcase, Calendar, MapPin, ExternalLink, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'Labmentix',
      location: 'India',
      period: '1 May 2025 - 5 July 2025',
      type: 'Internship',
      description: 'Gained hands-on experience in full-stack web development, working on real client projects under the mentorship of senior developers. Contributed to building responsive web applications and learned industry best practices.',
      technologies: ['Full Stack','React', 'Next.js', 'Tailwind CSS', 'Firebase', 'Node.js', 'MongoDB', 'Authentication'],
      companyUrl: 'https://www.labmentix.in',
      certificateUrl: 'https://drive.google.com/file/d/1Kuu_zpL7FqR3hgGI6uTyhBDhi82Bs6wF/view?usp=sharing'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional experience and key contributions in web development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center">
                      <img src="/intern_logo.webp" alt="Internship logo" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <p className="text-xl text-emerald-400 font-semibold">
                            {exp.company}
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-1 h-auto text-emerald-400 hover:text-emerald-300"
                            onClick={() => window.open(exp.companyUrl, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/30">
                            {exp.type}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies Used */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certificate Link */}
                    {exp.certificateUrl && (
                      <div>
                        <Button
                          onClick={() => window.open(exp.certificateUrl, '_blank')}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-300 transform hover:scale-105"
                        >
                          <Award className="w-4 h-4 mr-2" />
                          View Certificate
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;