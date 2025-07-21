// pages/Subscribe.jsx
import React, { useState } from 'react';

function Subscribe() {
  const [email, setEmail] = useState('');
  const [thankYou, setThankYou] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if(email.trim()) {
      setThankYou(true);
      setEmail('');
    }
  };

  return (
    <div className="container py-5" style={{ maxWidth: '600px' }}>
      <h2>Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button className="btn btn-success" type="submit">Subscribe</button>
      </form>
      {thankYou && <div className="alert alert-success mt-3">Thank you for subscribing! 🌟</div>}
    </div>
  );
}

export default Subscribe;
