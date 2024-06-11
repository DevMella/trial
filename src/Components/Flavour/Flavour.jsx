import React from 'react'
import './Flavour.css'
import man from '../../assets/man.webp'

const Flavour = () => {
  return (
    <div className='flavour'>
      <div className="row">
        <div className="col col-lg-6 col-12">
          <img src={man} alt="" />
        </div>
        <div className="col col-lg-6 col-12 fat">
            <h3>FLAVOUR Forward</h3>
            <h6 className='mt-4'>Founded by renowned foodie and MasterChef finalist Billy Wright, we set out on a journey to create a liquid that has all the botanical taste of a premium London Dry Gin but doesn’t rely on alcohol to carry the flavour. Our 10% G1N allows for lighter drinking yet retains complex, delicious flavours.</h6>
            <div className="btn">SHOP NOW</div>
        </div>
      </div>
    </div>
  )
}

export default Flavour
