import React from 'react'
import { Calendar } from 'lucide-react'
import about from '../assets/about.jpg'

const AboutSection = () => {
    const LeaderShip = [
        {
            id: 1,
            role: 'Graphic Designer Team Member',
            Society: 'Google Developer Group on Campus',
            duration: 'Jan 2026 - Present'
        },
        {
            id: 2,
            role: 'Media Lead & Web Developer',
            Society: 'Welfare Society',
            duration: '2026 - Present'
        }
    ]

    return (
        <section className='text-white mt-20 relative overflow-hidden' id='about'>
            <div className='max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center py-16 xl:px-16 relative z-10'>
                
                {/* Left Column: Text & Experience */}
                <div data-aos='fade-right' className='space-y-8'>
                    <div>
                        <h2 className='text-4xl md:text-5xl font-extrabold text-white mb-6'>
                            More <span className='text-primary'>About</span> Me
                        </h2>
                        <p className='text-gray-400 text-base lg:text-lg leading-relaxed'>
                            A Software Engineering student and Frontend Developer who turns ideas into clean, functional digital experiences. 
                            With hands-on skills in HTML, CSS, JavaScript, WordPress, and React.js, paired with a strong eye for design through Figma and Canva, 
                            I bridge the gap between great design and great code.
                        </p>
                    </div>

                    {/* Leadership Cards Stack */}
                    <div className='w-full space-y-4' data-aos='fade-left'>
                        {LeaderShip.map((lead) => (
                            <div
                                key={lead.id}
                                className='group relative p-6 rounded-2xl bg-[#111a3e] border border-[#1f1641] transition-all duration-300 hover:border-primary/50'
                            >
                                <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
                                    <div>
                                        <h3 className='text-lg font-bold text-white group-hover:text-primary transition-colors'>
                                            {lead.role}
                                        </h3>
                                        <p className='text-gray-400 text-sm mt-1'>
                                            {lead.Society}
                                        </p>
                                    </div>
                                    <div className='flex items-center gap-2 text-xs font-medium bg-[#050816] px-3 py-1 rounded-full border border-gray-700 w-fit shrink-0 h-fit'>
                                        <Calendar size={12} className='text-primary' />
                                        {lead.duration}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Profile Image Frame */}
                <div className='mt-16 md:mt-0 flex justify-center lg:justify-end' data-aos='fade-left'>
                    <div className='relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96'>

                        {/* Image Container */}
                        <div className='relative z-10 w-full h-full bg-[#111a3e] rounded-full overflow-hidden border border-[#1f1641]'>
                            <img 
                                src={about} 
                                alt="about" 
                                className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutSection