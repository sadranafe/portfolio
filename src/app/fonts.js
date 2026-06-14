import { Comfortaa, Syne } from "next/font/google";

const syne = Syne({
  subsets : ['latin'],
  weight : ["400" , "500" , "600" , "700" , "800"],
  variable : '--font-syne',
})

const comfortaa = Comfortaa({
    subsets : ['latin'],
    weight : ["300" , "400" , "500" , "600" , "700"],
    variable : '--font-comfortaa'
})

export { syne , comfortaa }