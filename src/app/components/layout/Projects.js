import Link from 'next/link';
import React from 'react';
import Badge from '../ui/Badge';

const Projects = () => {
    const projects = [
        {
            id : 1,
            featured : true,
            year : 2026,
            title : 'tourino',
            desc : 'A full-stack tour booking platform. Authentication, tour discovery, booking flow, and admin management — built end-to-end and deployed on Vercel and Railway.',
            tech : ['Next.js 14' , 'TailwindCss' , 'Shadcn' , 'Axios' , 'React-Query' , 'Express.js' ],
            github : 'https://github.com/sadranafe/tourino',
            live: 'https://tourino-v1.vercel.app',
        },
        {
            id : 2,
            featured : false,
            year: 2025,
            title : 'admin panel',
            desc : 'A modern admin panel built with Next.js. This project is a real-world migration from a traditional React SPA to Next.js, leveraging Server Components, Client Components, and best practices used in production teams.',
            tech : ['Next.js 14', 'TailwindCss' , 'Axios' , 'React-Query' , 'Swagger' , 'Formik' , 'yup' , 'React-hot-toast' ],
            github : 'https://github.com/sadranafe/sadranafe-bootcamp/tree/main/week21-adminpanel',
            live: '',
        },
        {
            id : 3,
            featured : false,
            year : 2023,
            title : 'quiz app',
            desc : 'A modern admin panel built with Next.js. This project is a real-world migration from a traditional React SPA to Next.js, leveraging Server Components, Client Components, and best practices used in production teams.',
            tech : ['Vite' , 'React' , 'TailwindCss' , 'Axios'],
            github : 'https://github.com/sadranafe/Quiz-app',
            live: 'https://quizappsn.vercel.app',
        },
    ]
    return (
        <>
            <section id = 'projects' className = 'bg-neutral-100 dark:bg-neutral-900 p-20 max-[600px]:p-10 max-[380px]:p-5 rounded-xl'>
                <h3 className = 'text-sky-600 max-[600px]:pl-10 max-[420px]:pl-4 max-[300px]:pl-2 text-sm capitalize'>featured projects</h3>
                <h2 className = 'font-display text-3xl max-[600px]:pl-10 max-[420px]:pl-4 max-[300px]:pl-2 max-[340px]:text-[25px] font-extrabold'>projects</h2>

                <div className = 'mt-10 grid grid-cols-2 max-[800px]:grid-cols-1 gap-5'>
                    {
                        projects.map((proj , index) => {
                            return(
                                <div key = {index} className = 'bg-white/45 dark:bg-black/45 shadow-lg dark:shadow-none shadow-neutral-200/30 rounded-2xl p-10 max-[500px]:p-7 max-[900px]:p-8'>
                                    <div className = 'flex relative justify-between items-center'>
                                        <p className = 'text-neutral-400'>{proj?.year}</p>
                                        {
                                            proj?.featured && <p className = 'text-sky-500 max-[250px]:absolute max-[250px]:bottom-full max-[250px]:-right-5 bg-sky-100 dark:bg-sky-900/30 rounded-lg p-1 px-3 uppercase text-[10px] w-fit'>featured</p>
                                        }
                                    </div>

                                    <div className = 'my-5'>
                                        <h3 className = 'capitalize text-2xl max-[350px]:text-xl font-bold'>{proj.title}</h3>
                                    </div>

                                    <div>
                                        <p className = 'text-neutral-400 text-justify leading-5 tracking-wider max-[350px]:text-[10px]'>{proj?.desc}</p>
                                        <div className = 'flex flex-wrap justify-start items-center gap-3 mt-5'>
                                            {
                                                proj?.tech.map((tech , index) => {
                                                    return(
                                                        <Badge key = {index} customClass = 'bg-neutral-50 dark:bg-neutral-900'>{tech}</Badge>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>

                                    <hr className = 'text-neutral-200 dark:text-neutral-800 my-5'/>
                                    
                                    <div>
                                        <Link href = {proj?.github} target = '_blank' className = 'text-sky-600 mr-3 outline-none hover:bg-sky-100/70 dark:hover:bg-sky-900/20 transition-all p-2 px-3 rounded-md'>Github</Link>
                                        { proj?.live && <Link href = {proj.live} className = 'text-sky-600 outline-none hover:bg-sky-100/70 dark:hover:bg-sky-900/20 transition-all p-2 px-3 rounded-md'>Live</Link> }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    );
};

export default Projects;