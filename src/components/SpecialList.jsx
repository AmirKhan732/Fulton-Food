import React from "react";
import list1 from "../assets/fvt.png";

export default function SpecialList() {
  const foodCardStyle = {
    width: "300px",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    fontFamily: "Arial, sans-serif",
    margin: "20px auto",
    backgroundColor: "#222", // card bg
    // color: "#fff",
  };

  const imageWrapperStyle = {
    position: "relative",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const circleImageStyle = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #fff",
  };

  const heartIconStyle = {
    position: "absolute",
    width: "50px",
    height: "40px",
    top: "0px",
    right: "0px",
    backgroundColor: "#FF9F0D",
    borderBottomLeftRadius: "20px",
    padding: "6px",
    fontSize: "18px",
    color: "#fff",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  };
  const contentStyle = {
    padding: "16px",
  };
  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "0 0 8px 0",
    color: "#fff",
  };
  const descriptionStyle = {
    fontSize: "14px",
    color: "#ccc",
  };

  const priceRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const priceStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#FF9F0D",
  };

  const buttonStyle = {
    padding: "8px 16px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#FF9F0D",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={foodCardStyle}>
      <div style={imageWrapperStyle}>
        <span style={heartIconStyle}>
          <div className="bi bi-heart-fill d-flex align-items-center justify-content-center" style={{fontSize: "20px"}}></div>
        </span>
        <img
          src={list1}
          //   alt="Food"
          style={circleImageStyle}
        />
      </div>

      {/* Content section */}
      <div style={contentStyle}>
        <h3 style={titleStyle}>Beef Burger</h3>
        <p className="text-white fs-6 ">Description of the item</p>
        <div style={priceRowStyle}>
          <span style={priceStyle}>$24.00</span>
          <span style={{ color: "#FF9F0D" }}>
            <i className="bi bi-star-fill"></i> 4.9
          </span>
        </div>
      </div>
    </div>
  );
}
