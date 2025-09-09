import aboutline from "../assets/aboutline.png";
import chef from "../assets/chef.jpeg";
import AboutUsComponent from "../components/AboutUsComponent";
import WhyChooseUsBlock from "../components/WhyChooseUsBlock";
import ReviewComponent from "../components/ReviewComponent";
import BlogsComponent from "../components/BlogsComponent";

import GoBack from "../components/GoBack";

const About = () => {
  const ChefList = [
    {
      id: 1,
      image: chef,
      name: "Abdur Rahman",
      role: "Head Chef",
    },
    {
      id: 2,
      image: chef,
      name: "Ali Khan",
      role: "Chef",
    },
    {
      id: 3,
      image: chef,
      name: "Sara Ahmed",
      role: "Chef",
    },
    {
      id: 4,
      image: chef,
      name: "Mark Henry",
      role: "Chef",
    },
  ];

  return (
    <div>
     <GoBack />
      <AboutUsComponent showButton={false} />
      <WhyChooseUsBlock reverse={true} />
      <div className="d-flex flex-row mb-5 justify-content-around text-white">
        <div className="d-flex flex-column col-md-3 px-3 align-items-center">
          <i class="bi bi-mortarboard-fill " style={{ fontSize: "60px" }}></i>
          <h2>Best Chef</h2>
           <p className="text-center">
            these are the best chefs in this region and have many years of
            experience with finger licking dishes with taste
          </p>
        </div>
        <div className="d-flex flex-column col-md-3 px-3 align-items-center">
          <i class="bi bi-cup-hot" style={{ fontSize: "60px" }}></i>
          <h2>120+ Items</h2>
          <p className="text-center">
            these are the best chefs in this region and have many years of
            experience with finger licking dishes with taste
          </p>
        </div>
        <div className="d-flex flex-column col-md-3 px-3  align-items-center">
          <i class="bi bi-person-arms-up " style={{ fontSize: "60px" }}></i>
          <h2>Clean Environment</h2>
          <p className="text-center">
            these are the best chefs in this region and have many years of
            experience with finger licking dishes with taste
          </p>
        </div>
      </div>

      <div className="position-relative text-center">
        <img src={aboutline} alt="chef" className="img-fluid w-100" />
        <h1
          className="position-absolute slug-desc start-50 translate-middle-x text-white fw-bold"
          style={{ top: "10%", fontSize: "60px" }}
        >
          Team Members
        </h1>
      </div>
      <div className="position-relative ">
        <div
          className="container position-relative"
          style={{ marginTop: "-180px" }}
        >
          <div className="row justify-content-center g-4">
            {ChefList.map((chef) => (
              <div className="col-md-3 col-sm-6" key={chef.id}>
                <div className="card border-0 shadow">
                  <img
                    src={chef.image}
                    className="card-img-top"
                    alt={chef.name}
                  />
                  <div className="card-body text-center">
                    <h5 className="theme-color slug-desc fs-2 fw-bold">
                      {chef.name}
                    </h5>
                    <p className="mb-0 slug-desc text-dark fs-5">{chef.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ReviewComponent />
      <BlogsComponent />
    </div>
  );
};

export default About;
