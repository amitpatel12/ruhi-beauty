/** @format */

import logo from "./logo.svg";
import "./App.css";
import { Button } from "./component/ui/button";
import Home from "./component/home";
import Registration from "./component/Registration";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./component/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Success from "./component/Success";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
