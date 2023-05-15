import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/home";
import Inscription from "./Pages/inscription/inscription";
import Connexion from "./Pages/connexion/connexion";
import Equipe from "./Pages/equipe/equipe";
import EquipeAlternance from "./Pages/equipe/equipe_alternance";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />

        <Route
          path="/equipe"
          element={
            <>
              <Navbar />
              <Equipe />
            </>
          }
        />

        <Route
          path="/equipe_alternance"
          element={
            <>
              <Navbar />
              <EquipeAlternance />
            </>
          }
        />

        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />

        {/* Ajouter vos autres routes ici */}
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
