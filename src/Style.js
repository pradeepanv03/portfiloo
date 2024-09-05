import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { FaMapMarkerAlt, FaClock, FaMoneyBillWave, FaHeart, FaCalendarAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function JobCard() {
  return (
    <Card className="d-flex flex-row align-items-center p-3">
      <Card.Img 
        variant="left" 
        src="https://via.placeholder.com/50" 
        style={{ width: '50px', height: '50px', marginRight: '15px' }} 
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title></Card.Title>
        <Card.Text className="d-flex flex-wrap align-items-center">
          <span className="me-3"><FaMapMarkerAlt /> New York, USA</span>
          <span className="me-3"><FaClock /> Full Time</span>
          <span><FaMoneyBillWave /> $123 - $456</span>
        </Card.Text>
      </Card.Body>
      <div className="ms-auto d-flex align-items-center">
        <FaHeart className="me-3" style={{ color: '#28a745' }} /> 
        <Button variant="success" className="me-3">Apply Now</Button>
        <div className="text-muted"><FaCalendarAlt />Date Line: 01 Jan, 2045</div>
      </div>
    </Card>
  );
}

export default JobCard;
