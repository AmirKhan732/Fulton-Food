import React from "react";
import image1 from "../../assets/1.png";
import home4 from "../../assets/home4.png";
import chef from "../../assets/chef.jpeg";
import { useNavigate } from "react-router-dom";


import Category from "../../components/Category";
import ReviewComponent from "../../components/ReviewComponent";
import BlogsComponent from "../../components/BlogsComponent";
import AboutUsComponent from "../../components/AboutUsComponent";
import WhyChooseUsBlock from "../../components/WhyChooseUsBlock";
import SpecialListComponent from "../../components/SpecialListComponent";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container ">
      <div
        className="container d-flex flex-row justify-content-center align-items-center py-5"
        style={{ height: "80vh" }}
      >
        <div className="w-50  px-5">
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
            className="btn bg-theme text-white my-5"
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
      <AboutUsComponent />
      <SpecialListComponent />
      <Category />

      <div className="">
        <img src={home4} alt="chef" className="img-fluid w-100 bg-danger" />
      </div>
      <WhyChooseUsBlock />
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
      <ReviewComponent />
      <BlogsComponent />
    </div>
  );
};

export default Home;
