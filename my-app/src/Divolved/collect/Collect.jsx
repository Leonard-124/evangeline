
import React from 'react'
import Navbar from '../../Pages/Navbar'
import artdata from '../../assets/Arts/artdata'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Collect = () => {
    const { id } = useParams()
    const data = artdata.find(d => d.id === Number(id))
    if(!data) {
        return <h1>Collectible Not Found</h1>
    }
    const numericPrice = Number(data.price.replace("$", ""));

    const fee =  0.05 * numericPrice
    const total = fee + numericPrice
  return (
    <>
    <Navbar/>
    <div className='mt-24'>
        <div>
            <p className='text-center text-xl font-bold tracking-tight'>Order details</p>
            <div className='mt-5'>
                <hr />
                <div className='flex justify-between mb-5 pb-5 m-1'>
                    <div>
                        <p>Price</p>
                        <p className='text-xl text-gray-600 font-mono'>{data.price}</p>
                    </div>
                    <div>
                        <p>Size</p>
                        <p>{data.size}</p>
                    </div>
                    <div className='w-[200px] h-[200px]'>
                        <p>Item</p>
                        <img src={data.src} alt="" 
                        className='w-full h-full object-cover m-1'
                        />
                    </div>
                </div>
                <hr />
                <div className='flex flex-col gap-2 mb-2'>
                    <p className='text-gray-500'>Subtotal: {data.price}</p>
                    <p className='text-gray-500'>Delivery fee ${fee}</p>
                    <p className='text-gray-500'>Price to pay: ${total}</p>
                </div>
                <div>
                    <Link to={`/paystack-redirect/?`} className='bg-red-500 text-white py-2 px-4 rounded m-2 hover:bg-red-400 '>Check out</Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Collect
