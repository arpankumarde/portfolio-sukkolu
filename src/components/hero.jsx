import React from 'react';
import { bio } from '../data';
import Typical from 'react-typical';
import Databar from './databar';

const Hero = () => {
    return (
        <section className='p-2' id='hero'>
            <span className='text-5xl sm:text-6xl hidden sm:block'>
                Hi, I'm
                <span className='text-white'>
                    <Typical
                        steps={[
                            ` ${bio.name}`,
                            5000,
                            ` a ${bio.role}`,
                            2500,
                        ]}
                        wrapper="span"
                        loop={Infinity}
                    />
                </span>
            </span>
            <Databar customClass={"flex sm:hidden"} />
        </section>
    )
}

export default Hero