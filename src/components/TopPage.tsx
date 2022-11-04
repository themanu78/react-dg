import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter, Link } from "react-router-dom";
import backgroundVideo from "/assets/modern-plant-and-communication-network-concept-IoT.mp4";
import dogonLogo from "/assets/Logo-Dogon-blanc-sur-fond-noir-230x246.png";
import badgeS4conversion from "/assets/badge-S4-conversion.png";
import badgeS4financials from "/assets/badge-S4-financials.png";
import IA4SPlogosmall from "/assets/IA4SP-logo-small.png";
import "../i18n";
import { useTranslation } from "react-i18next";
import "../scss/styles.scss";

function TopPage() {
  const [t, i18n] = useTranslation();

  return (
    <Container className="top-page" id="DogonConsulting">
      <div className="overlay">
        <video loop autoPlay muted>
          <source src={process.env.PUBLIC_URL +"/assets/modern-plant-and-communication-network-concept-IoT.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Row className="mt-5 pt-5 mx-2 mx-sm-0">
          <Col xs={{ offset: 1 }} lg={{ offset: 5 }} xxl={{ offset: 6 }}>
            <img
              src={process.env.PUBLIC_URL +"/assets/Logo-Dogon-blanc-sur-fond-noir-230x246.png"}
              className="dogon-logo float-sm-start me-1 me-sm-5 pt-3"
              alt=""
              loading="lazy"
            />
            <h1> {t("General.ManagementConsulting").toString()} </h1>
            <h1> {t("General.PerformanceManagement").toString()} </h1>
            <h1> {t("General.SAPExpertise").toString()} </h1>
          </Col>
        </Row>

        <div className="badge-container">
          <Row className="mt-5 mt-xxl-1 pt-5 pt-xxl-1">
            <Col xs={{ offset: 1 }} lg={{ offset: 2 }}>
              <h2> SAP Partner</h2>
              <h3> Open Ecosystem</h3>
            </Col>
          </Row>
          <Row>
            <Col xs={{ offset: 1 }} lg={{ offset: 2 }}>
              <a
                href="https://www.youracclaim.com/badges/5e5341fe-f2e1-43e3-8c7e-8b6b1bd32976/public_url"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={process.env.PUBLIC_URL +"/assets/badge-S4-financials.png"}
                  className="sap-badge"
                  alt=""
                  loading="lazy"
                />
              </a>
            </Col>
            <Col>
              <a
                href="https://www.youracclaim.com/badges/acdc5d14-74d5-48b4-96bc-014044d75d23/public_url"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={process.env.PUBLIC_URL +"/assets/badge-S4-conversion.png"}
                  className="sap-badge"
                  alt=""
                  loading="lazy"
                />
              </a>
            </Col>
            <Col xs={{ span: 6 }} lg={{ span: 7 }}>
              <h3> {t("General.coinnovation").toString()} </h3>
              <h3> {t("General.DSAG").toString()} </h3>
              <h3>{t("General.DFCG").toString()} </h3>

            </Col>
            <Col />
          </Row>
          <Row className="mt-1">
            <Col xs={{ offset: 1, span: 3 }} lg={{ offset: 2, span: 3 }}>
              <img
                src={process.env.PUBLIC_URL +"/assets/IA4SP-logo-small.png"}
                className="sap-badge"
                alt=""
                loading="lazy"
              />
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default TopPage;
