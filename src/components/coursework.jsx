import React from 'react'
import { bio } from '../data'

const Coursework = () => {
  return (
    <section id='coursework'>
      <h1 className="title text-6xl font-semibold text-white py-2">Coursework</h1>
      <div className='flex'>
        {bio.coursework.map((course, key) => (
          <div key={key} className=''>
            <h2 className='text-3xl text-gray-50'>{course.title}</h2>
            <h3 className='text-xl text-gray-200'>{course.institution}</h3>
            <h4 className='text-base'>{course.from} - {course.to}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Coursework