'use client';
import { useEffect, useState } from "react";

const ThemeToggle = ({ format = 'default' }) => {
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
            <button onClick = {toggleTheme} className = {`${format !== 'default' ? 'dark:border-neutral-700 border-neutral-300 px-2 rounded-full' : 'px-3 border-transparent'} dark:hover:bg-neutral-700 outline-none rounded-lg cursor-pointer border hover:bg-neutral-100 transition-all py-2`}>
                {
                    format === 'default' ? 
                    <p>
                        { dark ? '☀️ Light' : '🌙 Dark' }
                    </p> 
                    : 
                    <p>
                        { dark ? '☀️' : '🌙' }
                    </p>
                }

                
            </button>
        </>
    );
};

export default ThemeToggle;