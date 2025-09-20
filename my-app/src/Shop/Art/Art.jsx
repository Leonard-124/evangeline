
// import React from 'react';
// import bike from '../../assets/images/bike.jpg'
// import burger from '../../assets/images/burger.jpg'
// import PostGig from './PostGig';
// import GigView from './GigView';
// import OrderNow from './OrderNow';

// const gigs = [
//   {
//     id: 1,
//     title: 'Logo Design',
//     seller: 'Jane Doe',
//     price: 25,
//     rating: 4.8,
//     image: bike,
//     avatar: bike
//   },
//   {
//     id: 2,
//     title: 'WordPress Website',
//     seller: 'John Smith',
//     price: 120,
//     rating: 5.0,
//     image: burger,
//     avatar: burger
//   },
//   // Add more gigs as needed
// ];

// const Art = () => (
//   <div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
//     {gigs.map(gig => (
//       <div key={gig.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-200 overflow-hidden">
//         <img src={gig.image} alt={gig.title} className="w-full h-48 object-cover" />
//         <div className="p-4">
//           <div className="flex items-center mb-2">
//             <img src={gig.avatar} alt={gig.seller} className="w-10 h-10 rounded-full mr-2" />
//             <span className="font-semibold">{gig.seller}</span>
//           </div>
//           <h3 className="text-lg font-bold mb-1">{gig.title}</h3>
//           <div className="flex items-center text-yellow-500 mb-2">
//             <span>★ {gig.rating}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-green-600 font-bold">From ${gig.price}</span>
//             <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">View</button>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
//   <PostGig />
//   <GigView />
//   <OrderNow />
//   </div>

// );

// export default Art;

//////////////////////////////

import React from 'react'
import Gigs from './GIgs.jsx'

const Art = () => {
  return (
    <div>
      <Gigs />
    </div>
  )
}



export default Art
