import React, { useRef } from 'react'
import './Testimonials.css'
import front from '../../assets/front.png'
import white from '../../assets/white.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;
 
    const slideForward = ()=>{
        if(tx > -60){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = ()=>{
        if(tx < - 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }


  return (
    <div className='testimonials'>
       <img src={white} className='next' alt=""  onClick={slideForward}/>
       <img src={front} className='back' alt="" onClick={slideBackward}/>
       <div className="slider">
            <h3 className='text-center'>REVIEWS</h3>
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <h3>“Great low ABV% product, my weeknight saviour!”</h3>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <h3>“The best Gin I've had yet, not even a hangover.”</h3>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <h3>“On blind taste test, better than full strength.”</h3>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <h3>“Great Gin, fast delivery, complex refreshing taste.”</h3>
                    </div>
                </li>
            </ul>
            <div className='boxs'>
                <div className="box"><i class="fa-solid fa-star"></i></div>
                <div className="box"><i class="fa-solid fa-star"></i></div>
                <div className="box"><i className="fa-solid fa-star"></i></div>
                <div className="box"><i className="fa-solid fa-star"></i></div>
                <div className="box"><i className="fa-solid fa-star"></i></div>
            </div>
       </div>
    </div>
  )
}

export default Testimonials
