
import React, { useState } from 'react';

const gig = {
  title: 'Professional Logo Design',
  price: 35,
  delivery: '2 Days',
  revisions: 'Unlimited',
};

const OrderNow = () => {
  const [ordered, setOrdered] = useState(false);

  const handleOrder = () => {
    setOrdered(true);
    // Here you would send order data to backend
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded shadow p-6 mt-8">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="mb-2 flex justify-between">
        <span className="font-semibold">Gig:</span>
        <span>{gig.title}</span>
      </div>
      <div className="mb-2 flex justify-between">
        <span className="font-semibold">Price:</span>
        <span className="text-green-600 font-bold">Ksh {gig.price}</span>
      </div>
      <div className="mb-2 flex justify-between">
        <span className="font-semibold">Delivery:</span>
        <span>{gig.delivery}</span>
      </div>
      <div className="mb-4 flex justify-between">
        <span className="font-semibold">Revisions:</span>
        <span>{gig.revisions}</span>
      </div>
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full"
        onClick={handleOrder}
        disabled={ordered}
      >
        {ordered ? 'Order Placed!' : 'Order Now'}
      </button>
      {ordered && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded text-center">
          Your order has been placed successfully!
        </div>
      )}
    </div>
  );
};

export default OrderNow;