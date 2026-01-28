import React from 'react'

function BtnComponent({ className }) {
     return (
          <div className={`${className}`}>
               <button className='relative px-4 py-1.5 bg-black font-inter border-2 border-neutral-700 rounded-4xl text-md text-neutral-400 hover:text-neutral-50 transition-all ease-in-out duration-300 cursor-pointer group'>
                    <div className='absolute -top-px bg-linear-to-r from-10% from-transparent via-cyan-500 to-transparent to-90% opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 inset-x-0 w-full h-px'></div>
                    Join the waitlist
                    <div className='absolute -bottom-0.5 bg-linear-to-r from-15% from-transparent via-cyan-500 to-transparent to-85% inset-x-0 w-full h-px'></div>
               </button>
          </div>
     )
}

export default BtnComponent