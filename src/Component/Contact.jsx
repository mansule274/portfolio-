import React from 'react'
import { AiOutlinePhone, AiOutlineRedEnvelope, AiOutlineEnvironment } from 'react-icons/ai'

function Contact() {
  return (
    <div id='contact' className='contact '>
        <div className='text-5xl text-center text-white p-2 font-mono'> Get In Touch</div>
        <div className='text-xl font-thin italic text-white mb-5 flex justify-center'><AiOutlinePhone /> Phone: +234-706-311-9056</div>
        <div className='text-xl font-thin italic text-white mb-5 flex justify-center'> <AiOutlineRedEnvelope /> Email: mansuleee247@gmail.com</div>
        <div className='text-xl font-thin italic text-white mb-5 flex justify-center'><AiOutlineEnvironment /> Address: No.04 Hassan Usamn Road Behind Lema Jibril House Katsina, Katsina State.</div>
        <form action="" className=' lg:flex md:block  justify-center gap-8'>
            <div className='mt-6 ml-6'>

            
            <input className='input p-3 mb-10 text-white focus:border-white focus:border-2 outline-none ' size={50} placeholder='Name' type="text" /> <br />
           
         
            <input className='input p-3 mb-10 text-white focus:border-white focus:border-2 outline-none  ' size={50} placeholder='Phone Number' type="text" /> <br />
          
            <input className='input p-3 mb-10 text-white focus:border-white focus:border-2 outline-none ' size={50} placeholder='Email' type="email" />  <br />
            </div>
            <div>

            <br />
           
            <textarea name="Message........." id="" cols="50" rows="8" className='  input p-1 text-xl text-white w-[90%] ml-6' placeholder='Write Your Message...'></textarea><br />
            <button type='button' className="bg-white text-xl ml-[38%] md:ml-[75%] mb-2 pl-3 rounded-md p-3 hover:bg-amber-700 duration-200 hover:text-white ">Message</button>
            </div>
        </form>
    </div>
  )
}

export default Contact