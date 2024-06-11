import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Gin from './Components/Gin/Gin'
import Why from './Components/Why/Why'
import Testimonials from './Components/Testimonials/Testimonials'
import Enjoy from './Components/Enjoy/Enjoy'
import Footer from './Components/Footer/Footer'
import Flavour from './Components/Flavour/Flavour'
import Wine from './Components/Wine/Wine'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="contain">
        <Hero/>
        <Flavour/>
        <Gin/>
        <Why/>
        <Testimonials/>
        </div>
        <Wine/>
        <div className='contain'>
          <Enjoy/>
        </div>
      <Footer/>
    </div>
  )
}

export default App
