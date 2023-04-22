import React from "react";
import Card from "../components/ServiceCard";
import Cards from "../components/Card"
import Image from "../components/ER.jpg";
import Img from "../components/BD.jpg";
import GymImg from "../components/mmm.jpg"
import Rest from "../components/img.jpeg"
import "./ServicesScreen.css";
import { useState } from "react";
import { Row, Col } from 'react-bootstrap';

  const services = [
    {
      title: "Amenities",
      description: "We offer a range of amenities including laundry, dining, and more.",
      image: GymImg,
      exp:"Gym : Stay fit and active during your stay with our fully equipped gym. We offer pickup and drop services from and/or to airport, laundary, dining, games room and much more."
    },
    {
      title: "Event Rooms",
      description: "We offer a convenient space for any kind of events, like birthdays, business events, ceremonies, etc.",
      image: Image,
      exp:"Customers can reserve event spaces for any type of event, including weddings, birthday parties, business meetings, and more, where we also provide supplemental services like decoration, catering, photography, and music."
    },
    {
      title: "Restaurant",
      description: "Enjoy delicious meals and refreshing drinks at our on-site restaurant.",
      image: Img,
      exp:"We also have a choice of bars and restaurants at our resort that serve both international and regional cuisine. To achieve the highest level of quality of food, our seasoned chefs employ the freshest ingredients."
    }
  ];
  const ServicesScreen = () => {
    const [serviceDetails, setServiceDetails] = useState(services.map(() => ({ showDetails: false, details: null })));
    const toggleDetails = (index) => {
        setServiceDetails((prevState) => {
          const updatedDetails = [...prevState];
          updatedDetails[index] = {
            ...prevState[index],
            showDetails: !prevState[index].showDetails,
            details: prevState[index].showDetails ? null : (
              <div className="service-details">
                <p>Additional details for {services[index].title}.</p>
                <ul>
                  <li>{services[index].exp}</li>
                </ul>
              </div>
            )
          };
          return updatedDetails;
        });
      };
      

  return (
    <>
      <div className="hero-container">
        <h1 className="hero-text">The Paradise</h1>
      </div>
      {/* <section className="services-container">
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
      </section> */}
<section className="services-container">
  <h2 className="services-title">Our Services</h2>
  <div className="services-grid">
    {services.map((service, index) => (
      <Card key={index} className="service-card">
      <img src={service.image} alt={service.title} className="service-image" />
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>
      <button className="service-button" onClick={() => toggleDetails(index)}>
        {serviceDetails[index].showDetails ? 'Hide Details' : 'Read More'}
      </button>
      {serviceDetails[index].details}
    </Card>
    ))}
  </div>
</section>

<section className="spad">
  <div className="container">
    <Row>
      <Col lg={6}>
        <div className="about-text">
          <div className="section-title">
            <span>Explore our</span>
            <h2>Restaurant and Bar</h2>
          </div>
          <p className="f-para">Indulge in delectable cuisine from around the world at our elegant restaurant, where our chefs prepare each dish with the utmost care and attention to detail. Or, if you're in the mood for a refreshing cocktail or beverage, visit our stylish bar and let our skilled bartenders craft the perfect drink for you.</p>
          <a href="#" className="primary-btn about-btn">Read More</a>
        </div>
      </Col>
      <Col lg={6}>
        <div className="about-pic">
          <Row>
            <Col sm={6}>
            <Cards
        src={Rest}
        title="Top Chefs"/>
            </Col>
            <Col sm={6}>
            <Cards
        src="https://media.nomadicmatt.com/2018/apartment.jpg"
        title="Great Bar"/>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  </div>
</section>


      {/* <footer className="footer-container">
        <p className="footer-text">&copy; The Paradise Resort 2023</p>
      </footer> */}
    </>
  );
};

export default ServicesScreen;
