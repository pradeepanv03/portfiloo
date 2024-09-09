import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from './Type';
import Tilt from "react-parallax-tilt";
// import {
//   AiFillGithub,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
// import { BiLogoGmail } from "react-icons/bi";

import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import homeicon from './assets/homeicon.png'
import abouticon from './assets/abouticon.png'

export default function Home() {
  return (
    <>
    <Container fluid className="home-section" id="home">
    {/* <Particle /> */}
    <Container className="home-content">
      <Row>
      {/* <Col md={5} style={{ paddingBottom: 20 }}>
          <img
            src={homeicon}
            alt="home pic"
            className="img-fluid"
            // style={{ maxHeight: "450px" }}
          />
        </Col> */}
        <Col md={7} className="home-header">
          <h1 style={{ paddingBottom: 15 }} className="heading">
            Hi There!{" "}
            {/* <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span> */}
          </h1>

          <h1 className="heading-name">
            My name is
            <strong className="main-name"> V PRADEEPAN </strong>
          </h1>

          <div style={{ padding: 50, textAlign: "left" }}>
            <Type />
          </div>
        </Col>

       
      </Row>
    </Container>
  </Container> 

<Container fluid className="home-about-section">
<Container>
  <Row>
    <Col md={8} className="home-about-description">
      <h1 style={{ fontSize: "2.6em" }}>
        LET ME <span className="purple"> INTRODUCE </span> MYSELF
      </h1>
      <p className="home-about-body">
        I fell in love with programming and I have at least learnt
        something, I think… 🤷‍♂️
        <br />
        <br />Know I am learning in classics like
        <i>
          <b className="purple"> React, Javascript and database. </b>
        </i>
        <br />
        <br />
        My field of Interest's are building new &nbsp;
        <i>
          <b className="purple">Web Technologies and Products </b> and
          also in areas related to{" "}
          <b className="purple">
            Blockchain.
          </b>
        </i>
        <br />
        <br />
        Whenever possible, I also apply my passion for developing products
        with <b className="purple">Node.js</b> and
        <i>
          <b className="purple">
            {" "}
            Modern Javascript Library and Frameworks
          </b>
        </i>
        &nbsp; like
        <i>
          <b className="purple"> React.js</b>
        </i>
      </p>
    </Col>
    <Col md={4} className="myAvtar">
      <Tilt>
        <img src={abouticon} className="img-fluid" alt="avatar" />
      </Tilt>
    </Col>
  </Row>
  {/* <Row>
    <Col md={12} className="home-about-social">
      <h1>FIND ME ON</h1>
      <p>
        Feel free to <span className="purple">connect </span>with me
      </p>
      <ul className="home-about-social-links">
        <li className="social-icons">
          <a
            href="https://github.com/pradeepanv03"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <AiFillGithub />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://twitter.com/Soumyajit4419"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
<PiMicrosoftOutlookLogoFill />
</a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/soumyajit4419/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
<BiLogoGmail />
</a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.instagram.com/soumyajit4419"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <AiFillInstagram />
          </a>
        </li>
      </ul>
    </Col>
  </Row> */}
</Container>
</Container>
</>
)
}
