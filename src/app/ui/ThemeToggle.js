'use client';
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [dark , setDark] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
            setDark(true)
        }
    },[])

    const toggleTheme = () => {
        if(dark){
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme' , 'light')
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme' , 'dark')
        }
        setDark(!dark);
    }
    
    return (
        <>
            <button onClick = {toggleTheme} className = 'dark:hover:bg-neutral-700 outline-none rounded-lg cursor-pointer hover:bg-neutral-100 transition-all px-4 py-2'>
                { dark ? '☀️ Light' : '🌙 Dark' }
            </button>
        </>
    );
};

export default ThemeToggle;