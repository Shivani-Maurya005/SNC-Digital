import React, { useEffect, useState } from "react";
import jaguar from "../Components/image/485945278_1057349736429631_6313739661376082099_n.png";
import landRover from "../Components/image/land-rover.png";
import ryde from "../Components/image/ryde-city-plumbing.png";
import Cherrapunji from "../Components/image/cherrapunji-gin.png";
import acciopay from "../Components/image/acciopay.png";

const Projects = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const slides = [0, 1, 2, 3, 4]; // 5 slides
  const totalSlides = slides.length;

  useEffect(() => {
    const carousel = document.getElementById("myCarousel");
    if (carousel) {
      carousel.addEventListener("slid.bs.carousel", (event) => {
        setActiveIndex(event.to);
        setProgress(((event.to + 1) / totalSlides) * 100);
      });
    }
    setProgress(((activeIndex + 1) / totalSlides) * 100);
  }, []);

  const projectsData = [
    {
      title: "Jaguar",
      subtitle: "Marketing & Web Designing",
      description:
        "Driving lead generation and managing SEO and digital campaigns for Jaguar dealerships to boost local sales and online visibility.",
      skills: [
        "SMM",
        "SEO",
        "Performance Marketing",
        "WhatsApp & Email Marketing",
        "Dealership Websites",
        "Website Maintenance & Support",
        "Sales Support Material",
      ],
      image: jaguar,
    },
    {
      title: "Ryde City Plumbing",
      subtitle: "Ryde City Plumbing",
      description:
        "Developing a memorable brand identity, including logo design and social media creatives, for Ryde City Hot Water and Plumbing Service.",
      skills: ["Logo Design", "Branding", "Social Media Creatives", "Collateral Design"],
      image: ryde,
    },
    {
      title: "Land Rover",
      subtitle: "Web Solutions",
      description:
        "Running performance marketing and managing social media and websites, to increase leads and support annual car sales for Land Rover dealerships.",
      skills: [
        "SMM",
        "SEO",
        "Performance Marketing",
        "WhatsApp & Email Marketing",
        "Dealership Websites",
        "Website Maintenance & Support",
        "Sales Support Material",
      ],
      image: landRover,
    },
    {
      title: "Cherrapunji Gin",
      subtitle: "Web & App Solutions",
      description:
        "Creating a sleek and elegant website that reflects the luxury and unique story of Cherrapunji Gin, a rainwater-distilled spirit.",
      skills: ["Website Design", "UI Design", "Website Maintenance & Support", "Social Media Management"],
      image: Cherrapunji,
    },
    {
      title: "Acciopay",
      subtitle: "Web & App Solutions",
      description:
        "Designing a user-friendly app and website for Acciopay, enabling employees to access earned wages early with ease.",
      skills: ["UI/UX Design", "Email Marketing", "Content Writing", "SEO", "Website & App Design"],
      image: acciopay,
    },
  ];

  return (
    <div>
      <div className="container">
        <h1
          style={{
            alignItems: "center",
            justifyContent: "center",
            fontSize: "4.5rem",
            textAlign: "center",
            lineHeight: "1.5",
            fontWeight: "400",
          }}
        >
          Featured Projects
        </h1>
        <div className="looking">
          <h3 style={{ textAlign: "center", textDecoration: "underline" }}>
            What are you looking for?
          </h3>
        </div>
      </div>

      <div
        id="myCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          {projectsData.map((proj, idx) => (
            <div
              key={idx}
              className={`carousel-item ${idx === 0 ? "active" : ""} p-0`}
              style={{ border: "1px solid black", borderRadius: "15px", overflow: "hidden" }}
            >
              <div className="row w-100 m-0" style={{ height: "500px" }}>
                {/* Left Content */}
                <div className="col-12 col-md-6 d-flex p-4 flex-column">
                  <button
                    onClick={scrollToTop}
                    className="btn mb-3"
                    style={{
                      backgroundColor: "grey",
                      color: "white",
                      borderRadius: "50px",
                      width: "220px",
                      padding: "10px 20px",
                      border: "none",
                    }}
                  >
                    {proj.subtitle}
                  </button>
                  <h2>{proj.title}</h2>
                  <p>{proj.description}</p>
                  <section className="py-2">
                    <div className="row g-1 justify-content-left">
                      {proj.skills.map((item, i) => (
                        <div className="col-6 col-md-3" key={i}>
                          <button
                            onClick={scrollToTop}
                            className="btn btn-outline-dark w-100"
                            style={{
                              backgroundColor: "white",
                              color: "black",
                              borderRadius: "50px",
                              width: "220px",
                              margin: "5px 0",
                              border: "1px solid black",
                            }}
                          >
                            {item}
                          </button>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                {/* Right Image */}
                <div className="col-12 col-md-6 d-flex p-0" style={{ height: "485px" }}>
                  <img
                    src={proj.image}
                    alt={proj.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Progress Bar */}
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "white",
          borderRadius: "50px",
          marginTop: "15px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            background: `linear-gradient(to right, black ${progress}%, white ${progress}%)`,
            transition: "background 0.6s ease",
            borderRadius: "15px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Projects;
