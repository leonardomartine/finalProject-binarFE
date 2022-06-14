import React from "react";
import { render } from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Home from "./pages/Home";


const root = document.getElementById("root");
render(
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>,
  root
);