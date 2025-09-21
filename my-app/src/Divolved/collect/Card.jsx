
import React from 'react'
import invention from '../../assets/Arts/invention'
import { useParams } from 'react-router-dom'
import Navbar from '../../Pages/Navbar'
import { Link } from 'react-router-dom'

const Card = () => {
    const { id } = useParams()
    const inventionItem = invention.find(i=> i.id === Number((id)))
    if(!inventionItem) {
        return <h1>Item not found</h1>
    }
  return (
    <>
    <Navbar/>
        <div className='mt-24'>
      <div className='flex max-h-[400px] '>
        <div className='w-full h-96 m-4'>
          <img src={inventionItem.src} alt="" 
          className='w-full h-full object-cover'
          />
          <div className=' flex text-sm gap-3 fo'>
            <p>Likes ❤️</p>
            <Link to="/">View in room</Link>
            <Link to="/">Share</Link>
          </div>
          <p>About the Art</p>
          <p className='font-mono text-xl tracking-[1px]'>{inventionItem.description}</p>
        </div>
        <div className='w-full flex flex-col gap-8 text-center'>
          <p className='font-light text-black text-xl'>{inventionItem.name}</p>
          <p className='text-2xl text-gray-500 '>By {inventionItem.inventor}</p>
          <p className='text-xl text-gray font-mono'>Size: {inventionItem.size}</p>
          <p className='text-xl text-gray font-mono'>Price: {inventionItem.price}</p>
          <Link to="/" className='text-white bg-black rounded p-4 text-xl mr-5 ml-5 hover:bg-[#535353]'>Buy Now</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Card
