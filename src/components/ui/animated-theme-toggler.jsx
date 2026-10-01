'use client';
import { useRef } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"

export const AnimatedThemeToggler = ({ className }) => {
  const buttonRef = useRef(null)

  const toggleTheme = () => {
    const applyTheme = () => {
      const isDark = document.documentElement.classList.toggle("dark")
      localStorage.setItem("theme", isDark ? "dark" : "light")
    }

    if (typeof document.startViewTransition !== "function") {
      applyTheme()
      return
    }

    const { top, left, width, height } = buttonRef.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const maxRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

    const transition = document.startViewTransition(() => flushSync(applyTheme))

    transition.ready.then(() => {
      document.documentElement.animate({
        clipPath : [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`],
      }, {
        duration : 400,
        easing : "ease-in-out",
        fill : "forwards",
        pseudoElement : "::view-transition-new(root)",
      })
    }).catch(() => {})
  }

  return (
    <button type = "button" ref = {buttonRef} onClick = {toggleTheme} aria-label = "Toggle theme" className = {className}>
      <Sun size = {17} className = "hidden dark:block"/>
      <Moon size = {17} className = "dark:hidden"/>
    </button>
  );
}