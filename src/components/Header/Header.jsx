import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import LogoIcon from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <div className="header d-flex flex-row justify-content-between px-5">
        <div className="d-flex flex-row align-items-center">
          <h1 className="fw-bold slug-desc text-white">Fulton</h1>
          <img
            src={LogoIcon}
            alt="menu"
            className="img-fluid mx-2"
            width="60"
            height="60"
          />
        </div>
        <div className="d-flex flex-row slug-desc py-4 px-2 gap-4 ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "btn text-warning" : "btn text-white"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive ? "btn text-warning" : "btn text-white"
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "btn text-warning" : "btn text-white"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive ? "btn text-warning" : "btn text-white"
            }
          >
            Blogs
          </NavLink>
          {/* <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "btn text-white bg-warning" : "btn bg-warning"
            }
          >
            Contact
          </NavLink> */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `custom-link ${isActive ? "active" : ""}`
            }
            style={({ isActive }) => ({
              padding: "10px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              backgroundColor:"#ff9f0d",
              color: isActive ? "black" : "white",
              fontWeight: "bold",
              transition: "0.3s",
            })}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
