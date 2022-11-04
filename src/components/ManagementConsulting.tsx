import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter, Link } from "react-router-dom";
import FreeAutomation from "/assets/free-automation.png";
import FreeOrchestre from "/assets/free-orchestre.png";
import FreeHourglass from "/assets/free-hourglass.png";
import FreeCharts from "/assets/free-charts.png";
import "../i18n";
import { useTranslation } from "react-i18next";

import "../scss/styles.scss";

function ManagementConsulting() {
  const [t, i18n] = useTranslation();

  return (
    <div className="management-consulting" id="ManagementConsulting">
      <Container className="mt-1 pt-2">
        <Row className="gx-1 g-lg-1">
          <Col>
            <h2> {t("ManagementConsulting.title").toString()} </h2>
            <hr />
            <p> {t("ManagementConsulting.offer").toString()} </p>
            <ul>
              <li> {t("ManagementConsulting.bullet1").toString()} </li>
              <li> {t("ManagementConsulting.bullet2").toString()} </li>
              <li> {t("ManagementConsulting.bullet3").toString()} </li>
              <li> {t("ManagementConsulting.bullet4").toString()} </li>
              <li> {t("ManagementConsulting.bullet5").toString()} </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5 pt-5">
        <Row className="gx-1 g-lg-1">
          <Col>
            <img
              src={process.env.PUBLIC_URL + "/assets/free-automation.png"}
              className="free-automation float-md-start me-3 me-md-5 "
              alt=""
              loading="lazy"
            />
            <h3>{t("ManagementConsulting.Budget.title").toString()} </h3>
            <hr />
            <p> {t("ManagementConsulting.Budget.item1").toString()} </p>
            <p> {t("ManagementConsulting.Budget.item2").toString()} </p>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5 pt-5">
        <Row className="gx-1 g-lg-1 ">
          <Col>
            <img
              src={process.env.PUBLIC_URL + "/assets/free-orchestre.png"}
              className="free-orchestre float-md-end ms-3 ms-md-5 "
              alt=""
              loading="lazy"
            />
            <h3>{t("ManagementConsulting.Governance.title").toString()} </h3>
            <hr />
            <p> {t("ManagementConsulting.Governance.item1").toString()} </p>
            <p> {t("ManagementConsulting.Governance.item2").toString()} </p>
            <p> {t("ManagementConsulting.Governance.item3").toString()} </p>
            <p> {t("ManagementConsulting.Governance.item4").toString()} </p>
            <p> {t("ManagementConsulting.Governance.item5").toString()} </p>
            <p> {t("ManagementConsulting.Governance.item6").toString()} </p>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5 pt-5">
        <Row className="gx-1 g-lg-1">
          <Col>
            <img
              src={process.env.PUBLIC_URL + "/assets/free-hourglass.png"}
              className="free-hourglass float-md-start me-3 me-md-5 "
              alt=""
              loading="lazy"
            />
            <h3>{t("ManagementConsulting.Closing.title").toString()}</h3>
            <hr />
            <p> {t("ManagementConsulting.Closing.item1").toString()} </p>
            <p> {t("ManagementConsulting.Closing.item2").toString()} </p>
            <p> {t("ManagementConsulting.Closing.item3").toString()} </p>
            <ul>
              <li>{t("ManagementConsulting.Closing.bullet1").toString()}</li>
              <li>{t("ManagementConsulting.Closing.bullet2").toString()}</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5 pt-5">
        <Row className="gx-1 g-lg-1">
          <Col>
            <img
              src={process.env.PUBLIC_URL + "/assets/free-charts.png"}
              className="free-charts float-md-end me-3 me-md-5"
              alt=""
              loading="lazy"
            />
            <h3> {t("ManagementConsulting.Reporting.title").toString()} </h3>
            <hr />
            <p> {t("ManagementConsulting.Reporting.item1").toString()} </p>
            <p> {t("ManagementConsulting.Reporting.item2").toString()} </p>
            <p> {t("ManagementConsulting.Reporting.item3").toString()} </p>
            <ul>
              <li> {t("ManagementConsulting.Reporting.bullet1").toString()} </li>
              <li> {t("ManagementConsulting.Reporting.bullet2").toString()} </li>
              <li> {t("ManagementConsulting.Reporting.bullet3").toString()} </li>
              <li> {t("ManagementConsulting.Reporting.bullet4").toString()} </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5 pt-5">
        <Row className="gx-1 g-lg-1">
          <Col>
            <h3> {t("ManagementConsulting.Outsourcing.title").toString()}</h3>
            <hr />
            <p> {t("ManagementConsulting.Outsourcing.item1").toString()} </p>
            <ul>
              <li>{t("ManagementConsulting.Outsourcing.bullet1").toString()}</li>
              <li>{t("ManagementConsulting.Outsourcing.bullet2").toString()}</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ManagementConsulting;
