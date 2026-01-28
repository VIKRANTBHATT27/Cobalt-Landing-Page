import React from 'react'
import Banner from "../assets/image.png"

function ImageComponent() {
  return (
    <div className='text-white flex justify-center mt-10 bg-zinc-950'>
      <img src={Banner} alt="dashboard-image" className='max-w-7xl rounded-2xl'/>
    </div>
  )
}

export default ImageComponent