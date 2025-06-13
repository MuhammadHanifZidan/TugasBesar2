import React, { useEffect, useRef } from 'react';
import "./testimonial.css";
import { Line, Star, pp1, pp2, pp3 } from '../../assets';

const Testimonial = () => {

  return (
    <div className="wrapper">
      <div className="testimonial">
        <div className="title">
          <h2>Real Stories, Real Adventure</h2>
        </div>
        <div className="line">
          <Line/>
        </div>
        <div className="test-container">
          <div className="test-sec">
            <div className="img">
              {[...Array(5)].map((_, i) => (
              <Star key={i} filled={5}/>
              ))}
            </div>
            <div className="test">
              <p style={{fontWeight: 400}}>“Curug Leuwi Hejo is breathtaking! The water is so clear and refreshing.”</p>
            </div>
            <div className="profile">
              <img src={pp1} alt="John Thor profile"></img>
              <p>John Thor</p>
            </div>
          </div>
          <div className="test-sec">
            <div className="img">
              {[...Array(5)].map((_, i) => (
              <Star key={i} filled={5}/>
              ))}
            </div>
            <div className="test">
              <p style={{fontWeight: 400}}>"Hidden Paradise! The turquoise water and lush greenery took my breath away. 
                The hike to the waterfall was moderate but worth every step. Pro tip: Come early to avoid crowds!"
              </p>
            </div>
            <div className="profile">
              <img src={pp2} alt="Sarah Miller profile"></img>
              <p>Sarah Miller</p>
            </div>
          </div>
          <div className="test-sec">
            <div className="img">
              {[...Array(5)].map((_, i) => (
              <Star key={i} filled={5}/>
              ))}
            </div>
            <div className="test">
              <p style={{fontWeight: 400}}>"Perfect for kids! Our 7-year-old loved the shallow pools. The path is well-maintained, 
                but bring snacks—limited food stalls nearby. Will definitely return!"
              </p>
            </div>
            <div className="profile">
              <img src={pp3} alt="Agus Wijaya profile"></img>
              <p>Agus Wijaya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;

