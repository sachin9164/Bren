import React from "react";
import Fade from "react-reveal/Fade";
function Product() {
  return (
    <div className="products">
      <div className="container">
        <div id="project-txt" className="text-center p-0 mx-5 my-5">
          EFFICIENCY AND EVOLUTION ARE AT THE CORE OF HOW WE THINK, DESIGN AND
          BUILD.
        </div>
        <br></br>
        <p>
          {" "}
          Bren is not just about building homes, workspaces and retail spaces.
          It is a way of thinking and creating. Rooted in a development legacy
          of over 3 decades, innovation in techniques and the customer’s needs
          have been the cornerstones of all our projects.
        </p>

        <div className="row p-1">
          <div id="line1" className="col align-self-center">
            <div id="line"></div>
          </div>
        </div>
        <div className="row p-3">
          <div className="col-lg-4 p-3">
            <div class="card shadow ">
              <img
                src="https://www.bren.com/residential/images/champions_logo_home.png"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>

                <a href="#" class="btn btn-success">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 p-3">
            <div class="card shadow ">
              <img
                src="https://www.bren.com/residential/images/NL_logo_home.png"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-success">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 p-3">
            <div class="card shadow">
              <img
                src="https://www.bren.com/residential/images/imperia_logo_home.png"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-success">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
