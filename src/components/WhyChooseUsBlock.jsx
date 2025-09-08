import home5 from "../assets/4.png";

export default function WhyChooseUsBlock({ reverse = false }) {
  return (
    <div
      className={`container d-flex ${
        reverse ? "flex-row-reverse" : "flex-row"
      } justify-content-center align-items-center my-5`}
      style={{ minHeight: "80vh" }}
    >
   
      <div className="w-50 text-center">
        <img
          src={home5}
          alt="chef"
          className="img-fluid"
          style={{ maxWidth: "85%", height: "auto" }}
        />
      </div>
      <div className="w-50 px-5 slug-desc">
        <h5 className="theme-color">Why Choose Us</h5>
        <h1
          className="text-white my-4"
          style={{ fontSize: "60px", lineHeight: "70px" }}
        >
          <span style={{ color: "#FF9F0D", fontSize: "100px" }}>Ex</span>tra
          Ordinary Taste and Experience
        </h1>
        <p className="text-white">
          We take pride in serving fresh, high-quality meals crafted with the
          finest ingredients, ensuring every dish is full of flavor. With a
          passion for taste and a commitment to exceptional service, we make
          every dining experience truly special.
        </p>
        <div className="d-flex justify-content-center pt-4 align-items-center">
          <div className="d-flex flex-row bg-white align-items-center justify-content-between border-start border-5 border-warning rounded-4 shadow p-3">
            <span className="text-warning fw-bold h1">5+ </span>
            <span className="text-dark fw-bold h2 mb-0">
              Years Of Experience
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
