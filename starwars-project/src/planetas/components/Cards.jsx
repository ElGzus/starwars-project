


export const Cards = ({planet}) => {
  return (
    <div className="col-md-4">
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
  )
}
