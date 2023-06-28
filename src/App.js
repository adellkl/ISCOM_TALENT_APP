import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./Pages/home";
import InscriptionEtudiants from "./Pages/inscription/inscription_etudiants";
import InscriptionEntreprise from "./Pages/inscription/inscription_entreprise";
import InscriptionAlumni from "./Pages/inscription/inscription_alumni";
import ConnexionAlumni from "./Pages/connexion/connexion_alumni";
import ConnexionEntreprise from "./Pages/connexion/connexion_entreprise";
import ConnexionEtudiants from "./Pages/connexion/connexion_etudiants";
// import Navbar from "./components/Navbar";
import FormEtudiants from "./Pages/form/etudiants";
import FormEntreprise from "./Pages/form/entreprise";
import CGU from "./Pages/rgpd/CGU";
import ModifMdpEtu from "./Pages/connexion/Modif_mdp_etu";
import ModifMdpAlumni from "./Pages/connexion/Modif_mdp_alumni";
import ModifMdpEntreprise from "./Pages/connexion/Modif_mdp_entreprise";
import EspaceEtu from "./Pages/espace/espace_etu";
import EspaceAlumni from "./Pages/espace/espace_alumni";
import EspaceEntreprise from "./Pages/espace/espace_entreprise";
import AccueilEntreprise from "./Pages/accueil/accueil_entreprise";
import AccueilEtu from "./Pages/accueil/accueil_etu";
import AccueilAlumni from "./Pages/accueil/accueil_alumni";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              {/* <Navbar /> */}
            </>
          }
        />
        <Route
          path="/inscription_etudiants"
          element={<InscriptionEtudiants />}
        />
        <Route path="/inscription_alumni" element={<InscriptionAlumni />} />
        <Route
          path="/inscription_entreprise"
          element={<InscriptionEntreprise />}
        />
        <Route path="/connexion_entreprise" element={<ConnexionEntreprise />} />
        <Route path="/connexion_etudiants" element={<ConnexionEtudiants />} />
        <Route path="/connexion_alumni" element={<ConnexionAlumni />} />
        <Route path="/form_etudiants" element={<FormEtudiants />} />
        <Route path="/form_entreprise" element={<FormEntreprise />} />
        <Route path="/CGU" element={<CGU />} />
        <Route path="/Modif_mdp_etu" element={<ModifMdpEtu />} />
        <Route path="/Modif_mdp_alumni" element={<ModifMdpAlumni />} />
        <Route path="/Modif_mdp_entreprise" element={<ModifMdpEntreprise />} />
        <Route path="/espace_etu" element={<EspaceEtu />} />
        <Route path="/espace_alumni" element={<EspaceAlumni />} />
        <Route path="/espace_entreprise" element={<EspaceEntreprise />} />
        <Route path="/accueil_entreprise" element={<AccueilEntreprise />} />
        <Route path="/accueil_etu" element={<AccueilEtu />} />
        <Route path="/accueil_alumni" element={<AccueilAlumni />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
