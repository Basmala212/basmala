import React from "react";
import { useLocation } from "react-router-dom";

const Order = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedItem = params.get("item");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your order has been placed!");
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Place Your Order</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "700px" }}>
        <div className="mb-3">
          <label htmlFor="item" className="form-label">Pizza Name</label>
          <input
            type="text"
            className="form-control"
            id="item"
            value={selectedItem || ""}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="customerName" className="form-label">Your Name</label>
          <input type="text" className="form-control" id="customerName" required />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input type="text" className="form-control" id="phone" required />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Delivery Address</label>
          <textarea className="form-control" id="address" rows="3" required></textarea>
        </div>
        <button type="submit" className="btn btn-custom">Confirm Order</button>
      </form>
    </div>
  );
};

export default Order;
