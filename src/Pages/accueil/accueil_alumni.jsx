import React from 'react';
import image1 from '../../images/img_accueil_alumni.png';
import { Link } from 'react-router-dom';

const accueil_alumni = () => {
    return (
        <div className="flex justify-center mt-28">
            <div className="lg:w-1/2 flex flex-col justify-center items-center">
                <div className="p-4">
                    <h2 className="text-4xl font-bold mb-12">ISCOM TALENT - alumni</h2>
                    <p className="mb-4 text-lg">
                        Bienvenue sur ISCOM Talent, la plateforme dédiée aux <br /> rencontres entre entreprises partenaires et diplômés <br /> talentueux de l'ISCOM. <br />
                        Trouvez des opportunités et dénichez les profils <br /> adaptés à vos besoins. <br /><br />
                    </p>
                    <div className="flex flex-wrap gap-16">
                        <div className="flex flex-col items-center">
                            <Link to="/connexion_alumni" className="bg-red text-white px-4 py-4 rounded lg:px-6 lg:py-3">
                                Connexion
                            </Link>
                        </div>
                        <div className="flex flex-col items-center">
                            <Link to="/inscription_alumni" className="bg-red text-white px-4 py-4 rounded lg:px-6 lg:py-3">
                                Inscription
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/2">
                <img src={image1} alt="Logo ISCOM" className=" w-auto h-auto" />
            </div>
        </div>
    );
};

export default accueil_alumni;
