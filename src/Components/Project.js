import React from "react";
import "../styles.css";

function Project() {
  return (
    <>
      <div className="project bg-light" style={{ backgroundColor: "#eff3f6" }}>
        <div className="container p-4 bg-light">
          <div className="row">
            <div className="col-6 col-lg-3 col-sm-6 text-center">
              <h1>100+</h1>
              <p>Project</p>
            </div>
            <div className="col-6 col-lg-3 col-sm-6 text-center">
              <h1>70+</h1>
              <p>Clients</p>
            </div>
            <div className="col-6 col-lg-3 col-sm-6 text-center">
              <h1>6+</h1>
              <p>Years</p>
            </div>
            <div className="col-6 col-lg-3 col-sm-6 text-center">
              <h1>25+</h1>
              <p>Teams</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
