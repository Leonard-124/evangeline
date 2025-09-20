

import React from 'react'
import artdata from "../../assets/Arts/artdata.js"
import { useParams } from 'react-router-dom'
import Navbar from '../../Pages/Navbar.jsx'
import { Link } from 'react-router-dom'

const Artcard = () => {
    const { id } = useParams()
    const data = artdata.find(d => d.id === Number(id))
    if(!data) {
        return <h1>Product Not found</h1>
    }

    if(!artdata || artdata.length === 0){
      return <h1>No products found</h1>
    }

  return (
    <>
    <Navbar/>
    <div className='mt-24'>
      <div className='flex max-h-[400px] '>
        <div className='w-full h-96 m-4'>
          <img src={data.src} alt="" 
          className='w-full h-full object-cover'
          />
          <div className=' flex text-sm gap-3 fo'>
            <p>Likes ❤️</p>
            <Link to={`/room/${data.id}`}>View in room</Link>
            <Link to={`/share/${data.id}`}>Share</Link>
          </div>
          <p>About the Art</p>
          <p className='font-mono text-xl tracking-[1px]'>{data.description}</p>
        </div>
        <div className='w-full flex flex-col gap-8 text-center'>
          <p className='font-light text-black text-xl'>{data.name}</p>
          <p className='text-2xl text-gray-500 '>By {data.author}</p>
          <p className='text-xl text-gray font-mono'>Size: {data.size}</p>
          <p className='text-xl text-gray font-mono'>Price: {data.price}</p>
          <Link to={`/buy/${data.id}`} className='text-white bg-black rounded p-4 text-xl mr-5 ml-5 hover:bg-[#535353]'>Buy Now</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Artcard
