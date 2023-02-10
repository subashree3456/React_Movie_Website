import React from 'react';
import "./style.css"

function Movie({data}) {

   

  return (
    <div className="movie-list">
      {
        (data).map((movie)=>{
            return(
                <>
                <div className="movie-container">                    
                     <img src={movie.poster} alt="" className="movie-poster"/> 

                 <div className="movie-specs">
                  <h3 className="movie-name"> {movie.name}</h3>
                  <p className="movie-rating">{movie.rating}</p> 
                  </div>     

                 <p className="movie-summary">{movie.summary}</p>                 
                 
               </div>
                </>
            )
        })
      }
    </div>
  )
}

export default Movie


