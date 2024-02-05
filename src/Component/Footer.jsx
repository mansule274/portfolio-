import React from 'react'
import logo from '../assets/Man Sulee.png'
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineTwitter, AiOutlineGithub,AiOutlineGift} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer h-[40vh] mt-20'>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,128L34.3,133.3C68.6,139,137,149,206,181.3C274.3,213,343,267,411,288C480,309,549,299,617,266.7C685.7,235,754,181,823,149.3C891.4,117,960,107,1029,106.7C1097.1,107,1166,117,1234,101.3C1302.9,85,1371,43,1406,21.3L1440,0L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg> */}
     

<div className='flex justify-center items-center text-2xl '><img className='w-[5%] ' src={logo} /><span className='font-mono text-amber-800 ml-2'> Mansule</span> </div>
    <div className='flex justify-center gap-10 mt-5'>

    <a href="https://web.facebook.com/profile.php?id=100069193713511"><AiOutlineFacebook size={40} className='hover:scale-150 duration-200 text-blue-500'  /></a> <a href="https://www.instagram.com/abu_shuraim247/"><AiOutlineInstagram size={40} className='hover:scale-150 duration-200 text-red-500' /></a>  <a href=" https://wa.me/07063119056"><AiOutlineWhatsApp size={40} className='hover:scale-150 duration-200 text-green-500' /></a> <a href="https://twitter.com/Muhamma20428281"><AiOutlineTwitter size={40} className='hover:scale-150 duration-200 text-blue-400' /> </a> <a href="https://github.com/mansule274"><AiOutlineGithub size={40} className='hover:scale-150 duration-200 ' /></a> <a href=""><AiOutlineGift size={40} className='hover:scale-150 duration-200 ' /></a>
    </div>

    <div className='f-t mt-14 text-2xl text-center font-mono'>&copy; Copyright 2023 Mansule(M S) </div>
    </div>
  )
}

export default Footer