import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/main.scss";
import Home from "./component/Page_home/Home";
import About from "./component/Page_about/About";
import Error from "./component/Page_error/Error";
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
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
