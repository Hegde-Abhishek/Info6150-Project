import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Card from '../components/Card'
import "./LandingScreen.css"
import Image from "../components/rActivity.jpg"
// ..
AOS.init({
  duration: 2000,
});

function LandingScreen() {
  return (
    <div className="home">
    <div className="row landing">
      <div className="col-md-12 text-center">
        {/* <h3 data-aos="zoom-in" style={{ color: "white", fontSize: "100px" }}>
          The Paradise
        </h3>
        <h1 data-aos="zoom-out" style={{ color: "white" }}>
        Welcome to our luxury resort, nestled in the beautiful beaches. The ideal destination for a relaxing and memorable holiday and the ultimate getaway for couples, families, and solo travelers alike.
        </h1> */}
        <h3 data-aos="zoom-in" style={{ color: "white", fontSize: "50px", textAlign: "center", marginBottom: "20px" }}>
  The Paradise
</h3>
<p style={{ color:"white",textAlign: "center", fontSize: "24px", lineHeight: "1.5", maxWidth: "800px", margin: "0 auto 50px", textShadow:"1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue" }}>
    Nestled in the beautiful beaches, our resort is the ideal destination for a relaxing and memorable holiday. Whether you're a couple, family, or solo traveler, you'll find the ultimate getaway here.
</p>
        <Link to="/home">
          <button className="btn btn-primary landingButton">Get Started</button>
        </Link>
      </div>
    </div>
    <div className='home_section'>
    <Card
        src= {Image}
        title="Activities"
        description="Unique activities we can do together, led by a world of hosts."
    />
    <Card
        src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
        title="Best Resort Award 2023"
        description="We have secured Best Resort in the state of MA Award in 2023."
    />
    <Card
        src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
        title="Services"
        description="Comfortable private places, with room for friends or family."
    />
    </div>
    <div className='home_section'>
    <Card
        src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
        title="Deluxe Rooms"
        description="Superplace with a stunning view of the beachside in Sunny Bournemouth"
        price="$299/night"
    />
    <Card
        src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
        title="Luxury Rooms"
        description="Enjoy the amazing sights of London with this stunning penthouse"
        price="$449/night"
    />
    <Card
        src="https://media.nomadicmatt.com/2018/apartment.jpg"
        title="Single Rooms"
        description="Superhost with great amenities and a fabolous shopping complex nearby"
        price="$199/night"
    />
    </div>
    </div>
  );
}

export default LandingScreen;
