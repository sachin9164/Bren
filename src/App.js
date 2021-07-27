import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Project from "./Components/Project";
import Banner from "./Components/Banner";
import Wavefooter from "./Components/Wave";
import Footer from "./Components/Footer";
import Product from "./Components/Product";
import Slide from "react-reveal/Slide";
import Carousel1 from "./Components/Carousel1";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Slide bottom duration={2000}>
        <Banner />
        <Product />
        <div className="container">
          <Carousel1 />
        </div>
        <br></br>
        <Project />
      </Slide>
      <Wavefooter />
    </div>
  );
}
