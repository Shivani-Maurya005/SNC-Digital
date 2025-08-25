import React, { useEffect, useState } from "react";
import region from "../Components/image/client-region-768x173.png";
import breaking from "../Components/image/client-breakdown-768x178.png";
import graph from "../Components/image/service-1536x643.png";

function Counter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;
    const incrementTime = duration / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}</span>;
}

export default function Stats() {
  return (
    <div className="container-fluid mt-5">
      <div className="row stats-row" style={{ minHeight: "50vh" }}>
        <div
          className="col-md-4 d-flex flex-column justify-content-center align-items-center stats-left"
          style={{ gap: "0" }}
        >
          <div className="text-center stats-counter">
            <h1 style={{ fontSize: "5rem", margin: 0, fontWeight: "750" }}>
              <Counter target={70} />+
            </h1>
            <p style={{ fontSize: "1rem", margin: 0, lineHeight: "1" }}>
              Client Served
            </p>
          </div>

          <div className="text-center stats-counter">
            <h1 style={{ fontSize: "5rem", margin: 0, fontWeight: "750" }}>
              <Counter target={85} />%
            </h1>
            <p style={{ fontSize: "1rem", margin: 0, lineHeight: "1" }}>
              Client Retention Rate
            </p>
          </div>

          <div className="text-center stats-counter">
            <h1 style={{ fontSize: "5rem", margin: 0, fontWeight: "750" }}>
              <Counter target={95} />%
            </h1>
            <p style={{ fontSize: "1rem", margin: 0, lineHeight: "1" }}>
              Satisfaction Rate
            </p>
          </div>
        </div>

        <div className="col-md-8 d-flex flex-column align-items-center stats-images">
          <img
            src={region}
            alt="region"
            style={{ width: "75%", height: "45%", marginBottom: "20px" }}
          />
          <img src={breaking} alt="breaking" style={{ width: "75%", height: "45%" }} />
        </div>
      </div>

      <div className="stats-graph">
        <img src={graph} alt="graph" style={{ width: "100%", height: "65%" }} />
      </div>
    </div>
  );
}
