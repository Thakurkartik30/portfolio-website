import React from 'react';

const Achievements = () => {
  const education = [
    {
      degree: 'B-Tech in Computer Science',
      institution: 'G.L. BAJAJ INSTITUTE OF TECHNOLOGY AND MANAGEMENT',
      period: '2021-2025',
      description: 'Currently pursuing my undergraduate degree with focus on software development and computer science fundamentals.'
    },
    {
      degree: 'XII (CBSE)',
      institution: 'Modern Public School',
      period: '2020',
      description: 'Completed higher secondary education with strong foundation in science and mathematics.'
    },
    {
      degree: 'X (CBSE)',
      institution: 'Modern Public School',
      period: '2018',
      description: 'Completed secondary education with excellent academic performance.'
    }
  ];

  const achievements = [
    'Successfully developed and deployed a Finance Dashboard application',
    'Built a complete Banking Application using Java programming',
    'Maintained consistent academic performance throughout education',
    'Active participation in coding competitions and hackathons',
    'Contributed to open source projects on GitHub'
  ];

  const hobbies = [
    'Problem solving and algorithmic challenges',
    'Learning new programming languages and technologies',
    'Contributing to open source projects',
    'Reading tech blogs and staying updated with industry trends',
    'Participating in coding competitions',
    'Building personal projects and experimenting with new ideas'
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Education & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My educational journey and the milestones I've achieved along the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {edu.degree}
                    </h4>
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-400 text-sm rounded-full font-medium">
                      {edu.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                    {edu.institution}
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Hobbies Section */}
          <div className="space-y-8">
            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Key Achievements
              </h3>
              
              <div className="glass rounded-xl p-6">
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3"
                      style={{
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Hobbies */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Hobbies & Interests
              </h3>
              
              <div className="glass rounded-xl p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {hobbies.map((hobby, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2"
                      style={{
                        animationDelay: `${index * 0.05}s`
                      }}
                    >
                      <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {hobby}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 glass rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">
                4+
              </div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                Years of Learning
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Dedicated to continuous learning and skill development
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">
                10+
              </div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                Technologies
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Mastered various programming languages and tools
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">
                3+
              </div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                Projects Completed
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Built and deployed real-world applications
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
