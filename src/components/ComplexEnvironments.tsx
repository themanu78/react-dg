import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter, Link } from "react-router-dom";
// import FreeLegal from "/assets/free-legal.png";
import FreeShuttle from "/assets/free-shuttle.png";
import "../i18n";
import { useTranslation } from "react-i18next";

import "../scss/styles.scss";

function ComplexEnvironments() {
  const [t, i18n] = useTranslation();

  return (
    <div className="complex-environments">
      <Container className="mt-1 pt-2">
        <Row className="gx-1 g-lg-1">
          <Col>
            <img
              src={process.env.PUBLIC_URL + "/assets/free-legal.png"}
              className="free-legal float-md-start me-3 me-md-5 "
              alt=""
              loading="lazy"
            />
            <p> {t("Stakes.item1").toString()} </p>
            <p> {t("Stakes.item2").toString()} </p>
          </Col>
        </Row>
      </Container>
      <Container className="mt-1 pt-5">
        <Row className="gx-1 g-lg-1 ">
          <Col>
            <img
              src={process.env.PUBLIC_URL + "/assets/free-shuttle.png"}
              className="free-shuttle float-md-end ms-3 ms-md-5 "
              alt=""
              loading="lazy"
            />
            <h1> {t("General.ComplexEnvironments").toString()} </h1>
            <hr />
            <p> {t("Stakes.item3").toString()} </p>
            <p> {t("Stakes.item4").toString()} </p>
            <p> {t("Stakes.item5").toString()} </p>
            <p> {t("Stakes.item6").toString()} </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ComplexEnvironments;
