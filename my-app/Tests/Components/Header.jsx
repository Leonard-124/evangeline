
import React from 'react'
import { Link } from  "react-router-dom"
import { useState } from 'react'

const Header = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

  return (
    <>  {open ? (
        <div className='flex flex-col gap-10 sm:w-52  bg-[#e3e4e2f3] sm:h-full fixed top-0  bottom-0 p-20 '>
                <button onClick={() => setOpen(false)} className=''>X</button>
                
                <Link to="/blogs" className='hover:border'>Blogs</Link>
                <Link to="/cart" >Cart</Link>
                <Link to="SignIn">SignIn</Link>
                <Link to="/news">News</Link>
                
        </div>
    ) : (
                <div className='fixed right-0 left-0 z-50 top-0 h-20 shadow-md bg-[#eee8e5] '>
        <div className='flex justify-between items-center ml-2.5 mr-2.5 font-sans text-[#5a5858] p-1.5 gap-3 pt-2'>
            <div className='text-4xl'>
                <h1>UnixArt</h1>
            </div>
            <div className='font-serif flex text-xl justify-between gap-1.5 '>
                <Link to="/blogs">Blogs</Link>
                <Link to="/cart" >Cart</Link>
                <Link to="SignIn">SignIn</Link>
                <Link to="/news">News</Link>
                <button onClick={handleOpen}>X</button>
            </div>
        </div>
    </div>
    )}
    <button onClick={handleOpen} hidden={open}>X</button>
    </>
  )
}

export default Header;