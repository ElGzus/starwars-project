import React from 'react';

const extractIdFromUrl = (url) => {
    const matches = url.match(/\/(\d+)\/$/);
    if (matches && matches.length > 1) {
        return matches[1];
    }
    return null;
}

const CardPersonaje = ({ personajes, favoritos, toggleFavorito }) => {
    const handleToggleFavorito = (personaje) => {
        toggleFavorito(personaje);
    };

    return (
        <>
            <div className='row'>
                <h5 className="title tc-yellow-400 color-black">Star Wars</h5>
                <h5 className="title tc-yellow-400">Characters</h5>
                {personajes.length > 0 ? (
                    personajes.map((person, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card mb-4">
                                <img src={`https://starwars-visualguide.com/assets/img/characters/${extractIdFromUrl(person.url)}.jpg`} className="img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{person.name}</h5>
                                    <h5 className="card-text">Height:{person.height}</h5>
                                    <h5 className="card-text">Hair-color: {person.hair_color}</h5>
                                    <h5 className="card-text">Eye-color: {person.eye_color}</h5>
                                    <button onClick={() => handleToggleFavorito(person)} className="btn btn-outline-dark">
                                        {favoritos.some(p => p.name === person.name) ? 'Quitar de Favoritos' : 'Agregar a Favoritos❤'}
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

export default CardPersonaje;
