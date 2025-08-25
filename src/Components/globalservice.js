import React from 'react'
import global from '../Components/image/globe1-1536x720.png'


const GlobalService = () => {
  return (
    <div className="global-service-container">
      <h1 className="global-service-heading">
        Our Global Footprint and <br /> Service Insights
      </h1>

      <div>
        <img src={global} alt="global" className="global-service-image" />
      </div>
    </div>
  );
};

export default GlobalService;


