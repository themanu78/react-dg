import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import NavigationBar from "./components/NavigationBar";
import TopPage from "./components/TopPage";
import ComplexEnvironments from "./components/ComplexEnvironments";
import ManagementConsulting from "./components/ManagementConsulting";
import SAPConsulting from "./components/SAPConsulting";
import DgMission from "./components/DgMission";
import Achievements from "./components/Achievements";
import Testimonies from "./components/Testimonies";
import Customers from "./components/Customers";
import Footer from "./components/Footer";
import './i18n';

import "./scss/styles.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <NavigationBar />
      <TopPage />
      <DgMission />
      <ComplexEnvironments />
      <ManagementConsulting />
      <SAPConsulting />
      <Achievements />
      <Testimonies />
      <Customers />
      <Footer />
    </Suspense>
  </React.StrictMode>
);

