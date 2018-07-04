import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="green darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">
              Boulangerie Maxou
            </a>
            <a
              data-target="main-menu"
              className="sidenav-trigger show-on-large"
            >
              <i className="fa fa-bars" />
            </a>
            <ul className="right hide-on-small-only">
              <li>
                <Link to="/">
                  <i className="fa fa-users" /> Products
                </Link>
              </li>
            </ul>
            <ul className="sidenav" id="main-menu">
              <li>
                <Link to="/">
                  <i className="fa fa-users" /> Products
                </Link>
              </li>
              <li>
                <Link to="/product/add">
                  <i className="fa fa-plus" /> Add Product
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <i className="fa fa-question-circle" /> About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
