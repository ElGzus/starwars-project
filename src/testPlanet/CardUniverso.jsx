import React, { useState, useEffect } from 'react';

const CardUniverso = ({ planetas, toggleFavorito }) => {
    const [favoritosLocal, setFavoritosLocal] = useState([]);

    useEffect(() => {
        const storedFavoritos = localStorage.getItem('favoritos');
        if (storedFavoritos) {
            setFavoritosLocal(JSON.parse(storedFavoritos));
        }
    }, []);

    const handleToggleFavorito = (planet) => {
        toggleFavorito(planet);
        const index = favoritosLocal.findIndex(p => p.name === planet.name);
        if (index === -1) {
            const newFavoritos = [...favoritosLocal, planet];
            setFavoritosLocal(newFavoritos);
            localStorage.setItem('favoritos', JSON.stringify(newFavoritos));
        } else {
            const newFavoritos = favoritosLocal.filter((_, i) => i !== index);
            setFavoritosLocal(newFavoritos);
            localStorage.setItem('favoritos', JSON.stringify(newFavoritos));
        }
    };

    return (
        <>
            <div className='row'>
                <h5 className="title tc-yellow-400 color-black">Star Wars</h5>
                <h5 className="title tc-yellow-400">Planets</h5>
                {planetas.length > 0 ? (
                    planetas.map((planet, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card mb-4">
                                <img src="https://c4.wallpaperflare.com/wallpaper/946/632/921/espacio-estrellas-naturaleza-planetas-wallpaper-preview.jpg" className="img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{planet.name}</h5>
                                    <h5 className="card-text">Climate: {planet.climate}</h5>
                                    <h5 className="card-text">Rotation:{planet.rotation_period}</h5>
                                    <button onClick={() => handleToggleFavorito(planet)} className="btn btn-outline-dark">
                                        {favoritosLocal.some(p => p.name === planet.name) ? 'Quitar de Favoritos' : 'Agregar a Favoritos❤'}
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

export default CardUniverso;
