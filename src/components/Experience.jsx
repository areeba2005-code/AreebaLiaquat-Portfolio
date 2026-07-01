import React from 'react'
// Importing real icons from react-icons (Make sure to run: npm i react-icons)
import { FaHtml5, FaJs, FaReact, FaWordpress, FaNodeJs, FaPython, FaFigma } from 'react-icons/fa';
import { MdOutlineSecurity } from 'react-icons/md';

const Experience = () => {
  const Skills = [
    {
      id: 1,
      name: 'HTML & CSS',
      width: '60%',
      icon: FaHtml5 // Changed to actual icon component
    },
    {
      id: 2,
      name: 'JS',
      width: '50%',
      icon: FaJs
    },
    {
      id: 3,
      name: 'React js',
      width: '70%',
      icon: FaReact
    },
    {
      id: 4, // Fixed duplicate ID
      name: 'Wordpress',
      width: '85%',
      icon: FaWordpress
    },
    {
      id: 5, // Fixed duplicate ID
      name: 'Node js',
      width: '70%',
      icon: FaNodeJs
    },
    {
      id: 6, // Fixed duplicate ID
      name: 'Python & Java',
      width: '50%',
      icon: FaPython
    },
    {
      id: 7, // Fixed duplicate ID
      name: 'Figma & Canva',
      width: '100%',
      icon: FaFigma
    },
    {
      id: 8, // Fixed duplicate ID
      name: 'Software Quality Assurance',
      width: '60%',
      icon: MdOutlineSecurity
    }
  ];

  const Experiences = [
    {
      id: 1,
      role: 'Front End Developer Intern',
      company: 'Developer Hubs Corporation',
      date: 'March 10th, 2026 to April 25th, 2026'
    }
  ];

  return (
    <section className='text-white py-20 relative overflow-hidden' id='skills'>
      <div className='max-w-7xl mx-auto px-6 lg:px-16 relative z-10'>
        <div className='grid md:grid-cols-2 gap-16 items-start'>
          
          {/* --- LEFT SIDE: SKILLS --- */}
          <div data-aos='fade-right'>
            <h2 className='text-4xl md:text-5xl font-extrabold mb-12'>
              Technical <span className='text-blue-500'>Skills</span>
            </h2>

            <div className='space-y-8'>
              {Skills.map((skill) => {
                const SkillIcon = skill.icon;
                return (
                  <div key={skill.id} className='group'>
                    
                    {/* Header info (Icon, Name & Percentage) */}
                    <div className='flex items-center justify-between mb-2'>
                      <div className='flex items-center gap-3'>
                        <div className='p-2 bg-[#111a3e] rounded-lg group-hover:bg-blue-500 transition-colors duration-300'>
                          <SkillIcon size={20} className='text-blue-500 group-hover:text-white transition-colors' />
                        </div>
                        <span className='font-semibold text-lg'>{skill.name}</span>
                      </div>
                      <span className='text-sm text-gray-400 font-medium'>{skill.width.trim()}</span>
                    </div>

                    {/* Progress Bar Track */}
                    <div className='w-full bg-gray-800 h-2 rounded-full overflow-hidden'>
                      {/* Animated Fill Bar */}
                      <div 
                        className='bg-blue-500 h-full rounded-full transition-all duration-500 group-hover:bg-blue-400' 
                        style={{ width: skill.width }}
                      ></div>
                    </div>

                  </div>
                )
              })}
            </div>
          </div>

          {/* --- RIGHT SIDE: EXPERIENCE --- */}
          <div data-aos='fade-left'>
            <h2 className='text-4xl md:text-5xl font-extrabold mb-12'>
              Work <span className='text-blue-500'>Experience</span>
            </h2>
            
            <div className='space-y-6'>
              {Experiences.map((exp) => (
                <div key={exp.id} className='bg-[#111a3e] p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-xl'>
                  <span className='text-sm text-blue-400 font-semibold block mb-2'>{exp.date}</span>
                  <h3 className='text-2xl font-bold'>{exp.role}</h3>
                  <p className='text-gray-400 mt-1'>{exp.company}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience;