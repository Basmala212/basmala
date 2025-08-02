import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Footer = () => {
  return (
    <footer className="custom-footer text-center">
      <p className="mb-1">&copy; 2025 PiZza Hup. All rights reserved.</p>
      <Link to="/contactUs" className="text-dark text-decoration-none">
        Contact Us
      </Link>
    </footer>
  );
};

export default Footer;
