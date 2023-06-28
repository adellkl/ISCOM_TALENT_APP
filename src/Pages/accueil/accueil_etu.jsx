import React from 'react';
import image3 from '../../images/sing_up_etu.png';
import { Link } from 'react-router-dom';

const accueil_etu = () => {
    return (
        <div className="flex justify-center mt-16">
            <div className="w-2/3">
                <div className="p-4">
                    <div className="flex flex-col items-start" style={{ width: '543px' }}>
                        <h2 className="text-2xl font-bold mb-4" style={{ width: '564.63px', height: '72.246px', justifyContent: 'center' }}>
                            ISCOM TALENT - ÉTUDIANT
                        </h2>
                        <p className="mb-4">Bienvenue sur ISCOM Talent, la plateforme dédiée aux rencontres entre entreprises partenaires et étudiants talentueux de l'ISCOM. Trouvez des opportunités et dénichez les profils adaptés à vos besoins. Veuillez sélectionner votre recherche (stage ou alternance) et plongez dans un univers de possibilités.</p>
                    </div>
                    <div className="flex flex-wrap gap-16 justify-center">
                        <div className="flex flex-col items-center">
                            <Link to="/connexion_etudiants" className="bg-red text-white px-4 py-4 rounded lg:px-6 lg:py-3">
                                Connexion
                            </Link>
                        </div>
                        <div className="flex flex-col items-center">
                            <Link to="/inscription_etudiants" className="bg-red text-white px-4 py-4 rounded lg:px-6 lg:py-3">
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

    )
}

export default accueil_etu