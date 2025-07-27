import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Home() {
  return (
    <div className="home-hero">
      <div className="container text-center home-overlay py-5">
        <h1>Welcome to Bousy Café ☕</h1>
        <p className="lead mb-4">Where tradition meets flavor</p>
        <Link to="/menu" className="btn btn-success">
          Check Our Menu
        </Link>

        <Link to="/TeamSection" className="btn btn-outline-light m-2">
          Meet the Team
        </Link>

        <Link to="/about" className="btn btn-outline-light m-2">
          About Us
        </Link>

        <Link to="/contact" className="btn btn-outline-light m-2">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Home;
