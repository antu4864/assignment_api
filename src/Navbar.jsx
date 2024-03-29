import React from "react";
import {NavLink} from "react-router-dom";


const Navbar =()=>{
    return(

<>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/Detail/Antu">Detail</NavLink>
        </li>
     
        </ul>
    </div>
  </div>
</nav>

</>

    );

};
export default Navbar;