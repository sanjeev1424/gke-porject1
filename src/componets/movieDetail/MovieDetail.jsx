import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncShowsAndMovie,
  getAllDet,
} from "../../features/movies/movieSlice";
import { useParams } from "react-router-dom";
import "./movieDetail.scss"; // Importing the stylesheet for MovieListing

const MovieDetail = () => {
  const { ImdbId } = useParams();
  // const cleanedInput = ImdbId.TrimStart(':');
  // console.log(ImdbId);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncShowsAndMovie(ImdbId));
  }, [dispatch,ImdbId]);
  const movie = useSelector(getAllDet);
  // console.log(movie);

  return (
    <div className="main-movie-detail">
      
        <div className="movie-header">
          <h1>{movie.Title}</h1>
          <div className="movie-rating">
            <span className="rating">{movie.imdbRating}</span>
            <span className="votes">({movie.imdbVotes} votes)</span>
          </div>
        </div>

        <div className="movie-content">
          <div className="movie-info">
            <p>
              <strong>Year:</strong> {movie.Year}
            </p>
            <p>
              <strong>Rated:</strong> {movie.Rated}
            </p>
            <p>
              <strong>Released:</strong> {movie.Released}
            </p>
            <p>
              <strong>Runtime:</strong> {movie.Runtime}
            </p>
            <p>
              <strong>Genre:</strong> {movie.Genre}
            </p>
            <p>
              <strong>Director:</strong> {movie.Director}
            </p>
            <p>
              <strong>Writer:</strong> {movie.Writer}
            </p>
            <p>
              <strong>Actors:</strong> {movie.Actors}
            </p>
            <p>
              <strong>Plot:</strong> {movie.Plot}
            </p>
            <p>
              <strong>Language:</strong> {movie.Language}
            </p>
            <p>
              <strong>Country:</strong> {movie.Country}
            </p>
            <p>
              <strong>Awards:</strong> {movie.Awards}
            </p>
            <p>
              <strong>Metascore:</strong> {movie.Metascore}
            </p>
            <p>
              <strong>Type:</strong> {movie.Type}
            </p>
            <p>
              <strong>Box Office:</strong> {movie.BoxOffice}
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a href={movie.Website} target="_blank" rel="noopener noreferrer">
                {movie.Website}
              </a>
            </p>
          </div>
      
        
          <div className="movie-poster">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        </div>
      
    </div>
  );
};

export default MovieDetail;
