"use client"

import Link from "next/link"
import { nav } from "@/utils/assets"
import { usePathname } from "next/navigation"
import { MenuIcon,Moon,Sun } from "lucide-react"
import { Button } from "./ui/button"
import Icons from "./icons"
import { useState } from "react"
import { useTheme } from 'next-themes';

const Header = () => {
  const [navState,setNavState] = useState(false);
  const {setTheme,theme} = useTheme();
    const path = usePathname();
    
  return (
    <header className="p-4 flex flex-wrap  items-center gap-2 justify-between md:justify-around bg-sidebar shadow-lg shadow-accent">
        <div className="title font-bold text-2xl p-2">
           <Link href="/"><span className="font-vivaldi text-primary text-4xl">E</span>ysteix</Link>
        </div>   
        
        <div className="btns flex gap-4 items-center">
        <nav className="hidden md:flex" >
           <ul className="flex  w-full p-2 gap-10">
           {
                nav.map((item) => (
                    <li  key={item.name} className={`p-2 flex gap-4 ${path.endsWith(item.route) ? " border-b-2 border-b-primary ease-linear transition-all  " : ""}`}>
                      <Link href={item.route}  >
                     <span>{item.name}</span>
                     
                    </Link>
                    </li>
                ))
          }
           </ul>
          
        </nav>
        <Button className="md:hidden" onClick={()=>(navState === true ? setNavState(false):setNavState(true))}>
       <MenuIcon/>
        </Button>
        <Button onClick={()=>(theme === "dark" ? setTheme("light"):setTheme("dark"))}>
        {
          theme === "dark" ? <Moon/> : <Sun/>
        }
        </Button>
        </div>
      
        <nav className={`nav-mobile ${navState === true ?  'flex md:hidden':'hidden'} w-full ease-linear duration-200` }>
           <ul className="flex flex-col w-full p-2 gap-3">
           {
                nav.map((item) => (
                    <li  key={item.name} className={`p-2 flex gap-4 ${path.endsWith(item.route) ? "bg-accent rounded-md" : ""}`}>
                       <Icons icon={item.icon} className="text-primary"/>
                      <Link href={item.route}  >
                     <span>{item.name}</span>
                    </Link>
                    </li>
                ))
          }
           </ul>
          
        </nav>
    </header>
  )
}

export default Header
