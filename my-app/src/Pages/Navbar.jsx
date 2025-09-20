
// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useState } from 'react'

// const Navbar = () => {
  

//   return (
//     <div className='fixed top-0 left-0 right-0 z-50 flex bg-gray-300 justify-between h-20 font-[500] text-[21px] tracking-[-1px] items-center italic  transform-3d'>
//       <div>
//         <h1 className='underline underline-offset-[3px] tracking-[-2px] text-[30px] text-red-500 ml-5'>UnIx</h1>
//         </div>
//         <div className='mr-6'>
//             <Link to="/davinci" className='m-5 hover:underline' >DavinCi</Link>
//             <Link to="/Explore" className='m-5 hover:underline' >Explore</Link>
//             <Link to="/Shop" className='m-5 hover:underline'>Shop</Link>
//             <Link to="/profile" className='m-5 hover:underline'>Account</Link>
//         </div>
//     </div>
//   )
// }

// export default Navbar
//////////////////////////////////////////////////////////////////////////

// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div className=' bg-[#f8eaea] pb-3 fixed top-0 left-0 right-0 z-50  transform-3d shadow-md'>
//       <div className='flex flex-col gap-0 mb-0'>
//         <div className='flex justify-between'>
//           <div className='flex gap-6 items-center'>
//         <h1 className='font-[var(--font-libertinus)] tracking-[1px] text-4xl underline m'>UnIx</h1>
//         <input type="text" placeholder="Search..." 
//         className='border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-gray-200 w-full'
//         />
//           </div>
//         <div className='flex gap-8 text-[18px] mt-3 font-light'>
//         <Link to="/whats-new">What's New</Link>
//         <Link to="/photography">Photography</Link>
//         <Link to="/inventions">Inventions</Link>
//         <Link to="/artistinventor"> Artists & <br />Inventors</Link>
//         <Link to="/buy">Buy</Link>
//         <Link to="/login">Login</Link>
//         <Link to="/signup">Sign Up</Link>
//         </div>
//       </div>
//       <div className='flex gap-4 text-[18px] mt-3 font-light leading-0.5'>
//         <Link to="/artworks">Artworks</Link>
//         <Link to="/editorial">Editorial</Link>
//         <Link to="/artifacts">Artifacts</Link>
//         <Link to="/galleries">Galleries</Link>
//       </div>
//       </div>

//     </div>
//   )
// }

// export default Navbar


import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  const location = useLocation();

  // Store current page before login so we can redirect back
  const handleLogin = () => {
    sessionStorage.setItem("returnTo", location.pathname);
    loginWithRedirect();
  };

  // Force signup flow and always go to /profile after signup
  const handleSignUp = () => {
    loginWithRedirect({
      screen_hint: 'signup',
      appState: { returnTo: '/profile' }
    });
  };

  return (
    <div className='bg-[#f8eaea] pb-3 fixed top-0 left-0 right-0 z-50 shadow-md'>
      <div className='flex flex-col gap-0 mb-0'>
        <div className='flex justify-between'>
          <div className='flex gap-6 items-center'>
            <h1 className='font-[var(--font-libertinus)] tracking-[1px] text-4xl underline'>UnIx</h1>
            <input
              type="text"
              placeholder="Search..."
              className='border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-gray-200 w-full'
            />
          </div>

          <div className='flex gap-8 text-[18px] mt-3 font-light'>
            <Link to="/whats-new">What's New</Link>
            <Link to="/photography">Photography</Link>
            <Link to="/inventions">Inventions</Link>
            <Link to="/artistinventor">Artists & <br />Inventors</Link>
            <Link to="/buy">Buy</Link>

            {!isAuthenticated && (
              <>
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleSignUp}>Sign Up</button>
              </>
            )}

            {isAuthenticated && (
              <>
                <Link to="/profile">{user?.name || 'Profile'}</Link>
                <button onClick={() => logout({ returnTo: window.location.origin })}>
                  Logout
                </button>
              </>
            )}
          </div>
        </div>

        <div className='flex gap-4 text-[18px] mt-3 font-light'>
          <Link to="/artworks">Artworks</Link>
          <Link to="/editorial">Editorial</Link>
          <Link to="/artifacts">Artifacts</Link>
          <Link to="/galleries">Galleries</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;