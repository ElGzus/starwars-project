


export const Card = ({person}) => {
  return (
    <>
    <div className="col-md-4">
      <div className="card mb-4">
      <img src="https://i.blogs.es/8330d9/star-wars-orden-todas-las-peliculas/1366_521.jpeg" className="img-fluid" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{person.name}</h5>
        <h5 className="card-text">Height:{person.height}</h5>
        <h5 className="card-text">Hair-color: {person.hair_color}</h5>
        <h5 className="card-text">Eye-color: {person.eye_color}</h5>
        <a href="#" className="btn btn-outline-dark">Agregar Favoritos❤</a>
        </div>
      </div>
    </div>
  
    </>
  )
}
