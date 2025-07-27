// pages/Team.jsx
import React from 'react';
import TeamData from './Data/TeamData.json';

function TeamSection() {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Meet Our Team</h2>
      <div className="row">
        {TeamData.map((member) => (
          <div key={member.id} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <img src={member.imgFilePath} alt={member.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{member.role}</h6>
                <p className="card-text">{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamSection;
