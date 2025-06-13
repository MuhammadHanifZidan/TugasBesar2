import React, { useState } from 'react';
import { Star } from '../../assets'; 
import './Form.css';

const Form = () => {
  const [name, setName] = useState('');
  const [testimonial, setTestimonial] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, testimonial, rating });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="testimonial-wrapper">
        <h1 className="testimonial-title">TESTIMONIALS</h1>
        <div className="thank-you-message">
          <h2>Thank you for your feedback!</h2>
          <p>We appreciate your time and valuable input.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="testimonial-wrapper">
      <h1 className="testimonial-title">TESTIMONIALS</h1>
      <div className="form-container">
        <h2>Share your experience</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="testimonial">Your Testimonial:</label>
            <textarea
              id="testimonial"
              value={testimonial}
              onChange={(e) => setTestimonial(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Rate your experience:</label>
            <div className="rating-container">
  {[1, 2, 3, 4, 5].map((star) => (
    <button
      type="button"
      key={star}
      className="star-button"
      onMouseEnter={() => setHoverRating(star)}
      onMouseLeave={() => setHoverRating(0)}
      onClick={() => setRating(star)}
    >
      <Star filled={star <= (hoverRating || rating)} />
    </button>
  ))}
</div>
          </div>
          
          <button type="submit" className="submit-button">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Form;