import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import bottle from '../../assets/bottle.svg'
import Hero from '../Hero/Hero'
import Wine from '../Wine/Wine'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect (()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 70 ? setSticky(true) : setSticky(false);
    })
  },[])
  return (
    <BrowserRouter>
      <div className='navbars'>
      <nav className={` ${sticky? 'dark' : ''}`}>
      <h5>SHOP</h5>
        <NavLink to={Wine}></NavLink>
        <img src={logo} className='yon' alt="" />
        <div className='ama'>
          <h5 className='see d-flex'>BASKET( <i class="fa-solid fa-bottle-water"></i> )</h5>
          </div>
        </nav>
        <div className="line"></div>
      </div>
      <main className='contain'>
        <Routes>
          <Route index element={<Hero/>}></Route>
          <Route path='shop==' element={<Wine/>}></Route>
        </Routes>
      </main>
      </BrowserRouter>
    )
  }

  export default Navbar
