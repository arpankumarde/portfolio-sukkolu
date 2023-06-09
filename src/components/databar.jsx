import React from 'react';
import { bio } from '../data';
import { AiFillLinkedin, AiFillGithub, AiFillMail, AiOutlineCloudDownload, AiFillPhone } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';

const Databar = ({ customClass }) => {
    return (
        <aside className={`${customClass} flex-col gap-4 items-center justify-center sm:justify-between sm:pl-2 sm:border-l-2 border-selective-yellow text-gray-200`}>
            <div className='flex flex-col gap-4'>
                <div className="flex justify-center m-2 select-none">
                    <div>
                        <img src={bio.avatar} alt="avatar" draggable='false' className="max-w-52 rounded-full border-white p-2 border-2 border-dashed" />
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <p className='text-white text-xl'>{bio.name}</p>
                    <p>{bio.role}</p>
                    <span className='bg-selective-yellow text-rich-black font-semibold rounded-full text-sm mt-1 px-3 select-none'>{bio.tag}</span>
                </div>
                <div className='flex gap-4 justify-center text-gray-200'>
                    <a href={bio.links.linkedin} target='_blank' referrerPolicy='no-referrer'>
                        <AiFillLinkedin className='text-2xl hover:text-white' />
                    </a>
                    <a href={bio.links.github} target='_blank' referrerPolicy='no-referrer'>
                        <AiFillGithub className='text-2xl hover:text-white' />
                    </a>
                    <a href={`mailto:${bio.email}`}>
                        <AiFillMail className='text-2xl hover:text-white' />
                    </a>
                    <a href={`tel:${bio.phone}`}>
                        <AiFillPhone className='text-2xl hover:text-white' />
                    </a>
                </div>
            </div>
            <button type='button' className='bg-selective-yellow w-full sm:mx-2 select-none text-rich-black font-extrabold px-2 py-4 rounded-lg flex justify-center items-center gap-1' onClick={() => window.open(bio.resumeLink)}>
                <AiOutlineCloudDownload className='inline text-2xl' />
                Download CV
            </button>
        </aside>
    )
}

export default Databar