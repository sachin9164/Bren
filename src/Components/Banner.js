import React from "react";
import Text from "./Text";
import Carousel from "./Carousel";

function Banner() {
  return (
    <>
      <div className="banner p-3">
        <div className="container">
          <div className="row">
            <div id="bantxt" className="col-12 col-sm-12 col-lg-6">
              <br></br>
              We build products that users
              <span
                style={{
                  display: "inline",
                  color: "#1cc06d",
                  fontWeight: "1200px",
                  fontSize: "40px !important"
                }}
              >
                {" "}
                <Text />
              </span>
              <br></br>
              <button id="btn1" type="button" class="btn btn-outline-success">
                READ MORE
              </button>
            </div>

            <div className="col-12 col-sm-12 col-lg-6">
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
