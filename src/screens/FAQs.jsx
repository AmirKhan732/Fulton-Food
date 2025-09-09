import React, { useState } from "react";
import GoBack from "../components/GoBack";

const FAQs = () => {
  const [expand, setExpand] = useState(null);

  const toggleExpand = (id) => {
    setExpand(expand === id ? null : id);
  };

  const QuestAns = [
    {
      id: 1,
      question: "How We Serve Food",
      answer:
        "We serve food fresh, hygienic, and beautifully presented to give you the best dining experience, whether you are dining in with family or ordering from home.",
    },
    {
      id: 2,
      question: "Is this restaurant 24 hours open?",
      answer:
        "No, our restaurant is not open 24 hours. We welcome guests daily from 11:00 AM to 11:00 PM, making sure every meal is served with quality, freshness, and the perfect dining atmosphere.",
    },
    {
      id: 3,
      question: "Do we offer home delivery?",
      answer:
        "Yes, we provide fast and reliable home delivery services so you can enjoy your favorite meals in the comfort of your home. We partner with trusted delivery teams to ensure your food arrives fresh and on time.",
    },
    {
      id: 4,
      question: "Do we take reservations?",
      answer:
        "Absolutely! You can easily reserve a table in advance through our website or by calling us directly. Reservations are highly recommended during weekends and peak hours to avoid waiting.",
    },
    {
      id: 5,
      question: "Do you offer vegetarian/vegan options?",
      answer:
        "Yes, we have a wide range of vegetarian and vegan dishes prepared with the same freshness, care, and flavor as the rest of our menu. From light snacks to full meals, we ensure there’s something for everyone.",
    },
    {
      id: 6,
      question: "Can I customize my order?",
      answer:
        "Of course! Most of our dishes can be customized based on your preferences, including spice level, ingredients, and portion size. We want you to enjoy every meal exactly the way you like it.",
    },
  ];

  return (
    <div className="slug-desc">
      <GoBack />
      <h1 className="text-white text-center">Question Looks Here</h1>
      <p className="text-white text-center fs-5">
        Fulton serving fresh, high-quality meals with traditional and modern
        flavors
      </p>
      <div
        className="d-flex flex-row justify-content-center align-items-center gap-5 m-5 "
        style={{ flexWrap: "wrap", cursor: "pointer" }}
      >
        {QuestAns.map((questAns) => (
          <div
            className="bg-light text-black col-md-5 p-4 rounded "
            key={questAns.id}
            onClick={() => toggleExpand(questAns.id)}
          >
            <div className="d-flex flex-row justify-content-between">
              <h2 className="fw-bold">{questAns.question}</h2>
              <i
                style={{ color: "#FF9F0D" }}
                className={`bi ${
                  expand === questAns.id ? "bi-dash-lg" : "bi-plus-lg"
                } fs-4`}
              />
            </div>
            <p
              className="fs-5"
              style={{
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: expand === questAns.id ? "unset" : 2,

                transition: "all 0.3s ease-in-out",
              }}
            >
              {questAns.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
