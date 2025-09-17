import React, { useEffect, useState } from "react";
import GoBack from "../components/GoBack";

const SupportAndPolicy = () => {
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
              { id: "section1", title: "Support Overview" },
              { id: "section2", title: "Customer Assistance" },
              { id: "section3", title: "Technical Support" },
              { id: "section4", title: "Payment Issues" },
              { id: "section5", title: "Account & Security" },
              { id: "section6", title: "Refund Policy" },
              { id: "section7", title: "Privacy Policy" },
              { id: "section8", title: "Contact Us" },
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
            <h2>Support Overview</h2>
            <p className="fs-5">
              Our support team is here to ensure that you have a smooth and
              reliable experience while using our services. Whether you face
              technical issues, need order assistance, or want guidance, we are
              ready to help.
            </p>
          </div>

          <div id="section2" className="content-section py-3">
            <h2>Customer Assistance</h2>
            <p className="fs-5">
              We provide 24/7 customer support for all service-related queries.
              Our representatives are trained to handle complaints, order
              issues, and general inquiries effectively.
            </p>
          </div>

          <div id="section3" className="content-section py-3">
            <h2>Technical Support</h2>
            <p className="fs-5">
              Facing app crashes, login issues, or performance problems? Our
              technical support team ensures that your app runs smoothly with
              timely troubleshooting and updates.
            </p>
          </div>

          <div id="section4" className="content-section py-3">
            <h2>Payment Issues</h2>
            <p className="fs-5">
              For failed transactions, double charges, or card-related issues,
              please report them immediately. We will verify and resolve payment
              disputes as quickly as possible.
            </p>
          </div>

          <div id="section5" className="content-section py-3">
            <h2>Account & Security</h2>
            <p className="fs-5">
              Keep your account safe by using strong passwords and avoiding
              sharing login details. If you notice suspicious activity, contact
              our support team to secure your account.
            </p>
          </div>

          <div id="section6" className="content-section py-3">
            <h2>Refund Policy</h2>
            <p className="fs-5">
              Refunds are applicable only in cases of failed payments, service
              disruptions, or duplicate transactions. Requests will be processed
              after proper verification within 7–10 business days.
            </p>
          </div>

          <div id="section7" className="content-section py-3">
            <h2>Privacy Policy</h2>
            <p className="fs-5">
              Your personal information is handled with care. We store your data
              securely and use it only for service improvements and
              communication. We do not sell your information to third parties.
            </p>
          </div>

          <div id="section8" className="content-section py-3">
            <h2>Contact Us</h2>
            <p className="fs-5">
              Need help? Reach us via in-app chat, email, or our support
              hotline. Our support team is available around the clock to guide
              you with account, payment, and service issues. we are here to
              assist you. And our support team is here to help. Also you can
              contact us through email.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportAndPolicy;
