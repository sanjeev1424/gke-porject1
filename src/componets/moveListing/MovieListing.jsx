import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../movieCard/MovieCard";
import "./MovieListing.scss"; // Importing the stylesheet for MovieListing

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  const renderContent = (data) => {
    if (data.Response === 'True') {
      return data.Search.map((item, index) => <MovieCard key={index} data={item} />);
    } else {
      return <h3 className="error-message">{data.error}</h3>;
    }
  };

  return (
    <div className="movie-listing">
      <h3 className="listing-title">Movies </h3> {/* Added heading */}
      <div className="sub-div">

      {renderContent(movies)}
      </div>

      <h3 className="listing-title">Shows</h3> {/* Added heading */}
      <div className="sub-div">
      {renderContent(shows)}
      </div>
    </div>
  );

};

export default MovieListing;



// import React from "react";
// import { useSelector } from "react-redux";
// import { getAllMovies,getAllShows } from "../../features/movies/movieSlice";
// import MovieCard from "../movieCard/MovieCard";

 

// const MovieListing = () => {
//   const movies = useSelector(getAllMovies);
//   const shows = useSelector(getAllShows);
//  // console.log(shows);
  
// //console.log(movies.Response == 'True');

//   let renderMovies =
//     movies.Response === 'True'? (
//       movies.Search.map((i, index) => (
//         <MovieCard key={index} data={i} />
//       ))
//     ) : (
//       <div>
//         <h3>{movies.error}</h3>
//       </div>
//     );
//   let renderShows =
//     shows.Response === 'True'? (
//       shows.Search.map((i, index) => (
//         <MovieCard key={index} data={i} />
//       ))
//     ) : (
//       <div>
//         <h3>{shows.error}</h3>
//       </div>
//     );
//   return (
//     <div className="main-list">

//       {renderMovies}
//       {renderShows}
//     </div>
    
//   );
// };

// export default MovieListing;
