import React from 'react'
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-content">
        <h3 className='logo'>LEUWIHEJO.COM</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/facility">Facility</Link></li>
          <li><Link to="/testimonial">Testimonials</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;