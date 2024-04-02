import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CardPersonaje from './CardPersonaje';
import PaginacionPersonaje from './PaginacionPersonaje';
import { useNavigate } from "react-router";
import { auth } from "../firebase/config";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default function Personajes() {
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

    const [personajes, setPersonajes] = useState([]);
    const [info, setInfo] = useState([]);
    const [favoritos, setFavoritos] = useState([]);

    const url1 = 'https://swapi.dev/api/people/';

    const fetchPersonajes = async (url) => {
        let response = await fetch(url)
        let data = await response.json()
        setPersonajes(data.results);
        setInfo(data)
    }

    const onPrevious = () => {
        fetchPersonajes(info.previous);
    }

    const onNext = () => {
        fetchPersonajes(info.next);
    }

    useEffect(() => {
        fetchPersonajes(url1);
        const storedFavoritos = localStorage.getItem('personajesFavoritos');
        if (storedFavoritos) {
            setFavoritos(JSON.parse(storedFavoritos));
        }
    }, [])

    const toggleFavorito = (personaje) => {
        const index = favoritos.findIndex(p => p.name === personaje.name);
        if (index === -1) {
            const newFavoritos = [...favoritos, personaje];
            setFavoritos(newFavoritos);
            localStorage.setItem('personajesFavoritos', JSON.stringify(newFavoritos));
        } else {
            const newFavoritos = favoritos.filter((_, i) => i !== index);
            setFavoritos(newFavoritos);
            localStorage.setItem('personajesFavoritos', JSON.stringify(newFavoritos));
        }
    };

    console.log(info)
    return (
        <>
            <div>
            <nav className="navbar navbar-expand-lg mb-5">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/homepage">
                            Bienvenido {username || "Invitado"}
                        </Link>
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
                                    <Link className="nav-link" to="/Personajes">
                                        Personajes
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Universo">
                                        Planetas
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Peliculas">
                                        Películas
                                    </Link>
                                </li>
                            </ul>
                            <button className="btn btn-danger" onClick={handleSignOut}>
                                Cerrar sesión
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
            <PaginacionPersonaje previous={info.previous} next={info.next} onPrevious={onPrevious} onNext={onNext} />
            <CardPersonaje personajes={personajes} favoritos={favoritos} toggleFavorito={toggleFavorito} />
        </>
    )
}