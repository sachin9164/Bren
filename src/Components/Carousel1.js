import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 5 }
};
const items = [
  <div className="item bg-light rounded p-3 shadow-sm" data-value="1">
    <div id="project-txt" className="text-center p-0 mx-5 my-5">
      TESTIMONIALS
    </div>

    <p>
      <b>
        {" "}
        "Bren is not just about building homes, workspaces and retail spaces. It
        is a way of thinking and creating. Rooted in a development legacy of
        over 3 decades, innovation in techniques and the customer’s needs have
        been the cornerstones of all our projects."
      </b>
    </p>
    <p>- Bhargav Parnandi</p>
    <div className="row p-5">
      <div id="line1" className="col align-self-center">
        <div id="line"></div>
      </div>
    </div>
  </div>,
  <div className="item bg-light rounded p-3 shadow" data-value="2">
    <div id="project-txt" className="text-center p-0 mx-5 my-5">
      TESTIMONIALS
    </div>

    <p>
      <b>
        “My experience with Bren has been very good, especially the sales team.
        I was strongly influenced by the quality of construction. This is my
        first purchase, I find everything unique. Whenever I visit the project I
        feel like I’ve come home. Every time I meet my friends I tell them to
        consider Bren.”
      </b>
    </p>
    <p>- Prasenjit Kumar</p>
    <div className="row p-5">
      <div id="line1" className="col align-self-center">
        <div id="line"></div>
      </div>
    </div>
  </div>,
  <div className="item bg-light rounded p-3 shadow-sm" data-value="3">
    <div id="project-txt" className="text-center p-0 mx-5 my-5">
      TESTIMONIALS
    </div>

    <p>
      <b>
        “Bren is a strong organisation. The sales team is very cooperative and
        supportive. They follow up on customers’ requests and work on them. Bren
        has a set track record in delivering projects on time. This was very
        important for me. The property is in the middle of the IT hub; a very
        good location. I definitely recommend Bren Champion Square.”
      </b>
    </p>

    <div className="row p-5">
      <div id="line1" className="col align-self-center">
        <div id="line"></div>
      </div>
    </div>
  </div>,
  <div className="item bg-light rounded p-3 shadow-sm" data-value="4">
    <div id="project-txt" className="text-center p-0 mx-5 my-5">
      TESTIMONIALS
    </div>

    <p>
      <b>
        “The location was always very important. But what influenced me more was
        the quality of construction and the presentation of the project. The
        best reason to buy was of course the feedback I got from other Bren
        customers. I have not seen another builder with such a record of on-time
        delivery.”
      </b>
    </p>
    <p>- Akash Ghosh</p>
    <div className="row  bg-light rounded p-5">
      <div id="line1" className="col align-self-center">
        <div id="line"></div>
      </div>
    </div>
  </div>
];

const Carousel1 = () => (
  <AliceCarousel
    autoPlay
    animationType="fadeout"
    animationDuration={500}
    disableDotsControls
    disableButtonsControls
    infinite
    responsive
    items={items}
    mouseTracking
  />
);

export default Carousel1;
