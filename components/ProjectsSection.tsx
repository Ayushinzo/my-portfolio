'use client';

import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {

  const projects = [
    {
      title: 'Personal expense tracker',
      description: "A full-stack personal expense tracker application with data visualization, budget management, recurring payment and expense categorization features.",
      image: '/expense_tracker.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Firebase', 'Charts', 'Nodemailer', 'Material UI', 'Cloudinary'],
      category: 'fullstack',
      date: '2025',
      githubUrl: 'https://github.com/Ayushinzo/expenzo-frontend.git',
      liveUrl: 'https://expenzo-frontend.vercel.app',
      featured: true
    },
    {
      title: 'Project Management App',
      description: 'A comprehensive project management application with React, react-beautiful-dnd, Tickets, Projects, Email Invitation and Create Issue',
      image: '/project_management.png',
      technologies: ['React', 'Tailwind CSS', 'react-beautiful-dnd', 'Node.js', 'MongoDB', 'Auth0', 'Material UI', 'Cloudinary'],
      category: 'fullstack',
      date: '2025',
      githubUrl: 'https://github.com/Ayushinzo/worka-frontend.git',
      liveUrl: 'https://worka-frontend.vercel.app',
      featured: true
    },
    {
      title: 'Digital Signature App',
      description: 'A comprehensive project management tool with task tracking, File upload, Drag and drop signature, PDF generation, and Embed signature functionality.',
      image: '/digital_signature.png',
      technologies: ['React', 'MongoDB', 'Node.js', 'JWT + bcrypt', 'Tailwind CSS', 'Material UI', 'Cloudinary'],
      category: 'frontend',
      date: '2025',
      githubUrl: 'https://github.com/Ayushinzo/signature-app-frontend.git',
      liveUrl: 'https://signature-app-frontend.vercel.app/',
      featured: true
    },
    {
      title: 'Reddit clone',
      description: 'A Reddit clone with user authentication, post creation, community creation, commenting, upvoting/downvoting and infinite scrolling features. Built with Next.js, TailwindCSS, and Node.js.',
      image: '/reddit_clone.png',
      technologies: ['Next.js', 'TailwindCSS', 'Node.js', 'Cloudinary', 'Responsive design'],
      category: 'fullstack',
      date: '2025',
      githubUrl: 'https://github.com/Ayushinzo/reddit.git',
      liveUrl: 'https://reddit-sooty-theta.vercel.app',
      featured: false
    },
    {
      title: 'Tomato app - online food delivery',
      description: 'An online food delivery application with dashboard, user authentication, order place and payment integration. Built with React, Node.js, and MongoDB.',
      image: '/zomato.png',
      technologies: ['React', 'JWT + bcrypt', 'Node.js', 'MongoDB', 'Stripe payment'],
      category: 'opensource',
      date: '2024',
      githubUrl: 'https://github.com/Ayushinzo/tomato-app.git',
      liveUrl: 'https://tomato-app-orcin.vercel.app',
      featured: false
    },
    {
      title: 'Dashboard',
      description: 'A modern dashboard application with user authentication and responsive design. Built with React and Node.js',
      image: '/dashboard.png',
      technologies: ['Next.js', 'Node.js'],
      category: 'fullstack',
      date: '2024',
      githubUrl: 'https://github.com/Ayushinzo/dashboard.git',
      liveUrl: 'https://dashboard-two-teal-14.vercel.app',
      featured: false
    }
  ];


  return (
    <section id="projects" className="py-20 bg-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and contributions to the development community
          </p>
        </div>


        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 hover:shadow-2xl group overflow-hidden relative">
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg animate-pulse">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <CardContent className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Tag className="w-4 h-4 mr-2 text-emerald-400" />
                    <span className="text-sm font-medium text-white">Technologies:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium border border-emerald-500/30 hover:bg-emerald-500/30 hover:scale-105 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub Stats */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            GitHub Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 group">
              <div className="text-3xl font-bold text-emerald-400 mb-2">19</div>
              <div className="text-gray-300">Repositories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-emerald-400 mb-2">38</div>
              <div className="text-gray-300">Commits</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-emerald-400 mb-2">50+</div>
              <div className="text-gray-300">Stars</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-emerald-400 mb-2">76</div>
              <div className="text-gray-300">Contributions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;