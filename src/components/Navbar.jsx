import React from "react";

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid ">
    <a className="navbar-brand  fs-2" href="#">
      DAMC
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active border border-primary text-primary" aria-current="page" href="#">Enquire Now</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
}

export default Navbar;
