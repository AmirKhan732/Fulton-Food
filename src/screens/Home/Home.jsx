import React from "react";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import SpecialList from "../../components/SpecialList";

const Home = () => {
  return (
    <div className="container ">
      <div
        className="d-flex flex-row justify-content-center align-items-center pt-5"
        style={{ height: "80vh" }}
      >
        {/* Left: Text Section */}
        <div className="w-50 px-5">
          <h5 className="text-white fw-light">Chase The New Flavour</h5>
          <h1
            className="text-white slug-desc my-4"
            style={{ fontSize: "60px", lineHeight: "70px" }}
          >
            <span style={{ color: "#FF9F0D", fontSize: "100px" }}>Th</span>e key
            to fine dining
          </h1>
          <p className="text-white ">
            The scss/ and js/ are the source code for our CSS and JavaScript.
            The dist/ folder includes everything listed in the precompiled
            download section above. The site/docs/ folder includes the source
            code for our documentation, and examples/ of Bootstrap usage. Beyond
            that, any other included file provides support for packages, license
            information, and development.
          </p>
          <button className="btn btn-warning text-white my-2">Menu</button>
        </div>
        <div className="w-50 text-center">
          <img
            src={image1}
            alt="chef"
            className="img-fluid"
            style={{ maxWidth: "85%", height: "auto" }}
          />
        </div>
      </div>
      <div
        className="d-flex flex-row justify-content-center align-items-center pt-5 my-5"
        style={{ height: "80vh" }}
      >
        <div className="w-50 text-center">
          <img
            src={image2}
            alt="chef"
            className="img-fluid"
            style={{ maxWidth: "85%", height: "auto" }}
          />
        </div>
        <div className="w-50 px-5 py-2">
          <h5 className="fw-light" style={{ color: "#FF9F0D" }}>
            About Us
          </h5>
          <h1
            className="text-white slug-desc my-4"
            style={{ fontSize: "60px", lineHeight: "70px" }}
          >
            <span style={{ color: "#FF9F0D" }}>We</span> create the best foody
            product
          </h1>
          <p className="text-white fw-3">
            The scss/ and js/ are the source code for our CSS and JavaScript.
            The dist/ folder includes everything listed in the precompiled
            download section above. The site/docs/ folder includes the source
            code for our documentation.
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
      <div className="text-center my-5">
        <span className="slug-desc fs-3 " style={{ color: "#FF9F0D" }}>
          Food Category
        </span>
        <h1
          className="text-white slug-desc my-4 "
          style={{ fontSize: "60px", lineHeight: "70px" }}
        >
          <span style={{ color: "#FF9F0D", fontSize: "50px" }}>Ch</span>oose our
          special items
        </h1>
      </div>

      {/* SpecialList Component can be placed here */}
      <div>
        <SpecialList />
      </div>
    </div>
  );
};

export default Home;
