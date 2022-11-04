import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { BrowserRouter, Link } from "react-router-dom";
//import Image from "react-bootstrap/Image";

import "../scss/styles.scss";

interface CustIconType {
  id: string;
  name: string;
  src: string;
}
const custIcons: CustIconType[] = [
  { id: "1", name: "air-france", src: "/assets/customers/air-france.png" },
  { id: "2", name: "alcatel", src: "/assets/customers/alcatel-lucent.png" },
  {
    id: "3",
    name: "bbraun",
    src: "/assets/customers/bbraun.png",
  },
  { id: "4", name: "boots", src: "/assets/customers/boots.png" },
  {
    id: "5",
    name: "csee-transport",
    src: "/assets/customers/csee-transport.png",
  },
  { id: "6", name: "enel", src: "/assets/customers/enel.png" },
  { id: "7", name: "exacompta", src: "/assets/customers/exacompta.png" },
  { id: "8", name: "ferro", src: "/assets/customers/ferro.png" },
  { id: "9", name: "ggb", src: "/assets/customers/ggb.png" },
  { id: "10", name: "gsk", src: "/assets/customers/gsk.png" },
  { id: "11", name: "kdi", src: "/assets/customers/kdi.png" },
  { id: "12", name: "manitowoc", src: "/assets/customers/manitowoc.png" },
  { id: "13", name: "olin", src: "/assets/customers/olin.png" },
  {
    id: "14",
    name: "orangina",
    src: "/assets/customers/orangina-france.png",
  },
  { id: "15", name: "saargummi", src: "/assets/customers/saargummi.png" },
  { id: "16", name: "safran", src: "/assets/customers/safran.png" },
  {
    id: "17",
    name: "saint-gobain",
    src: "/assets/customers/saint-gobain.png",
  },
  { id: "18", name: "sanofi", src: "/assets/customers/sanofi.png" },
  {
    id: "19",
    name: "schneider-electric",
    src: "/assets/customers/schneider-electric.png",
  },
  { id: "20", name: "staubli", src: "/assets/customers/staubli.png" },
  { id: "21", name: "technipFMC", src: "/assets/customers/technipFMC.png" },
  { id: "22", name: "thales", src: "/assets/customers/thales.png" },
  {
    id: "23",
    name: "thomson",
    src: "/assets/customers/thomson-technicolor.png",
  },
  { id: "24", name: "tyco", src: "/assets/customers/tyco.png" },
];

const customersDisplay = Object.keys(custIcons).map(
  (value: string, index: number, array: string[]) => {
    return (
      <Col key={index}>
        <img
          src={process.env.PUBLIC_URL + `${custIcons[index].src}`}
          alt={process.env.PUBLIC_URL + `${custIcons[index].name}`}
          className="clients"
          width="100rem"
          loading="lazy"
        />
      </Col>
    );
  }
);

function Customers() {
  return (
    <div className="customers" id="Customers">
      <Container className="mt-1 pt-2">
        <Row className="py-4">
          <Col>
            <h2>Customers</h2>
            <hr />
          </Col>
        </Row>
        <Row className="rowCust">{customersDisplay}</Row>
      </Container>
    </div>
  );
}

export default Customers;
