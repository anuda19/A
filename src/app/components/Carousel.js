"use client"
import Carousel from "react-bootstrap/Carousel";

const CarouselHome = () => {
  return (
    <div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://directlinedev.com/media/services/service/background/background_20_hD8OPbD.normal.jpeg"
            alt="First slide"
            height="500px"
          />
          <Carousel.Caption>
            <h5 className="fw-bold fs-2 text-white">Website Devlopment</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNry_1YjsRd4f1dNWj2UQi9ydZVaq8q3c9gw&usqp=CAU"
            alt="Second slide"
            height="500px"
          />
          <Carousel.Caption>
            <h5 className="fw-bold fs-2 text-white">App Devlopment</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnITx3VDcRc67fQSE5fZqODjesZ0-XtO2O2g&usqp=CAU"
            alt="Third slide"
            height="500px"
          />
          <Carousel.Caption>
            <h5 className="fw-bold fs-2 text-white">Digital Marketing</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselHome;
