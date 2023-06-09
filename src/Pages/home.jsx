import React, { useEffect } from 'react';
import image_accueil from '../images/image_accueil.png';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ once: true }); // Initialisation de AOS
  }, []);

  return (
    <section className="flex flex-col lg:flex-row mt-16">
      <div className="lg:w-1/2" >
        <img src={image_accueil} alt="Logo ISCOM" className="max-w-full h-auto" />
      </div>

      <div className="lg:w-1/2 flex flex-col justify-center items-center" >
        <h1 className="text-4xl font-bold mb-9">ISCOM TALENT</h1>
        <p className="text-lg mb-8 lg:max-w-2xl lg:ml-4">
          Bienvenue sur ISCOM Talent, la plateforme dédiée aux rencontres entre entreprises partenaires et étudiants talentueux de l'ISCOM. Trouvez des opportunités et dénichez les profils adaptés à vos besoins.
          <br />
          <br />
          Sélectionnez votre statut (étudiant.es, alumni ou entreprise) et plongez dans un univers de possibilités.


        </p>
        <br /><br />
        <div className="flex flex-wrap gap-16">
          <div className="flex flex-col items-center" >
            <Tooltip
              title="Cliquez ici si vous recherchez un stage ou une alternance"
              position="top"
              trigger="mouseenter"
              arrow={true}
            >
              <Link to="Inscription_etudiants" className="bg-red text-white px-4 py-4 rounded lg:px-6 lg:py-3">
                ÉTUDIANT(E)
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
              <Link to="inscription_entreprise" className="bg-red text-white px-4 py-4 rounded lg:px-6 lg:py-3">
                ENTREPRISE
              </Link>
            </Tooltip>
          </div>

          <div className="flex flex-col items-center"  >
            <Tooltip
              title="Cliquez ici si vous recherchez un stagiaire, un alternant.e ou un employé.e"
              position="top"
              trigger="mouseenter"
              arrow={true}
            >
              <Link to="inscription_alumni" className="bg-blue text-white px-4 py-4 rounded lg:px-6 lg:py-3">
                ALUMNI ISCOM
              </Link>
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
