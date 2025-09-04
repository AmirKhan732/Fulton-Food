import React from "react";
import imagelogo from "../../assets/logo.png";
import play from "../../assets/play.png";
import ios from "../../assets/ios.png";

export default function Footer() {
  return (
    <div className="container-fluid ">
      <div
        className=" mt-4 row text-white "
        style={{ height: "358px", backgroundColor: "#171717" }}
      >
        <div className="col-md-1"></div>
        <div className="col-md-3  ">
          <h2 className="my-4 slug-desc">About Us</h2>
          <p>
            We are passionate about serving fresh, high-quality food crafted
            with care and love for every customer. Our goal is to create a warm
            dining experience where taste and satisfaction come together.
          </p>
          <div className="d-flex flex-row py-3">
            <i
              style={{ fontSize: "50px", paddingTop: "5px" }}
              className="bi  bi-clock  bg-theme rounded px-4  "
            ></i>
            <div className="m-2 px-2">
              <p>Amir</p>
              <p>Mon - Sun (11am - 11pm)</p>
              <p>Friday - Open (02am - 11pm)</p>
            </div>
          </div>
        </div>
        <div className="col-md-2 text-center text-white ">
          <h2 className="my-4 slug-desc">Useful Links</h2>
          <div className="d-flex flex-column gap-2 align-items-center">
            <button className="btn text-start text-white">Home</button>
            <button className="btn text-start text-white">Menu</button>
            <button className="btn text-start text-white">Blog</button>
            <button className="btn text-start text-white">Contact</button>
          </div>
        </div>
        <div className="col-md-2 text-white text-center ">
          <h2 className="my-4 slug-desc">Help?</h2>
          <div className="d-flex align-items-center flex-column gap-2">
            <button className="btn text-start text-white">FAQs</button>
            <button className="btn text-start text-white">
              Terms & Conditions
            </button>
            <button className="btn text-start text-white">
              Support & Policy
            </button>
          </div>
        </div>
        <div className="col-md-3   text-center">
          <h2 className="slug-desc my-4">Download App</h2>
          <div className="d-flex flex-column align-items-center">
            <img
              className="img-fluid rounded p-2"
              style={{ width: "300px", height: "100px" }}
              src={play}
              alt="logo"
            />
            <img
              className="img-fluid rounded p-2"
              style={{ width: "300px", height: "100px" }}
              src={ios}
              alt="logo"
            />
          </div>
        </div>

        <div className="col-md-1"></div>
      </div>
      <div></div>
    </div>
  );
}
