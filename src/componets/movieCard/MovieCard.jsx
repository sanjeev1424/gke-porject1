import React from "react";
import "../movieCard/MovieCard.scss";
import {Link} from "react-router-dom"

const MovieCard = (props) => {
  const { data } = props;

  return (
    <div className="movie-card">
     
      <Link to={`/movie/${data.imdbID}`}>
        <div className="poster-div">
          <img src={data.Poster || 'defaultPoster.jpg'} alt={data.Title || 'No Title'} />
        </div>
        <div className="title-div">
          <h4 className="movie-title">{data.Title}</h4>
          <h4 className="movie-year">Year: {data.Year}</h4>
        </div>
      </Link>

    </div>
  );
};

export default MovieCard;
