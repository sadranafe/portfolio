import Link from 'next/link';
import React from 'react';

const ContactMe = () => {
    return (
        <>
            <div className = 'flex flex-col justify-center items-center gap-3 my-32'>
                <h3 className = 'text-sky-600 text-sm max-[400px]:text-xs capitalize'>contact me</h3>
                <h2 className = 'font-display font-extrabold mb-5 text-6xl max-md:text-5xl max-sm:text-3xl max-[300px]:text-2xl text-center'>Let's work <br/> together</h2>
                <p className = 'text-center text-neutral-400'>Open to frontend opportunities, collaborations, and <br/> interesting conversations.</p>

                <div className = 'my-5 text-center'>
                    <Link href = 'mailto:sadranafe7@gmail.com' className = 'bg-sky-600 hover:bg-sky-700/90 capitalize transition-all rounded-md p-3 px-4 text-white'>say hello</Link>

                    <div className = 'mt-10 flex justify-center items-center gap-3'>
                        <Link href = 'https://www.instagram.com/its.sadra_/' className = 'text-neutral-400 capitalize hover:text-white transition-all'>instagram</Link>
                        <Link href = 'https://github.com/sadranafe' className = 'text-neutral-400 capitalize hover:text-white transition-all'>github</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactMe;