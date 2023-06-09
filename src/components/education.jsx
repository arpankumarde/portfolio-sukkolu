import React from 'react'
import { bio } from '../data'

const Education = () => {
  return (
    <section id='education'>
      <h1 className="title text-6xl font-semibold text-white py-2">Education</h1>
      <div className='flex flex-col-reverse gap-2 sm:flex-row-reverse'>
        {bio.education.map((edu, key) => (
          <div key={key}>
            <h2 className='text-3xl text-gray-50'>{edu.title}</h2>
            <h3 className='text-xl text-gray-200'>{edu.institution}</h3>
            <h4 className='text-base'>{edu.from} - {edu.to}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education