import React from 'react';
import image_accueil from '../images/image_accueil.png';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <section className="flex">
      <div className="w-1/2">
        <img src={image_accueil} alt="Logo ISCOM" className="max-w-full h-auto" />
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-9">ISCOM TALENT</h1>
        <p className="text-lg mb-4">
          Bienvenue sur ISCOM Talent, la plateforme dédiée aux rencontres entre entreprises partenaires et étudiants talentueux de l'ISCOM. Trouvez des opportunités et dénichez les profils adaptés à vos besoins.
          <br />
          <br />
          Sélectionnez votre statut (étudiant.es, alumni ou entreprise) et plongez dans un univers de possibilités.
        </p>

        <div className="flex gap-4">
          <Link to="/lien1" className="bg-red text-white px-4 py-4 rounded">
            ÉTUDIANT(E)
          </Link>
          <Link to="/lien2" className="bg-red text-white px-4 py-4 rounded">
            ENTREPRISE
          </Link>
          <Link to="/lien3" className="bg-blue text-white px-4 py-4 rounded">
            ALUMNI ISCOM
          </Link>
        </div>
      </div>

      {/* Utilisation du composant EntreprisesIMG */}

    </section>
  );
};

export default Home;

