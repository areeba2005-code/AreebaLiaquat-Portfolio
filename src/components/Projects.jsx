import React from 'react';

import { ExternalLink, Code } from 'lucide-react';
import project1Img from '../assets/project1.png';
import project2Img from '../assets/project2.png';
import project3Img from '../assets/project3.png';
import project4Img from '../assets/project4.png';
import project5Img from '../assets/project5.png';
import project6Img from '../assets/project6.jfif';
import project7Img from '../assets/project7.png';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Etar Restaurant',
      description: 'A one-page restaurant landing website built as a practice project to enhance my frontend development and UI design skills.',
      image: project1Img,
      tags: ['HTML', 'CSS', 'BootStrap'],
      github: 'https://github.com/areeba2005-code/Etar-Restaurant',     
      live: 'https://etar-restaurant.netlify.app/'                     
    },
    {
      id: 2,
      title: 'NEX GEN',
      description: 'A corporate-style landing website designed as a practice project to enhance my frontend and UI skills.',
      image: project2Img,
      tags: ['HTML', 'CSS', 'BootStrap'],
      github: 'https://github.com/areeba2005-code/Nex-Gen/tree/main',
      live: 'https://nex-generation.netlify.app/'
    },
    {
      id: 3,
      title: 'E-commerce',
      description: 'A task in internship to convert a figma e-commerce design into code',
      image: project3Img,
      tags: ['HTML', 'CSS', 'BootStrap', 'JS'],
      github: 'https://github.com/areeba2005-code/ecommerce-frontend-design',
      live: 'https://frontflow-system.netlify.app/'
    },
    {
      id: 4,
      title: 'Dead Zone Survivor Game',
      description: 'Use a oldest version of game to make a better ui and apply all software construction development fundamental',
      image: project4Img,
      tags: ['C#'],
      github: 'https://github.com/areeba2005-code/Dead_zone_survivor',
      live: ''   
    },
    {
      id: 5,
      title: 'Azura by Areeba',
      description: 'An UI and Responsive E-commerce website',
      image: project5Img,
      tags: ['React', 'Tailwind', 'Node.js', 'MongoDB', 'Express.js'],
      github: 'https://github.com/areeba2005-code/azura-ecommerce',   // ← Updated
      live: 'https://azura-by-areeba.netlify.app'   
    },
    {
      id: 6,
      title: 'Smart Gloves',
      description: 'Smart Gloves, an assistive device for paralyzed or speech-impaired individuals...',
      image: project6Img,
      tags: ['Arduino Nano'],
      github: '',
      live: '' 
    },
    {
      id: 7,
      title: 'Bazaar App',
      description: 'BazaarApp.com automation testing project using Selenium WebDriver with C# and NUnit.',
      image: project7Img,
      tags: ['C#', 'Selenium', 'NUnit'],
      github: 'https://github.com/areeba2005-code/bazaar.app',
      live: ''
    }
  ];

  return (
    <section className='text-white py-20 bg-[#111827]' id='projects'>
      <div className='max-w-7xl mx-auto px-6 lg:px-16'>
        
        <div className='text-center mb-16' data-aos='fade-up'>
          <h2 className='text-4xl md:text-5xl font-extrabold inline-block relative pb-4'>
            Projects<span className='text-blue-500'>.</span>
            <span className='absolute bottom-0 left-1/4 right-1/4 h-1 bg-blue-500 rounded-full'></span>
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className='bg-[#111a3e]/40 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/40 transition-all duration-300 group flex flex-col'
              data-aos='fade-up'
            >
              {/* Image */}
              <div className='overflow-hidden bg-gray-900 aspect-video relative'>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
              </div>

              {/* Content */}
              <div className='p-6 flex flex-col flex-grow'>
                <h3 className='text-xl font-bold tracking-wide group-hover:text-blue-400 transition-colors'>
                  {project.title}
                </h3>
                
                <p className='text-gray-400 text-sm mt-2 mb-6 flex-grow'>
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className='bg-[#1e293b] text-gray-300 px-3 py-1 text-xs font-medium rounded-md border border-gray-700/60'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className='flex gap-3 mt-auto'>
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all flex-1 justify-center'
                    >
                      <Code size={18} />
                      Code
                    </a>
                  )}

                  {project.live && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all flex-1 justify-center'
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;