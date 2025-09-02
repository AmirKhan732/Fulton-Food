import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import LogoIcon from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <div className="header d-flex flex-row justify-content-between px-5">
        <div className="d-flex flex-row align-items-center">
          <h2 className="fw-bold text-white">Fulton</h2>
          <img
            src={LogoIcon}
            alt="menu"
            className="img-fluid mx-2"
            width="60"
            height="60"
          />
        </div>
        <div className="d-flex flex-row py-4 px-2 gap-4 ">
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
            to="/blogs"
            className={({ isActive }) =>
              isActive ? "btn text-warning" : "btn text-white"
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "btn text-white bg-warning" : "btn bg-warning"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
