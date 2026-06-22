import React, { useState } from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Desktop navigation */}
      <div className="hidden md:flex justify-between gap-4 lg:gap-6 text-lg lg:text-2xl font-serif text-[#222020] bg-[#eeeeec] pt-4 pb-4">
        <div>
          <h1>
            <a href="/">UnixArt</a>
          </h1>
        </div>
        <div className="flex gap-3 mr-28">
          <Link to="/beyond_the_bead" className="hover:underline">Blogs</Link>
          <Link to="/artview" className="hover:underline">Collections</Link>
          <Link to="/artview" className="hover:underline">SignIn</Link>
          <Link to="/best_art" className="hover:underline">News</Link>
        </div>
      </div>

      {/* Mobile toggle button */}
      <button
        className="md:hidden text-2xl font-bold"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile menu with overlay */}
      {open && (
        <>
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setOpen(false)}
          ></div>

          {/* Sidebar menu */}
          <div className="flex flex-col gap-10 sm:w-52 bg-[#adadad] sm:h-full fixed top-0 bottom-0 p-20 z-50">
            <div className="flex flex-col gap-4">
              <Link to="/blogs" className="hover:underline" onClick={() => setOpen(false)}>Blogs</Link>
              <Link to="/cart" className="hover:underline" onClick={() => setOpen(false)}>Cart</Link>
              <Link to="/SignIn" className="hover:underline" onClick={() => setOpen(false)}>SignIn</Link>
              <Link to="/news" className="hover:underline" onClick={() => setOpen(false)}>News</Link>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Header


