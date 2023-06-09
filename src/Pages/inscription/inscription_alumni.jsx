import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import illustration from "../../images/illustration.png";

const InscriptionAlumni = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [logo, setLogo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const handleLogoChange = (event) => {
        const selectedFile = event.target.files[0];
        setLogo(selectedFile);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { nom, prenom, email, password, confirmPassword, telephone } = event.target.elements;

        if (password.value !== confirmPassword.value) {
            setError("Les mots de passe ne correspondent pas");
            return;
        }

        const formData = new FormData();
        formData.append("nom", nom.value);
        formData.append("prenom", prenom.value);
        formData.append("email", email.value);
        formData.append("password", password.value);
        formData.append("telephone", telephone.value);
        if (logo) {
            formData.append("logo", logo);
        }

        try {
            setLoading(true);
            setError(null);
            const response = await axios.post("http://localhost:8888/iscom-talent_back/inscription_traitement/inscription_traitement_alumni.php", formData);
            setLoading(false);
            console.log(response.data);
        } catch (error) {
            setLoading(false);
            console.log(error.response.data);
            setError("Une erreur s'est produite lors de l'enregistrement des données");
        }
    };

    return (
        <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 ml-16">
                <form className="p-6" onSubmit={handleSubmit}>
                    <center>
                        <h1 className="text-4xl font-bold mb-2 ml-6">Inscription Alumni</h1>
                    </center>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <div className="mb-2">
                        <label htmlFor="nom" className="text-black">
                            Nom étudiant.e *
                        </label>
                        <input type="text" id="nom" name="nom" className="w-full border-gray-300 bg-greyLT border p-4 rounded" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="prenom" className="text-black">
                            Prénom étudiant.e *
                        </label>
                        <input type="text" id="prenom" name="prenom" className="w-full border-gray-300 bg-greyLT border p-4 rounded" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="text-black">
                            Email ISCOM (prenom.nom@iscom.org) *
                        </label>
                        <input type="email" id="email" name="email" className="w-full border-gray-300 bg-greyLT border p-4 rounded" required />
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
                                required
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
                        <input type="password" id="confirmPassword" name="confirmPassword" className="w-full border-gray-300 bg-greyLT border p-4 rounded" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="telephone" className="text-black">
                            Numéro de téléphone *
                        </label>
                        <input type="tel" id="telephone" name="telephone" className="w-full border-gray-300 bg-greyLT border p-4 rounded" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="photo" className="text-black">
                            Chargez votre photo de profil
                        </label>
                        <div className="relative">
                            <input type="file" id="photo" name="photo" className="hidden" onChange={handleLogoChange} />
                            <label htmlFor="photo" className="flex items-center px-4 py-2 border-gray-300 bg-greyLT border rounded cursor-pointer">
                                <FontAwesomeIcon icon={faUpload} className="mr-2" />
                                Sélectionner un fichier
                            </label>
                        </div>
                        {logo && (
                            <p className="mt-4">{logo.name}</p>
                        )}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="acceptTerms" className="inline-flex items-center">
                            <input
                                type="checkbox"
                                id="acceptTerms"
                                name="acceptTerms"
                                className="hidden"
                                required
                            />
                            <span className="checkbox">
                                <input
                                    type="checkbox"
                                    id="acceptTerms"
                                    name="acceptTerms"
                                    className="form-checkbox h-4 w-4 text-blue-500 transition duration-150 ease-in-out"
                                />
                            </span>
                            <span className="text-black ml-2">
                                J’accepte les <a href="/CGU" className="text-blue">conditions générales d’utilisation</a>
                            </span>
                        </label>
                    </div>

                    <button type="submit" className="bg-blue text-white px-4 py-2 rounded" disabled={loading}>
                        {loading ? "Enregistrement en cours..." : "Créer mon compte"}
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

export default InscriptionAlumni;
