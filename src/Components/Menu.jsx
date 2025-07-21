// pages/Menu.jsx
import React, { useState } from 'react';

const items = [
  { id: 1, name: 'Latte', price: '$4', img: 'https://cdn.pixabay.com/photo/2022/05/02/16/14/coffee-7167392_1280.jpg' },
  { id: 2, name: 'Croissant', price: '$3', img: 'https://cdn.pixabay.com/photo/2017/09/18/07/26/croissant-2753335_1280.jpg' },
  { id: 3, name: 'Club Sandwich', price: '$6', img: 'https://cdn.pixabay.com/photo/2020/02/19/10/23/sandwich-4861592_1280.jpg' },
];

function Menu() {
  const [likes, setLikes] = useState({});

  const handleLike = (id) => {
    setLikes({ ...likes, [id]: (likes[id] || 0) + 1 });
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Our Delicious Menu</h2>
      <div className="row">
        {items.map(item => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={item.img} className="card-img-top" alt={item.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.price}</p>
                <button className="btn btn-primary mt-auto" onClick={() => handleLike(item.id)}>
                  ❤️ Like ({likes[item.id] || 0})
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
