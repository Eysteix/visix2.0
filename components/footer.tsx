import { Mail, Phone } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="relative bg-accent text-center flex flex-col w-full">
        <div className="top flex flex-col md:flex-row justify-around gap-4 p-4 items-center">
         <ul><li><Link href="/" className="text-2xl font-bold"><span className="font-vivaldi text-primary text-4xl">E</span>ysteix</Link></li></ul>
         <ul><li className="flex items-center gap-2"><Mail/> vision060607@gmail.com</li></ul>
         <ul><li className="flex items-center gap-2"><Phone/> +233 55221 6028</li></ul>
        </div>
        <div className="text-center bg-primary w-full p-4">
        <p>&copy; {new Date().getFullYear()} Marvelous Ajao. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
