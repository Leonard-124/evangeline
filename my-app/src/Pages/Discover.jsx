
import React from 'react'
import roman from '../assets/Arts/roman.jpg'

const Discover = () => {
  return (
    <div>
        <div className='mt-20 bg-[#f5f5f5] h-[400px] flex  justify-between'>
            <div className='w-1/2 flex items-center justify-center text-[30px] font-light tracking-[3.5px]'>
                <h1 className='text-center font-bold text-2xl'>Discover and get Art <br />and designs that inspire <br /> you only on Unix</h1>
            </div>
            <div>
                <img src={roman} alt="The Roman Colosseum" 
                className='w-full h-full object-cover pl-12'/>
            </div>
        </div>
    </div>
  )
}

export default Discover

