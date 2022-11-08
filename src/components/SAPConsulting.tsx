import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter, Link } from "react-router-dom";
import FreeMagnifyingGlass from "/assets/free-magnifying-glass.png";
import "../i18n";
import { useTranslation } from "react-i18next";

import "../scss/styles.scss";

function SAPConsulting() {
  const [t, i18n] = useTranslation();

  return (
    <div className="SAP-consulting" id="SAPConsulting">
      <Container className="mt-1 pt-2">
        <Row className="gx-1 g-lg-1">
          <Col>
            <h2> {t("SAPConsulting.title").toString()} </h2>
            <hr />
            <p> {t("SAPConsulting.offer").toString()} </p>
            <ul>
              <li> {t("SAPConsulting.bullet1").toString()} </li>
              <li> {t("SAPConsulting.bullet2").toString()} </li>
              <li> {t("SAPConsulting.bullet3").toString()} </li>
              <li> {t("SAPConsulting.bullet4").toString()} </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4 pt-4">
        <Row >
          <Col>
            <img
              src={process.env.PUBLIC_URL + "/assets/free-magnifying-glass.png"}
              className="free-magnifying-glass float-md-start me-3 me-md-5 "
              alt=""
              loading="lazy"
            />
            <h3>{t("SAPConsulting.Audit.title").toString()} </h3>
            <hr />
            <p> {t("SAPConsulting.Audit.item1").toString()} </p>
            <p> {t("SAPConsulting.Audit.item2").toString()} </p>
            <p> {t("SAPConsulting.Audit.item3").toString()} </p>
            <p> {t("SAPConsulting.Audit.item4").toString()} </p>
          </Col>
        </Row>
      </Container>
      <Container className="mt-4 pt-4">
        <Row className="gx-1 g-lg-1 ">
          <Col>
            <h3>{t("SAPConsulting.SAPExpertise.title").toString()} </h3>
            <hr />
            <p> {t("SAPConsulting.SAPExpertise.item1").toString()} </p>
            <ul>
              <li>{t("SAPConsulting.SAPExpertise.bullet1").toString()}</li>
              <li>{t("SAPConsulting.SAPExpertise.bullet2").toString()}</li>
              <li>{t("SAPConsulting.SAPExpertise.bullet3").toString()}</li>
              <li>{t("SAPConsulting.SAPExpertise.bullet4").toString()}</li>
              <li>{t("SAPConsulting.SAPExpertise.bullet5").toString()}</li>
              <li>{t("SAPConsulting.SAPExpertise.bullet6").toString()}</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4 pt-4">
        <Row className="gx-1 g-lg-1">
          <Col>
            <h3>{t("SAPConsulting.Deployment.title").toString()}</h3>
            <hr />
            <p> {t("SAPConsulting.Deployment.item1").toString()} </p>
            <p> {t("SAPConsulting.Deployment.item2").toString()} </p>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4 pt-4">
        <Row className="gx-1 g-lg-1">
          <Col>
            <h3> {t("SAPConsulting.Training.title").toString()} </h3>
            <hr />
            <p> {t("SAPConsulting.Training.item1").toString()} </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SAPConsulting;
