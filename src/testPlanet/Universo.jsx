import React, { useEffect, useState } from 'react';
import CardUniverso from './CardUniverso';
import PaginacionUniverso from './PaginacionUniverso';
import { useNavigate } from "react-router";
import { auth } from "../firebase/config";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default function Universo() {
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

    const [planetas, setPlanetas] = useState([]);
    const [info, setInfo] = useState([]);
    const [favoritos, setFavoritos] = useState([]);

    const url1 = 'https://swapi.dev/api/planets/';

    const fetchPlanetas = async (url) => {
        let response = await fetch(url)
        let data = await response.json()
        setPlanetas(data.results);
        setInfo(data)
    }

    const onPrevious = () => {
        fetchPlanetas(info.previous);
    }

    const onNext = () => {
        fetchPlanetas(info.next);
    }

    useEffect(() => {
        fetchPlanetas(url1);
        const storedFavoritos = localStorage.getItem('favoritos');
        if (storedFavoritos) {
            setFavoritos(JSON.parse(storedFavoritos));
        }
    }, [])

    const toggleFavorito = (planeta) => {
        const index = favoritos.findIndex(p => p.name === planeta.name);
        if (index === -1) {
            const newFavoritos = [...favoritos, planeta];
            setFavoritos(newFavoritos);
            localStorage.setItem('favoritos', JSON.stringify(newFavoritos));
        } else {
            const newFavoritos = favoritos.filter((_, i) => i !== index);
            setFavoritos(newFavoritos);
            localStorage.setItem('favoritos', JSON.stringify(newFavoritos));
        }
    };

    console.log(info)
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/src/principal/HomePage.jsx">
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
                                    <a className="nav-link" aria-current="page" href="/src/Characters/Personajes.jsx">
                                        Personajes
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/src/testPlanet/Universo.jsx">
                                        Planetas
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/src/Movies/Peliculas.jsx">
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
            <PaginacionUniverso previous={info.previous} next={info.next} onPrevious={onPrevious} onNext={onNext} />
            <CardUniverso planetas={planetas} toggleFavorito={toggleFavorito} />
        </>
    )
}
