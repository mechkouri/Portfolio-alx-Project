import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul className={click ? "mobile-nav" : "flexSB"}>
            <li onClick={() => setClick(false)}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => setClick(false)}>
              <Link to="/courses">All Courses</Link>
            </li>
            <li onClick={() => setClick(false)}>
              <Link to="/about">About</Link>
            </li>
            <li onClick={() => setClick(false)}>
              <Link to="/team">Team</Link>
            </li>
            <li onClick={() => setClick(false)}>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li onClick={() => setClick(false)}>
              <Link to="/journal">Journal</Link>
            </li>
            <li onClick={() => setClick(false)}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="start">
            <div className="button">GET CERTIFICATE</div>
          </div>
          <button
            className="toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setClick(!click)}
          >
            {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
