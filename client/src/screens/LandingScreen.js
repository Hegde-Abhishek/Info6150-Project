import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Card from '../components/Card'
import "./LandingScreen.css"
// ..
AOS.init({
  duration: 2000,
});

function LandingScreen() {
  return (
    <div className="home">
    <div className="row landing">
      <div className="col-md-12 text-center">
        <h2 data-aos="zoom-in" style={{ color: "white", fontSize: "100px" }}>
          WELCOME
        </h2>
        <h1 data-aos="zoom-out" style={{ color: "white" }}>
          There is only one boss. The Guest.
        </h1>
        <Link to="/home">
          <button className="btn btn-primary landingButton">Get Started</button>
        </Link>
      </div>
    </div>
    <div className='home_section'>
    <Card
        src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
        title="Services"
        description="Unique activities we can do together, led by a world of hosts."
    />
    <Card
        src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
        title="Amenities"
        description="Spaces that are more than just a place to sleep."
    />
    <Card
        src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
        title="Restaurant"
        description="Comfortable private places, with room for friends or family."
    />
    </div>
    <div className='home_section'>
    <Card
        src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
        title="Deluxe Rooms"
        description="Superplace with a stunning view of the beachside in Sunny Bournemouth"
        price="£130/night"
    />
    <Card
        src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
        title="Luxury Rooms"
        description="Enjoy the amazing sights of London with this stunning penthouse"
        price="£350/night"
    />
    <Card
        src="https://media.nomadicmatt.com/2018/apartment.jpg"
        title="Single Rooms"
        description="Superhost with great amenities and a fabolous shopping complex nearby"
        price="£70/night"
    />
    </div>
    </div>
  );
}

export default LandingScreen;
