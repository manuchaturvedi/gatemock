import React from 'react'
import PropTypes from 'prop-types'
import Carousel from 'react-bootstrap/Carousel'
import "./slider.css";


function Slider(props) {
    return (
        <div>
 <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="Dbms.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      
      <p>Check our Preparation with DBMS Quiz </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="CAP.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <p>Prepare Yourself for capgemini pseudo round.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="GATETALK.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <p>TAKE EXPERT ADVISE FROM EXPERTS.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>           
        </div>
    )
}
export default Slider

