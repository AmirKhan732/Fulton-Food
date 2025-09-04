import React, { useState } from "react";
import burgerImage from "../../assets/1.png";
import sandwichImg from "../../assets/Sandwich.jpg";
import hotdogImg from "../../assets/hotdog.jpg";
import drinkImg from "../../assets/drinks.jpg";

export default function Category() {
  const [activeCategory, setActiveCategory] = useState("Burgers");

  const Burgers = {
    image: burgerImage,
    items: [
      {
        id: 1,
        title: "Beef Burger",
        description: "Juicy beef burger",
        price: "$24.00",
        image: burgerImage,
      },
      {
        id: 2,
        title: "Chicken Burger",
        description: "Juicy chicken burger",
        price: "$24.00",
        image: burgerImage,
      },
      {
        id: 3,
        title: "Chicken Burger",
        description: "Juicy chicken burger",
        price: "$24.00",
        image: burgerImage,
      },
      {
        id: 4,
        title: "Chicken Burger",
        description: "Juicy chicken burger",
        price: "$24.00",
        image: burgerImage,
      },
      {
        id: 5,
        title: "Chicken Burger",
        description: "Juicy chicken burger",
        price: "$24.00",
        image: burgerImage,
      },
      {
        id: 6,
        title: "Chicken Burger",
        description: "Juicy chicken burger",
        price: "$24.00",
        image: burgerImage,
      },
      {
        id: 7,
        title: "Chicken Burger",
        description: "Juicy chicken burger",
        price: "$24.00",
        image: burgerImage,
      },
    ],
  };

  const Sandwich = {
    image: sandwichImg,
    items: [
      {
        id: 1,
        title: "Beef Sandwich",
        description: "Juicy beef sandwich",
        price: "$24.00",
        image: sandwichImg,
      },
      {
        id: 2,
        title: "Chicken Sandwich",
        description: "Juicy chicken sandwich",
        price: "$24.00",
        image: sandwichImg,
      },
      {
        id: 3,
        title: "Veg Sandwich",
        description: "Fresh veg sandwich",
        price: "$20.00",
        image: sandwichImg,
      },
    ],
  };

  const Hotdog = {
    image: hotdogImg,
    items: [
      {
        id: 1,
        title: "Beef Hotdog",
        description: "Juicy beef hotdog",
        price: "$24.00",
        image: hotdogImg,
      },
      {
        id: 2,
        title: "Chicken Hotdog",
        description: "Juicy chicken hotdog",
        price: "$22.00",
        image: hotdogImg,
      },
    ],
  };

  const Drinks = {
    image: drinkImg,
    items: [
      {
        id: 1,
        title: "Coke",
        description: "Refreshing cold drink",
        price: "$5.00",
        image: drinkImg,
      },
      {
        id: 2,
        title: "Pepsi",
        description: "Cool and refreshing",
        price: "$5.00",
        image: drinkImg,
      },
    ],
  };

  const categoryData = { Burgers, Sandwich, Hotdog, Drinks };

  return (
    <div className="container my-4">
      <div className="text-center">
        <span className="slug-desc theme-color fs-3">Food Category</span>
        <h1
          className="text-white slug-desc my-4"
          style={{ fontSize: "60px", lineHeight: "70px" }}
        >
          <span className="theme-color" style={{ fontSize: "70px" }}>
            Ch
          </span>
          oose our special items
        </h1>
      </div>
      <div className="d-flex justify-content-center slug-desc col-md-12 gap-5">
        {Object.keys(categoryData).map((category) => (
          <button
            key={category}
            className={`btn fs-4 fw-bold mb-3 ${
              activeCategory === category ? "theme-color" : "text-white"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="d-flex justify-content-center flex-row gap-4">
        <div className="d-flex justify-content-center align-items-center">
          <img
            className="rounded"
            style={{ width: "400px", height: "400px", objectFit: "cover" }}
            src={categoryData[activeCategory].image}
            alt={activeCategory}
          />
        </div>
        <div className="container">
          <div className="row">
            {categoryData[activeCategory].items.map((item) => (
              <div key={item.id} className="col-md-6 mb-3">
                <div className="d-flex flex-row align-items-center rounded text-white p-2 gap-2 ">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <div>
                    <h5 className="mb-1 fw-bold fs-3 slug-desc">
                      {item.title}
                    </h5>
                    <p className="mb-0 text-white slug-desc">
                      {item.description}
                    </p>
                    <p className="mb-0 fw-semibold fs-4 slug-desc mt-2 text-warning">
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
