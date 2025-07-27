// pages/Team.jsx
import React from 'react';
import TeamData from './Data/TeamData.json';

function TeamSection() {
  const pageStyle = {
    backgroundImage: 'url("https://cdn.pixabay.com/photo/2020/05/16/10/36/coffee-5176961_1280.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    paddingTop: '60px',
    paddingBottom: '60px',
    color: 'white',
    position: 'relative',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
  };

  const imageStyle = {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    borderTopLeftRadius: '0.25rem',
    borderTopRightRadius: '0.25rem',
  };

  const nameStyle = {
    fontWeight: 'bold',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '6px 10px',
    borderRadius: '8px',
    display: 'block',
    fontSize: '1.3rem',
    marginBottom: '10px',
    textAlign: 'left',
  };

  const bioStyle = {
    textAlign: 'justify',
    marginTop: '10px',
  };

  return (
    <div style={pageStyle}>
      <div style={overlayStyle}></div>
      <div className="container py-5" style={contentStyle}>
        <h2 className="mb-4 text-center">Meet Our Team</h2>
        <div className="row">
          {TeamData.map((member) => (
            <div key={member.id} className="col-md-4 mb-4">
              <div className="card shadow-sm h-100">
                <img
                  src={member.imgFilePath}
                  alt={member.name}
                  className="card-img-top"
                  style={imageStyle}
                />
                <div className="card-body">
                  <h5 className="card-title" style={nameStyle}>
                    {member.name}
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">{member.role}</h6>
                  <p className="card-text" style={bioStyle}>
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
