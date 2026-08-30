import React from 'react'

const Navbar = (props) => {

  function changetheme(){
    console.log('theme changed' );
    props.setTheme('dark')
    
  }
    
    
  return (
    <div>
        <button onClick={changetheme}
        >Change theme</button>
    </div>
  )
}

export default Navbar