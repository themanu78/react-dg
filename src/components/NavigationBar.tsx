import React, { useRef, useEffect, useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import DogonIcon from "/assets/black_icon_white_background.png";
import FlagIcon from "./FlagIcon";
import { BrowserRouter } from "react-router-dom";

// import i18n from "i18next";
import "../i18n";
import { useTranslation } from "react-i18next";
//import { availableLanguages } from "../i18n/i18n";

function NavigationBar() {
  const [selectedOption, setSelectedOption] = useState<String>("gb");
  const {t, i18n} = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleSelect = (
    eventKey: string | null,
    event: React.SyntheticEvent<unknown>
  ) => {
    var value = "";
    event.preventDefault();
    // event.persist();
    //event.stopPropagation();
    eventKey == null ? (value = "gb") : (value = eventKey);
    changeLanguage(value);
    console.log(eventKey + " " + i18n.language);
    setSelectedOption(value);
  };

  return (
    <Navbar className="navigation-bar" fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <div className="d-flex"></div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className="ms-auto me-auto">
            <Nav.Link href="#DogonConsulting">Dogon Consulting</Nav.Link>
            <Nav.Link href="#ManagementConsulting">
              {t("General.ManagementConsulting").toString()}
            </Nav.Link>
            <Nav.Link href="#SAPConsulting">
              {t("General.SAPConsulting").toString()}
            </Nav.Link>
            <Nav.Link href="#Achievements">
              {t("General.Achievements").toString()}
            </Nav.Link>
            <Nav.Link href="#Testimonies">
              {t("General.Testimonies").toString()}
            </Nav.Link>
            <Nav.Link href="#Customers">{t("General.Customers").toString()}</Nav.Link>
          </Nav>
          <Nav>
            <div className="Lang container">
              <NavDropdown
                id="collasible-nav-dropdown"
                onSelect={handleSelect}
                title={<FlagIcon code={selectedOption} />}
              >
                <NavDropdown.Item href="fr">
                  <FlagIcon code={"fr"} />
                </NavDropdown.Item>
                <NavDropdown.Item href="gb">
                  <FlagIcon code={"gb"} />
                </NavDropdown.Item>
                <NavDropdown.Item href="de">
                  <FlagIcon code={"de"} />
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
