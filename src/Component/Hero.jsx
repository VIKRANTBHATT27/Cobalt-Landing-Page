import React from 'react'
import { BiDownArrowAlt } from "react-icons/bi";
import BtnComponent from './BtnComponent';

function Hero() {
     return (
          <div className='flex flex-col justify-center items-center mt-30 selection:bg-cyan-300 selection:text-cyan-900'>
               <h1 className='max-w-3xl text-7xl text-transparent bg-clip-text font-bold text-center leading-tighter bg-linear-to-br from-white to-neutral-500 selection:bg-cyan-300 selection:text-cyan-900 animate-grow'>
                    Unleash the power of intuitive finance
               </h1>

               <div className='text-neutral-400 max-w-3xl text-center font-inter font-medium mt-8 mx-auto text-xl leading-relaxed selection:bg-cyan-500 selection:text-cyan-900'>
                    <p>
                         Say goodbye to the outdated financial tools. Every small business owner, regardless of the background, can now manage their business like a pro.
                    </p>
                    <p>
                         Simple. Intuitive. And never boring.
                    </p>
               </div>

               <BtnComponent className={`mt-10`} />

               <div className='hover:text-neutral-200 text-neutral-400 mt-8 flex flex-col justify-center items-center cursor-pointer group'>
                    <p className=''>Learn more</p>
                    <span className='mt-1 text-2xl group-hover:translate-y-1 transition-all ease-in-out duration-300'><BiDownArrowAlt /></span>
               </div>
          </div>
     )
}

export default Hero