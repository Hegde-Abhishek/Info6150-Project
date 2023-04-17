import React from "react";
import Card from "../components/ServiceCard";
import Image from "./pexels-photo-258154.jpeg";
import Img from "../components/img.jpeg";
import GymImg from "../components/mmm.jpg"
import "./ServicesScreen.css";

const ServicesScreen = () => {
  const services = [
    {
      title: "Gym",
      description: "Stay fit and active during your stay with our fully equipped gym.",
      image: GymImg
    },
    {
      title: "Pickup & Drop",
      description: "We offer a convenient pickup and drop-off service to and from the airport.",
      image: "/pickup-drop.jpg"
    },
    {
      title: "Restaurant",
      description: "Enjoy delicious meals and refreshing drinks at our on-site restaurant.",
      image: Img
    },
    {
      title: "Amenities",
      description: "We offer a range of amenities including laundry, dining, and more.",
      image: Image
    }
  ];

  return (
    <>
      <div className="hero-container">
        <h1 className="hero-text">The Paradise</h1>
      </div>
      <section className="services-container">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <Card key={index} className="service-card">
              <img src={service.image} alt={service.title} className="service-image" />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </Card>
          ))}
        </div>
      </section>
      <footer className="footer-container">
        <p className="footer-text">&copy; The Paradise Resort 2023</p>
      </footer>
    </>
  );
};

export default ServicesScreen;
