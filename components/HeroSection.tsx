'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, Sparkles, Code2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  function downloadResume(url: string, filename: string) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  const titles = [
    'Full Stack Developer',
    'Web developer',
    'React developer',
    'Next.js developer',
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute -top-40 -right-40 w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-emerald-400/40 to-cyan-400/40 rounded-full blur-3xl animate-pulse animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-500/40 to-purple-500/40 rounded-full blur-3xl animate-pulse delay-1000 animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 lg:w-80 lg:h-80 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-2000 animate-float"></div>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-300 animate-float"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-700 animate-float"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-1000 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-500 animate-float"></div>

        {/* Additional animated elements */}
        <div className="absolute top-1/3 left-10 w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-1/3 right-10 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Container */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mb-12 lg:mb-16">
            {/* Left Side - Text Content */}
            <div className="flex-1 text-center lg:text-left animate-fade-in-up">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Sparkles className="w-8 h-8 text-emerald-400 mr-3 animate-pulse" />
                <span className="text-emerald-400 font-semibold text-lg tracking-wide">WELCOME TO MY WORLD</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 tracking-tight bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent animate-gradient">
                Ayush Shembekar
              </h1>

              <div className="text-base md:text-lg lg:text-xl xl:text-2xl mb-6 h-8 lg:h-10 flex items-center justify-center lg:justify-start">
                <Code2 className="w-8 h-8 text-emerald-400 mr-3" />
                <span className="font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">{displayText}</span>
                <span className="animate-pulse ml-1 text-emerald-400">|</span>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base lg:text-lg text-gray-300 max-w-xl lg:max-w-2xl mx-auto lg:mx-0 mb-6 leading-relaxed opacity-90">
                🚀 Passionate web developer creating beautiful, functional, and user-friendly websites.
                Specializing in modern JavaScript frameworks and responsive design with a focus on
                <span className="text-emerald-400 font-semibold"> exceptional user experiences</span>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center mb-4 lg:mb-6 animate-fade-in-up delay-300">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-4 lg:px-6 py-2 lg:py-3 text-sm font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group relative overflow-hidden"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-4 lg:px-6 py-2 lg:py-3 text-sm font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm bg-white/5"
                  onClick={() => downloadResume("/resume.pdf", "resume/pdf")}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6 animate-fade-in-up delay-500">
                <a
                  href="https://github.com/Ayushinzo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ayush-shembekar-20a10b288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:ayushshembekar07@gmail.com"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Right Side - Profile Image */}
            <div className="flex-shrink-0 order-first lg:order-last animate-fade-in-up delay-200">
              <div className="relative group">
                <div className="hero-profile-image w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-600 p-2 shadow-2xl hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105 animate-float">
                  <img
                    src="/ayush.jpeg"
                    alt="Ayush Shembekar"
                    className="w-full h-full rounded-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400/20 to-blue-600/20 animate-pulse"></div>
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-emerald-400/10 to-blue-600/10 animate-pulse delay-1000"></div>

                {/* Floating icons */}
                <Zap className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-6 h-6 lg:w-8 lg:h-8 text-emerald-400 animate-bounce delay-300" />
                <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-12 h-12 lg:w-20 lg:h-20 bg-emerald-500/30 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 w-10 h-10 lg:w-16 lg:h-16 bg-blue-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-emerald-400 transition-all duration-300 animate-bounce hover:scale-110 group"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;