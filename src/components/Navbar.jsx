import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/ISCOM.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const shouldShowNavbar = !['/connexion', '/inscription'].includes(location.pathname);

    if (!shouldShowNavbar) {
        return null;
    }

    return (
        <nav aria-label="Site Header" className="shadow-sm">
            <div className="mx-auto max-w-screen-xl p-5">
                <div className="flex items-center justify-between gap-4 lg:gap-10">

                    <div className="flex lg:w-0 lg:flex-1">
                        <Link to="/">
                            <span className="sr-only">Logo</span>
                            <img src={logo} alt="Logo ISCOM" style={{ maxWidth: '120px', maxHeight: '100px' }} />
                        </Link>
                    </div>

                    <div className="hidden flex-1 items-center justify-end gap-4 sm:flex">
                        <Link
                            to="/connexion_entreprise"
                            className="rounded-md bg-blue px-5 py-2 text-sm font-medium text-white"
                        >
                            Connexion entreprises
                        </Link>
                        <Link
                            to="/connexion_etudiants"
                            className="rounded-md bg-red px-5 py-2 text-sm font-medium text-white"
                        >
                            Connexion Iscomiens
                        </Link>
                    </div>



                    <div className="lg:hidden">
                        <button
                            className="rounded-lg bg-gray-100 p-2 text-gray-600"
                            type="button"
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open menu</span>
                            <svg
                                aria-hidden="true"
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4 6h16M4 12h16M4 18h16"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
