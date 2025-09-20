// import React, { useContext} from 'react'
// import { CartContext } from '../../../Context/Context'



// const ProductList = () => {
//   const { cart, removeFromCart } = useContext(CartContext)
//   return (
//     <div>
//           <div className=' flex justify-evenly items-center font-[500] text-[19px] tracking-[1px] mt-20'>
//       <div>Products</div>
//       <div>Title</div>
//       <div>Price</div>
//       <div>Quantity</div>
//       <div>Total</div>
//       <div>Remove</div>
//     </div>
//     {cart.length === 0 ? (
//       <div className='text-center mt-10'>Your cart is empty</div>
//     ): (cart.map((item) => (
//       <div key={item.id} className='flex justify-evenly items-center border-b py-4'>
//         <div className='flex items-center'>
//           <img src={item.image} alt={item.name} className='w-12 h-12 object-cover mr-4' />
//           <span>{item.name}</span>
//         </div>
//         <span>{item.new_price}</span>
//         <span>{item.quantity}</span>
//         <span>{item.new_price * item.quantity}</span>
//         <button onClick={() => removeFromCart(item.id)} className='text-red-500'>Remove</button>
//       </div>
//     )))}
//     </div>
//   )
// }

// export default ProductList

import React, { useContext } from 'react';
import { CartContext } from '../../../Context/Context';

const ProductList = () => {
  const {
    cart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    getCartTotal,
    getTotalItems
  } = useContext(CartContext);

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    updateCartQuantity(itemId, newQuantity);
  };

  return (
    <div>
      <div className='flex justify-evenly items-center font-[500] text-[19px] tracking-[1px] mt-20'>
        <div>Products</div>
        <div>Title</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Total</div>
        <div>Remove</div>
      </div>
      {cart.length === 0 ? (
        <div className='text-center mt-10'>Your cart is empty</div>
      ) : (
        cart.map((item) => (
          <div key={item._id || item.id} className='flex justify-evenly items-center border-b py-4'>
            <div className='flex items-center'>
              <img
                src={item.imageUrl || item.image || 'https://via.placeholder.com/48'}
                alt={item.name}
                className='w-12 h-12 object-cover mr-4'
              />
              <span>{item.name}</span>
            </div>
            <span>Ksh {item.newPrice !== undefined ? item.newPrice : item.new_price}</span>
            <div className="flex items-center">
              <button
                onClick={() => handleQuantityChange(item._id || item.id, item.quantity - 1)}
                className="px-2 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
                aria-label="Decrease quantity"
              >-</button>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={e => handleQuantityChange(item._id || item.id, Number(e.target.value))}
                className="w-12 text-center border-t border-b"
              />
              <button
                onClick={() => handleQuantityChange(item._id || item.id, item.quantity + 1)}
                className="px-2 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
                aria-label="Increase quantity"
              >+</button>
            </div>
            <span>Ksh {(item.newPrice !== undefined ? item.newPrice : item.new_price) * item.quantity}</span>
            <button
              onClick={() => removeFromCart(item._id || item.id)}
              className='text-red-500'
            >
              Remove
            </button>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <div className="flex justify-end mt-8 gap-4 items-center">
          <span className="font-bold">Total Items: {getTotalItems()}</span>
          <span className="font-bold">Total Price: Ksh {getCartTotal()}</span>
          <button onClick={clearCart} className="bg-red-500 text-white px-4 py-2 rounded">Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default ProductList;