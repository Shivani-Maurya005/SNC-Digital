import React from 'react'
import A from '../Components/image/20160131.png'
import B from '../Components/image/20160132.png'
import C from '../Components/image/20160133.png'
import D from '../Components/image/Delhi.png'

const Grid = () => {
   const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="container">
        <h1 className="grid-heading">
          We don’t just follow trends, we join the conversation.
        </h1>
      </div>

      <div className="container-fluid mt-5 p-0">
        <div
          id="cardCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="carousel-inner">

            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="row g-3">
                <div className="col-md-4 col-12">
                  <div className="card border-0">
                    <img src={A} className="card-img-top" alt="Card 1" onClick={scrollToTop}  />
                    <div className="card-body">
                      <h5 className="card-title text-decoration-underline">Name of the Event</h5>
                      <p className="card-text">SNC Digital is a B2B partner to agencies, providing reliable, high-quality
creative and back – end services.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-12">
                  <div className="card border-0">
                    <img src={B} className="card-img-top" alt="Card 2" onClick={scrollToTop} />
                    <div className="card-body">
                      <h5 className="card-title text-decoration-underline">Name of the Event</h5>
                      <p className="card-text">SNC Digital is a B2B partner to agencies, providing reliable, high-quality
creative and back – end services.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-12">
                  <div className="card border-0">
                    <img src={C} className="card-img-top" alt="Card 3" onClick={scrollToTop} />
                    <div className="card-body">
                      <h5 className="card-title text-decoration-underline">Name of the Event</h5>
                      <p className="card-text">SNC Digital is a B2B partner to agencies, providing reliable, high-quality
creative and back – end services.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="row g-3">
                <div className="col-md-4 col-12">
                  <div className="card border-0">
                    <img src={D} className="card-img-top" alt="Card 4" onClick={scrollToTop} />
                    <div className="card-body">
                      <h5 className="card-title text-decoration-underline">Name of the Event</h5>
                      <p className="card-text">SNC Digital is a B2B partner to agencies, providing reliable, high-quality
creative and back – end services.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-12">
                  <div className="card border-0">
                    <img src={A} className="card-img-top" alt="Card 1 Repeat" onClick={scrollToTop}  />
                    <div className="card-body">
                      <h5 className="card-title text-decoration-underline">Name of the Event</h5>
                      <p className="card-text">SNC Digital is a B2B partner to agencies, providing reliable, high-quality
creative and back – end services.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-12">
                  <div className="card border-0">
                    <img src={B} className="card-img-top" alt="Card 2 Repeat" onClick={scrollToTop} />
                    <div className="card-body">
                      <h5 className="card-title text-decoration-underline">Name of the Event</h5>
                      <p className="card-text">SNC Digital is a B2B partner to agencies, providing reliable, high-quality
creative and back – end services.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="text-center">
          <hr
            style={{
              borderColor: "black",
              borderWidth: "2px",
              margin: "1px auto",
              width: "100%"
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Grid
