import React from "react";

function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid ">
    <a class="navbar-brand  fs-2" href="#">
      DAMC
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active border border-primary text-primary" aria-current="page" href="#">Enquire Now</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
}

export default Navbar;
