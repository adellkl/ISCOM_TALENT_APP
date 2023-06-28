import React from 'react';
import image3 from '../../images/sing_in_entrprise.png';
import { Link } from 'react-router-dom';

const accueil_entreprise = () => {
    return (
        <div className="flex items-center justify-center mt-16">
            <div className="w-2/3">
                <div className="p-4">
                    <div className="mb-8 ml-28">
                        <h2 className="text-2xl font-bold mb-4">ISCOM TALENT - ENTREPRISE</h2>
                        <p className="mb-4">
                            Bienvenue sur ISCOM Talent, la plateforme dédiée aux rencontres entre entreprises partenaires et diplômés talentueux de l'ISCOM.
                            Trouvez des étudiant.e.s et jeunes diplômés en fonction de vos besoins.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-16 justify-center">
                        <div className="flex flex-col items-center">
                            <Link to="/connexion_entreprise" className="bg-blue text-white px-4 py-4 rounded lg:px-6 lg:py-3">
                                Connexion
                            </Link>
                        </div>
                        <div className="flex flex-col items-center">
                            <Link to="/inscription_entreprise" className="bg-blue text-white px-4 py-4 rounded lg:px-6 lg:py-3">
                                Inscription
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/2">
                <img src={image3} alt="Logo ISCOM" className="max-w-full h-auto" />
            </div>
        </div>
    );
};

export default accueil_entreprise;
