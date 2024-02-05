import React from 'react'
import logo from '../assets/Man Sulee.png'
import { AiOutlineHome, AiOutlineDashboard, AiOutlineProject, AiOutlineContacts, AiOutlineColumnHeight } from 'react-icons/ai'

const Header = () => {
    return(
        <div className='flex justify-between overflow-hidden'>
        <div className='flex z-20 fixed items-center ml-3 w-1/2 '><img src={logo} className=' rounded-full w-16 h-16 mr-2' />
        <div className='text-5xl font-mono '>M <span className='text-amber-900'>S</span> </div>
        </div>
        <div className='w-[60%] lg:hidden md:grid fixed  h-[10vh] ml-[40%]  rounded-tr-full rounded-bl-full   '>
          <ul className='flex justify-center items-center mr-5 text-gray-500  z-30 '> 
          <li className='mr-4 text-xl  pl-5 mt-5 hover:scale-125 duration-200  ' ><a href="#home" className='flex '><AiOutlineHome  size={30}/></a></li>
          <li className='mr-4 text-xl  pl-5 mt-5 hover:scale-125 duration-200  ' ><a href="#about" className='flex'><AiOutlineDashboard size={30}/></a></li>
           <li className='mr-4 text-xl  pl-5 mt-5 hover:scale-125 duration-200  ' ><a href="#project" className='flex'><AiOutlineProject  size={30}/></a></li>
           <li className='mr-4 text-xl  pl-5 mt-5 hover:scale-125 duration-200  ' ><a href="#contact" className='flex'><AiOutlineContacts size={30} /></a></li>
          </ul>
          
          
        </div>
      </div>
    )
}

export default Header