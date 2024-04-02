import React, { useState, useEffect } from 'react';

const CardPeliculas = ({ peliculas }) => {
    const extractIdFromUrl = (url) => {
        const matches = url.match(/\/(\d+)\/$/);
        if (matches && matches.length > 1) {
            return matches[1];
        }
        return null;
    }

    const handleToggleFavorito = (movie) => {
        const newFavoritos = favoritos.includes(movie.title) ? favoritos.filter(item => item !== movie.title) : [...favoritos, movie.title];
        setFavoritos(newFavoritos);
        localStorage.setItem('peliculasFavoritas', JSON.stringify(newFavoritos));
    };

    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {
        const storedFavoritos = localStorage.getItem('peliculasFavoritas');
        if (storedFavoritos) {
            setFavoritos(JSON.parse(storedFavoritos));
        }
    }, []);

    return (
        <>
            <div className='row'>
                <h5 className="title tc-yellow-400 color-black">Star Wars</h5>
                <h5 className="title tc-yellow-400">Movies</h5>
                {peliculas.length > 0 ? (
                    peliculas.map((movie, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card mb-4">
                                <img src={`https://starwars-visualguide.com/assets/img/films/${extractIdFromUrl(movie.url)}.jpg`} className="img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <h5 className="card-text">Episode:{movie.episode_id}</h5>
                                    <h5 className="card-text">Director: {movie.director}</h5>
                                    <h5 className="card-text">Producer: {movie.producer}</h5>
                                    <button onClick={() => handleToggleFavorito(movie)} className="btn btn-outline-dark">
                                        {favoritos.includes(movie.title) ? 'Quitar de Favoritos' : 'Agregar a Favoritos❤'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <h1>Cargando...</h1>
                )}
            </div>
        </>
    );
};

export default CardPeliculas;
