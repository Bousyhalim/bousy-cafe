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

  const pageStyle = {
    backgroundImage: 'url("https://cdn.pixabay.com/photo/2019/12/02/18/44/coffee-4668463_1280.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    paddingTop: '40px',
    paddingBottom: '40px',
    color: '#333',
  };

  const containerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '12px',
    padding: '20px',
  };

  const addButtonStyle = {
    backgroundColor: '#28a745', 
    borderColor: '#28a745',
    color: 'white',
    marginTop: 'auto',
  };

  return (
    <div style={pageStyle}>
      <div className="container py-4" style={containerStyle}>
        <h2 className="mb-4 text-center">Our Delicious Menu</h2>
        <div className="row">
          {MenuData.map(item => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={item.img}
                  className="card-img-top menu-img"
                  alt={item.name}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">${item.price}</p>
                  <button
                    className="btn mt-auto"
                    style={addButtonStyle}
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
    </div>
  );
}

export default Menu;
