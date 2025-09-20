
import React from 'react'
import { Link } from 'react-router-dom'

const Artacc = () => {
  return (
    <div>
      <div className='bg-amber-200 m-2 rounded shadow p-1 text-center'>
        <p>
          Art is one of the Most Influencial things in the society, posting your art work in terms of pictures puts you at the top of the game. We recommend putting your work for people to see. Just put your recommended price for your Arts Tell Your clents where they can find you so that you can interract with them.
        </p>
        <p>Click below to create your account and start showcasing your talent to people.⚒️</p>
        <Link to="/artspost" className='text-red-600 underline font-[500]'>Start posting your work</Link>
      </div>
    </div>
  )
}

export default Artacc
