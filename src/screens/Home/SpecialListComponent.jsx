import React from "react";
import list1 from "../../assets/fvt.png";
import list2 from "../../assets/fvt.png";
import list3 from "../../assets/fvt.png";

export default function SpecialListComponent() {
  const data = [
    {
      id: 1,
      title: "Beef Burger",
      description: "Juicy beef burger",
      price: "$24.00",
      rating: "4.9",
      image: list1,
    },
    {
      id: 2,
      title: "Chicken Pizza",
      description: "Cheesy chicken pizza",
      price: "$18.50",
      rating: "4.7",
      image: list2,
    },
    {
      id: 3,
      title: "Pasta Alfredo",
      description: "Creamy Alfredo pasta",
      price: "$15.00",
      rating: "4.8",
      image: list3,
    },
  ];

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="text-center ">
          <span className="slug-desc fs-3 " style={{ color: "#FF9F0D" }}>
            Food Category
          </span>
          <h1
            className="text-white slug-desc my-4 "
            style={{ fontSize: "60px", lineHeight: "70px" }}
          >
            <span style={{ color: "#FF9F0D", fontSize: "70px" }}>Ch</span>oose
            our special items
          </h1>
        </div>
        {data.map((item) => (
          <div
            key={item.id}
            className="col-md-4 d-flex justify-content-center mb-4"
          >
            <div
              className="card text-white shadow "
              style={{
                backgroundColor: "#171717",
                width: "20rem",
                borderRadius: "20px",
              }}
            >
              <div
                className="position-relative d-flex justify-content-center align-items-center"
                style={{ height: "200px" }}
              >
                <span
                  className="position-absolute  top-0 end-0  d-flex align-items-center justify-content-center bg-theme "
                  style={{
                    width: "50px",
                    height: "40px",
                    borderBottomLeftRadius: "20px",
                    cursor: "pointer",
                    borderTopRightRadius: "20px",
                  }}
                >
                  <i className="bi bi-heart-fill text-white fs-5"></i>
                </span>
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-circle"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="card-body">
                <h2 className="card-title fw-bold slug-desc">{item.title}</h2>
                <h4 className="card-text text-white slug-desc mt-4">
                  {item.description}
                </h4>
                <div className="d-flex justify-content-between fs-2 slug-desc align-items-center my-3">
                  <span className="fw-bold theme-color ">{item.price}</span>
                  <span className="theme-color">
                    <i className="bi bi-star-fill"></i> {item.rating}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
