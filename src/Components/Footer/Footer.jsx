import React from 'react'
import './Footer.css'
import white from '../../assets/white.png'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="contain">
         <div className="goes"> 
            <h3 className='text-center'>Join the 10% Club</h3>
            <form action="">
                <div className="input-group">
                  <input type="text" placeholder='Sign up for exclusive offers' name="" id="" />
                </div>
                <button className='bil'><img src={white} alt="" /></button>
            </form>
            <div className="rea mt-5">
              <h5>PRIVACY POLICY</h5>
              <h5>TERMS OF SERVICE</h5>
              <h5>REFUND POLICY</h5>
              <h5>©DECEM 2024</h5>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Footer
