import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Finance Dashboard',
      description: 'A responsive finance tracking dashboard to manage income, expenses, and spending categories. Built with React.js and Tailwind CSS, featuring chart visualizations and modern UI components.',
      technologies: ['React.js', 'Tailwind CSS', 'Chart.js', 'Vercel'],
      github: 'https://github.com/Thakurkartik30/finance-dashboard',
      live: 'https://finance-dashboard-livid.vercel.app/',
      image: '📊',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Banking Application',
      description: 'Developed Banking Application in Java using Strings, loops, methods, and conditional statements. It can perform Banking Operations like deposit, withdrawal, checking balance, and exit.',
      technologies: ['Java', 'OOP', 'Data Structures', 'Console UI'],
      github: '#',
      live: null,
      image: '🏦',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS. Features dark mode toggle, smooth animations, and glassmorphism effects.',
      technologies: ['React.js', 'Tailwind CSS', 'AOS', 'Responsive Design'],
      github: 'https://github.com/Thakurkartik30/portfolio-website',
      live: null,
      image: '💼',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've built to showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-br ${project.color} p-6 text-white`}>
                <div className="text-4xl mb-4">{project.image}</div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies Used */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 dark:bg-gray-700 text-white text-center py-2 px-4 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200 font-medium"
                  >
                    <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-center py-2 px-4 rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-200 font-medium"
                    >
                      <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Section */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              More Projects Coming Soon!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm constantly working on new projects and learning new technologies. 
              Check back soon for more exciting developments!
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/Thakurkartik30"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200 font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View All Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
