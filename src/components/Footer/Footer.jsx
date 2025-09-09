import React from "react";
import play from "../../assets/play.png";
import ios from "../../assets/ios.png";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="container-fluid p-0">
      <div
        className="row text-white mx-0"
        style={{ backgroundColor: "#171717", minHeight: "358px" }}
      >
        <div className="col-lg-1 d-none d-lg-block"></div>
        <div className="col-12 col-md-6 col-lg-3 px-4 py-4">
          <h2 className="my-3 slug-desc">About Us</h2>
          <p>
            We are passionate about serving fresh, high-quality food crafted
            with care and love for every customer. Our goal is to create a warm
            dining experience.
          </p>
          <div className="d-flex flex-row py-3">
            <i
              style={{ fontSize: "40px" }}
              className="bi bi-watch bg-theme rounded px-3 py-2"
            ></i>
            <div className="ms-3">
              <p className="mb-1">Amir</p>
              <p className="mb-1">Mon - Sun (11am - 11pm)</p>
              <p className="mb-0">Friday - Open (02am - 11pm)</p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3 col-lg-2  px-4 py-4">
          <h2 className="my-3 slug-desc mx-2">Useful Links</h2>
          <div className="d-flex flex-column gap-2">
            <button
              onClick={() => navigate("/")}
              className="btn text-white text-start"
            >
              Home
            </button>
            <button
              onClick={() => navigate("/menu")}
              className="btn text-white text-start"
            >
              Menu
            </button>
            <button
              onClick={() => navigate("/blog")}
              className="btn text-white text-start"
            >
              Blog
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="btn text-white text-start"
            >
              Contact
            </button>
          </div>
        </div>
        <div className="col-6 col-md-3 col-lg-2 px-4 py-4">
          <h2 className="my-3 slug-desc mx-2">Help?</h2>
          <div className="d-flex flex-column gap-2">
            <button
              onClick={() => navigate("/faqs")}
              className="btn text-white text-start"
            >
              FAQs
            </button>
            <button
              onClick={() => navigate("/termsandconditions")}
              className="btn text-white text-start"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => navigate("/policy")}
              className="btn text-white text-start"
            >
              Support & Policy
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 text-center px-4 py-4">
          <h2 className="my-3 slug-desc">Download App</h2>
          <div className="d-flex flex-column align-items-center">
            <img
              className="img-fluid rounded p-2"
              style={{ maxWidth: "210px", height: "auto" }}
              src={play}
              alt="Google Play"
            />
            <img
              className="img-fluid rounded p-2"
              style={{ maxWidth: "210px", height: "auto" }}
              src={ios}
              alt="App Store"
            />
          </div>
        </div>

        <div className="col-lg-1 d-none d-lg-block"></div>
      </div>
      <div className="bg-theme text-white d-flex flex-column flex-md-row justify-content-around align-items-center p-1">
        <p className="mb-2 mb-md-0 text-center">
          Copyright © 2022 by Amir Mannan. All Rights Reserved.
        </p>
        <div className="d-flex gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-dark rounded d-flex align-items-center justify-content-center"
            style={{ width: "40px", height: "40px" }}
          >
            <i className="bi bi-facebook fs-4"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-dark rounded d-flex align-items-center justify-content-center"
            style={{ width: "40px", height: "40px" }}
          >
            <i className="bi bi-instagram fs-4"></i>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-dark rounded d-flex align-items-center justify-content-center"
            style={{ width: "40px", height: "40px" }}
          >
            <i className="bi bi-youtube fs-4"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
