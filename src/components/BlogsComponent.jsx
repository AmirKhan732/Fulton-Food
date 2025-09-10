import React from "react";
import list1 from "../assets/blogs.png";
import list2 from "../assets/blogs.png";
import list3 from "../assets/blogs.png";

export default function BlogsComponent() {
  const data = [
    {
      id: 1,
      date: "8 May 2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: list1,
    },
    {
      id: 2,
      date: "8 May 2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: list2,
    },
    {
      id: 3,
      date: "8 May 2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: list3,
    },
  ];

  return (
    <div className="container ">
      <div className="text-center mb-5">
        <span className="fs-4 fw-bold theme-color">Blog Post</span>
        <h1 className="text-white fw-bold mt-3">
          <span style={{ color: "#FF9F0D" }}>Latest</span> News & Blog
        </h1>
      </div>

      <div className="row justify-content-center">
        {data.map((item) => (
          <div
            key={item.id}
            className="col-md-4 mb-4 d-flex justify-content-center"
          >
            <div
              className="card border-0"
              style={{
                backgroundColor: "#171717",
                width: "22rem",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <img
                src={item.image}
                alt={item.description}
                className="card-img-top"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
              <div className="card-body text-white">
<<<<<<< HEAD:src/screens/Home/BlogsComponent.jsx
              
                {/* Date */}
=======
>>>>>>> 60815b129e6d8aeb09669e77b2256b83523cd73f:src/components/BlogsComponent.jsx
                <p className="theme-color fw-bold mb-2">{item.date}</p>
                <p className="card-text slug-desc">{item.description}</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <a href="#" className="text-white text-decoration-underline">
                    Learn More
                  </a>
                  <div className="d-flex gap-3">
                    <i className="bi bi-share text-warning"></i>
                    <i className="bi bi-chat-dots text-warning"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
