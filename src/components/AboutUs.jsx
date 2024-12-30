import React from 'react'
import Navbar from './Navbar'
import team1 from '../assets/images/team1.jpg'
import team2 from '../assets/images/team2.jpg'
import team3 from '../assets/images/team3.jpg'


const AboutUs = () => {

    const teamMembers = [
        {
          name: "Alice Johnson",
          role: "CEO & Founder",
          image: team1,
          description: "Visionary leader with 10+ years in the industry.",
        },
        {
          name: "Bob Smith",
          role: "CTO",
          image: team2,
          description: "Tech enthusiast leading the innovation at our company.",
        },
        {
          name: "Carla Martinez",
          role: "Head of Marketing",
          image: team3,
          description: "Creative mind behind our branding and outreach.",
        },
      ];

  return (
    
  <>
  
  <Navbar/>

  <div className="container my-5">
      {/* Company Description */}
      <section className="mb-5 text-center">
        <h1>About Us</h1>
        <p className="lead mt-3">
          Welcome to <strong>Fictional Co.</strong>, where we strive to deliver
          excellence in every product and service we offer. With a dedicated
          team of professionals, we aim to redefine the industry and create a
          lasting impact.
        </p>
      </section>

      {/* Meet the Team Section */}
      <section>
        <h2 className="text-center mb-4">Meet the Team</h2>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-md-4 text-center mb-4" key={index}>
              <img
                src={member.image}
                alt={member.name}
                className="rounded-circle mb-3"
                style={{ width: "150px", height: "150px" }}
              />
              <h5>{member.name}</h5>
              <p className="text-muted">{member.role}</p>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>

  </>

  )
}

export default AboutUs