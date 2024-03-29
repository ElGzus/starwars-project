
import React from 'react'

export const CardPeli = ({movie}) => {
  return (
    <div className="col-md-4">
    <div className="card mb-4">
    <img src="https://lumiere-a.akamaihd.net/v1/images/avco_payoff_1-sht_v7_lg_32e68793.jpeg" className="img-fluid" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{movie.title}</h5>
      <h5 className="card-text">Episode:{movie.episode_id}</h5>
      <h5 className="card-text">Director: {movie.director}</h5>
      <h5 className="card-text">Producer: {movie.producer}</h5>
      <a href="#" className="btn btn-outline-dark">Agregar Favoritos❤</a>
      </div>
    </div>
  </div>
  )
}
