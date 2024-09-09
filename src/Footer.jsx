// Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="text-light py-3" style={{backgroundColor:'#021e34'}}>
      <Container>
        <Row className="align-items-center">
          {/* Left Side: Copyright */}
          <Col xs={12} md={6} className="text-center text-md-start">
            {/* <p className="mb-0">&copy; 2024 </p> */}
          </Col>

          {/* Right Side: Design and Developed by */}
          <Col xs={12} md={6} className="text-center text-md-end">
            <p className="mb-0">Design and Developed by <span className='purple' style={{fontWeight:'bold'}}>Pradeep</span>  </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
