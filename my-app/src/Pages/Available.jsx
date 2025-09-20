

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import hague from '../assets/Arts/hague.jpg'
import octoptimist from '../assets/Arts/octoptimist.jpg'
import nicigoten from '../assets/Arts/nicigoten.jpg'
import oman from '../assets/Arts/oman.jpg'
import robot from '../assets/Arts/robot.jpg'
// import sonny from '../assets/Arts/sonny.jpg'
// import suzyalwhood from '../assets/Arts/suzyalwhood.jpg'

const image = [
  { id: 1, src: hague, Artist: "John Jacob", title: "The Beauty of Nature", price: "$500", Link: "/Shop" },
  { id: 2, src: octoptimist, Artist: "Jane Doe", title: "The Optimistic Octopus", price: "$600", Link: "/Shop" },
  { id: 3, src: nicigoten, Artist: "Alice Smith", title: "The Serene Landscape", price: "$700", Link: "/Shop" },
  { id: 4, src: oman, Artist: "Bob Johnson", title: "The Majestic Mountains", price: "$800", Link: "/Shop" },
  { id: 5, src: robot, Artist: "Charlie Brown", title: "The Futuristic Robot", price: "$900", Link: "/Shop" },
]

const Available = () => {
  useEffect(() => {
    const images = document.querySelectorAll('.hover-image')

    images.forEach(img => {
      img.addEventListener('mousemove', (e) => {
        const rect = img.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        img.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`
      })

      img.addEventListener('mouseleave', () => {
        img.style.transform = 'translate(0, 0)'
      })
    })

    return () => {
      images.forEach(img => {
        img.removeEventListener('mousemove', () => {})
        img.removeEventListener('mouseleave', () => {})
      })
    }
  }, [])

  return (
    <div>
      <h1 className='text-center font-bold text-2xl'>Available For You</h1>
      <div className='flex flex-wrap gap-2 justify-center mt-5 mb-10 '>
        {image.map(item => (
          <div key={item.id} className='rounded hover:scale-105 transition-transform duration-300 ease-out will-change-transform h-[300px] w-64 m-2 bg-[#f8f7f7]'>
            <img
              src={item.src}
              alt={item.title}
              className='hover-image w-full h-[220px] object-cover transition-transform duration-300 ease-out will-change-transform'
            />
            <h2 className='font-bold'>{item.title}</h2>
            <p className='text-gray-600'>{item.Artist}</p>
            <p className='text-lg tracking-[0.5px]'>From: {item.price}</p>
            <Link to={item.Link} className='text-blue-500 hover:underline'>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Available
