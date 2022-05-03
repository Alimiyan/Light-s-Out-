import React from 'react'

function MovieCard({movie,imageUrl}) {
  return (
        <div className="movie">
          <div>
            <p>{movie.release_date}</p>
          </div>
          <div>
            <img src={imageUrl+movie.poster_path} alt="image" />
          </div>
          <div>
            <span>{movie.vote_average}</span>
            <h3>{movie.title}</h3>
          </div>
        </div>
  )
}

export default MovieCard