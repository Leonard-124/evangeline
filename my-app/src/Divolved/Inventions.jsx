
import React from 'react'
import Navbar from '../Pages/Navbar'
import invention from "../assets/Arts/invention.js"
import { Link, Outlet} from 'react-router-dom'

const Inventions = () => {
  return (
    <>
    <Navbar/>
    <div className='mt-24'>
        <Outlet />
        <h1 className='text-xl text-gray-800 tracking-[-1px] leading-1 text-center'>Welcome to the Inventions Page</h1>
        <div className='flex justify-between text-red-400 tracking-[-0.5px] text-xl font-light m-4'>
        <p>Explore the latest inventions and innovations in technology, art and other fields.</p>
        <p>Heads Up who invented the light bulb?🤔🤔</p>
        </div>
        <div className='mt-3'>
            <hr />
            <div className='grid grid-cols-4 gap-8 '>
            {invention.map((item, index) => (
                <Link to={`/inventioncard/${item.id}`} key={index} className='w-[300px] h-[300px] rounded p-1 bg-[#f7f4f4] shadow pb-3 relative mt-4'>
                    <img src={item.src} alt={item.name} 
                    className='w-full h-52 object-cover'
                    />
                    <div className='font-light tracking-[-1px] text-gray-500'>
                    <p>{item.name}</p>
                    <p>{item.inventor}</p>
                    </div>
                    <div className='flex justify-between text-red-400 font-[500]'>
                    <p><span className='font-light text-gray-400 tracking-[-1px]'>Type: </span>{item.type}</p>
                    <p>From:{item.price}</p>
                    </div>
                    <p className='absolute top-0 right-0 mt-2 '>⭐⭐</p>
                </Link>
            ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default Inventions
