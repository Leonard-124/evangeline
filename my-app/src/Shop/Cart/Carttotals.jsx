// import React, { useContext } from 'react';
// import { CartContext } from '../../Context/Context';
// import { Link } from 'react-router-dom';

// const Carttotals = () => {
//   const { cart, getCartTotal, getTotalItem } = useContext(CartContext);

//   // Calculate subtotal
//   const subtotal = cart.reduce((sum, item) => sum + item.new_price * item.quantity, 0);

//   // Define a fee (e.g., 2% of subtotal or a fixed value)
//   const fee = subtotal > 0 ? 0.05 * subtotal : 0; // 2% fee

//   // Calculate total
//   const total = subtotal + fee;

//   return (
//     <div className='flex justify-around'>
//       <div className='flex flex-col items-center font-[500] text-gray-500'>
//         <p className='text-[20px] font-bold text-red-500 '>Cart Totals</p>
//         <p>Subtotal: ksh {subtotal.toFixed(2)}</p>
//         <p>Fee: ksh {fee.toFixed(2)}</p>
//         <p>Total: ksh {total.toFixed(2)}</p>
//         <Link to="/checkout" className='bg-red-400 rounded p-2 text-white shadow m-2'>Check out</Link>
//       </div>
//       <div className='flex flex-col items-center font-[500] text-gray-500'>
//         <p>If you have a promo code, Enter here:</p>
//         <div className='flex border-0'>
//           <input type="text" placeholder="Promo code" className='border p-1 rounded bg-gray-100 w-60 ' />
//           <button className='bg-red-400 rounded p-2 text-white shadow m-2'>Apply</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carttotals;

import React, { useContext } from 'react';
import { CartContext } from '../../Context/Context';
import { Link } from 'react-router-dom';

const Carttotals = () => {
  const { cart, getCartTotal, getTotalItems } = useContext(CartContext);

  // Calculate subtotal using correct price field
  const subtotal = cart.reduce(
    (sum, item) => sum + ((item.newPrice !== undefined ? item.newPrice : item.new_price) * item.quantity),
    0
  );

  // Define a fee (e.g., 5% of subtotal)
  const fee = subtotal > 0 ? 0.05 * subtotal : 0;

  // Calculate total
  const total = subtotal + fee;

  return (
    <div className='flex justify-around'>
      <div className='flex flex-col items-center font-[500] text-gray-500'>
        <p className='text-[20px] font-bold text-red-500 '>Cart Totals</p>
        <p>Items: {getTotalItems()}</p>
        <p>Subtotal: ksh {subtotal.toFixed(2)}</p>
        <p>Fee: ksh {fee.toFixed(2)}</p>
        <p>Total: ksh {total.toFixed(2)}</p>
        <Link to="/checkout" className='bg-red-400 rounded p-2 text-white shadow m-2'>Check out</Link>
      </div>
      <div className='flex flex-col items-center font-[500] text-gray-500'>
        <p>If you have a promo code, Enter here:</p>
        <div className='flex border-0'>
          <input type="text" placeholder="Promo code" className='border p-1 rounded bg-gray-100 w-60 ' />
          <button className='bg-red-400 rounded p-2 text-white shadow m-2'>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default Carttotals;