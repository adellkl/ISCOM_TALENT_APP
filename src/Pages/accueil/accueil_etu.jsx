import React from 'react';
import image3 from '../../images/sing_up_etu.png';
import { Link } from 'react-router-dom';

const accueil_etu = () => {

    return (
        <div className="flex justify-center mt-16">
            <div className="lg:w-1/2 flex flex-col justify-center items-center">
                <div className="p-4">
                    <h2 className="text-4xl font-bold mb-8">ISCOM TALENT - ÉTUDIANT.E</h2>
                    <p className="mb-4">
                        Bienvenue sur ISCOM Talent, la plateforme dédiée aux <br /> rencontres entre entreprises partenaires et étudiants <br /> talentueux de l'ISCOM. <br />
                        Trouvez des opportunités et dénichez les profils <br /> adaptés à vos besoins. <br /> <br />

                        Veuillez sélectionné votre recherche (stage ou <br /> alternance) et plongez dans un univers de possibilités. <br /> <br /><br />
                    </p>



                    <div className="flex flex-wrap gap-16">
                        <div className="flex flex-col items-center" >

                            <Link to="/connexion_etudiants" className="bg-red text-white px-4 py-4 rounded lg:px-6 lg:py-3">
                                Connexion

                            </Link>

                        </div>
                        <div className="flex flex-col items-center"  >

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