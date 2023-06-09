import React from 'react';

const Navbar = () => {
    const handleClickScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className='my-2 pb-3 sm:pb-0 sm:px-2 flex items-center select-none border-b-2 border-selective-yellow sm:border-none text-gray-200'>
            <div className="sm:flex justify-center gap-2 sm:gap-4 w-full text-center">
                <button className='hover:text-white px-4 py-2' onClick={() => handleClickScroll('about')}>About</button>
                <button className='hover:text-white px-4 py-2' onClick={() => handleClickScroll('work')}>Experience</button>
                <button className='hover:text-white px-4 py-2' onClick={() => handleClickScroll('projects')}>Projects</button>
                <button className='hover:text-white px-4 py-2' onClick={() => handleClickScroll('coursework')}>Coursework</button>
                <button className='hover:text-white px-4 py-2' onClick={() => handleClickScroll('education')}>Education</button>
            </div>
        </nav>
    )
}

export default Navbar