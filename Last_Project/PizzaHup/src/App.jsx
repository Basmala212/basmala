import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import ViewDetails from "./pages/ViewDetails";
import Order from "./pages/Order";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div className={isHomePage ? "" : "page-content"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/details/:id" element={<ViewDetails />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
