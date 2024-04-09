import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Home from "./components/Home";
import "./misc/fonts";
import NavBar from "./components/NavBar";
import ListProducts from "./components/ListProducts";
import Empresa from "./components/Empresa";
import Encontrar from "./components/Encontrar";
import FaleConosco from "./components/FaleConosco";

function App() {
  return (
    <Router>
    <NavBar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/produtos' element={<ListProducts />} />
        <Route path='/empresa' element={<Empresa />} />
        <Route path='/encontrar' element={<Encontrar />} />
        <Route path='/faleconosco' element={<FaleConosco />} />
    </Routes>
</Router>
  );
}

export default App;
