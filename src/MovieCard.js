import React from 'react'
import './App.css';


const MovieCard = ({ title, year, description, imageURL }) => {
  return (
    <div className="card">
      <img className="card-img-top image" src={imageURL} alt="Movie Poster" />
      {/* <div className="card-body"> */}
        <div className="cardb">
        <h2 className="card-title movie-title">{title}</h2>
        <p className="card-text">{description}</p>
        <p className="card-footer movie-footer">{year}
          {/* <small className="text-muted">{year}</small> */}
        </p>
        </div>
        
      {/* </div> */}
    </div>
  )
}


export default MovieCard
