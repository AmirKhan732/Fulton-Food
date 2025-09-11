import React from "react";
import { useParams } from "react-router-dom";
import GoBack from "../components/GoBack";

import image from "../assets/blog1.png";
import recent1 from "../assets/recent1.png";
import recent2 from "../assets/recent2.png";
import pizza from "../assets/pizza.png";
import detailmenu from "../assets/detailmenu.png";
import BlogsComponent from "../components/BlogsComponent";

const BlogDetail = () => {
  const { id } = useParams();

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
      id: 4,
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
    { id: 5, name: "Fast Food" },
    { id: 6, name: "Health" },
    { id: 7, name: "Chicken Burger" },
  ];

  const PhotoGallery = [
    { id: 1, image: recent1 },
    { id: 2, image: recent2 },
    { id: 3, image: pizza },
    { id: 4, image: recent1 },
    { id: 5, image: pizza },
    { id: 6, image: recent2 },
  ];

  const SocialPlatform = [
    { id: 1, icon: "bi bi-facebook", link: "https://facebook.com" },
    { id: 2, icon: "bi bi-instagram", link: "https://instagram.com" },
    { id: 3, icon: "bi bi-whatsapp", link: "https://wa.me/123456789" },
    { id: 4, icon: "bi bi-youtube", link: "https://youtube.com" },
    { id: 5, icon: "bi bi-twitter", link: "https://twitter.com" },
  ];

  return (
    <div>
      <GoBack />
      <div className="d-flex flex-row justify-content-center ">
        {/* Blogs Container */}
        <div className="col-md-7">
          <div className="mb-3">
            <div className="col-md-12">
              <img src={image} className="img-fluid rounded" alt="..." />
            </div>
            <p className="card-text py-3 theme-color h4 slug-desc">
              <i className="bi bi-calendar-check me-2"></i>
              12-09-2025
            </p>
            <div className="card-body text-light slug-desc">
              <h2>10 Reasons to do a digital Detox in 2023</h2>
              <br />
              <p>
                A burger is one of the most loved fast-food items around the
                world, enjoyed by people of all ages. At its heart, a burger
                consists of a freshly grilled or pan-seared patty made from
                ground beef, chicken, or even plant-based alternatives. This
                patty is seasoned with a perfect blend of spices to give it a
                juicy and flavorful taste.
              </p>
              <br />
              <p>
                The patty is placed inside a soft, toasted bun that adds a warm
                and slightly crispy texture. Fresh vegetables like lettuce,
                tomato slices, cucumbers, and onions are added to bring a
                refreshing crunch and balance to the richness of the meat. A
                slice of cheese often melts over the patty, adding a creamy and
                savory layer to the burger.
              </p>
              <br />
              <p>
                Sauces play a big role in creating the unique taste of each
                burger. From classic mayonnaise and ketchup to spicy barbecue or
                tangy mustard, these sauces enhance every bite. Some burgers
                even feature a signature house sauce that makes them stand out.
              </p>
              <br />
              <div className="w-100 d-flex flex-row justify-content-between">
                <p>
                  A burger is not just food but also a complete meal in itself.
                  It combines protein, carbs, and veggies in one satisfying
                  package. It can be paired with fries, onion rings, or a
                  chilled drink for the perfect fast-food experience. In
                  conclusion, a burger is a classic and beloved fast-food item
                  that provides a satisfying and satisfying experience for
                  everyone. Whether you're a meat lover or a vegetarian, a
                  burger is a must-try for any foodie.
                  <br />
                  <br />
                  <br />
                  <br />A burger is not just food but also a complete meal in
                  itself. It combines protein, carbs, and veggies in one
                  satisfying package. It can be paired with fries, onion rings,
                  or a chilled drink for the perfect fast-food experience. In
                  conclusion, a burger is a classic and beloved fast-food item
                  that provides a satisfying and satisfying experience for
                  everyone. Whether you're a meat lover or a vegetarian, a
                  burger is a must-try for any foodie.
                </p>

                <img
                  src={detailmenu}
                  className="img-fluid rounded w-50"
                  alt="..."
                />
              </div>
              <br />
              <p>
                Burgers have also become a symbol of creativity in modern
                kitchens. Many chefs experiment with gourmet ingredients like
                caramelized onions, avocado slices, jalapeños, or even fried
                eggs to create unique flavors. These twists give customers the
                chance to enjoy something new while still holding onto the
                classic taste of a burger.
              </p>
              <br />
              <p>
                Beyond their taste, burgers are also about the experience. The
                aroma of a freshly grilled patty, the crunch of fresh
                vegetables, and the melting cheese together create a
                mouthwatering delight. It’s a food that brings people together,
                whether it’s at a family dinner table, a street-side stall, or a
                fine-dining restaurant.
              </p>
              <br />
              <p>
                Whether you like it simple or loaded with double patties,
                cheese, and extra toppings, burgers can be customized to suit
                every taste. Their versatility makes them a favorite for casual
                meals, family outings, and even gourmet dining.
              </p>
              br
              <p>
                In conclusion, a burger is more than just a quick bite – it’s a
                perfect balance of flavors, textures, and satisfaction. From the
                soft bun to the juicy patty, fresh vegetables, and rich sauces,
                every layer tells its own story. Whether enjoyed as a simple
                snack or a loaded meal, the burger continues to be a timeless
                favorite that never goes out of style.
              </p>
            </div>
            <div
              className="d-flex flex-row justify-content-around align-items-center my-5 p-2"
              style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#FF9F0D",
                borderRadius: "10px",
              }}
            >
              {/* Tags */}
              <h5 className="slug-desc  mb-0" style={{color:"#FF9F0D"}}>
                Tags: Resturants, Dinner, Pizza, Yummy
              </h5>

              {/* Share */}
              <div className="d-flex flex-row align-items-center gap-2">
                <h5 className="slug-desc mb-0 me-2 " style={{color:"#FF9F0D"}}>Share:</h5>
                {SocialPlatform.map((platform) => (
                  <a
                    key={platform.id}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-warning d-flex align-items-center justify-content-center rounded"
                    style={{ width: "40px", height: "40px", fontSize: "18px" }}
                  >
                    <i className={platform.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-md-4 px-2">
          {/* Search */}
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
              className="form-control border-0 rounded-3"
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
            {RecentPost.map((item) => (
              <div key={item.id}>
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

          {/* Tags */}
          <div
            className="px-5 py-4 mt-5 "
            style={{ border: "1px solid #FF9F0D", borderRadius: "10px" }}
          >
            <h3 className="text-white slug-desc mb-3">Popular Tags</h3>
            <div className="d-flex flex-wrap gap-2">
              {Tags.map((tag) => (
                <span
                  key={tag.id}
                  className="badge slug-desc border border-warning text-white px-3 py-2"
                  style={{ fontSize: "14px", cursor: "pointer" }}
                >
                  {tag.name}
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
              {PhotoGallery.map((photo) => (
                <img
                  key={photo.id}
                  src={photo.image}
                  className="img-fluid rounded"
                  alt="..."
                  style={{ width: "120px", height: "100px" }}
                />
              ))}
            </div>
          </div>

          {/* Social */}
          <div
            className="px-5 py-4 mt-5 "
            style={{ border: "1px solid #FF9F0D", borderRadius: "10px" }}
          >
            <h3 className="text-white slug-desc mb-3">Social Platform</h3>
            <div className="d-flex flex-wrap gap-3">
              {SocialPlatform.map((platform) => (
                <a
                  key={platform.id}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-warning d-flex align-items-center justify-content-center rounded"
                  style={{ width: "45px", height: "45px", fontSize: "20px" }}
                >
                  <i className={platform.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BlogsComponent />
    </div>
  );
};

export default BlogDetail;
