import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">🍕PiZza Hup</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-nav ms-auto d-flex flex-row gap-3">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/menu">Menu</Link>
          <Link className="nav-link" to="/order">Order Now</Link>
          <Link className="nav-link" to="/contactus">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
