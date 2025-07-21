// pages/Team.jsx
import React from 'react';

const teamMembers = [
  { name: 'Sara', role: 'Head Barista', img: 'https://cdn.pixabay.com/photo/2016/11/29/06/15/barista-1869659_1280.jpg', bio: 'Expert in brewing the finest coffee.' },
  { name: 'Omar', role: 'Manager', img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/businessman-973401_1280.jpg', bio: 'Ensuring everything runs smoothly.' },
  { name: 'Lina', role: 'Pastry Chef', img: 'https://cdn.pixabay.com/photo/2017/02/05/19/08/cooking-2049677_1280.jpg', bio: 'Crafting delicious pastries daily.' },
];

function Team() {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Meet Our Team</h2>
      <div className="row">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <img src={member.img} alt={member.name} className="card-img-top" />
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

export default Team;
