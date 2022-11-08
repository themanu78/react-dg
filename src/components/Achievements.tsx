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

// not used yet...
function Achievement(i: number) {
  const [t, i18n] = useTranslation();
  var items: string[] = t("Achievements." + String(i) + ".Mission", {
    returnObjects: true,
  });

  return (
    <Table responsive striped bordered hover variant="dark">
      <tbody>
        <tr>
          <td>{t("Achievements.type").toString()} </td>
          <td>{t("Achievements." + String(i) + ".type").toString()} </td>
        </tr>
        <tr>
          <td>{t("Achievements.sector").toString()}</td>
          <td>{t("Achievements." + String(i) + ".sector").toString()}</td>
        </tr>
        <tr>
          <td>{t("Achievements.mission").toString()}</td>
          {items.map((item) => (
            <td> {item} </td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
}

function Achievements() {
  const [t, i18n] = useTranslation();

  return (
    <div className="achievements" id="Achievements">
      <Container className="mt-1 pt-2">
        <h2>{t("Achievements.title").toString()} </h2> <hr />
        <Table  responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th className="focus">{t("Achievements.type").toString()}</th>
              <th className="focus">{t("Achievements.1.type").toString()}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{t("Achievements.sector").toString()}</td>
              <td>{t("Achievements.1.sector").toString()}</td>
            </tr>
            <tr>
              <td>{t("Achievements.mission").toString()}</td>
              <td>
                {t("Achievements.1.Mission.title").toString()}
                <p>{t("Achievements.1.Mission.item1").toString()}</p>
                <ul>
                  <li>{t("Achievements.1.Mission.bullet1").toString()}</li>
                  <li>{t("Achievements.1.Mission.bullet2").toString()}</li>
                  <li>{t("Achievements.1.Mission.bullet3").toString()}</li>
                  <li>{t("Achievements.1.Mission.bullet4").toString()}</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td colSpan={2}></td>
            </tr>

            <tr>
              <td className="focus">{t("Achievements.type").toString()} </td>
              <td className="focus">{t("Achievements.2.type").toString()} </td>
            </tr>
            <tr>
              <td>{t("Achievements.sector").toString()}</td>
              <td>{t("Achievements.2.sector").toString()}</td>
            </tr>
            <tr>
              <td>{t("Achievements.mission").toString()}</td>
              <td>
                <ul>
                  <li>{t("Achievements.2.Mission.bullet1").toString()}</li>
                  <li>{t("Achievements.2.Mission.bullet2").toString()}</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td colSpan={2}></td>
            </tr>

            <tr>
              <td className="focus">{t("Achievements.type").toString()} </td>
              <td className="focus">{t("Achievements.3.type").toString()} </td>
            </tr>
            <tr>
              <td>{t("Achievements.sector").toString()}</td>
              <td>{t("Achievements.3.sector").toString()}</td>
            </tr>
            <tr>
              <td>{t("Achievements.mission").toString()}</td>
              <td>{t("Achievements.3.Mission.item1").toString()}</td>
            </tr>
            <tr>
              <td colSpan={2}></td>
            </tr>

            <tr>
              <td className="focus">{t("Achievements.type").toString()} </td>
              <td className="focus">{t("Achievements.4.type").toString()} </td>
            </tr>
            <tr>
              <td>{t("Achievements.sector").toString()}</td>
              <td>{t("Achievements.4.sector").toString()}</td>
            </tr>
            <tr>
              <td>{t("Achievements.mission").toString()}</td>
              <td>
                <p>{t("Achievements.4.Mission.item1").toString()}</p>
                <ul>
                  <li>{t("Achievements.4.Mission.bullet1").toString()}</li>
                  <li>{t("Achievements.4.Mission.bullet2").toString()}</li>
                  <li>{t("Achievements.4.Mission.bullet3").toString()}</li>
                  <li>{t("Achievements.4.Mission.bullet4").toString()}</li>
                </ul>
                <p>{t("Achievements.4.Mission.item2").toString()}</p>
              </td>
            </tr>
            <tr>
              <td colSpan={2}></td>
            </tr>

            <tr>
              <td className="focus">{t("Achievements.type").toString()} </td>
              <td className="focus">{t("Achievements.5.type").toString()} </td>
            </tr>
            <tr>
              <td>{t("Achievements.sector").toString()}</td>
              <td>{t("Achievements.5.sector").toString()}</td>
            </tr>
            <tr>
              <td>{t("Achievements.mission").toString()}</td>
              <td>{t("Achievements.5.Mission.title").toString()}</td>
            </tr>
            <tr>
              <td colSpan={2}></td>
            </tr>

            <tr>
              <td className="focus">{t("Achievements.type").toString()} </td>
              <td className="focus">{t("Achievements.6.type").toString()} </td>
            </tr>
            <tr>
              <td>{t("Achievements.sector").toString()}</td>
              <td>{t("Achievements.6.sector").toString()}</td>
            </tr>
            <tr>
              <td>{t("Achievements.mission").toString()}</td>
              <td>
                <ul>
                  <li>{t("Achievements.6.Mission.bullet1").toString()}</li>
                  <li>{t("Achievements.6.Mission.bullet2").toString()}</li>
                  <li>{t("Achievements.6.Mission.bullet3").toString()}</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td colSpan={2}></td>
            </tr>

            <tr>
              <td className="focus">{t("Achievements.type").toString()} </td>
              <td className="focus">{t("Achievements.7.type").toString()} </td>
            </tr>
            <tr>
              <td>{t("Achievements.sector").toString()}</td>
              <td>{t("Achievements.7.sector").toString()}</td>
            </tr>
            <tr>
              <td className="light">{t("Achievements.mission").toString()}</td>
              <td>
                <ul>
                  <li>{t("Achievements.7.Mission.bullet1").toString()}</li>
                  <li>{t("Achievements.7.Mission.bullet2").toString()}</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td colSpan={2}></td>
            </tr>

            <tr>
              <td className="focus">{t("Achievements.type").toString()} </td>
              <td className="focus">{t("Achievements.8.type").toString()} </td>
            </tr>
            <tr>
              <td>{t("Achievements.sector").toString()}</td>
              <td>{t("Achievements.8.sector").toString()}</td>
            </tr>
            <tr>
              <td className="light">{t("Achievements.mission").toString()}</td>
              <td>
                <ul>
                  <li>{t("Achievements.8.Mission.bullet1").toString()}</li>
                  <li>{t("Achievements.8.Mission.bullet2").toString()}</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Achievements;
