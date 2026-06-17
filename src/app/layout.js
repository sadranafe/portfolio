import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import { comfortaa, syne } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "sadra nafe",
  description: "the portfolio of the sadra nafe.",
};

export default function RootLayout({ children }) {
  return (
    <html lang = "en" className = {`${syne.variable} ${comfortaa.variable} h-full antialiased`} suppressHydrationWarning>
      <body className = "bg-neutral-50 dark:bg-neutral-800 dark:text-white text-xs max-w-275 mx-auto max-xl:px-3">
        <Navbar/>
          <main>
            {children}  
          </main>
        <Footer/>
      </body>
    </html>
  );
}
