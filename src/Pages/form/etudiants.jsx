import React, { useState, useEffect } from 'react';
import image_accueil from '../../images/ISCOM.png';
import validation from '../../images/validation_img.png';
import { Link } from 'react-router-dom';


const FormEtudiants = () => {
    const [currentStep, setCurrentStep] = useState(1);



    useEffect(() => {



    }, []);

    const handlePreviousStep = () => {

        setCurrentStep(currentStep - 1);
    };



    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform validation or data submission actions

        // Move to the next step
        setCurrentStep(prevStep => prevStep + 1);
    };

    const progressBarWidth = `${(currentStep / 10) * 100}%`;

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="lg:w-1/2">
                <a href="/" className="relative">
                    <img src={image_accueil} alt="Logo ISCOM" className="mx-auto w-64 " />
                </a>
            </div>


            <hr className="my-12 w-3/4 border-gray-300" />

            <h1 className="text-center text-4xl font-bold my-3">FORMULAIRE DE RENSEIGNEMENT ÉTUDIANT</h1>

            <div className="w-3/4 mx-auto">
                <h2 className="sr-only">Steps</h2>

                {currentStep !== 11 && (
                    <div>
                        <p className="text-xs font-medium">
                            {currentStep}/10 - Étapes
                        </p>

                        <div className="mt-4 overflow-hidden rounded-full bg-gray-200">
                            <div
                                className="h-2 rounded-full bg-blue"
                                style={{ width: progressBarWidth }}
                            ></div>
                        </div>

                        <div className="flex justify-between mt-4">
                            {currentStep > 1 && (
                                <button
                                    onClick={handlePreviousStep}
                                    className="flex items-center px-2 py-1 space-x-1 text-xs text-grayLD hover:text-blue"
                                >
                                    <svg
                                        className="w-4 h-4 fill-current"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M14 7l-5 5 5 5V7z" />
                                    </svg>
                                    <span>Précédent</span>
                                </button>
                            )}


                        </div>
                    </div>
                )}
            </div>


            <div className="w-3/4 mx-auto">
                {currentStep === 1 && (
                    <form className="mt-6" onSubmit={handleSubmit}>
                        <fieldset>
                            <legend className="text-xl font-bold mb-4">Type de structure recherchée :</legend>
                            <p className="text-s font-slim mb-4" > ( Vous pouvez sélectionner 5 réponses maximum ) </p>
                            <div className="space-y-4">
                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'}`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Agence (communication, marketing, RP, événementielle…)</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'}`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Entreprise TPE (&lt; 19 salariés)</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'}`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Entreprise PME (20 &lt; 249 salariés)</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'}`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Entreprise ETI (250 &lt; 5 000 salariés)</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'}`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Entreprise GE (&gt; 5 000 salariés)</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'}`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Groupe International</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'}`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Start-up</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'}`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Indépendant</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'}`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Média</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'}`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Organisme public</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'}`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Organisme public</span>
                                </label>
                            </div>

                            <div className="mb-6 mt-6 flex justify-center">
                                <button
                                    type="submit"
                                    className={`px-64 py-5 ${currentStep === 1 ? 'bg-red text-white' : 'bg-greyLT text-black'
                                        } rounded-lg hover:bg-blue-600`}
                                >
                                    Suivant
                                </button>
                            </div>
                        </fieldset>
                    </form>
                )}

                {currentStep === 2 && (
                    <form className="mt-6" onSubmit={handleSubmit}>
                        <fieldset>
                            <legend className="text-xl font-bold mb-4">Secteurs recherchés :</legend>
                            <p className="text-s font-slim mb-4" > ( Vous pouvez sélectionner 5 réponses maximum ) </p>

                            <div className="space-y-4">
                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Agroalimentaire</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Aéronautique</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Automobile équipement machines</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Bâtiment</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Banque assurances finance</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Beauté cosmétique</span>
                                </label>

                                {/* Ajoutez les autres options de la même manière */}

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Secteur public (collectivités territoriales)</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Transport et logistique</span>
                                </label>
                            </div>

                            <div className="mb-6 mt-6 flex justify-center">
                                <button
                                    type="submit"
                                    className={`px-64 py-5 ${currentStep === 1 ? 'bg-red text-white' : 'bg-red text-white'
                                        } rounded-lg hover:bg-blue-600`}
                                >
                                    Suivant
                                </button>
                            </div>
                        </fieldset>
                    </form>
                )}


                {currentStep === 3 && (
                    <form className="mt-6" onSubmit={handleSubmit}>
                        <fieldset>
                            <legend className="text-xl font-bold mb-4">Compétences acquises :</legend>
                            <p className="text-s font-slim mb-4" > ( Vous pouvez sélectionner 5 réponses maximum ) </p>
                            <div className="space-y-4">
                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 font-bold">Marketing :</span> Coordination et animation CRM
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 font-bold">Marketing :</span> Création de supports de communication
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 font-bold">Rédaction :</span> Présentations et créations de contenus rédactionnels
                                </label>

                                {/* Ajoutez les autres options de la même manière */}

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 font-bold">Langues étrangères :</span> Gestion de projets de communication à l'international
                                </label>
                            </div>

                            <div className="mb-6 mt-6 flex justify-center">
                                <button
                                    type="submit"
                                    className={`px-64 py-5 ${currentStep === 1 ? 'bg-red text-white' : 'bg-red text-white'
                                        } rounded-lg hover:bg-blue-600`}
                                >
                                    Suivant
                                </button>
                            </div>
                        </fieldset>
                    </form>
                )}


                {currentStep === 4 && (
                    <form className="mt-6" onSubmit={handleSubmit}>
                        <fieldset>
                            <legend className="text-xl font-bold mb-4">Outils maîtrisés :</legend>
                            <p className="text-s font-slim mb-4" > ( Vous pouvez sélectionner 4 réponses maximum ) </p>
                            <div className="space-y-4">
                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 font-bold">Rédaction :</span> Word, PowerPoint, Pages, autre
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 font-bold">Création :</span> Adobe Photoshop, Adobe InDesign, Illustrator, Canva, autre
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 font-bold">Production :</span> Adobe Première, After Effect, iMovie, Garage Band, autre
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 font-bold">Budgétisation :</span> Excel, autre
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 font-bold">Réseaux sociaux :</span> Facebook, Twitter, LinkedIn, Instagram, TikTok, autre
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 font-bold">Réseaux sociaux :</span> Outils de pluri-gestion de comptes pour les réseaux sociaux (Hootsuite, Tweetdeck, autre)
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 font-bold">Gestion de projets :</span> Monday, Trello, Notion, Task, Excel, autre
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 font-bold">Développement :</span> CMS Wordpress, langage html
                                </label>
                            </div>

                            <div className="mb-6 mt-6 flex justify-center">
                                <button
                                    type="submit"
                                    className={`px-64 py-5 ${currentStep === 1 ? 'bg-red text-white' : 'bg-red text-white'
                                        } rounded-lg hover:bg-blue-600`}
                                >
                                    Suivant
                                </button>
                            </div>
                        </fieldset>
                    </form>
                )}



                {currentStep === 5 && (
                    <form className="mt-6" onSubmit={handleSubmit}>
                        <fieldset>
                            <legend className="text-xl font-bold mb-4">Soft Skills acquises :</legend>
                            <p className="text-s font-slim mb-4" > ( Vous pouvez sélectionner 4 réponses maximum ) </p>
                            <div className="space-y-4">
                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 ">Autonomie</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 ">Curiosité</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 ">Esprit d'équipe</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 ">Feedback</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 ">Flexibilité</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 ">Force de proposition</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 ">Gestion du temps</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 ">Orthographe et rédaction</span>
                                </label>
                            </div>

                            <div className="mb-6 mt-6 flex justify-center">
                                <button
                                    type="submit"
                                    className={`px-64 py-5 ${currentStep === 1 ? 'bg-red text-white' : 'bg-red text-white'
                                        } rounded-lg hover:bg-blue-600`}
                                >
                                    Suivant
                                </button>
                            </div>
                        </fieldset>
                    </form>
                )}


                {currentStep === 6 && (
                    <form className="mt-6" onSubmit={handleSubmit}>
                        <fieldset>
                            <legend className="text-xl font-bold mb-4">Langues étrangères pratiquées :</legend>
                            <p className="text-s font-slim mb-4" > ( Vous pouvez sélectionner 5 réponses maximum ) </p>
                            <div className="space-y-4">
                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Allemand</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Anglais</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Arabe</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Chinois</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Coréen</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Espagnol</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Italien</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Japonnais</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Néerlandais</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Portugais</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Russe</span>
                                </label>

                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Uniquement français</span>
                                </label>
                            </div>

                            <div className="mb-6 mt-6 flex justify-center">
                                <button
                                    type="submit"
                                    className={`px-64 py-5 ${currentStep === 1 ? 'bg-red text-white' : 'bg-red text-white'
                                        } rounded-lg hover:bg-blue-600`}
                                >
                                    Suivant
                                </button>
                            </div>
                        </fieldset>
                    </form>
                )}

                {currentStep === 7 && (
                    <form className="mt-6" onSubmit={handleSubmit}>
                        <fieldset>
                            <legend className="text-xl font-bold mb-4">Lieu(x) du stage recherché(s) :</legend>
                            <div className="mb-6 mt-6 flex justify-center">
                                <button
                                    type="submit"
                                    className={`px-64 py-5 ${currentStep === 1 ? 'bg-red text-white' : 'bg-red text-white'
                                        } rounded-lg hover:bg-blue-600`}
                                >
                                    Suivant
                                </button>
                            </div>
                        </fieldset>
                    </form>
                )}
                {currentStep === 8 && (
                    <form className="mt-6" onSubmit={handleSubmit}>
                        <fieldset>
                            <legend className="text-xl font-bold mb-4">Votre classe ( Durée du stage) : </legend>
                            <p className="text-s font-slim mb-4" > ( Vous pouvez sélectionner 2 réponses maximum ) </p>
                            <div className="space-y-2">
                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="radio" name="classe" value="1re année - Janvier (pour 2 mois)" className="form-radio" />
                                    <span className="ml-2">1re année - Janvier (pour 2 mois)</span>
                                </label>
                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="radio" name="classe" value="1re année - Juin (pour 2 mois)" className="form-radio" />
                                    <span className="ml-2">1re année - Juin (pour 2 mois)</span>
                                </label>
                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="radio" name="classe" value="Organisme public" className="form-radio" />
                                    <span className="ml-2">Organisme public</span>
                                </label>
                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="radio" name="classe" value="1re année BTS - Mai/Juin (pour 2 mois)" className="form-radio" />
                                    <span className="ml-2">1re année BTS - Mai/Juin (pour 2 mois)</span>
                                </label>
                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="radio" name="classe" value="1re, 2e année et 3e année - Juillet/Août (pour 2 mois)" className="form-radio" />
                                    <span className="ml-2">1re, 2e année et 3e année - Juillet/Août (pour 2 mois)</span>
                                </label>
                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="radio" name="classe" value="2e année - Novembre (pour 3 mois)" className="form-radio" />
                                    <span className="ml-2">2e année - Novembre (pour 3 mois)</span>
                                </label>
                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="radio" name="classe" value="2e année classe internationale - Janvier (pour 3 mois)" className="form-radio" />
                                    <span className="ml-2">2e année classe internationale - Janvier (pour 3 mois)</span>
                                </label>
                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="radio" name="classe" value="2e année spécialisation création publicitaire - Janvier (pour 2 mois)" className="form-radio" />
                                    <span className="ml-2">2e année spécialisation création publicitaire - Janvier (pour 2 mois)</span>
                                </label>
                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="radio" name="classe" value="2e année BTS - Novembre (pour 6 semaines)" className="form-radio" />
                                    <span className="ml-2">2e année BTS - Novembre (pour 6 semaines)</span>
                                </label>
                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="radio" name="classe" value="3e année - promotion interne, spécialisations Communication internationale + Planning stratégique & Publicité + Événementiel, Influence et Réputation - Septembre (pour 4 à 5 mois) // missions internationales requises" className="form-radio" />
                                    <span className="ml-2">3e année - promotion interne, spécialisations Communication internationale + Planning stratégique & Publicité + Événementiel, Influence et Réputation - Septembre (pour 4 à 5 mois) // missions internationales requises</span>
                                </label>
                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="radio" name="classe" value="3e année - promotion externe, toutes spécialisations - Février (pour 4 à 6 mois) // missions internationales requises" className="form-radio" />
                                    <span className="ml-2">3e année - promotion externe, toutes spécialisations - Février (pour 4 à 6 mois) // missions internationales requises</span>
                                </label>
                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="radio" name="classe" value="3e année - promotion interne, spécialisations Création & Design de marque + Transformation et stratégie digitale - Février (pour 4 à 6 mois) // missions internationales requises" className="form-radio" />
                                    <span className="ml-2">3e année - promotion interne, spécialisations Création & Design de marque + Transformation et stratégie digitale - Février (pour 4 à 6 mois) // missions internationales requises</span>
                                </label>
                                <label
                                    className={`flex items-center ${currentStep === 1 ? 'bg-greyLT text-black p-3 rounded-lg' : 'bg-greyLT p-2 rounded-md'
                                        }`}
                                >
                                    <input type="radio" name="classe" value="4e année - Mi Janvier/ maximum début Mars (pour 6 mois)" className="form-radio" />
                                    <span className="ml-2">4e année - Mi Janvier/ maximum début Mars (pour 6 mois)</span>
                                </label>
                            </div>

                            <div className="mb-6 mt-6 flex justify-center">
                                <button
                                    type="submit"
                                    className={`px-64 py-5 ${currentStep === 1 ? 'bg-red text-white' : 'bg-red text-white'
                                        } rounded-lg hover:bg-blue-600`}
                                >
                                    Suivant
                                </button>
                            </div>
                        </fieldset>
                    </form>
                )}

                {currentStep === 9 && (
                    <form className="mt-6" onSubmit={handleSubmit}>
                        <fieldset>
                            <legend className="text-xl font-bold mb-4">Une petite description qui apparetra sur votre profil :</legend>

                            <div className="mb-6 mt-6 flex justify-center">
                                <button
                                    type="submit"
                                    className={`px-64 py-5 ${currentStep === 1 ? 'bg-red text-white' : 'bg-red text-white'
                                        } rounded-lg hover:bg-blue-600`}
                                >
                                    Suivant
                                </button>
                            </div>
                        </fieldset>
                    </form>
                )}



                {currentStep === 10 && (
                    <div className="mt-6">
                        <center>
                            <p className="text-2xl font-bold mb-4">Vos informations ont bien été enregistrées !</p>

                        </center>
                        <div className="flex justify-center">
                            <img src={validation} alt="Logo ISCOM" className="h-96 w-auto" />
                        </div>


                        <div className="mb-6 mt-6 flex justify-center">
                            <Link to="/espace_etu">
                                <button className="px-64 py-5 bg-red text-white rounded-lg hover:bg-blue-600">
                                    Aller sur mon espace
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FormEtudiants;
