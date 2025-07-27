// pages/Menu.jsx
import React, { useState } from 'react';
import MenuData from './Data/MenuData.json';

function Menu() {
  const [cart, setCart] = useState({});

  const handleAddToCart = (id) => {
    setCart(prevCart => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }));
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Our Delicious Menu</h2>
      <div className="row">
        {MenuData.map(item => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={item.img}  // assuming every item has an 'img' property
                className="card-img-top menu-img"
                alt={item.name}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">${item.price}</p>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => handleAddToCart(item.id)}
                >
                  🛒 Add to Cart ({cart[item.id] || 0})
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
