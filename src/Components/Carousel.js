import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 5 }
};
const items = [
  <div className="item" data-value="1">
    <img
      className="rounded p-3"
      width="76%"
      src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=320"
    ></img>
  </div>,
  <div className="item" data-value="2">
    <img
      className="rounded p-3"
      width="76%"
      src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=320"
    ></img>
  </div>,
  <div className="item " data-value="3">
    <img
      className="rounded p-3"
      width="76%"
      src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=320"
    ></img>
  </div>,
  <div className="item" data-value="4">
    <img
      className="rounded p-3"
      width="76%"
      src="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=320"
    ></img>
  </div>
];

const Carousel = () => (
  <AliceCarousel
    autoPlay
    animationType="fadeout"
    animationDuration={1000}
    disableButtonsControls
    infinite
    responsive
    items={items}
    mouseTracking
  />
);

export default Carousel;
