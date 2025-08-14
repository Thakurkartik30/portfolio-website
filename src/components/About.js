import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Passionate and results-driven software enthusiast with hands-on experience in Java, 
                Data Structures & Algorithms, and modern web technologies including React and JavaScript.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Skilled in designing and developing responsive applications, with a proven track record 
                through projects like a Finance Dashboard and Banking Application. Eager to contribute 
                to impactful projects in Java development, full-stack web applications, and AI-powered 
                solutions within a dynamic team environment.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Currently pursuing my B-Tech at G.L. BAJAJ INSTITUTE OF TECHNOLOGY AND MANAGEMENT, 
                I'm constantly learning and exploring new technologies to enhance my skills.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  Quick Facts
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">B-Tech in Computer Science</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Passionate about Java & React</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Love for Problem Solving</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">AI & ML Enthusiast</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900/20 dark:to-primary-900/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  What I Do
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I specialize in building modern web applications, implementing efficient algorithms, 
                  and creating user-friendly interfaces. My goal is to write clean, maintainable code 
                  that solves real-world problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
