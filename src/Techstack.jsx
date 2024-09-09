import React from 'react'
import { Col, Row } from "react-bootstrap";
import { FaHtml5 } from "react-icons/fa";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";
import {
  SiReactbootstrap ,
  SiBootstrap ,
  SiSass ,
  SiCss3,
  SiMysql 
} from "react-icons/si";
export default function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
    <FaHtml5 />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiJavascript1 />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <SiCss3 />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiNodejs />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiReact />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <SiBootstrap />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <SiMysql />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <SiReactbootstrap />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiGit />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <SiSass />
    </Col>
  </Row>  )
}
