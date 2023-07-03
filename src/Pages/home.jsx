import React, { useEffect } from 'react';
import image_accueil from '../images/image_accueil.png';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="flex flex-col lg:flex-row mt-16">
      <div className="lg:w-1/2">
        <img src={image_accueil} alt="Logo ISCOM" className="max-w-full h-auto" />
      </div>

      <div className="lg:w-1/2 flex flex-col justify-center  ">
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
              <Link to="accueil_etu" className="bg-red text-white px-4 py-4 rounded lg:px-6 lg:py-3">
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
              <Link to="accueil_alumni" className="bg-red text-white px-4 py-4 rounded lg:px-6 lg:py-3">
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
              <Link to="accueil_entreprise" className="bg-blue text-white px-4 py-4 rounded lg:px-6 lg:py-3">
                ENTREPRISE
              </Link>
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
