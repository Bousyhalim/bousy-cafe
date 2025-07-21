// pages/Home.jsx
import React from 'react';

function Home() {
  return (
    <div className="container text-center py-5">
      <h1>Welcome to Bousy Café ☕</h1>
            <button className="btn btn-success">Test Bootstrap</button>
      <p className="lead mb-4">Where tradition meets flavor</p>
      <img
        src="https://cdn.pixabay.com/photo/2016/11/29/03/53/coffee-1869493_1280.jpg"
        alt="Cafe ambiance"
        className="img-fluid rounded shadow-sm"
        style={{ maxHeight: '400px' }}
      />
    </div>
  );
}

export default Home;
