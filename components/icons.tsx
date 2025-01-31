import * as lucide from "lucide-react"
import { FC } from "react";
const Icons :FC<{icon: string; className?:string;}> = ({icon,className}) => {
  // Make sure name is a valid key of lucide
  const Icon = lucide[icon as keyof typeof lucide]as FC<React.SVGProps<SVGSVGElement>>;

  // You can now use the Icon component in your JSX, for example:
  return <Icon className={className} aria-hidden="true"/> ;
};


export default Icons;