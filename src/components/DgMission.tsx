import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter, Link } from "react-router-dom";
import "../i18n";
import { useTranslation } from "react-i18next";

import "../scss/styles.scss";

function DgMission() {
  const [t, i18n] = useTranslation();

  return (
    <Container className="dg-mission py-4 px-4">
      <Row>
        <Col>
          <h3> {t("Mission.item1").toString()} </h3>
          <h3> {t("Mission.item2").toString()} </h3>
          <h3> {t("Mission.item3").toString()} </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default DgMission;
