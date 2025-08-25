import React from "react";


const Title = () => {
  return (
    <section className="pt-5 title-section">
      <div className="container-fluid">
        <div className="row align-items-left">
          {/* Left Section */}
          <div className="col-md-7">
            <h1>
              Your growth team <br /> behind the scenes
            </h1>
            <p>
              SNC Digital is a B2B partner to agencies, providing reliable,
              high-quality creative and back–end services.
            </p>
          </div>

          {/* Right Section */}
          <div className="col-md-5 text-md-end text-center mt-2 mt-md-0">
            <ul className="title-links">
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Work
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Title;
