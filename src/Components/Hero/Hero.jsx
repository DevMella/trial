import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.webp'

const Hero = () => {
  return (
    <div className='hero'>
       <div className="row">
        <div className="col col-lg-6 col-12 ohh">
            <h2>10% G1N for Drinking, not Drunking.</h2>
            <h6 className='mt-4 mb-4'>A pioneering new liquid, innovatively distilled with fragrant botanicals for a full flavoured 10% G1N.</h6>
            <div className="btn omo">SHOP NOW</div>
        </div>
        <div className="col col-lg-6 col-12 amm mt-4">
          <img src={hero} alt="" />

        </div>
       </div>
    </div>
  )
}

export default Hero
