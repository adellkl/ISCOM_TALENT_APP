import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import illustration from "../../images/illustration.png";

const Inscription_Etudiants = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [logo, setLogo] = useState(null);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [message, setMessage] = useState(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogoChange = (event) => {
    const selectedFile = event.target.files[0];
    setLogo(selectedFile);
  };

  const handleAcceptTermsChange = () => {
    setAcceptTerms(!acceptTerms);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Récupérer les valeurs des champs de formulaire
    const nom = event.target.elements.nom.value;
    const prenom = event.target.elements.prenom.value;
    const email = event.target.elements.email.value;
    const mdp = event.target.elements.mdp.value;
    const confirmPassword = event.target.elements.confirmPassword.value;
    const telephone = event.target.elements.telephone.value;
    const photo_etudiant = event.target.elements.photo_etudiant.files[0];

    // Vérifier si l'adresse e-mail a l'extension "@iscom.org"
    if (!email.endsWith("@iscom.org")) {
      setMessage("L'adresse e-mail doit avoir l'extension @iscom.org");
      return;
    }

    // Effectuer le traitement des données ici
    // Vous pouvez valider les données, les envoyer à un serveur, etc.

    // Exemple de validation : vérifier si les mots de passe correspondent
    if (mdp !== confirmPassword) {
      setMessage("Vérifiez que les mots de passe sont bien identiques !");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("nom", nom);
      formData.append("prenom", prenom);
      formData.append("email", email);
      formData.append("mdp", mdp);
      formData.append("telephone", telephone);
      formData.append("photo_etudiant", photo_etudiant);

      const response = await axios.post(
        "http://localhost:8888/iscom-talent_back/inscription_traitement/inscription_traitement_etudiants.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data); // Afficher la réponse du serveur

      setMessage("L'inscription a été envoyée avec succès !");
    } catch (error) {
      console.log("Erreur lors de l'envoi de la requête :", error);
      setMessage("Une erreur s'est produite lors de l'envoi de l'inscription.");
    }

    // Réinitialiser les valeurs des champs de formulaire
    event.target.reset();
    setLogo(null);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2 ml-4">
        <form className="p-8" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold mb-6">Inscription étudiants</h1>
          {message && (
            <p className={`text-${message.includes('succès') ? 'green' : 'red1'} mb-4`}>
              {message}
            </p>
          )}
          <div className="mb-4">
            <label htmlFor="nom" className="text-black">
              Nom étudiant.e *
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              className="w-full border-gray-300 bg-greyLT border p-4 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="prenom" className="text-black">
              Prénom étudiant.e *
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              className="w-full border-gray-300 bg-greyLT border p-4 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-black">
              Email ISCOM (prenom.nom@iscom.org) *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border-gray-300 bg-greyLT border p-4 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mdp" className="text-black">
              Mot de passe *
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="mdp"
                name="mdp"
                className="w-full border-gray-300 bg-greyLT border p-4 rounded"
              />
              <span
                className="absolute right-3 top-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="text-black">
              Confirmation mot de passe *
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full border-gray-300 bg-greyLT border p-4 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="telephone" className="text-black">
              Numéro de téléphone *
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              className="w-full border-gray-300 bg-greyLT border p-4 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="photo_etudiant" className="text-black">
              Chargez votre photo de profil
            </label>
            <div className="relative">
              <input
                type="file"
                id="photo_etudiant"
                name="photo_etudiant"
                className="hidden"
                onChange={handleLogoChange}
              />
              <label
                htmlFor="photo_etudiant"
                className="flex items-center px-4 py-2 border-gray-300 bg-greyLT border rounded cursor-pointer"
              >
                <FontAwesomeIcon icon={faUpload} className="mr-2" />
                Sélectionner un fichier
              </label>
            </div>
            {logo && <p className="mt-4">{logo.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="acceptTerms" className="inline-flex items-center">
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                className="hidden"
                onChange={handleAcceptTermsChange}
              />
              <span className="checkbox">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  className="form-checkbox h-4 w-4 text-blue-500 transition duration-150 ease-in-out"
                  onChange={handleAcceptTermsChange}
                />
              </span>
              <span className="text-black ml-2">
                J’accepte les <a href="/CGU" className="text-blue">conditions générales d’utilisation</a>
              </span>

            </label>
          </div>

          <button
            type="submit"
            className="bg-blue text-white px-4 py-2 rounded"
          >
            Créer mon compte
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 flex items-center justify-center">
        <img
          src={illustration}
          alt=""
          height={200}
          width={500}
          className="mt-16"
        />
      </div>
    </div>
  );
};

export default Inscription_Etudiants;
