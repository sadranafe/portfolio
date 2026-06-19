'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const Navbar = () => {
    const [sidebar , setSidebar] = useState(false)

    return (
        <>
            <div className = "flex items-center justify-between py-2">
                <div className = "flex justify-start items-center gap-2 w-3/12">
                    <Image src = '/img/icon.png' alt = "sadra.dev icon" width = {40} height = {40} priority/>
                    <p className = "text-sm">sadra.dev</p>
                </div>

                <div className = "capitalize flex justify-end items-center gap-5 w-6/12 max-sm:hidden">
                    <Link href = '/' className = "p-2 px-3 hover:text-sky-500 dark:hover:bg-neutral-700 rounded-lg outline-none transition-all">projects</Link>
                    <Link href = '/' className = "p-2 px-3 hover:text-sky-500 dark:hover:bg-neutral-700 rounded-lg outline-none transition-all">about</Link>
                    <Link href = '/' className = "p-2 px-3 hover:text-sky-500 dark:hover:bg-neutral-700 rounded-lg outline-none transition-all">contact</Link>
                </div>
                
                <div className = "w-3/12 max-sm:w-4/12 text-end max-sm:hidden">
                    <AnimatedThemeToggler className = 'hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all p-2 rounded-md text-base cursor-pointer'/>
                </div>

                <button onClick = {() => setSidebar(!sidebar)} className = "hidden max-sm:flex z-50 flex-col gap-2">
                    <div className = {`${sidebar ? 'rotate-45 translate-x-0 translate-y-1' : 'rotate-0'} transition-all bg-neutral-800 dark:bg-neutral-100 w-7 h-0.5 rounded-full`}></div>
                    <div className = {`${sidebar ? 'hidden' : 'block'} bg-neutral-800 dark:bg-neutral-100 w-7 h-0.5 rounded-full`}></div>
                    <div className = {`${sidebar ? '-rotate-45 -translate-y-1.25' : 'rotate-0'} transition-all bg-neutral-800 dark:bg-neutral-100 w-7 h-0.5 rounded-full`}></div>
                </button>
            </div>

            <div className = {`${sidebar ? 'right-0' : '-right-full'} hidden capitalize transition-all shadow-xl shadow-neutral-300 dark:shadow-neutral-900 rounded-tl-3xl rounded-bl-3xl max-sm:flex flex-col justify-center items-center gap-2 fixed z-40 top-0 h-screen w-1/2 max-[400px]:w-full bg-neutral-100 dark:bg-neutral-900`}>
                <Link href = '/' className = "p-2 px-3 hover:text-sky-500 dark:hover:bg-neutral-700 rounded-lg outline-none transition-all">projects</Link>
                <Link href = '/' className = "p-2 px-3 hover:text-sky-500 dark:hover:bg-neutral-700 rounded-lg outline-none transition-all">about</Link>
                <Link href = '/' className = "p-2 px-3 hover:text-sky-500 dark:hover:bg-neutral-700 rounded-lg outline-none transition-all">contact</Link>

                <AnimatedThemeToggler className = 'p-2 text-base'/>
            </div>
        </>
    );
};

export default Navbar;