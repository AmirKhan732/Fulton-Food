import React, { useState, useRef } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import blog1 from "../assets/blog1.png";
import recent1 from "../assets/recent1.png";
import recent2 from "../assets/recent2.png";
import pizza from "../assets/pizza.png";
import GoBack from "../components/GoBack";

export default function Blogs() {
  const [page, setPage] = useState(1);
  const blogsPerPage = 4;
  const blogContainerRef = useRef(null);

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const Blogs = [
    {
      id: 1,
      image: blog1,
      time: "10 feb 2024",
      title: "10 Reasons to do a Detox in 2023",
      description: "AI-generated text is text output...",
      btn: "Read More",
    },
    {
      id: 2,
      image: blog1,
      time: "10 feb 2024",
      title: "10 Reasons to do a Detox in 2023",
      description: "AI-generated text is text output...",
      btn: "Read More",
    },
    {
      id: 3,
      image: blog1,
      time: "10 feb 2024",
      title: "10 Reasons to do a Detox in 2023",
      description: "AI-generated text is text output...",
      btn: "Read More",
    },
    {
      id: 4,
      image: blog1,
      time: "10 feb 2024",
      title: "10 Reasons to do a Detox in 2023",
      description: "AI-generated text is text output...",
      btn: "Read More",
    },
    {
      id: 5,
      image: blog1,
      time: "10 feb 2024",
      title: "10 Reasons to do a Detox in 2023",
      description: "AI-generated text is text output...",
      btn: "Read More",
    },
    {
      id: 6,
      image: blog1,
      time: "10 feb 2024",
      title: "10 Reasons to do a Detox in 2023",
      description: "AI-generated text is text output...",
      btn: "Read More",
    },
    {
      id: 7,
      image: blog1,
      time: "10 feb 2024",
      title: "10 Reasons to do a Detox in 2023",
      description: "AI-generated text is text output...",
      btn: "Read More",
    },
    {
      id: 8,
      image: blog1,
      time: "10 feb 2024",
      title: "10 Reasons to do a Detox in 2023",
      description: "AI-generated text is text output...",
      btn: "Read More",
    },
    {
      id: 9,
      image: blog1,
      time: "10 feb 2024",
      title: "10 Reasons to do a Detox in 2023",
      description: "AI-generated text is text output...",
      btn: "Read More",
    },
  ];

  const RecentPost = [
    {
      id: 1,
      image: recent1,
      description: "10 Reasons to do a Detox in 2023 k kdjr hjdsd hhja",
      time: "10 feb 2024",
    },
    {
      id: 2,
      image: recent2,
      description: "10 Reasons to do a Detox in 2023 k kdjr hjdsd hhja",
      time: "10 feb 2024",
    },
    {
      id: 3,
      image: recent1,
      description: "10 Reasons to do a Detox in 2023 k kdjr hjdsd hhja",
      time: "10 feb 2024",
    },
    {
      id: 3,
      image: recent2,
      description: "10 Reasons to do a Detox in 2023 k kdjr hjdsd hhja",
      time: "10 feb 2024",
    },
  ];

  const Tags = [
    { id: 1, name: "Sandwich" },
    { id: 2, name: "Tikka" },
    { id: 3, name: "Burger Beef" },
    { id: 4, name: "Malai Botti" },
    { id: 4, name: "Fast Food" },
    { id: 4, name: "Health" },
    { id: 4, name: "Chicken Burger" },
  ];

  const PhotoGallery = [
    { id: 1, image: recent1 },
    { id: 2, image: recent2 },
    { id: 4, image: pizza },
    { id: 3, image: recent1 },
    { id: 5, image: pizza },
    { id: 6, image: recent2 },
  ];

  const SocialPlatform = [
    {
      id: 1,
      icon: "bi bi-facebook",
      link: "https://facebook.com",
    },
    {
      id: 2,
      icon: "bi bi-instagram",
      link: "https://instagram.com",
    },
    {
      id: 3,
      icon: "bi bi-whatsapp",
      link: "https://wa.me/123456789",
    },
    {
      id: 4,
      icon: "bi bi-youtube",
      link: "https://youtube.com",
    },
    {
      id: 5,
      icon: "bi bi-twitter",
      link: "https://twitter.com",
    },
  ];

  const totalPages = Math.ceil(Blogs.length / blogsPerPage);

  const startIndex = (page - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const paginatedBlogs = Blogs.slice(startIndex, endIndex);
  return (
    <div className="">
      <GoBack />
      <div className="d-flex flex-row justify-content-center ">
        {/* Blogs Container */}
        <div className="col-md-7 " ref={blogContainerRef}>
          {paginatedBlogs.map((item) => (
            <div className="mb-3" key={item.id}>
              <div className="col-md-12">
                <img src={item.image} className="img-fluid rounded" alt="..." />
              </div>
              <div className="">
                <div className="card-body">
                  <p className="card-text py-3 theme-color h4 slug-desc">
                    <i className="bi bi-calendar-check me-2"></i>
                    {item.time}
                  </p>
                  <h2 className="card-title text-white slug-desc">
                    {item.title}
                  </h2>
                  <p className="card-text text-white slug-desc py-3">
                    {item.description}
                  </p>
                  <a
                 
                    onClick={() => navigation("/blogdetail")}
                    className="btn theme-color btn-outline-light slug-desc mb-4"
                  >
                    {item.btn}
                    <i class="bi bi-box-arrow-in-up-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4  px-2">
          {/* input field */}
          <div
            className="input-group slug-desc  bg-theme "
            style={{
              height: 50,
              border: "1px solid #FF9F0D",
              borderRadius: "10px",
              padding: "1.5px",
            }}
          >
            <input
              type="text"
              className="form-control border-0  rounded-3"
              placeholder="Search Your Keywords..."
            />
            <button className="btn slug-desc px-4 border-0 rounded-0">
              <i className="bi bi-search"></i>
            </button>
          </div>
          {/* Recent Post */}
          <div
            className="px-5 py-4 mt-5 "
            style={{ border: "1px solid #FF9F0D", borderRadius: "10px" }}
          >
            <h3 className="text-white slug-desc">Recent Post</h3>
            {RecentPost.map((item, index) => (
              <div key={index}>
                <div className="d-flex flex-row align-items-center">
                  <img
                    src={item.image}
                    className="img-fluid rounded"
                    alt="..."
                    style={{ width: "120px", height: "100px" }}
                  />
                  <div className="ms-3">
                    <p className="card-text theme-color slug-desc mb-1">
                      <i className="bi bi-calendar-check me-2"></i>
                      {item.time}
                    </p>
                    <p className="fs-5 text-white slug-desc mb-0">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div
                  className="bg-theme"
                  style={{ height: "1px", margin: "12px 0" }}
                ></div>
              </div>
            ))}
          </div>
          {/* popular tags */}
          <div
            className="px-5 py-4 mt-5 "
            style={{ border: "1px solid #FF9F0D", borderRadius: "10px" }}
          >
            <h3 className="text-white slug-desc mb-3">Popular Tags</h3>
            <div className="d-flex flex-wrap gap-2">
              {Tags.map((item) => (
                <span
                  key={item.id}
                  className="badge slug-desc border border-warning text-white px-3 py-2"
                  style={{ fontSize: "14px", cursor: "pointer" }}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
          {/* Photo Gallery */}
          <div
            className="px-5 py-4 mt-5 "
            style={{ border: "1px solid #FF9F0D", borderRadius: "10px" }}
          >
            <h3 className="text-white slug-desc mb-3">Photo Gallery</h3>
            <div className="d-flex flex-wrap gap-2">
              {PhotoGallery.map((item) => (
                <img
                  src={item.image}
                  className="img-fluid rounded"
                  alt="..."
                  style={{ width: "120px", height: "100px" }}
                />
              ))}
            </div>
          </div>
          {/* Social Platform */}
          <div
            className="px-5 py-4 mt-5 "
            style={{ border: "1px solid #FF9F0D", borderRadius: "10px" }}
          >
            <h3 className="text-white slug-desc mb-3">Social Platform</h3>
            <div className="d-flex flex-wrap gap-3">
              {SocialPlatform.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-warning d-flex align-items-center justify-content-center rounded"
                  style={{ width: "45px", height: "45px", fontSize: "20px" }}
                >
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Pagination */}
      {totalPages > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "30px",
          }}
        >
          <Stack spacing={2}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handleChange}
              variant="outlined"
              shape="rounded"
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "white",
                  border: "1px solid ",
                  margin: "0px 8px",
                },
                "& .MuiPaginationItem-root.Mui-selected": {
                  backgroundColor: "#ff9f0d",
                  color: "black",
                  border: "1px solid white",
                },
                "& .MuiPaginationItem-root.Mui-selected:hover": {
                  backgroundColor: "#ff9f0d",
                },
              }}
            />
          </Stack>
        </div>
      )}
    </div>
  );
}
