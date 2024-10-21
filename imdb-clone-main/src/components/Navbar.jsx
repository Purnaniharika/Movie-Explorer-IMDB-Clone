import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex border-b-2 space-x-6 items-center pl-3 py-3 '>

        <img className='w-12 cursor-pointer' src={logo} alt="#" href="/" />

        <Link to="/" className='text-yellow-500 font-bold text-3xl'>Movies</Link>
        
        <Link className='text-yellow-500 font-bold text-3xl' to="/watchList">Watchlist</Link>

    </div>
  )
}

export default Navbar