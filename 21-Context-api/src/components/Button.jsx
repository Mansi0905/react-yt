import React from 'react'
import { useContext } from 'react';
import { ThemeDataContext } from '../context/ThemeContext';

const Button = () => {

   const [theme,setTheme]= useContext(ThemeDataContext)

const chnagetheme=()=>{
    
    setTheme('dark')
    

}

  return (
    <div>
        <button onClick={chnagetheme}>Change Theme  {theme}</button>
    </div>
  )
}

export default Button