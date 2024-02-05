import React from "react";
import pic from '../assets/muhd.jpg'
import { TypeAnimation } from "react-type-animation";
import {AiOutlineHome, AiOutlineContacts, AiOutlineProject, AiOutlineInfo} from 'react-icons/ai'


const Description = () =>{
    return(
        <div className='lg:flex md:block justify-between items-center ml-4 mt-24' id="home" >
    <div className=" ml-24" >
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Hi There !!!',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Welocme To My Portfolio',
        1000,
        'This is my Website',
        1000,
        'Its Mansules Page',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '4em', display: 'inline-block', color:"brown", fontFamily:"monospace", fontStyle:"italic" }}
      repeat={Infinity}
    />
    </div>
    <div className='lg:mt-2 md:mt-20 rounded-full '> <img src={pic} className=' lg:h-[500px]  lg:w-[500px]  rounded-full ' /></div>
   <div className="fixed">
 <a href="#home">     <AiOutlineHome className="border-2 p-2 m-2 rounded-full bg-amber-800 text-white cursor-pointer hover:scale-125 duration-300 z-20"  size={50}/> </a>
    <a href="#project">  <AiOutlineProject className="border-2 p-2 m-2 rounded-full bg-amber-800 text-white cursor-pointer hover:scale-125 duration-300 z-20"  size={50}/></a>
     <a href="#contact"> <AiOutlineContacts className="border-2 p-2 m-2 rounded-full bg-amber-800 text-white cursor-pointer hover:scale-125 duration-300 z-20"  size={50}/></a>
    <a href="#about"><AiOutlineInfo className="border-2 p-2 m-2 rounded-full bg-amber-800 text-white cursor-pointer hover:scale-125 duration-300 z-20 text-5xl italic" /></a>
   </div>
    </div>

    )
}
export default Description