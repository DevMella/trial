import React, { useState } from 'react';
import './Why.css';
import one from '../../assets/one.webp';
import two from '../../assets/two.webp';
import three from '../../assets/three.webp';
import four from '../../assets/four.webp';
import five from '../../assets/five.webp';

const Why = () => {
  const [activeIcon, setActiveIcon] = useState(1);

  const handleIconClick = (iconNumber) => {
    setActiveIcon(iconNumber);
  };

  return (
    <div className='why'>
      <div className="row">
        <div className="wit">
          <h4>WHY DECEM?</h4>
          <div className="circle d-flex gap-2 mt-3">
            <div className={`cir ${activeIcon === 1 ? 'active' : ''}`} onClick={() => handleIconClick(1)}>
              <i className="fa-solid fa-1"></i>
            </div>
            <div className={`cir ${activeIcon === 2 ? 'active' : ''}`} onClick={() => handleIconClick(2)}>
              <i className="fa-solid fa-2"></i>
            </div>
            <div className={`cir ${activeIcon === 3 ? 'active' : ''}`} onClick={() => handleIconClick(3)}>
              <i className="fa-solid fa-3"></i>
            </div>
            <div className={`cir ${activeIcon === 4 ? 'active' : ''}`} onClick={() => handleIconClick(4)}>
              <i className="fa-solid fa-4"></i>
            </div>
            <div className={`cir ${activeIcon === 5 ? 'active' : ''}`} onClick={() => handleIconClick(5)}>
              <i className="fa-solid fa-5"></i>
            </div>
          </div>
        </div>
        <div className="col col-lg-6 col-12">
        <div className="dec">
            {activeIcon === 1 && (
              <>
                <h3 className='mt-4'>MODERATION Made Interesting</h3>
                <h6 className='mt-4'> At 10% ABV a 50ml serve with a mixer (150ml) gives you a delicious drink of just 2.5% ABV. Allowing you to enjoy the tastes and experience of your favourite Gin without the negative excess.
                 </h6>
                <div className="btn">SHOP NOW</div>
              </>
            )}
            {activeIcon === 2 && (
              <> 
                <h3 className='mt-4'>LESS ALCOHOL Less Calories</h3>
                <h6 className='mt-4'>A double measure of our 10% G1N contains only 28 calories, significantly less than a full-strength equivalent with 100+ calories</h6>
                <div className="btn">SHOP NOW</div>
              </>
            )}
            {activeIcon === 3 && (
              <> 
                <h3 className='mt-4'>PERFECT for Any Ocassion</h3>
                <h6 className='mt-4'>There are thousands of reasons for not wanting to drink too much but abstaining completely can make things less enjoyable. Our 10% G1N means we’ve got drinkers covered day or night.</h6>
                <div className="btn">SHOP NOW</div>
              </>
            )}
            {activeIcon === 4 && (
              <> 
                <h3 className='mt-4'>MADE In England</h3>
                <h6 className='mt-4'>Proudly made in the heart of the Wyre Forest in Worcestershire, nestled above 6,500 acres of British woodland. Using the best, locally sourced ingredients and sustainable production processes.</h6>
                <div className="btn">SHOP NOW</div>
              </>
            )}
            {activeIcon === 5 && (
              <> 
                <h3 className='mt-4'>DISTILLED by The Best</h3>
                <h6 className='mt-4'>A pioneering new liquid, innovatively distilled with fragrant botanicals: juniper, coriander, angelica, orange and lemon peel. Creating a spirit that is bursting with clean, crisp and refreshing flavours.</h6>
                <div className="btn">SHOP NOW</div>
              </>
            )}
          </div>
        </div>
        <div className="col col-lg-6 col-12">
          <img src={
            activeIcon === 1 ? one :
            activeIcon === 2 ? two :
            activeIcon === 3 ? three :
            activeIcon === 4 ? four :
            activeIcon === 5 ? five : ''
          } alt="" />
        </div>
      </div>
    </div>
  );
};

export default Why;
