import Link from 'next/link';
import Surface from '../shared/Surface';
import Badge from '../ui/Badge';

const Projects = ({ id , eyebrow , title , projects }) => {
    return (
        <Surface id = {id} className = 'mt-5 max-[600px]:p-10 max-[380px]:p-5'>
            <p className = 'text-sky-600 max-[600px]:pl-10 max-[420px]:pl-4 max-[300px]:pl-2 text-sm capitalize'>{eyebrow}</p>
            <h2 className = 'font-display text-3xl max-[600px]:pl-10 max-[420px]:pl-4 max-[300px]:pl-2 max-[340px]:text-[25px] font-extrabold'>{title}</h2>

            <div className = 'mt-10 grid grid-cols-2 max-[800px]:grid-cols-1 gap-5'>
                {
                    projects.map((proj) => {
                        return(
                            <div key = {proj.id} className = 'bg-white/45 dark:bg-black/45 shadow-lg dark:shadow-none shadow-neutral-200/30 rounded-2xl p-10 max-[500px]:p-7 max-[900px]:p-8'>
                                {
                                    (proj.year || proj.featured) &&
                                        <div className = 'flex justify-between items-center'>
                                            <p className = 'text-neutral-400'>{proj.year}</p>
                                            {
                                                proj.featured && <p className = 'text-sky-500 bg-sky-100 dark:bg-sky-900/30 rounded-lg p-1 px-3 uppercase text-[10px] w-fit'>featured</p>
                                            }
                                        </div>
                                }

                                <div className = 'my-5'>
                                    <h3 className = 'capitalize text-2xl max-[350px]:text-xl font-bold'>{proj.title}</h3>
                                    { proj.role && <p className = 'text-sky-600 mt-2 capitalize'>{proj.role}</p> }
                                </div>

                                <div>
                                    { proj.desc && <p className = 'text-neutral-400 text-justify leading-5 tracking-wider max-[350px]:text-[10px]'>{proj.desc}</p> }
                                    {
                                        proj.tech.length > 0 &&
                                            <div className = 'flex flex-wrap justify-start items-center gap-3 mt-5'>
                                                {
                                                    proj.tech.map((tech , index) => {
                                                        return(
                                                            <Badge key = {index} className = 'bg-neutral-50 dark:bg-neutral-900'>{tech}</Badge>
                                                        )
                                                    })
                                                }
                                            </div>
                                    }
                                </div>

                                {
                                    (proj.github || proj.live) &&
                                        <>
                                            <hr className = 'text-neutral-200 dark:text-neutral-800 my-5'/>

                                            <div>
                                                { proj.github && <Link href = {proj.github} target = '_blank' rel = 'noopener noreferrer' className = 'text-sky-600 mr-3 outline-none hover:bg-sky-100/70 dark:hover:bg-sky-900/20 transition-all p-2 px-3 rounded-md'>Github</Link> }
                                                { proj.live && <Link href = {proj.live} target = '_blank' rel = 'noopener noreferrer' className = 'text-sky-600 outline-none hover:bg-sky-100/70 dark:hover:bg-sky-900/20 transition-all p-2 px-3 rounded-md'>Live</Link> }
                                            </div>
                                        </>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </Surface>
    );
};

export default Projects;
