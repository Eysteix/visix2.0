"use client";
import Typewriter from 'typewriter-effect';

const Typewrite = ({text}:{text:string[]}) => {
  return (    
    <div className=" text-xl md:text-2xl lg:text-3xl font-bold text-white uppercase leading-loose text-center">
    <Typewriter
    options={{
        strings:text,
        autoStart: true,
        loop: true,
        
    }}

    />

    </div>
    
  )
}

export default Typewrite