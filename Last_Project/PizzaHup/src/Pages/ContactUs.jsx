import React from "react";

const ContactUs = () => {
  return (
    <div className="container mt-5 page-content">
      <h2 className="mb-4 text-center" style={{ color: "rgba(11, 6, 2, 1)" }}>
        Contact Us
      </h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter Your Name Here" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="example@mail.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Your Message</label>
          <textarea className="form-control" id="message" rows="4" placeholder="Write Your Message Here"></textarea>
        </div>
        <button type="submit" className="btn btn-custom">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
