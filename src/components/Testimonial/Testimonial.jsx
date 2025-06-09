import React, { useEffect, useRef } from 'react';
import "./testimonial.css";
import { Line, Star, pp1, pp2, pp3 } from '../../assets';

const Testimonial = () => {
  const testimonialRef = useRef(null);
  const testSecRefs = useRef([]);
  const titleRef = useRef(null);
  const lineRef = useRef(null);

  const addToRefs = (el) => {
    if (el && !testSecRefs.current.includes(el)) {
      testSecRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            
            // Animate title
            if (titleRef.current) {
              titleRef.current.classList.add('show-element');
            }
            
            // Animate line
            if (lineRef.current) {
              setTimeout(() => {
                lineRef.current.classList.add('show-element');
              }, 300);
            }
            
            // Animate cards
            testSecRefs.current.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('show-card');
              }, 500 + (index * 150));
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="testimonial" ref={testimonialRef}>
        <div className="title" ref={titleRef}>
          <h2>Real Stories, Real Adventure</h2>
        </div>
        <div className="line" ref={lineRef}>
          <img src={Line} alt="Line divider" />
        </div>
        <div className="test-container">
          <div className="test-sec" ref={addToRefs}>
            <div className="img">
              <img src={Star} alt="Star rating"></img>
              <img src={Star} alt="Star rating"></img>
              <img src={Star} alt="Star rating"></img>
              <img src={Star} alt="Star rating"></img>
              <img src={Star} alt="Star rating"></img>
            </div>
            <div className="test">
              <p style={{fontWeight: 400}}>“Curug Leuwi Hejo is breathtaking! The water is so clear and refreshing.”</p>
            </div>
            <div className="profile">
              <img src={pp1} alt="John Thor profile"></img>
              <p>John Thor</p>
            </div>
          </div>
          <div className="test-sec" ref={addToRefs}>
            <div className="img">
              <img src={Star} alt="Star rating"></img>
              <img src={Star} alt="Star rating"></img>
              <img src={Star} alt="Star rating"></img>
              <img src={Star} alt="Star rating"></img>
              <img src={Star} alt="Star rating"></img>
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
          <div className="test-sec" ref={addToRefs}>
            <div className="img">
              <img src={Star} alt="Star rating"></img>
              <img src={Star} alt="Star rating"></img>
              <img src={Star} alt="Star rating"></img>
              <img src={Star} alt="Star rating"></img>
              <img src={Star} alt="Star rating"></img>
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

