import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>

  
      <Footer/>
    </div>
  )
}

export default App 