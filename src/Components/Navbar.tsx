import React from "react";

import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
  <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    
    <a className="navbar-brand" >App</a>
  
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
        <Link className="nav-link" to={"ProductList"}>ProductList</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}export default NavBar
