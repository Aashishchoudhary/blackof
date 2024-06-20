import Image from "next/image";
import seafing from "../../public/seafacing.jpeg";
import gym from "../../public/gym.jpeg";
import hourber from "../../public/hourber.jpg";
import images from "../../public/images.jpeg";
import cabin from "../../public/cabin.jpeg";
import building from "../../public/building.jpg";
function Main() {
  return (
    <>
      <div
        class="
  bg-dark text-center"
      >
        <div class="container row">
          <div className="col mt-5   text-center ">
            <p className="ms-5 text-start">
              <span className="fs-1  text-light text-uppercase">
                Harbour Lights <br />
                de{" "}
              </span>{" "}
              <span className="text-info fs-1"> GRESOGONO</span>
              <br />
              <span className="text-light fs-6">
                1, 2 & 3 Bedrooms Seaside Apartments in <br /> Dubai Maritime
                City
              </span>
              <br />
              <br />
              <span className="border-start border-3  border-danger text-light">
                {" "}
                Rentel Returns UPTO 11%**
              </span>
              <br />
              <br />
              <span className=" border-start border-3  border-danger text-light">
                {" "}
                Capital Apprecation UPTO 32%**
              </span>
            </p>
          </div>
          <div className=" ms-5 col border border-info text-light mt-5">
            <p className="ms-5 text-start">
              <span className="text-sm">PRICE STARTS FROM</span>
              <br />
              <span className="fs-3">$ 425,000</span>
              <br />
              <span className="fs-5">AED 1.3 Million</span>
              <br />
              <button className="bg-info mt-2 border rounded ">
                {" "}
                GET A PRESENTATION
              </button>
              <br />
            </p>

            <p className="mt-5 border-top text-start">
              {" "}
              <span className="mt-5 ">
                Get On Expert's Presentation og Real Estate in Dubi for Life and
                investment
              </span>
            </p>
          </div>
        </div>
      </div>

      <div class="container text-center mt-3">
        <div class="row">
          <div class="col  ">
            <i class="bi bi-buildings-fill fs-1"></i> <br />
            <span className="fs-4">BOOK WITH</span> <br />
            <span className="fs-2 blockquote">ONLY 20%</span>
          </div>
          <div class="col">
            <i class="bi bi-percent fs-1 border border-dark border-2 rounded-circle p-2"></i>
            <br />
            <span className="fs-5">PAYMENT PLAN </span> <br />
            <span className="fs-2 blockquote">EASY 30/70</span>
          </div>
          <div class="col">
            <i class="bi bi-person-arms-up fs-1"></i>
            <br />
            <span className="fs-5">HANDOVER ON</span> <br />
            <span className="fs-2 blockquote">Q2 2027</span>
          </div>
          <div class="col">
            <i class="bi bi-input-cursor fs-1"></i>
            <br />
            <span className="fs-6">AREA STARTS FROM</span> <br />
            <span className="fs-2 blockquote">700 SQMT</span>
          </div>
        </div>
      </div>
      <div className="text-center text-success mt-2">
        <p>
          <span className="fs-1">
            HARBOUR <br /> LIGHTS
          </span>
          <br />
          <span className="FS-6">de GRISOGONO</span>
          <br /> <span>GENEVE </span>
        </p>
        <p></p>
      </div>
      <div className="text-center fs-2 text-info"> FEATURES & AMENITIES</div>
      <p className="text-center fs-5">
        {" "}
        Harbour Lights beautifully honours maritime voyages while embracing an
        opulent seafront lifestyle. <br /> Its maritime-inspired amenities
        provide an unmatched seaside exprience, offering a life <br /> of
        teanquility and bliss
      </p>

      <div className="row mt-2">
        <div className="col ms-5 align-items-center">
          <div class="crdiv" style={{ width: "18rem" }}>
            <Image src={seafing} class="crdimg" alt="..."></Image>
            <div class="card-body">
              <h5 class="text-center">
                Sea Facing <br />
                Swimming Pool
              </h5>
            </div>
          </div>
        </div>
        <div className="col ms-5 align-items-center">
          <div class="crdiv" style={{ width: "18rem" }}>
            <Image src={gym} class="crdimg" alt="..."></Image>
            <div class="card-body">
              <h5 class="text-center">
                Gymnasium <br />& Fitness
              </h5>
            </div>
          </div>
        </div>
        <div className="col ms-5 align-items-center">
          <div class="crdiv" style={{ width: "18rem" }}>
            <Image src={cabin} class=" crdimg" alt="..."></Image>
            <div class="card-body">
              <h5 class="text-center">
                Spacious Cabins <br />
                Like Rooms
              </h5>
            </div>
          </div>
        </div>
        <div className="col ms-5 align-items-center">
          <div class="crdiv" style={{ width: "18rem" }}>
            <Image src={images} class="crdimg" alt="..."></Image>
            <div class="card-body">
              <h5 class="text-center">
                Floating <br />
                Pools
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row-reverse">
        <p className="fs-8" s>
          *T&Cs apply | **Based on similar branded projects in last 2 years.
          Source 1 | Source 2
        </p>
      </div>
      <div className="d-flex flex-row-reverse mb-3">
        {" "}
        <div class="p-2 border bg-primary mr-2 ">EXTEIOROS</div>
        <div class="p-2 border broder-dark-2 ms-2">INTERIORS</div>{" "}
      </div>
      <div className="container">
        <Image className="building-img" src={building} alt=""></Image>
      </div>
      <div className="container">
        <div className="imgdiv ">
          <Image src={images} class="crdimg1" alt="..."></Image>
          <Image src={gym} class="crdimg1" alt="..."></Image>
          <Image src={seafing} class="crdimg1" alt="..."></Image>
          <Image src={images} class="crdimg1" alt="..."></Image>
        </div>
      </div>
      <div className="footer"> <p className="footer-para">© DAMC copyright 2024 All Rights Reserved</p></div>
    </>
  );
}

export default Main;
