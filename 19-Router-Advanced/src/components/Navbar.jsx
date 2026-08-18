import React from 'react'

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 bg-cyan-900 justify-between'>
      <h2 className='text-3xl font-bold'>Rajasthali</h2>
      <div className='flex gap-8'>
        <a className='text-xl font-bold' href="/">Home</a>
        <a className='text-xl font-bold' href="/about">About</a>
        <a  href="/contact">Contact</a>

      </div>
    </div>
  )
}

export default Navbar