import React from 'react'
import BtnComponent from './BtnComponent'
import { BsTwitterX } from "react-icons/bs";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-zinc-950 flex flex-col p-10 border relative selection:bg-cyan-300 selection:text-cyan-900'>
     <div className='flex items-center flex-col w-full'>
          <div className='h-px w-full inset-x-0 top-0 absolute bg-linear-to-r from-20% from-transparent via-cyan-400/50 to-80% to-transparent '></div>
          <div className='mt-10 max-w-lg text-3xl text-transparent bg-clip-text font-bold text-center leading-tighter bg-linear-to-br from-white to-neutral-500 selection:bg-cyan-300 selection:text-cyan-900'>See where financial automation can take your business.</div>
          <p className='mt-5 text-lg text-neutral-400'>The first financial tool you'll love. And the last one you'll ever need.</p>
          <BtnComponent className={`mt-10`} />
     </div>
     <div className='bg-neutral-500/50 h-px w-full mt-25'></div>
     <div className='flex text-neutral-400 justify-between font-semibold mt-10 mb-10'>
          <span className='flex'>
               <p>© 2025 Cobalt Financial Technologies Inc.</p>
               <p className='ml-4'>Privacy Policy</p>
               <p className='ml-4'>Terms of Use</p>
          </span>
          <span className='flex w-30 items-center'>
               <div className='group relative cursor-pointer mr-5'>
                    <BsTwitterX className='text-xl opacity-100 group-hover:opacity-0' />
                    <FaTwitter className='text-xl opacity-0 group-hover:opacity-100 absolute top-0 hover:text-neutral-300'/>     
               </div>
               <div className='mr-5'>
                    <BiLogoLinkedinSquare className='text-xl cursor-pointer hover:text-neutral-300' />
               </div>
               <div>
                    <FaFacebook className='text-xl cursor-pointer hover:text-neutral-300' />
               </div>
          </span>
     </div>
     <p className='text-neutral-500 max-w-2xl text-sm font-semibold selection:bg-cyan-300 selection:text-cyan-900'>Cobalt is a trademark or registered trademark of Cobalt Financial Technologies Inc. Any other trademarks are the property of their respective owners. Unless otherwise noted, use of third party logos does not imply endorsement of, sponsorship of, or affiliation with Cobalt.</p>
     <p className='text-neutral-500 max-w-2xl text-sm font-semibold mt-3 selection:bg-cyan-300 selection:text-cyan-900'>Cobalt is a financial technology company, not a bank. Banking services are provided by Celtic Bank and Evolve Bank & Trust®, Members FDIC.</p>
    </div>
  )
}

export default Footer