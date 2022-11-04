import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter, Link } from "react-router-dom";
import "../i18n";
import { useTranslation } from "react-i18next";
//import {availableLanguages} from "../i18n";

import "../scss/styles.scss";


function Footer() {
  const [t, i18n] = useTranslation();

  return (
    <div className="footer" id="Footer">
      <Container >
      <p className="lh-1"> ©2019 Dogon Consulting – RCS Versailles 488 624 248</p>
      <p className="lh-1"> Aida Audrain / +33 6 63 09 62 92 / contact@dogon-consulting.com</p>
      <p className="lh-1"> 13, rue Victor Hugo 78600 Le Mesnil le Roi, France</p>
      </Container>
    </div>
  );
}

export default Footer;
