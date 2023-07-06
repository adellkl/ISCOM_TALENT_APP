import React, { useEffect, useState } from 'react';
import image_accueil from '../images/image_accueil.png';
import { Link } from 'react-router-dom';
import loaderImg from '../images/ISCOM.png';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isLoaded = localStorage.getItem('isLoaded');
    if (isLoaded) {
      setIsLoading(false);
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem('isLoaded', true);
        AOS.init({ once: true });
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <img src={loaderImg} alt="Logo de préchargement" className="w-48 h-50" />
          <h1 className='text-4xl'> Mettez le navigateur en plein écran pour avoir un meilleur rendu. </h1>
        </div>
      ) : (
        <section className="flex flex-col lg:flex-row mt-32">
          <div className="lg:w-1/2">
            <img src={image_accueil} alt="Logo ISCOM" className="w-full h-auto" />
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-9 lg:ml-6 ">ISCOM TALENT</h1>
            <p className="text-lg mb-8 lg:max-w-2xl lg:ml-6">
              Bienvenue sur ISCOM Talent, la plateforme dédiée aux rencontres entre <br /> entreprises partenaires et étudiants talentueux de l'ISCOM.  <br />Trouvez des opportunités et dénichez les profils adaptés à vos besoins.
              <br />
              <br />
              Sélectionnez votre statut (étudiant.es, alumni ou entreprise) et plongez dans un univers de possibilités.
            </p>
            <br /><br />
            <div className="flex flex-wrap gap-16 lg:ml-6">
              <div className="flex flex-col items-center">
                <Tooltip
                  title="Cliquez ici si vous recherchez un stage ou une alternance"
                  position="top"
                  trigger="mouseenter"
                  arrow={true}
                >
                  <Link
                    to="accueil_etu"
                    className={`bg-red text-white px-4 py-4 rounded lg:px-6 lg:py-3 ${isLoading ? 'scale-0' : 'scale-100 animate-scale'
                      }`}
                  >
                    ÉTUDIANT(E) ISCOM
                  </Link>
                </Tooltip>
              </div>
              <div className="flex flex-col items-center">
                <Tooltip
                  title="Cliquez ici si vous recherchez un stagiaire, un alternant.e ou un employé.e"
                  position="top"
                  trigger="mouseenter"
                  arrow={true}
                >
                  <Link
                    to="accueil_alumni"
                    className={`bg-red text-white px-4 py-4 rounded lg:px-6 lg:py-3 ${isLoading ? 'scale-0' : 'scale-100 animate-scale'
                      }`}
                  >
                    DIPLÔMÉS ISCOM
                  </Link>
                </Tooltip>
              </div>
              <div className="flex flex-col items-center">
                <Tooltip
                  title="Cliquez ici si vous recherchez un stagiaire, un alternant.e ou un employé.e"
                  position="top"
                  trigger="mouseenter"
                  arrow={true}
                >
                  <Link
                    to="accueil_entreprise"
                    className={`bg-blue text-white px-4 py-4 rounded lg:px-6 lg:py-3 ${isLoading ? 'scale-0' : 'scale-100 animate-scale'
                      }`}
                  >
                    ENTREPRISE
                  </Link>
                </Tooltip>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
