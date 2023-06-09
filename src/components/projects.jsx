import React from 'react'
import { bio } from '../data'
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  return (
    <section id='projects'>
      <h1 className="title text-6xl font-semibold text-white py-2">Projects</h1>
      <div className="flex flex-col gap-8">
        {bio.projects.map((proj, key) => (
          <div key={key} className='flex flex-col-reverse sm:flex-row items-center p-2 gap-4'>
            <img src={proj.banner} alt={proj.title} className='w-full sm:w-[30%] rounded-lg select-none' draggable='false' />
            <div className="flex flex-col gap-4">
              <h2 className='text-3xl text-gray-50'>{proj.title}</h2>
              <h3 className='text text-gray-200'>{proj.description}</h3>
              <div className='flex gap-4 justify-center sm:justify-start'>
                {proj.repoLink ?
                  <a href={proj.repoLink} target='_blank' referrerPolicy='no-referrer'>
                    <FaGithub className='text-3xl text-gray-200 hover:text-white' />
                  </a>
                  : ''}
                {proj.deployLink ?
                  <a href={proj.deployLink} target='_blank' referrerPolicy='no-referrer'>
                    <FiExternalLink className='text-3xl text-gray-200 hover:text-white' />
                  </a>
                  : ''}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects