import React from 'react'
import './Wine.css'
import wine from '../../assets/wine.webp'
import card from '../../assets/card.webp'
import wine3 from '../../assets/wine3.webp'
import card1 from '../../assets/card1.webp'
import wine2 from '../../assets/wine2.webp'
import card2 from '../../assets/card2.webp'

const Wine = () => {
  return (
    <div className='wine'>
        <div className=''>
          <img src={wine} className='one d-lg-block d-none' alt="" />
          <img src={card} className='two d-lg-block d-none' alt="" />
        </div>
        <div className='d-flex mt-5'>
          <img src={wine3} className='ones d-lg-block d-none' alt="" />
          <img src={card1} className='twos d-lg-block d-none' alt="" />
          <img src={wine2} className='tea d-lg-block d-none' alt="" />
          <img src={card2} className='last d-lg-block d-none' alt="" />
        </div>
    </div>
  )
}

export default Wine
