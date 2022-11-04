import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter, Link } from "react-router-dom";

import backgroundVideo from "./assets/modern-plant-and-communication-network-concept-IoT.mp4";
import dogonLogo from "./assets/Logo-Dogon-blanc-sur-fond-noir-230x246.png";
import badgeS4conversion from "./assets/badge-S4-conversion.png";
import badgeS4financials from "./assets/badge-S4-financials.png";
import IA4SPlogosmall from "./assets/IA4SP-logo-small.jpg";

import "./scss/styles.scss";

function TopPage() {
  return (
    <Container fluid className="video-container">
      <video loop autoPlay muted id="bg-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <div className="dogon-title">
          <Row>
            <Col md={{ offset: 8 }}>
              <div className="dogon-logo">
                <img
                  src={dogonLogo}
                  className="img"
                  height="150"
                  alt=""
                  loading="lazy"
                />
              </div>
              <h1> Management Consulting </h1>
              <h1> Performance Management </h1>
              <h1> SAP Expertise </h1>
            </Col>
          </Row>
          <Row>
            <Col md={{ offset: 3 }}>
              <h2> SAP Partner</h2>
              <p> Open Ecosystem</p>
            </Col>
          </Row>
          <Row>
            <Col md={{ offset: 3 }}>
              <Container fluid className="badge-container">
                <a
                  href="https://www.youracclaim.com/badges/5e5341fe-f2e1-43e3-8c7e-8b6b1bd32976/public_url"
                  rel="noopener"
                  target="_blank"
                >
                  <img
                    src={badgeS4financials}
                    className="img"
                    height="140"
                    alt=""
                    loading="lazy"
                  />
                </a>
                <img
                  src={badgeS4conversion}
                  className="img"
                  height="140"
                  alt=""
                  loading="lazy"
                />
                <p>
                  Participation à des projets de co-innovation avec SAP <br />{" "}
                  Membre de la D.S.A.G. (Association des Utilisateurs SAP
                  germanophones) <br /> Membre de la D.F.C.G. (Association des
                  Directeurs Financiers et de Contrôle de Gestion){" "}
                </p>

                <img
                  src={IA4SPlogosmall}
                  className="img"
                  height="120"
                  alt=""
                  loading="lazy"
                />
              </Container>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default TopPage;
