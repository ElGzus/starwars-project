import React from 'react'

export default function CardUniverso({planetas}) {
    const extractIdFromUrl = (url) => {
        const matches = url.match(/\/(\d+)\/$/);
        if (matches && matches.length > 1) {
            return matches[1];
        }
        return null;
    }

  return (
    <>
    <div className='row'>
    <h5 className="title tc-yellow-400 color-black">Star Wars</h5>
    <h5 className="title tc-yellow-400">Planets</h5>
        {planetas.length > 0 ? (
            planetas.map((planet, index) => (
                <div className="col-md-4" key={index}>
                    <div className="card mb-4">
                    <img src="https://c4.wallpaperflare.com/wallpaper/946/632/921/espacio-estrellas-naturaleza-planetas-wallpaper-preview.jpg" className="img-fluid" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{planet.name}</h5>
                    <h5 className="card-text">Climate: {planet.climate}</h5>
                    <h5 className="card-text">Rotation:{planet.rotation_period}</h5>
                    <a href="#" className="btn btn-outline-dark">Agregar Favoritos❤</a>
                    </div>
                    </div>
                </div>
            ))
        ) : (
            <h1>Cargando...</h1>
        )}
    </div>
    </>
  )
}
