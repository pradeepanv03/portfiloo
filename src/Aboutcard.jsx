import React from 'react'
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
export default function Aboutcard() {
  return (
    <Card className="quote-card-view">
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am <span className="purple">V Pradeepan </span>
          from <span className="purple"> Cuddalore, TN.</span>
          <br />
          I am currently looking entry level for software developer.
          <br />
          I have completed React js part-time course at FITA
          academy.
          <br />
          <br />
          Apart from coding, some other activities that I love to do!
        </p>
        <ul>
          <li className="about-activity">
            <ImPointRight /> Playing Games
          </li>
          <li className="about-activity">
            <ImPointRight /> Writing Tech Blogs
          </li>
          <li className="about-activity">
            <ImPointRight /> Travelling
          </li>
        </ul>

        <p style={{ color: "#397ec0" }}>
          "Strive to build things that make a difference!"{" "}
        </p>
        <footer className="blockquote-footer">Pradeepan</footer>
      </blockquote>
    </Card.Body>
  </Card>  )
}
