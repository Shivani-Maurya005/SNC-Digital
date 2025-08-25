import React from "react";

const Description = () => {
   const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <div className="container description">
        <h1 className="main-heading">
          We take care of the work, so you <br />
          can lead the way.
        </h1>
        <div className="looking">
          <h3 className="sub-heading"> What are you looking for ?</h3>
        </div>
      </div>

      <section className="py-5">
        <div className="row g-2 d-flex flex-wrap">
          {[
            "Digital Branding & Logo Design",
            "Content Writing",
            "Social Media Management",
            "Packaging Design",
            "Email Marketing",
            "Marketing Creatives & Sales Support",
            "Performance Marketing",
            "SEO & SEM",
            "Custom Web & App Solutions",
            "Website Maintenance & Support",
          ].map((text, i) => (
            <div className="col-6 col-md-3" key={i}>
              
              <button
              onClick={scrollToTop} className="rounded-pill custom-btn">
                {text}
              </button>
            </div>
          ))}

          <div className="col-6 col-md-3">
            <button onClick={scrollToTop} className="rounded-pill dark-btn">
              Curious How We Do It?
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Description;
