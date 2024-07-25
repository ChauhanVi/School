import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/logo.jpg';  // Adjust the path to your logo image
import sportsDay from '../assets/images/sports_day.jpg';  // Local image for sports day
import scienceExhibition from '../assets/images/science_exhibition.jpg';  // Local image for science exhibition
import culturalFest from '../assets/images/cultural_fest.jpg';  // Local image for cultural fest

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <img src={logo} alt="Springdale Public School Logo" className="school-logo" />
        <h1>Springdale Public School</h1>
      </header>

      <p className="introduction">
        Welcome to Springdale Public School, where we nurture young minds for a brighter future.
      </p>

      <Carousel className="home-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sportsDay}
            alt="Annual Sports Day"
          />
          <Carousel.Caption>
            <h3>Annual Sports Day</h3>
            <p>Celebrating Excellence in Sports</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={scienceExhibition}
            alt="Science Exhibition"
          />
          <Carousel.Caption>
            <h3>Science Exhibition</h3>
            <p>Showcasing Student Innovations</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={culturalFest}
            alt="Cultural Fest"
          />
          <Carousel.Caption>
            <h3>Cultural Fest</h3>
            <p>Embracing Diversity and Creativity</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;


