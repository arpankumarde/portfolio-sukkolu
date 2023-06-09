import React from 'react'
import { bio } from '../data'

const Footer = () => {
    return (
        <footer className='border-t-2 border-selective-yellow pt-2 flex justify-between text-white'>
            <span className='text-left'><a href='https://linkedin.com/in/arpan-kumar-de/'>&copy;2023 Arpan Kumar De</a></span>
            <span className='text-center'>{bio.name}</span>
            <span className='text-right'>All rights reserved</span>
        </footer>
    )
}

export default Footer