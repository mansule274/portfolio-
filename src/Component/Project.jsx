import React from "react";
import project from '../assets/Project-1.png'
import project1 from '../assets/Project-2.png'

import project3 from '../assets/Project-4.png'



const Project = () => {
    return(
        <div id="project" > 
            <div className="text-5xl text-center font-mono mb-5">Project </div>

            <div className="grid md:grid-cols-3 place-content-center gap-5 md:ml-8  ">
            <div className="w-[400px] "> <a href="https://github.com/mansule274/Fresh-Food"> <img className=" rounded-full grayscale h-[400px] hover:scale-90"  src={project} / ></a> </div>
            <div className="w-[400px]"> <a href="https://github.com/mansule274/Interns-Facebook-Clone"> <img className='grayscale rounded-full h-[400px] hover:scale-90' src={project1} / ></a> </div>
            
            <div className="w-[400px]"> <a href="https://github.com/mansule274/Practice"> <img className='grayscale rounded-full h-[400px] hover:scale-90'src={project3} / > </a> </div>
            </div>

        </div>
    )
}

export default Project