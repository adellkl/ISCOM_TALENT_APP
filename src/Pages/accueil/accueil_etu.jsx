import React, { useState } from 'react';
import image3 from '../../images/sing_up_etu.png';
import { Link } from 'react-router-dom';
import { Switch } from '@headlessui/react';

const AccueilEtu = () => {
    const [isStageSelected, setIsStageSelected] = useState(true);

    const handleSwitchChange = () => {
        setIsStageSelected(!isStageSelected);
    };

    return (
        <div className="flex justify-center mt-32">
            <div className="lg:w-1/2 flex flex-col justify-center items-center">
                <div className="p-4">
                    <h2 className="text-4xl font-bold mb-12">ISCOM TALENT - ÉTUDIANT.E</h2>
                    <p className="mb-4 text-lg">
                        Bienvenue sur ISCOM Talent, la plateforme dédiée aux <br /> rencontres entre entreprises partenaires et étudiants <br /> talentueux de l'ISCOM. <br />
                        Trouvez des opportunités et dénichez les profils <br /> adaptés à vos besoins. <br />

                        Veuillez sélectionner votre recherche (stage ou <br /> alternance) et plongez dans un univers de possibilités. <br /> <br />
                    </p>

                    <p>
                        <Switch
                            checked={isStageSelected}
                            onChange={handleSwitchChange}
                            className={`${isStageSelected ? 'bg-red' : 'bg-gray-400'
                                } relative inline-flex items-center h-6 rounded-full w-12 transition-colors focus:outline-none`}
                        >
                            <span className="sr-only">Stage/Alternance Switch</span>
                            <span
                                className={`${isStageSelected ? 'translate-x-6' : 'translate-x-1'
                                    } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                            />
                        </Switch>
                        <span className="ml-2 ">
                            Cliquez ici si vous cherchez un stage de la 1re à la 4e année
                        </span>
                    </p>
                    <br />
                    <p>
                        <Switch
                            checked={!isStageSelected}
                            onChange={handleSwitchChange}
                            className={`${!isStageSelected ? 'bg-red' : 'bg-gray-400'
                                } relative inline-flex items-center h-6 rounded-full w-12 transition-colors focus:outline-none `}
                        >
                            <span className="sr-only">Stage/Alternance Switch</span>
                            <span
                                className={`${!isStageSelected ? 'translate-x-6' : 'translate-x-1'
                                    } inline-block w-4 h-4 transform bg-white rounded-full transition-transform `}
                            />
                        </Switch>
                        <span className="ml-2">
                            Cliquez ici si vous cherchez une alternance en 5e année ou <br /> <p className='ml-14'>
                                pour votre 5e année   </p>
                        </span>
                    </p>
                    <br /><br />
                    <div className="flex flex-wrap gap-16">
                        <div className="flex flex-col items-center">
                            <Link to="/connexion_etudiants" className="bg-red text-white px-4 py-4 rounded lg:px-6 lg:py-3">
                                Connexion
                            </Link>
                        </div>
                        <div className="flex flex-col items-center ">
                            <Link to="/inscription_etudiants" className="bg-red text-white px-4 py-4 rounded lg:px-6 lg:py-3">
                                Inscription
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/2">
                <img src={image3} alt="Logo ISCOM" className="w-auto h-auto" />
            </div>
        </div>
    );
};

export default AccueilEtu;
