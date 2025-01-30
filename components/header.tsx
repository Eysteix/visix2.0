"use client"

import Link from "next/link"
import { nav } from "@/utils/assets"
import { usePathname } from "next/navigation"

const Header = () => {
    const path = usePathname();
    
  return (
    <header className="p-4 flex justify-between items-center">
        <div className="title font-bold text-2xl">
            Eysteix
        </div>
        <nav className="flex">
           <ul className="flex space-x-4 p-2">
           {
                nav.map((item) => (
                    <Link key={item.name} href={item.route} className={`p-2 ${path.endsWith(item.route) ? "bg-gray-200" : ""}`} >
                    {item.name}
                    </Link>
                ))
          }
           </ul>
        </nav>
    </header>
  )
}

export default Header
