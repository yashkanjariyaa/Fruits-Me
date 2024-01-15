import React from "react";
import "../styles/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="icon">
      <FontAwesomeIcon icon={faUser} size="xl" style={{color : "#1d7738"}} className="user-icon"/>
      </div>
      <ul className="unordered-list">
        <li className="list-element">
          <Link to="/home" className={location.pathname === '/home' ? 'active' : 'disable'}>
            Home
          </Link>
        </li>
        <li className="list-element">
          <Link to="/cart" className={location.pathname === '/cart' ? 'active' : 'disable'}>
            Cart
          </Link>
        </li>
        <li className="list-element">
          <Link to="/history" className={location.pathname === '/history' ? 'active' : 'disable'}>
            History
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
