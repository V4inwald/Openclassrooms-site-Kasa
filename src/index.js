import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/main.scss";
import Home from "./component/pages/Home/Home";
import About from "./component/pages/About/About";
import Error from "./component/pages/Error/Error";
import Accomodation from "./component/pages/Accomodation/Accomodation";
import Header from "./component/common/Header/Header";
import Footer from "./component/common/Footer/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accomodations" element={<Navigate to="/" replace />} />
        <Route path="/accomodations/:id" element={<Accomodation />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
