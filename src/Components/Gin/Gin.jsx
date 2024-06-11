import React from 'react'
import './Gin.css'

const Gin = () => {
  return (
    <div className='gin'>
      <h3>Gin. Re-imagined.</h3>
      <div className="icons  align-items-center justify-content-between mt-5">
        <div className="ican">
            <i class="fa-solid fa-trophy"></i>
            <h6>LOW</h6>
            <p>Alcohol</p>
        </div>
        <div className="ican">
            <i class="fa-solid fa-bottle-water"></i>
            <p>Innovatively</p>
            <h6>DISTILLED</h6>
        </div>
        <div className="ican">
            <i class="fa-solid fa-leaf"></i>
            <h6>LOW</h6>
            <p>CALORIES</p>
        </div>
        <div className="ican">
            <i class="fa-solid fa-cubes-stacked"></i>
            <p>Sugar</p>
            <h6>FREE</h6>
        </div>
        <div className="ican">
            <i class="fa-solid fa-plant-wilt"></i>
            <h6>100%</h6>
            <p>Vegan</p>
        </div>
        <div className="ican">
            <i class="fa-solid fa-tree"></i>
            <p>Allergen</p>
            <h6>Free</h6>
        </div>
        <div className="ican">
             <i class="fa-solid fa-1"></i>
            <h6>PLANET</h6>
            <p>Concious</p>
        </div>
      </div>
    </div>
  )
}

export default Gin
