import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Home() {
  return (
    <div className="home-hero">
      <div className="container text-center home-overlay py-5">
        <h1>Welcome to Bousy Café ☕</h1>
        <p className="lead mb-4">Where tradition meets flavor</p>
        
        <div className="d-flex justify-content-center flex-wrap gap-3">
          <Link to="/aboutUs" className="btn btn-success">
            About Us
          </Link>

          <Link to="/menu" className="btn btn-success">
            Check Our Menu
          </Link>

          <Link to="/TeamSection" className="btn btn-success">
            Meet the Team
          </Link>

          <Link to="/contact" className="btn btn-success">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
