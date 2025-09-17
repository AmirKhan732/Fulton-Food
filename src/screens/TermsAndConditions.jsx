import React, { useEffect, useState } from "react";
import GoBack from "../components/GoBack";

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState("section1");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".content-section");
      let current = "section1";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container-fluid py-4">
      <GoBack />
      <div className="row px-5">
        {/* Left Sidebar */}
        <div className="col-md-4">
          <div className="list-group sticky-top bg-light p-2 rounded">
            {[
              { id: "section1", title: "Introduction" },
              { id: "section2", title: "Ordering Policy" },
              { id: "section3", title: "Delivery & Pickup" },
              { id: "section4", title: "Pricing & Payment" },
              { id: "section5", title: "Allergies & Ingredients" },
              { id: "section6", title: "Refunds & Cancellations" },
              { id: "section7", title: "Privacy Policy" },
              { id: "section8", title: "Contact & Support" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`list-group-item-action slug-desc fs-5 p-3 d-block rounded text-decoration-none ${
                  activeSection === item.id
                    ? " fw-bold fs-3 bg-theme text-decoration-underline"
                    : "text-dark fw-bold fs-4"
                }`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="col-md-8 slug-desc">
          <div id="section1" className="content-section pb-3">
            <h2>Introduction</h2>
            <p className="fs-5">
              Welcome to our Fast Food app! By ordering from us, you agree to
              follow the terms listed below. We aim to provide delicious meals,
              quick service, and a safe dining experience whether you choose
              delivery or pickup.
            </p>
          </div>

          <div id="section2" className="content-section py-3">
            <h2>Ordering Policy</h2>
            <p className="fs-5">
              Orders can be placed online through our app or website. Please
              ensure that all details, such as items, quantity, and address, are
              correct before confirming your order. Once confirmed, changes may
              not be possible.
            </p>
          </div>

          <div id="section3" className="content-section py-3">
            <h2>Delivery & Pickup</h2>
            <p className="fs-5">
              We provide doorstep delivery within selected areas and a pickup
              option from our outlets. Delivery times may vary depending on
              location and order size, but we strive to deliver fresh and hot
              food on time.
            </p>
          </div>

          <div id="section4" className="content-section py-3">
            <h2>Pricing & Payment</h2>
            <p className="fs-5">
              All prices displayed include applicable taxes. We accept payments
              via debit/credit cards, mobile wallets, and cash on delivery
              (where available). Promotional codes and discounts must be applied
              before order confirmation.
            </p>
          </div>

          <div id="section5" className="content-section py-3">
            <h2>Allergies & Ingredients</h2>
            <p className="fs-5">
              Our meals may contain common allergens such as nuts, dairy,
              gluten, and soy. Customers are advised to check the ingredient
              list before placing an order. We do not guarantee allergen-free
              preparation in our kitchens.
            </p>
          </div>

          <div id="section6" className="content-section py-3">
            <h2>Refunds & Cancellations</h2>
            <p className="fs-5">
              Once an order is placed, cancellations are not guaranteed. Refunds
              will only be issued for orders that are undelivered, incorrect, or
              significantly delayed. For refund requests, please contact our
              support team.
            </p>
          </div>

          <div id="section7" className="content-section py-3">
            <h2>Privacy Policy</h2>
            <p className="fs-5">
              We value your privacy. Your personal details are stored securely
              and used only for order processing and service improvements. We do
              not sell or share your data with third parties without consent.
            </p>
          </div>

          <div id="section8" className="content-section py-3">
            <h2>Contact & Support</h2>
            <p className="fs-5">
              For any questions, complaints, or support, you can reach us
              through our in-app chat, email, or hotline. We are available 24/7
              to assist you with your orders and queries. And you can also visit
              our website for more information. we will be glad to help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
