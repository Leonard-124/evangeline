

import React from 'react';
import bike from '../../assets/images/bike.jpg'
import ferari from '../../assets/images/ferari.jpg'

const gig = {
  title: 'Professional Logo Design',
  seller: 'Jane Doe',
  sellerAvatar: ferari,
  rating: 4.9,
  reviews: 120,
  price: 35,
  image: bike,
  description: 'I will design a professional, unique logo for your business or brand. Unlimited revisions and fast delivery!',
};

const GigView = () => (
  <div className="max-w-3xl mx-auto bg-white rounded shadow p-6 mt-8">
    <div className="flex flex-col md:flex-row gap-6">
      <img src={gig.image} alt={gig.title} className="w-full md:w-2/3 h-64 object-cover rounded" />
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-2">{gig.title}</h1>
        <div className="flex items-center mb-2">
          <img src={gig.sellerAvatar} alt={gig.seller} className="w-10 h-10 rounded-full mr-2" />
          <span className="font-semibold">{gig.seller}</span>
          <span className="ml-4 text-yellow-500">★ {gig.rating}</span>
          <span className="ml-2 text-gray-500">({gig.reviews} reviews)</span>
        </div>
        <p className="text-gray-700 mb-4">{gig.description}</p>
        <div className="flex items-center justify-between mt-6">
          <span className="text-green-600 text-xl font-bold">Ksh {gig.price}</span>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Order Now</button>
        </div>
      </div>
    </div>
  </div>
);

export default GigView;