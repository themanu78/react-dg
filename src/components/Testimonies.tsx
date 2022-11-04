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

function Testimonies() {
  const [t, i18n] = useTranslation();

  return (
    <div className="testimonies" id="Testimonies">
      <Container className="mt-1 pt-2">
        <h2> {t("Testimonies.title").toString()} </h2>
        <hr />
        <h4 className="bold"> {t("Testimonies.1.name").toString()} </h4>
        <h4> {t("Testimonies.1.role").toString()} </h4>
        <p> {t("Testimonies.1.period").toString()} </p>
        <p> {t("Testimonies.1.item1").toString()} </p>
        <p> {t("Testimonies.1.item2").toString()} </p>
        <hr />
        <h4 className="bold"> {t("Testimonies.2.name").toString()} </h4>
        <h4> {t("Testimonies.2.role").toString()} </h4>
        <p> {t("Testimonies.2.period").toString()} </p>
        <p> {t("Testimonies.2.item1").toString()} </p>
        <p> {t("Testimonies.2.item2").toString()} </p>
        <hr />
        <h4 className="bold"> {t("Testimonies.3.name").toString()} </h4>
        <h4> {t("Testimonies.3.role").toString()} </h4>
        <p> {t("Testimonies.3.period").toString()} </p>
        <p> {t("Testimonies.3.item1").toString()} </p>
        <p> {t("Testimonies.3.item2").toString()} </p>
        <hr />
        <h4 className="bold"> {t("Testimonies.4.name").toString()} </h4>
        <h4> {t("Testimonies.4.role").toString()} </h4>
        <p> {t("Testimonies.4.period").toString()} </p>
        <p> {t("Testimonies.4.item1").toString()} </p>
        <hr />
        <h4 className="bold"> {t("Testimonies.5.name").toString()} </h4>
        <h4> {t("Testimonies.5.role").toString()} </h4>
        <p> {t("Testimonies.5.period").toString()} </p>
        <p> {t("Testimonies.5.item1").toString()} </p>
        <p> {t("Testimonies.5.item2").toString()} </p>
        <hr />
        <h4 className="bold"> {t("Testimonies.6.name").toString()} </h4>
        <h4> {t("Testimonies.6.role").toString()} </h4>
        <p> {t("Testimonies.6.period").toString()} </p>
        <p> {t("Testimonies.6.item1").toString()} </p>
        <p> {t("Testimonies.6.item2").toString()} </p>
      </Container>
    </div>
  );
}

export default Testimonies;
