import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import CardPeliculas from './CardPeliculas';

export default function Peliculas() {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsername(user.email);
            }
        });
        return () => unsubscribe();
    }, []);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUsername("");
                navigate("/");
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        const fetchPeliculas = async () => {
            try {
                const response = await fetch('https://swapi.dev/api/films/');
                const data = await response.json();
                setPeliculas(data.results);
            } catch (error) {
                console.error('Error fetching peliculas:', error);
            }
        };
        fetchPeliculas();
    }, []);

    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/starwars-project/src/principal/HomePage.jsx">
                            Bienvenido {username || "Invitado"}
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/starwars-project/src/Characters/Personajes.jsx">
                                        Personajes
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/starwars-project/src/testPlanet/Universo.jsx">
                                        Planetas
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/starwars-project/src/Movies/Peliculas.jsx">
                                        Peliculas
                                    </a>
                                </li>

                            </ul>
                            <button className="btn btn-danger" onClick={handleSignOut}>
                                Cerrar sesión
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
            <CardPeliculas peliculas={peliculas} />
        </>

    );
}
