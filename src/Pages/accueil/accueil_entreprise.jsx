import React from 'react';
import image3 from '../../images/sing_in_entrprise.png';
import { Link } from 'react-router-dom';

const accueil_entreprise = () => {
    return (
        <div className="flex mt-16">
            <div className="lg:w-1/2 flex flex-col justify-center items-center">
                <div className="p-4">
                    <h2 className="text-4xl font-bold mb-8">ISCOM TALENT - ENTREPRISE</h2>
                    <p className="mb-4">
                        Bienvenue sur ISCOM Talent, la plateforme dédiée aux <br /> rencontres entre entreprises partenaires et diplôme <br /> talentueux de l'ISCOM. <br />
                        Trouvez des étudiant.e.s et jeune diplômé en fonction de <br /> vos besoins
                    </p> <br />
                    <div className="flex flex-wrap gap-16">
                        <div className="flex flex-col items-center" >

                            <Link to="/connexion_entreprise" className="bg-blue text-white px-4 py-4 rounded lg:px-6 lg:py-3">
                                Connexion

                            </Link>

                        </div>
                        <div className="flex flex-col items-center"  >

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
