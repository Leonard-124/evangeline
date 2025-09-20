
// import React from 'react'
// import gigs from "../../assets/gigs.js"
// import { Link } from 'react-router-dom'
// import star from '../../assets/images/star.png'

// const Gigs = () => {
//   return (
//     <div className='mt-20'>
//       <h1 className='text-2xl font-stretch-50% mb-4 text-center'>Get the best piece of Art for your use.</h1>
//       <div className='flex flex-wrap justify-start'>
//         {gigs.map(gig => (
//             <div key={gig.id} className=' p-4 m-2 w-1/5 h-1/5 border-gray-700 rounded-lg shadow hover:shadow-lg transition-all duration-200 overflow-hidden'>
//                 <Link to={`/gigcard/${gig.id}`}>
//                     <img src={gig.image} alt={gig.title} className='w-full h-40 object-cover' />
//                     <h3 className='text-lg font-mono tracking-[-1px] '>{gig.title}</h3>
//                     <div className='flex'>
//                     <img src={gig.avatar} alt={gig.seller} className="w-10 h-10 rounded-full mr-2" />
//                     <p className='text-gray-700'>{gig.seller}</p>
//                     </div>
//                     <p className='font-[400]'>Rating:<img src={star} alt="star" className="inline w-3 h-3 mb-2 m-1" />{gig.rating}</p>
//                     <p className='font-[500]'>From:${gig.price}</p>
//                 </Link>
//             </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Gigs


import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import star from '../../assets/images/star.png'

const Gigs = () => {
  const [gigs, setGigs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchGigs = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/artposts')
        if (!res.ok) throw new Error('Failed to fetch gigs')
        const data = await res.json()
        setGigs(data)
      } catch (err) {
        setError('Could not load gigs.')
      } finally {
        setLoading(false)
      }
    }
    fetchGigs()
  }, [])

  if (loading) return <div className="mt-20 text-center">Loading...</div>
  if (error) return <div className="mt-20 text-center text-red-500">{error}</div>

  return (
    <div className='mt-20'>
      <h1 className='text-2xl font-stretch-50% mb-4 text-center'>Get the best piece of Art for your use.</h1>
      <div className='flex flex-wrap justify-start'>
        {gigs.map(gig => (
          <div key={gig._id} className='p-4 m-2 w-1/5 h-1/5 border-gray-700 rounded-lg shadow hover:shadow-lg transition-all duration-200 overflow-hidden'>
            <Link to={`/gigcard/${gig._id}`}>
              <img src={gig.imageUrl} alt={gig.artName} className='w-full h-40 object-cover' />
              <h3 className='text-lg font-mono tracking-[-1px]'>{gig.artName}</h3>
              <div className='flex'>
                {/* If you have seller avatar, use gig.avatar; else, show placeholder */}
                <img src={gig.avatar || 'https://ui-avatars.com/api/?name=' + gig.seller} alt={gig.seller} className="w-10 h-10 rounded-full mr-2" />
                <p className='text-gray-700'>{gig.seller}</p>
              </div>
              <p className='font-[400]'>Rating:<img src={star} alt="star" className="inline w-3 h-3 mb-2 m-1" />{gig.rating || 'N/A'}</p>
              <p className='font-[500]'>From: Ksh {gig.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gigs
