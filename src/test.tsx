import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter, Link } from "react-router-dom";
import Stack from "react-bootstrap/Stack";

import backgroundVideo from "./assets/modern-plant-and-communication-network-concept-IoT.mp4";
import dogonLogo from "./assets/Logo-Dogon-blanc-sur-fond-noir-230x246.png";
import badgeS4conversion from "./assets/badge-S4-conversion.png";
import badgeS4financials from "./assets/badge-S4-financials.png";
import IA4SPlogosmall from "./assets/IA4SP-logo-small.jpg";

import "./scss/styles.scss";

function Test() {
  return (
    <div>
      <Container>
        <Row className="px-3 mx-5 my-5 ">
          <Col lg={{ span: 2, offset: 3 }}>
            <img
              src={process.env.PUBLIC_URL +"/assets/customers/tyco.png"}
              className="img-fluid"
              alt=""
              loading="lazy"
            />
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default Test;
