import React from "react";

function Footer() {
  return (
    <div className="footer p-3">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img
              src="https://www.kenyt.ai/botapp/api/botsetup/getimage?imagetype=chatbubble-icon&botid=10122"
              class="rounded mx-auto d-block"
              alt="..."
            ></img>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-6 col-lg-3">
                <ul>
                  <li>Bangalore</li>
                  <li>Mysore</li>
                  <li>Manglore</li>
                  <li>Hubli</li>
                  <li>Bangalore</li>
                  <li>Mysore</li>
                  <li>Manglore</li>
                  <li>Hubli</li>
                </ul>
              </div>
              <div className="col-6 col-lg-3">
                <ul>
                  <li>Bangalore</li>
                  <li>Mysore</li>
                  <li>Manglore</li>
                  <li>Hubli</li>
                </ul>
              </div>
              <div className="col-6 col-lg-3">
                <ul>
                  <li>Career</li>
                  <li>Disclaimer</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div className="col-6 col-lg-3">
                <ul>
                  <li>
                    <b>GET IN TOUCH</b>
                  </li>
                  <li>+91 92121929</li>
                  <li>feedback@bren.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
