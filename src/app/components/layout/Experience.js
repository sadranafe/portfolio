import experience from "../data/experience";
import Surface from "../shared/Surface";
import Badge from "../ui/Badge";

const Experience = () => {
    return (
        <Surface id = 'experience' className = 'mt-5 max-[420px]:p-14 max-[370px]:p-10 max-[300px]:p-7'>
            <p className = 'text-sky-600 text-sm capitalize'>experience</p>
            <h2 className = 'font-display text-3xl max-[340px]:text-[25px] font-extrabold'>Where I work</h2>

            <div className = 'mt-10 flex flex-col gap-5'>
                {
                    experience.map((job) => {
                        return(
                            <div key = {job.id} className = 'bg-white/45 dark:bg-black/45 shadow-lg dark:shadow-none shadow-neutral-200/30 rounded-2xl p-8 max-[420px]:p-6 max-[300px]:p-4'>
                                <div className = 'flex flex-wrap justify-between items-center gap-2'>
                                    <h3 className = 'text-xl max-[350px]:text-lg font-bold'>{job.role}</h3>
                                    {
                                        job.current && <p className = 'text-sky-500 bg-sky-100 dark:bg-sky-900/30 rounded-lg p-1 px-3 uppercase text-[10px] w-fit'>current</p>
                                    }
                                </div>

                                <p className = 'text-neutral-400 mt-2 tracking-wider'>{job.company} ({job.short}){job.note && ` · ${job.note}`}</p>

                                {
                                    job.tech.length > 0 &&
                                        <div className = 'flex flex-wrap justify-start items-center gap-3 mt-5'>
                                            {
                                                job.tech.map((tech , index) => {
                                                    return(
                                                        <Badge key = {index} className = 'bg-neutral-50 dark:bg-neutral-900'>{tech}</Badge>
                                                    )
                                                })
                                            }
                                        </div>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </Surface>
    );
};

export default Experience;
