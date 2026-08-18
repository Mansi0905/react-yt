import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import {Route, Routes} from 'react-router-dom'
import Notfound from './pages/Notfound'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/contact' element={<Contact/>}/>
      <Route path ='*' element={<Notfound/>}/>
      
      </Routes>
  
      <Footer/>
    </div>
  )
}

export default App 