// pages/Contact.jsx
import React, { useState } from 'react';

function Contact() {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if(email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="container py-5" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4">Contact Us</h2>
      <p><strong>Email:</strong> contact@bousycafe.com</p>
      <p><strong>Phone:</strong> +971-50-1234567</p>
      <p><strong>Address:</strong> Deira, Dubai, UAE</p>
      <div className="mb-4">
        <iframe
          title="Cafe Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.499626850385!2d55.322142515003746!3d25.26358318385901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4340e9e7b1e9%3A0x81e1dce1cbd2fa2b!2sDeira%2C%20Dubai%2C%20UAE!5e0!3m2!1sen!2sus!4v1689710866059!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>

      <h3>Subscribe to Our Newsletter</h3>
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          className="form-control mb-2"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-success w-100">Subscribe</button>
      </form>

      {submitted && (
        <div className="alert alert-success mt-3">
          Thank you for subscribing to Bousy Café! 🌟
        </div>
      )}
    </div>
  );
}

export default Contact;
