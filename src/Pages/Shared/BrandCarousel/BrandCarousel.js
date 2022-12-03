import React from "react";
import { Carousel } from "react-bootstrap";
import Brand1 from "../../../assets/brands/Brand1.png";
import Brand2 from "../../../assets/brands/Brand2.png";
import Mahedi from "../../../assets/brands/mahedi.png";

const BrandCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={Brand1} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Brand2} alt="Second slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Mahedi} alt="Second slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default BrandCarousel;