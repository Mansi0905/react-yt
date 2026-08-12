import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <div className='nav'>
        <h3>Rajasthali</h3>
        <div>
          <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/product'>Product</Link>
        </div>
      </div>
  )
}

export default Navbar