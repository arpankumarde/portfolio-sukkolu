import React from 'react'
import { bio } from '../data'

const Work = () => {
  return (
    <section id="work">
      <h1 className="title text-6xl font-semibold text-white py-2">Work Experience</h1>
      {bio.work.map((exp, key) => (
        <div key={key}>
          <h2 className='text-3xl text-gray-50'>{exp.role}</h2>
          <div className="flex items-center gap-2">
            <img src={exp.companyLogo} alt="logo" className='h-5 select-none' draggable='false' />
            <h2 className='text-xl text-gray-200'>{exp.company}</h2>
          </div>
          <p className='text-base'>{exp.from} - {exp.to}</p>
          <ul className='list-outside px-7'>
            {exp.description.map((desc, key2) => (
              <li key={key2} className='list-item list-disc'>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default Work