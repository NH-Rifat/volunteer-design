import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="header">
      <div className="overlay has-fade"></div>
      <nav>
        <Link to="/" className="header__logo">
          <img src={logo} alt="logo" />
        </Link>
        <div id="btnHamburger" className="header__toggle hide-for-desktop">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="header__links">
          <Link to="/">Home</Link>
          <Link to="/donation">Donation</Link>
          <Link to="/events">Events</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/login">
            <button className="header__lg-btn">Register</button>
          </Link>
          <Link to="/admin">
            <button className="header__oa-btn">Admin</button>
          </Link>
        </div>
      </nav>
      <div className="header__menu has-fade">
        <Link to="/">Home</Link>
        <Link to="/donation">Donation</Link>
        <Link to="/events">Events</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/login">
          <button className="header__lg-btn">Register</button>
        </Link>
        <Link to="/admin">
          <button className="header__oa-btn">Admin</button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
