import React from "react";


const Countries = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const countriesList = ["Canada", "U.S.A", "U.K", "France", "Australia"];

  return (
    <div>
      <section className="py-5">
        <div className="row g-3 justify-content-center button-scroll-wrapper">
          {countriesList.map((country, i) => (
            <div className="col-6 col-md-2" key={i}>
              <button
                onClick={scrollToTop}
                className="btn btn-outline-dark rounded-pill w-100 py-3 px-5 text-wrap"
                style={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  backgroundColor: country === "Canada" ? "black" : "white",
                  color: country === "Canada" ? "white" : "black",
                  border: country === "Canada" ? "none" : "1px solid white",
                  boxShadow:
                    country === "Canada"
                      ? "none"
                      : "0px 4px 6px rgba(0, 0, 0, 0.3)",
                }}
              >
                {country}
              </button>
            </div>
          ))}
        </div>
      </section>

      <div className="video-container mt-5">
        <iframe
          src="https://www.youtube.com/embed/XHOmBV4js_E"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Countries;
