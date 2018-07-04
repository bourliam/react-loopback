import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Router from "./components/Router";
import Navbar from "./components/Navbar";

const App = () => (
  <div>
    <Navbar />
    <div className="container">
      <Router />
    </div>
    <div className="fixed-action-btn">
      <Link to="/product/add" className="btn-floating btn-large green">
        <i className="fa fa-plus" />
      </Link>
    </div>
  </div>
);

export default App;
