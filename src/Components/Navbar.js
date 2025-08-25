import React from 'react';
import logo from "../Components/image/Asset-1.png"
export default function Navbar() {
return (
  <nav className="navbar navbar-expand-lg navbar-white bg-white p-0 m-0">
    <div className="container-fluid p-0 m-0">
      <img
        src={logo}
        alt="Logo"
        style={{ width: "150px", height: "auto", display: "block" }}
      />
    </div>
    
  </nav>
);



  
}
