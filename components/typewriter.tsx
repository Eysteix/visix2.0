"use client";
import Typewriter from 'typewriter-effect';

const Typewrite = ({text}:{text:string[]}) => {
  return (
    <div>
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