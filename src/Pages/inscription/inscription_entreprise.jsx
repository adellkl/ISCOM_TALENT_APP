import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';
import illustration from "../../images/illustration.png";

const Inscription_entreprise = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [logo, setLogo] = useState(null);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

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

    const handleSubmit = (event) => {
        event.preventDefault();

        const nomEntreprise = event.target.nom.value;
        const prenomContact = event.target.prenom.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        const telephone = event.target.telephone.value;

        if (password !== confirmPassword) {
            setErrorMessage("Les mots de passe ne correspondent pas");
            return;
        }

        const data = new FormData();
        data.append('nom', nomEntreprise);
        data.append('prenom', prenomContact);
        data.append('email', email);
        data.append('password', password);
        data.append('telephone', telephone);
        data.append('photo', logo);

        // Envoyer les données à un serveur
        axios.post('http://localhost:8888/iscom-talent_back/inscription_traitement/inscription_traitement_entreprise.php', data)
            .then(response => {
                // Traiter la réponse du serveur ici
                console.log(response.data);
                // Réinitialiser les valeurs des champs de formulaire
                event.target.reset();
                setLogo(null);
                setErrorMessage('');
            })
            .catch(error => {
                // Traiter les erreurs ici
                console.error(error);
                setErrorMessage("Une erreur s'est produite lors de l'envoi du formulaire");
            });
    };

    return (
        <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 ml-16">
                <form className="p-6" onSubmit={handleSubmit}>
                    <center>
                        <h1 className="text-4xl font-bold mb-2 ml-6">Inscription entreprise</h1>
                    </center>

                    <div className="mb-2">
                        <label htmlFor="nom" className="text-black">
                            Nom de l'entreprise *
                        </label>
                        <input type="text" id="nom" name="nom" className="w-full border-gray-300 bg-greyLT border p-4 rounded" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="prenom" className="text-black">
                            Nom et prénom du contact de l'entreprise *
                        </label>
                        <input type="text" id="prenom" name="prenom" className="w-full border-gray-300 bg-greyLT border p-4 rounded" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="text-black">
                            Email de contact *
                        </label>
                        <input type="email" id="email" name="email" className="w-full border-gray-300 bg-greyLT border p-4 rounded" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="text-black">
                            Mot de passe *
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
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
                    <div className="mb-2">
                        <label htmlFor="confirmPassword" className="text-black">
                            Confirmation mot de passe *
                        </label>
                        <input type="password" id="confirmPassword" name="confirmPassword" className="w-full border-gray-300 bg-greyLT border p-4 rounded" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="telephone" className="text-black">
                            Numéro de téléphone *
                        </label>
                        <input type="tel" id="telephone" name="telephone" className="w-full border-gray-300 bg-greyLT border p-4 rounded" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="photo" className="text-black">
                            Charger le logo de votre entreprise
                        </label>
                        <div className="relative">
                            <input type="file" id="photo" name="photo" className="hidden" onChange={handleLogoChange} />
                            <label htmlFor="photo" className="flex items-center px-4 py-2 border-gray-300 bg-greyLT border rounded cursor-pointer">
                                <FontAwesomeIcon icon={faUpload} className="mr-2" />
                                Sélectionner un fichier
                            </label>
                        </div>
                        {logo && (
                            <p className="mt-2">{logo.name}</p>
                        )}
                    </div>
                    <div className="mb-2">
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

                    {errorMessage && (
                        <div className="text-red-500 mb-4">{errorMessage}</div>
                    )}

                    <button type="submit" className="bg-blue text-white px-4 py-2 rounded">
                        Créer mon compte
                    </button>
                </form>
            </div>

            <div className="lg:w-1/2 flex items-center justify-center ">
                <img
                    src={illustration}
                    alt=""
                    height={200}
                    width={500}
                    className="mt-2"
                />
            </div>
        </div>
    );
};

export default Inscription_entreprise;
