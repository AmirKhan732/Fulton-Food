import React from "react";

export default function SpecialList() {
  const foodCardStyle = {
    width: "300px",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    fontFamily: "Arial, sans-serif",
    margin: "20px auto",
  };

  const imageStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  };

  const contentStyle = {
    padding: "16px",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "0 0 8px 0",
  };

  const descriptionStyle = {
    fontSize: "14px",
    color: "#555",
    marginBottom: "12px",
  };

  const priceRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const priceStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#ff5722",
  };

  const buttonStyle = {
    padding: "8px 16px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#ff5722",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={foodCardStyle}>
      <img
        src="https://source.unsplash.com/400x300/?food,pizza"
        alt="Food"
        style={imageStyle}
      />
      <div style={contentStyle}>
        <h3 style={titleStyle}>Delicious Pizza</h3>
        <p style={descriptionStyle}>
          Freshly baked pizza with cheese, veggies and a crispy crust.
        </p>
        <div style={priceRowStyle}>
          <span style={priceStyle}>$12.99</span>
          <button style={buttonStyle}>Order Now</button>
        </div>
      </div>
    </div>
  );
}
