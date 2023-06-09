import React from 'react'
import { bio } from '../data'

const About = () => {
    return (
        <section className='p-2' id="about">
            <h1 className="title text-6xl font-semibold text-white py-2">About</h1>
            <p>{bio.about}</p>
            <div className='flex justify-center sm:justify-start gap-2 sm:gap-5 mt-5 select-none'>
                <button className='bg-selective-yellow w-[50%] sm:w-auto text-rich-black hover:border-selective-yellow hover:text-selective-yellow hover:bg-transparent hover:font-normal border-selective-yellow font-extrabold border-2 px-4 py-2 rounded-lg' onClick={() => window.open(`mailto:${bio.email}`)}>Hire Me</button>
                <button className='border-selective-yellow w-[50%] sm:w-auto text-selective-yellow hover:bg-selective-yellow hover:text-rich-black hover:border-selective-yellow hover:font-extrabold border-2 px-4 py-2 rounded-lg' onClick={() => window.open(`${bio.links.linkedin}`)}>Let's have a Chat</button>
            </div>
        </section>
    )
}

export default About