import artdata from "../assets/Arts/artdata"
import React from 'react'
import Navbar from "../Pages/Navbar"
import { Link } from "react-router-dom"

const Buy = () => {
  return (
    <>
    <Navbar/>
      <div className="mt-24">
        <div className="grid grid-cols-3 gap-4 p-5">
            {artdata.map((item, index) => (
                <Link key={index} to={`/art/${item.id}`} className="border p-3 rounded hover:shadow-lg transition-shadow duration-300">
                <img src={item.src} alt="" className="w-full h-48 object-cover mb-2" />
                <p className="">{item.name}</p>
                <p className="text-gray-500">{item.author}</p>
                <p>From{item.price}</p>
            </Link>
        ))}
        </div>
      </div>
    </>
  )
}

export default Buy
