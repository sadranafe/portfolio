import Link from "next/link";

const HeroSection = () => {
    return (
        <>
            <div className = "h-screen w-full text-center flex flex-col justify-center items-center gap-5">
                <div className = "flex justify-center items-center gap-2">
                    <div className = "w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <p className = "uppercase text-sky-600 font-semibold tracking-widest max-[500px]:tracking-normal max-[260px]:text-[11px]">open to work ·<br className = "max-[221px]:inline-block hidden"/> tehran, iran</p>
                </div>

                <div>
                    <h1 className = "hero-title drop-shadow-[0_0_90px_rgba(34,211,238,1)] dark:drop-shadow-[0_0_90px_rgba(34,211,238,0.5)] font-display font-extrabold text-8xl">sadra <br/> nafe</h1>
                </div>
                
                <div className = "w-20 h-0.5 rounded-full bg-sky-500"></div>

                <div className = "mt-2 flex max-[300px]:flex-wrap justify-center items-center gap-4">
                    <Link href = '#work' className = "capitalize rounded-lg py-2.5 px-3 bg-sky-600 hover:bg-sky-700 transition-all text-white">view work</Link>
                    <Link href = '#contact' className = "border capitalize border-neutral-200 dark:border-neutral-700 dark:hover:bg-neutral-700 dark:hover:border-neutral-700 hover:bg-neutral-200/50 transition-all p-2.5 px-3 rounded-lg text-sky-600">Get in touch</Link>
                </div>
            </div>
        </>
    );
};

export default HeroSection;