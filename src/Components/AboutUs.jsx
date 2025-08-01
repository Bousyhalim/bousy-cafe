// src/components/AboutUs.jsx
import React from 'react';

function AboutUs() {
  const backgroundStyle = {
    backgroundImage: 'url(https://cdn.pixabay.com/photo/2022/09/14/18/32/cafe-7454951_1280.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: 'white',
    paddingTop: '60px',
    paddingBottom: '60px',
    position: 'relative',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: 1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    maxWidth: '800px',
    margin: 'auto',
    textAlign: 'justify',
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: '20px',
    borderRadius: '15px',
  };

  const headingStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '10px 20px',
    borderRadius: '10px',
    textAlign: 'center',
    marginTop: '40px',
    marginBottom: '20px',
    fontWeight: 'bold',
  };

  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle} className="container">
        <h2 style={headingStyle}>About Bousy Café</h2>
        <p>
          Welcome to Bousy Café, where tradition meets flavor. We are dedicated to
          serving the finest coffee and pastries in Dubai. Our passion for quality and
          customer satisfaction drives everything we do.
        </p>
        <p>
          Founded in 2023, Bousy Café has quickly become a favorite spot for coffee
          lovers who seek a cozy atmosphere and exceptional taste. From classic
          espresso to delicious croissants, we carefully craft each item to ensure a
          delightful experience.
        </p>
        <p>
          Our team is composed of experienced baristas and chefs committed to delivering
          excellence. We believe in fostering community through great coffee and warm
          hospitality.
        </p>

        <h3 style={headingStyle}>Our Mission</h3>
        <p>
          To provide a welcoming space where everyone can enjoy premium coffee and fresh
          baked goods, while promoting sustainable practices and local sourcing.
        </p>

        <h3 style={headingStyle}>Our Vision</h3>
        <p>
          To be recognized as Dubai’s leading specialty café, known for quality,
          innovation, and community engagement.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
