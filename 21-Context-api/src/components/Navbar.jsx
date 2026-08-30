import React from 'react'
import Navbar2 from './Navbar2'

const Navbar = (props) => {
    console.log(props.children);
    
  return (
    <div className='nav'>
        <h2>Rajasthali</h2>
        <Navbar2 theme={props.theme}/>
    </div>
  )
}

export default Navbar