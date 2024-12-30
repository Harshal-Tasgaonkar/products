import React from 'react'
import Navbar from './Navbar'

const ContactUs = () => {
  return (
    
  <>
  
  <Navbar/>

  <div className="container my-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <div className="row">
        {/* Contact Form */}
        <div className="col-md-6">
          <h2>Get in Touch</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="Enter the subject"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        {/* Google Maps Embed */}
        <div className="col-md-6">
          <h2>Our Location</h2>
          <div className="map-container mt-4">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345095043!2d-122.4212424846817!3d37.77492927975927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f0c6f0e3%3A0x5e547b2c1f2afec8!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1696034456748!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  
  </>

  )
}

export default ContactUs