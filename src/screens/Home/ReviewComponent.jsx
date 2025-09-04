import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import image2 from "../../assets/review.png";
import image3 from "../../assets/userreview.png";
import image4 from "../../assets/blogs.png";

export default function ReviewComponent() {
  const reviews = [
    {
      id: 1,
      name: "Abdur Rahman",
      role: "Customer",
      text: "The flavors were absolutely delightful, every ingredient tasted fresh and perfectly balanced. The burger was juicy, the fries were crisp, and even the smallest details felt carefully prepared.",
      leftImg: image4,
      userImg: image3,
    },
    {
      id: 2,
      name: "Amir Khan",
      role: "Customer",
      text: "The food was served hot, fresh, and full of aroma the moment it reached the table. The presentation made it look inviting, and the taste exceeded my expectations. Truly like dining at a five-star restaurant.",
      leftImg: image2,
      userImg: image3,
    },
    {
      id: 3,
      name: "Sara Ahmed",
      role: "Customer",
      text: "From the first bite to the last, every dish was bursting with authentic flavor. The spices were well-balanced, the texture was spot-on, and the portions were generous.",
      leftImg: image2,
      userImg: image3,
    },
  ];

  return (
    <Swiper
      effect="fade"
      fadeEffect={{ crossFade: true }}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Navigation, EffectFade, Autoplay]}
      loop={true}
      className="mySwiper"
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
          <div
            className="container d-flex flex-row justify-content-center align-items-center my-5"
            style={{ height: "80vh" }}
          >
            <div className="w-75 text-center">
              <img
                src={review.leftImg}
                alt="chef"
                className="img-fluid  "
             
              />
            </div>
            <div className="w-50 px-5 py-2">
              <h3 className="fw-light signature theme-color">Testimonials</h3>
              <h2 className="text-white slug-desc">Customer Reviews</h2>
              <p className="text-white fw-3">{review.text}</p>
              <div className="d-flex justify-content-between align-items-center pt-5">
                <div className="d-flex align-items-center">
                  <img
                    src={review.userImg}
                    alt="profile"
                    className="rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="ms-3 text-white text-start">
                    <h6 className="mb-0">{review.name}</h6>
                    <small>{review.role}</small>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <i
                    className="bi bi-arrow-left text-white custom-prev"
                    style={{
                      cursor: "pointer",
                      fontSize: "1.5rem",
                      transition: "color 0.3s",
                    }}
                  ></i>
                  <i
                    className="bi bi-arrow-right text-white custom-next"
                    style={{
                      cursor: "pointer",
                      fontSize: "1.5rem",
                      transition: "color 0.3s",
                    }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
