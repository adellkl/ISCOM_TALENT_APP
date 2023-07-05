import React, { useState } from 'react';

const EspaceEtu = () => {
    const [lienActif, setLienActif] = useState('profil');

    const handleLienClick = (lien) => {
        setLienActif(lien);
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/6 bg-red border-r border-gray-200">
                <a href="/espace_etu" className="flex items-center gap-2 bg-red p-4 hover:bg-gray-50">
                    <img
                        alt="Man"
                        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                        <p className="text-xs">
                            <strong className="block text-white font-medium">Kellay OBRAYAN</strong>
                            <span className='text-white'>kellay.obrayan@iscom.org</span>
                        </p>
                    </div>
                </a>
                <div className="p-4">
                    <a
                        href="#profil"
                        className={`flex items-center block py-2 text-white text-lg hover:text-gray-200 ${lienActif === 'profil' ? 'bg-black' : ''}`}
                        onClick={() => handleLienClick('profil')}
                    >
                        Profil
                    </a>
                    <a
                        href="#demandes"
                        className={`flex items-center block py-2 text-white text-lg hover:text-gray-200 ${lienActif === 'demandes' ? 'bg-black' : ''}`}
                        onClick={() => handleLienClick('demandes')}
                    >
                        Mes demandes
                    </a>
                    <a
                        href="#deconnexion"
                        className={`flex items-center block py-2 text-white text-lg hover:text-gray-200 ${lienActif === 'deconnexion' ? 'bg-black' : ''}`}
                        onClick={() => handleLienClick('deconnexion')}
                    >
                        Se déconnecter
                    </a>
                </div>
            </div>
            <div className="w-3/4 overflow-y-auto">
                {lienActif === 'profil' && (
                    <div className="p-4">
                        <h2 className="text-2xl font-bold mb-4">Profil</h2>

                    </div>
                )}
                {lienActif === 'demandes' && (
                    <div className="p-4">
                        <h2 className="text-2xl font-bold mb-4">Mes demandes</h2>

                    </div>
                )}
                {lienActif === 'deconnexion' && (
                    <div className="p-4">
                        <h2 className="text-2xl font-bold mb-4">Se déconnecter</h2>

                    </div>
                )}
            </div>
        </div>
    );
};

export default EspaceEtu;
