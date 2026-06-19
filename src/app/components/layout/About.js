import Badge from "../ui/Badge";

const AboutMe = () => {
    const skills = ['HMTL' , 'CSS' , 'JavaScript' ,'React' , 'Next.js' , 'TailwindCss' , 'ShadcnUI' , 'Axios' , 'REST-API' , 'React-Query' , 'Redux' , 'Git' , 'Github' , 'Figma']
    return (
        <>
            <div className = 'bg-neutral-100 dark:bg-neutral-900 p-20 max-[420px]:p-14 max-[370px]:p-10 max-[300px]:p-7 rounded-xl'>
                <h3 className = 'text-sky-600 text-sm capitalize'>about me</h3>
                <h2 className = 'font-display text-3xl max-[340px]:text-[25px] font-extrabold'>A bit <br/>about me</h2>

                <div className = 'mt-10 text-justify leading-6 max-md:leading-7 tracking-widest max-[300px]:tracking-wider'>
                    <p>I’m Sadra — a Frontend Developer and Computer Engineering student focused on building modern, clean, fast and user-centered web applications.</p>
                    <p className = "my-5 max-lg:my-7">I work mainly with <strong className = "text-sky-600 underline underline-offset-4">React</strong> and <strong className = "text-sky-600 underline underline-offset-4">Next.js</strong> and <strong className = "text-sky-600 underline underline-offset-4">TailwindCss</strong> with a strong emphasis on clean UI, responsive design, and scalable architecture.</p>
                    <p>I'm constantly learning, refining my craft, and building projects that challenge me to grow as both a developer and a problem solver. My goal is to work on impactful products and grow as a developer within a strong engineering team.</p>
                </div>

                <div className = "flex flex-wrap justify-center items-center gap-5 mt-10">
                    {
                        skills.map((skill , index) => {
                            return(
                                <Badge key = {index} customClass = 'dark:hover:bg-neutral-800 dark:hover:border-neutral-800 hover:border-neutral-200/50 hover:bg-neutral-200/50 text-sm cursor-pointer min-w-16 text-center'>{skill}</Badge>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default AboutMe;