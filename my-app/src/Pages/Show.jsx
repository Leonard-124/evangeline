// import React from 'react'
// import bike from "../assets/images/bike.jpg"
// import bikes from "../assets/images/bikes.jpg"
// import burger from "../assets/images/burger.jpg"
// import ferari from "../assets/images/ferari.jpg"
// import whitecar from "../assets/images/whitecar.jpg"
// import redcar from "../assets/images/redcar.jpg"

//  const images = [
//         {id: 1, src:bike, name:"Shop Now", link:"/Shop" },
//         {id: 2, src:bikes, name:"Savings", link: "/Funds"},
//         {id: 3, src:burger, name:"Ask AI", link: "/Explore"},
//         {id: 4, src:ferari, name:"Friends",link: "/Friends"},
//         {id: 5, src:whitecar, name:"Crypto", link: "/Crypto"},
//         {id: 6, src:redcar, name:"Media", link: "/Explore"}
//     ]

// const Show = () => {
// return (
//   <div className='flex flex-wrap gap-3  cursor-pointer justify-center ' >
//       {images.map(image => (
//         <div className=' relative w-52 h-52 hover:w-56' key={image.id}>
//             <a href={image.link}> <img 
//             src={image.src} 
//             alt={image.name}
//             className='shadow rounded object-cover w-full h-full' />
//             <div className='absolute bottom-0 text-yellow-400 m-5 font-[800]'>{image.name}</div>
//             </a>
//         </div>
//     ))}
//   </div>
// )

// }

// export default Show
////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import hague from '../assets/Arts/hague.jpg'
import cottonbro from '../assets/Arts/cottonbro.jpg'
import bulb from '../assets/Arts/bulb.jpg'
import fotios from '../assets/Arts/fotios.jpg'
import googledeep from '../assets/Arts/googledeepmind.jpg'
import jonathan from '../assets/Arts/jonathanborba.jpg'

const images = [
  { id: 1, src: hague, text: "Best Art of 2025", link: "/card1" },
  { id: 2, src: cottonbro, text: "Top 30 best Artists in the world", link: "/card2" },
  { id: 3, src: bulb, text: "Best inventers of all time", link: "/card3" },
  { id: 4, src: fotios, text: "Why choose Art/Design?", link: "/card4" },
]
const Show = () => {
  return (
    <div>
      <div className='mt-20 bg-[#f5f5f5] h-[600px]'>
        <h1 className='text-center font-bold text-2xl'>Featured</h1>
        <div className='flex flex-wrap gap-3  cursor-pointer justify-center ' >
          {images.map(image => (
            <div key={image.id} className='m-5 p-1  rounded shadow hover:scale-105 transition-transform duration-300'>
              <img src={image.src} alt={image.text} className='w-full h-[400px] object-cover' />
              <h2 className='text-center font-mono tracking-[0.1em]'>{image.text}</h2>
              <a href={image.link} className='text-blue-500 hover:underline'>View More</a>
            </div>
          ))}
        </div>
        <br />
      </div>
      
    </div>
    

  )
}

export default Show

