import React, { useState, useEffect } from "react";
import MovieListing from "../moveListing/MovieListing";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import "./home.scss"

const Home = () => {
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // State to manage submission
  const dispatch = useDispatch();

  const navigate=useNavigate();
    const handleNavigate = () => {
        // Navigate to the "About" page
        navigate('/blog');
      };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (name.trim()) {
      dispatch(fetchAsyncMovies(name));
      dispatch(fetchAsyncShows(name));
      setIsSubmitted(true); // Set submitted to true if name is not empty
    } else {
      setIsSubmitted(false); // Reset if name is empty
    }
  };

  return (
    <div className="home-main">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Search for movies or shows..."
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="banner-img"></div>
      {isSubmitted ? (
        <MovieListing />
      ) : (
        name.trim() === "" && (
          <div className="empty-search">
            <h2>Empty Search Field</h2>
            <p>Please enter a title to search for movies or shows.</p>
            <button  onClick={handleNavigate}>Blog</button>
          </div>
        )
      )}
    </div>
  );
};

export default Home;
