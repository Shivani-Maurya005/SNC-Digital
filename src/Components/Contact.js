import React from "react";

import digital from "../Components/image/snc-digital.png";
import books from "../Components/image/snc-books.png";
import travel from "../Components/image/snc-travel.png";

export default function Contact() {
  return (
    <footer className="m-0 p-0">
      <div className="container-fluid p-0 m-0">
        <div className="row g-2 align-items-center">

          {/* Desktop Left Section */}
          <div className="col-md-3 d-none d-md-flex flex-column justify-content-end text-start">
            <a href="mailto:nandish@0grp.com" className="text-dark text-decoration-underline mb-2" style={{ fontSize: "1.5rem" }}>
              nandish@0grp.com
            </a>
            <a href="tel:+91981186774" className="text-dark text-decoration-underline" style={{ fontSize: "1.5rem" }}>
              +91-981186774
            </a>
          </div>

          {/* Right Section: More From Us + Images */}
          <div className="col-md-9 col-12 d-flex align-items-center flex-wrap justify-content-start">
            <h5 className="mb-0 me-2" style={{ fontSize: "1.5rem" }}>More From Us</h5>
            <img src={books} alt="books" style={{ width: "240px", height: "auto", marginRight: "10px" }} />
            <img src={travel} alt="travel" style={{ width: "240px", height: "auto", marginRight: "10px" }} />
            <img src={digital} alt="digital" style={{ width: "240px", height: "auto" }} />
          </div>

          {/* Mobile Email + Phone */}
          <div className="col-12 d-flex d-md-none justify-content-between mt-2">
            <a href="mailto:nandish@0grp.com" className="text-dark text-decoration-underline">
              nandish@0grp.com
            </a>
            <a href="tel:+91981186774" className="text-dark text-decoration-underline">
              +91-981186774
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
