'use client';
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import experience from "../data/experience";
import Surface from "../shared/Surface";
import Badge from "../ui/Badge";

const Experience = () => {
    const [openId , setOpenId] = useState(experience.find((job) => job.current)?.id ?? null)

    return (
        <Surface id = 'experience' className = 'mt-5 max-[420px]:p-14 max-[370px]:p-10 max-[300px]:p-7'>
            <p className = 'text-sky-600 text-sm capitalize'>experience</p>
            <h2 className = 'font-display text-3xl max-[340px]:text-[25px] font-extrabold'>Where I work</h2>

            <div className = 'mt-10 flex flex-col gap-5'>
                {
                    experience.map((job) => {
                        const isOpen = openId === job.id

                        return(
                            <div key = {job.id} className = 'bg-white/45 dark:bg-black/45 shadow-lg dark:shadow-none shadow-neutral-200/30 rounded-2xl overflow-hidden'>
                                <h3>
                                    <button type = 'button' onClick = {() => setOpenId(isOpen ? null : job.id)} aria-expanded = {isOpen} aria-controls = {`experience-${job.id}`} className = 'w-full cursor-pointer outline-none text-left flex justify-between items-center gap-4 p-8 max-[420px]:p-6 max-[300px]:p-4 hover:bg-neutral-200/30 dark:hover:bg-neutral-800/20 transition-all'>
                                        <span>
                                            <span className = 'flex flex-wrap items-center gap-2'>
                                                <span className = 'text-xl max-[350px]:text-lg font-bold'>{job.company} ({job.short})</span>
                                                {
                                                    job.current && <span className = 'text-sky-500 bg-sky-100 dark:bg-sky-900/30 rounded-lg p-1 px-3 uppercase text-[10px]'>current</span>
                                                }
                                            </span>
                                            <span className = 'block text-neutral-400 mt-2 tracking-widest'>{job.title}</span>
                                        </span>

                                        <ChevronDown size = {18} className = {`shrink-0 text-sky-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}/>
                                    </button>
                                </h3>

                                <div className = {`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div id = {`experience-${job.id}`} inert = {!isOpen} className = 'overflow-hidden'>
                                        <div className = 'px-8 pb-8 max-[420px]:px-6 max-[420px]:pb-6 max-[300px]:px-4 max-[300px]:pb-4'>
                                            {
                                                job.desc && <p className = 'text-neutral-400 text-justify leading-6 tracking-wider'>{job.desc}</p>
                                            }

                                            <div className = 'mt-6 flex flex-col'>
                                                {
                                                    job.roles.map((role) => {
                                                        return(
                                                            <div key = {role.id} className = 'flex flex-wrap justify-between items-center gap-2 border-t border-neutral-200 dark:border-neutral-800 py-3'>
                                                                <p>{role.title}</p>
                                                                <p className = 'text-neutral-400 uppercase tracking-widest text-[10px]'>{role.note}</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                            {
                                                job.projects.length > 0 &&
                                                    <ol className = 'mt-8'>
                                                        {
                                                            job.projects.map((proj , index) => {
                                                                const isLast = index === job.projects.length - 1

                                                                return(
                                                                    <li key = {proj.id} className = {`relative pl-8 max-[300px]:pl-6 ${isLast ? '' : 'pb-7'}`}>
                                                                        <span className = {`absolute left-[-0.55px] top-1 size-4 rounded-full border-[1.5px] bg-neutral-100 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700`}/>
                                                                        {
                                                                            !isLast && <span className = 'absolute left-1.75 top-5 w-px h-[calc(100%-1.25rem)] bg-neutral-200 dark:bg-neutral-800'/>
                                                                        }

                                                                        <span className = "flex flex-wrap items-center justify-start gap-3">
                                                                            <h4 className = 'font-bold leading-none'>{proj.title}</h4>
                                                                            { proj.live && <> - <Link href = {proj.live} target = '_blank' rel = 'noopener noreferrer' className = 'inline-block text-sky-600 outline-none hover:bg-sky-100/70 dark:hover:bg-sky-900/20 transition-all p-1.5 px-3 rounded-md'>Live</Link></>}
                                                                        </span>
                                                                        { proj.year && <p className = 'text-neutral-400 mt-1'>{proj.year}</p> }
                                                                        { proj.role && <p className = 'text-sky-600 mt-1 capitalize'>{proj.role}</p> }
                                                                        { proj.desc && <p className = 'text-neutral-400 text-justify leading-5 tracking-wider mt-2'>{proj.desc}</p> }

                                                                        {
                                                                            proj.tech.length > 0 &&
                                                                                <div className = 'flex flex-wrap justify-start items-center gap-2 mt-3'>
                                                                                    {
                                                                                        proj.tech.map((tech , i) => {
                                                                                            return(
                                                                                                <Badge key = {i} className = 'bg-neutral-50 dark:bg-neutral-900'>{tech}</Badge>
                                                                                            )
                                                                                        })
                                                                                    }
                                                                                </div>
                                                                        }
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ol>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Surface>
    );
};

export default Experience;
