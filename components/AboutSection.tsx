'use client';

import { User, MapPin, Calendar, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '100%', label: 'Satisfaction Rate' }
  ];

  const interests = [
    'Web Development',
    'UI/UX Design',
    'Coding',
    'Music',
    'Reading'
  ];

  return (
    <section id="about" className="py-20 bg-white/5 backdrop-blur-sm relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Get to know me better and discover what drives my passion for web development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Personal Info */}
          <div className="space-y-8 animate-fade-in-up">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center mb-6">
                  <User className="w-6 h-6 text-emerald-400 mr-3 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <h3 className="text-xl lg:text-2xl font-semibold text-white">Personal Info</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 mr-3 text-emerald-400 animate-pulse" />
                    <span>Nagpur, Maharashtra, India</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-4 h-4 mr-3 text-emerald-400 animate-pulse delay-200" />
                    <span>21 years old</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-6">My Interests</h3>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/30 hover:bg-emerald-500/30 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Description and Stats */}
          <div className="space-y-8 animate-fade-in-up delay-300">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent mb-6">
                My Journey in Web Development
              </h3>
              <div className="text-gray-300 space-y-4 text-base lg:text-lg leading-relaxed">
                <p>
                  I am a passionate web developer looking for an internship to further develop my skills and gain hands-on experience. My journey started with a curiosity for how websites are built and has grown into a passion for creating interactive and user-friendly web applications.
                </p>
                <p>
                  I have a strong foundation in HTML, CSS, and JavaScript, and have gained experience working with modern frameworks like React and next.js. I enjoy solving complex problems and am always eager to learn new technologies and improve my coding practices.
                </p>
                <p>
                 I believe that collaboration and continuous learning are key to success in the tech industry. I am excited to bring my enthusiasm and skills to new challenges and opportunities in web development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;