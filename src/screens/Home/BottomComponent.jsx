import React, { useState } from "react";
import image2 from "../../assets/review.png";
import image3 from "../../assets/userreview.png";
// import image4 from "../../assets/burger.png"

export default function BottomComponent() {
  const [activeArrow, setActiveArrow] = useState(null); // "prev" or "next"

  const reviews = [
    {
      id: 1,
      name: "Abdur Rahman",
      role: "Customer",
      text: "Amazing service and delicious food!",
      leftImg: image2,
      userImg: image3,
    },
    {
      id: 2,
      name: "Amir Khan",
      role: "Customer",
      text: "Loved the ambiance and the food quality.",
      leftImg: image2,
      userImg: image3,
    },
    {
      id: 3,
      name: "Sara Ahmed",
      role: "Customer",
      text: "One of the best dining experiences ever!",
      leftImg: image2,
      userImg: image3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };
  const currentReview = reviews[currentIndex];
  return (
    <div
      className="container d-flex flex-row justify-content-center align-items-center my-5"
      style={{ height: "80vh" }}
    >
      <div className="w-75 text-center">
        <img
          src={currentReview.leftImg}
          alt="chef"
          className="img-fluid"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      <div className="w-50 px-5 py-2">
        <h3 className="fw-light signature theme-color">Testimonials</h3>
        <h2 className="text-white">Customer Reviews</h2>
        <p className="text-white fw-3">{currentReview.text}</p>
        <div className="d-flex justify-content-between align-items-center p-3  ">
          <div className="d-flex align-items-center">
            <img
              src={currentReview.userImg}
              alt="profile"
              className="rounded-circle"
              style={{ width: "60px", height: "60px", objectFit: "cover" }}
            />
            <div className="ms-3 text-white text-start">
              <h6 className="mb-0">{currentReview.name}</h6>
              <small>{currentReview.role}</small>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <i
              className={`bi bi-arrow-left ${
                activeArrow === "prev" ? "text-warning" : "text-white"
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => {
                handlePrev();
                setActiveArrow("prev");
              }}
            ></i>
            <i
              className={`bi bi-arrow-right ${
                activeArrow === "next" ? "text-warning" : "text-white"
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleNext();
                setActiveArrow("next");
              }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
