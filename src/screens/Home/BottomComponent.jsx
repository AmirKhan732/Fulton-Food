import React from "react";
import image2 from "../../assets/review.png";

export default function BottomComponent() {
  return (
    <div
      className="container d-flex flex-row justify-content-center align-items-center  my-5"
      style={{ height: "80vh" }}
    >
      <div className="w-50 text-center">
        <img
          src={image2}
          alt="chef"
          className="img-fluid"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      <div className="w-50 px-5 py-2">
        <h3 className="fw-light signature theme-color" >
          Testimonials
        </h3>
        <h1
          className="text-white slug-desc my-4"
          style={{ fontSize: "60px", lineHeight: "70px" }}
        >
          <span style={{ color: "#FF9F0D" }}>We</span> create the best foody
          product
        </h1>
        <p className="text-white fw-3">
          The scss/ and js/ are the source code for our CSS and JavaScript. The
          dist/ folder includes everything listed in the precompiled download
          section above. The site/docs/ folder includes the source code for our
          documentation.
        </p>

        <ul className="text-white list-unstyled mt-3">
          <li className="d-flex align-items-start mb-2">
            <i className="bi bi-check-circle text-warning me-2"></i>
            Fresh and quality ingredients
          </li>
          <li className="d-flex align-items-start mb-2">
            <i className="bi bi-check-circle text-warning me-2"></i>
            Expert chefs with years of experience
          </li>
          <li className="d-flex align-items-start">
            <i className="bi bi-check-circle text-warning me-2"></i>
            Hygienic and tasty food
          </li>
        </ul>

        <button className="btn btn-warning text-white my-2">Read More</button>
      </div>
    </div>
  );
}
