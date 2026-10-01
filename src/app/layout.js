import Dock from "./components/shared/Dock";
import { comfortaa, syne } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Sadra Nafe — Frontend Developer",
  description: "Portfolio of Sadra Nafe, a frontend developer and computer engineering student building modern, user-centered web applications with React and Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang = "en" className = {`${syne.variable} ${comfortaa.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML = {{ __html : `
          try {
            const theme = localStorage.getItem('theme')
            const dark = theme ? theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches
            document.documentElement.classList.toggle('dark', dark)
          } catch {}
        ` }}/>
      </head>
      <body className = "relative bg-neutral-50 dark:bg-neutral-800 dark:text-white text-xs max-w-275 mx-auto max-xl:px-3">
        <Dock/>
          <main>
            {children}
          </main>
      </body>
    </html>
  );
}