import React from "react";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import SpecialListComponent from "./SpecialListComponent";
import Category from "./Category";
import home4 from "../../assets/home4.png";
import home5 from "../../assets/4.png";
import chef from "../../assets/chef.jpeg";
import { useNavigate } from "react-router-dom";
import BottomComponent from "./BottomComponent";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className=" ">
      <div
        className="container d-flex flex-row justify-content-center align-items-center pt-5"
        style={{ height: "80vh" }}
      >
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
          <button
            className="btn btn-warning text-white my-2"
            onClick={() => navigate("/menu")}
          >
            Menu
          </button>
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
        className="container d-flex flex-row justify-content-center align-items-center pt-5 my-5"
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
      <SpecialListComponent />
      <Category />

      <div className="">
        <img src={home4} alt="chef" className="img-fluid w-100 bg-danger" />
      </div>
      {/* why choose us */}
      <div
        className="container d-flex flex-row justify-content-center align-items-center  my-5 "
        style={{ height: "80vh" }}
      >
        <div className="w-50 text-center">
          <img
            src={home5}
            alt="chef"
            className="img-fluid"
            style={{ maxWidth: "85%", height: "auto" }}
          />
        </div>
        <div className="w-50 px-5 slug-desc ">
          <h5 className="  theme-color">Why Choose Us</h5>
          <h1
            className="text-white my-4"
            style={{ fontSize: "60px", lineHeight: "70px" }}
          >
            <span style={{ color: "#FF9F0D", fontSize: "100px" }}>Ex</span>tra
            Ordinary Taste and Experience
          </h1>
          <p className="text-white ">
            We take pride in serving fresh, high-quality meals crafted with the
            finest ingredients, ensuring every dish is full of flavor. With a
            passion for taste and a commitment to exceptional service, we make
            every dining experience truly special. Would you like me to make it
            a bit shorter and catchier for a banner/hero section, or keep it
            slightly detailed for a section description?
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <div className="d-flex flex-row w-50 bg-white align-items-center justify-content-between border-start border-5 border-warning rounded-4 shadow p-3">
              <span className="text-warning fw-bold h1">5 +</span>
              <span className="text-dark fw-bold h4 mb-0">
                Years Of Experience
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* chef section */}
      <div
        style={{ backgroundColor: "#040404" }}
        className="
       d-flex flex-row justify-content-center  align-items-center p-5"
      >
        <div className="w-50 px-5 ">
          <h1
            className="text-white slug-desc my-4"
            style={{ fontSize: "60px", lineHeight: "70px" }}
          >
            <span style={{ color: "#FF9F0D", fontSize: "100px" }}>Wh</span>at We
            Believe In
          </h1>
          <p className="text-white ">
            As your chef, my passion is to bring you flavors that not only
            satisfy your hunger but also create lasting memories. Every dish we
            prepare is made with love, care, and the finest ingredients, because
            you deserve nothing less than the best. Thank you for trusting us to
            be a part of your dining experience – it’s an honor to serve you.
            <br />
            Want me to make it short and friendly (like a quick welcome note),
            or longer and heartfelt (like a personal letter from the chef)?
          </p>
          <h1 className="slug-desc theme-color ">Amir Khan</h1>
          <div className="d-flex flex-column text-white">
            <p className="">Head Chef & Founder</p>
            <h1 className="signature mt-4">AmirKhan</h1>
          </div>
        </div>
        <div className="w-50 text-center">
          <img
            src={chef}
            alt="chef"
            className="img-fluid"
            style={{ maxWidth: "90%", height: "auto" }}
          />
        </div>
      </div>
      {/* bottom component */}
      <BottomComponent />
    </div>
  );
};

export default Home;
