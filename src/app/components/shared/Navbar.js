import ThemeToggle from "@/app/ui/ThemeToggle";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <div className = "flex items-center justify-between py-2">
                <div className = "flex justify-start items-center gap-2 w-3/12">
                    <Image src = '/img/icon.png' alt = "sadra.dev icon" width = {40} height = {40} priority/>
                    <p className = "text-sm">sadra.dev</p>
                </div>

                <div className = "capitalize flex justify-end items-center gap-5 w-6/12">
                    <Link href = '/' className = "p-2 px-3 hover:text-sky-500 dark:hover:bg-neutral-700 rounded-lg outline-none transition-all">projects</Link>
                    <Link href = '/' className = "p-2 px-3 hover:text-sky-500 dark:hover:bg-neutral-700 rounded-lg outline-none transition-all">about</Link>
                    <Link href = '/' className = "p-2 px-3 hover:text-sky-500 dark:hover:bg-neutral-700 rounded-lg outline-none transition-all">contact</Link>
                </div>
                
                <div className = "w-3/12 text-end">
                    <ThemeToggle/>
                </div>
            </div>
        </>
    );
};

export default Navbar;