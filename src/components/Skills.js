import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaReact, FaJs, FaHtml5, FaCss3Alt, FaGithub, FaMicrosoft } from 'react-icons/fa';
import { SiTailwindcss, SiVercel, SiPostgresql, SiCplusplus, SiTensorflow } from 'react-icons/si';
import { TbBrandCpp, TbBrain } from 'react-icons/tb';
import { FiTarget } from 'react-icons/fi';

const SkillCard = ({ name, icon, delay = 0 }) => {
  return (
    <motion.div 
      className="relative group bg-white dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.05, duration: 0.3 }}
    >
      <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-3xl text-blue-500 dark:text-blue-400 mb-4 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-gray-800 dark:text-white font-medium text-center text-lg">{name}</h3>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 dark:from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </motion.div>
  );
};

const Skills = ({ darkMode }) => {
  const skills = [
    { name: 'Java', icon: <FaJava className="text-orange-500" /> },
    { name: 'C', icon: <span className="text-xl font-bold">C</span> },
    { name: 'DSA', icon: <span className="text-xl font-bold text-gray-900 dark:text-white">DSA</span> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-400" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'React', icon: <FaReact className="text-blue-400" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'VS Code', icon: <FaMicrosoft className="text-blue-400" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-900 dark:text-white" /> },
    { name: 'Vercel', icon: <SiVercel className="text-gray-900 dark:text-white" /> },
    { name: 'AI/ML', icon: <TbBrain className="text-pink-500" size={28} /> },
    { name: 'Problem Solving', icon: <FiTarget className="text-green-400" size={28} /> },
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white sm:text-5xl">
            Skills & Technology
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Technologies I work with
          </p>
        </div>
        
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {skills.map((skill, index) => (
            <SkillCard 
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              delay={index}
            />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;