import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import illustration from "../../images/connexion_etu.png";

const ConnexionEtudiants = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 ml-4">
                <form className="p-8 mt-64">
                    <center>
                        <h1 className="text-4xl font-bold mb-8">Connexion Etudiants</h1>
                    </center>
                    <div className="mb-6">
                        <label htmlFor="email" className="text-black text-lg">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full border-gray-300 bg-greyLT border p-4 rounded"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="text-black text-lg">
                            Mot de passe
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
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
                    <br />
                    <center>
                        <button
                            type="submit"
                            className="bg-blue text-white px-6 py-3 rounded-lg"
                        >
                            Se connecter
                        </button>
                        <br /><br />
                        <a href="Modif_mdp_etu" className="text-blue text-lg ml-2">
                            Mot de passe oublié
                        </a>
                    </center>
                </form>
            </div>

            <div className="lg:w-1/2 hidden lg:block">
                <img
                    src={illustration}
                    alt=""
                    className="w-full h-screen object-cover"
                />
            </div>
        </div>
    );
};

export default ConnexionEtudiants;