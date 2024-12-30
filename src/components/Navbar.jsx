import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    
  <>
  {/* Navigation Bar */}
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            My Website
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav ms-auto">
    <li className="nav-item">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        <i className="fas fa-home me-2"></i> Home
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        <i className="fas fa-box-open me-2"></i> Products
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        <i className="fas fa-info-circle me-2"></i> About Us
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        <i className="fas fa-envelope me-2"></i> Contact Us
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        <i className="fas fa-shopping-cart me-2"></i> Cart
      </NavLink>
    </li>
  </ul>
</div>

        </div>
      </nav>

  </>

  )
}

export default Navbar