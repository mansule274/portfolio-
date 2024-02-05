import React from "react"
import logo from '../assets/Man Sulee.png'

const About = () => {
    return(
        
        <div>
            <div className="text-5xl text-center font-mono" id="about">About-Me</div>
            <div className="lg:flex md:block">
                <div className="w-[50%] ml-5">
                    <img className="w-[100%]" src={logo} />
                </div>
                
                <div className='description w-[30%] md:w-1/2 md:ml-2 lg:ml-10 mt-7'>
        <h1 className='note-1 text-4xl'>It’s all about me……</h1>
        <h2 className=' note-1 text-3xl'>Hello everyone…</h2>
        <p className=' note text-xl'>Myself <span className='text-3xl'> Muhammad…,</span> <br /> I belong to Sulaiman Nababa's Family,<br />
          I'm  from “ Katsina, Katsina State”. I'm attended Katsina State Institude of Technology And Management because it has always been something I've been fascinated with forward to since childhood. <br />
           …..About my family background…. <br />
            There are eleven members in my family including me… my father, my mother and my eight
            brothers. <br />
                My father is a teacher, my mother is a housewife and my brothers are studying.
                I like to do creative things like designing, Coding and typing. I like to spend my time with
                my family and my friends. <br />
                Listening Qur'an, watching  Arab Show, net surfing and learning & knowing something new are my
                hobbies. What I like to do….
          </p>
      </div>

            </div>
            
        </div>
        
    )
}

export default About