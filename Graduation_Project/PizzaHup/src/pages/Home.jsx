import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-hero">
      <div className="overlay">
        <div className="content">
          <p className="welcome-text">Welcome to</p>
          <h1 className="piZza Hup-title">PiZza Hup</h1>
          <p className="subtitle">
            Our 12\" wood-fired pizzas are available for delivery. Build your custom pizza and we’ll deliver it within an hour.
          </p>
          <div className="buttons">
            <Link to="/menu" className="btn btn-light">Make An Order</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
