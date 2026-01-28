import React from 'react'

function MiddleElement() {
  return (
    <div className='bg-zinc-950 p-36 text-white'>
          <div className='flex'>
               <h1 className='p-2 min-w-xl text-5xl text-transparent bg-clip-text font-bold text-left leading-tighter bg-linear-to-br from-white to-neutral-500 selection:bg-cyan-300 selection:text-cyan-900'>
                    Who said finance has to be boring?
               </h1>
               <p className='max-w-2xl p-4 text-neutral-500 font-inter font-medium mx-auto text-lg ml-10 tracking-normal leading-relaxed selection:bg-cyan-500 selection:text-cyan-900'>
                    With Cobalt, managing your business finances is effortless, empowering, and anything but boring. Our intuitive platform brings clarity to your cash flow, simplifies your financial decision-making, and puts the power of advanced financial management right at your fingertips.
                    <span className='text-white'>Say no to spreadsheets and tools designed in the 80s.</span>
               </p>
          </div>
    </div>
  )
}

export default MiddleElement