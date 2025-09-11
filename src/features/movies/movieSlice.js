import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MovieApi from "../../common/Api/MovieApi";
import { APIKey } from "../../common/Api/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (movieText) => {
    // const movieText ="Harry";

    try {
      const response = await MovieApi.get(
        `?apikey=${APIKey}&s=${movieText}&type=movie`
      );
      // console.log("API Response: ", response);  // Log full API response
      return response.data; // Make sure this is returning the correct data structure
    } catch (err) {
      // console.log("Error is:", err);
      throw err; // Handle the error properly
    }
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (seriesText) => {
    // const seriesText ="Friends";

    try {
      const response = await MovieApi.get(
        `?apikey=${APIKey}&s=${seriesText}&type=series`
      );
      // console.log("API Response: ", response);  // Log full API response
      return response.data; // Make sure this is returning the correct data structure
    } catch (err) {
      // console.log("Error is:", err);
      throw err; // Handle the error properly
    }
  }
);
export const fetchAsyncShowsAndMovie = createAsyncThunk(
  "movies/fetchAsyncShowsAndMovie",
  async (id) => {
    id = id.replace(/[^a-zA-Z0-9]/g, "");

    try {
      const response = await MovieApi.get(
        `?apikey=${APIKey}&i=${id}&plot=full`
      );
      console.log("API Response of fetch by id: ", response); // Log full API response
      return response.data; // Make sure this is returning the correct data structure
    } catch (err) {
      console.log("Error is:", err);
      throw err; // Handle the error properly
    }
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedShowOrMovie: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, (state) => {
        console.log("Pending");
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        // console.log("Movies fetched Successfully");
        return { ...state, movies: payload };

        // state.movies = payload;
      })
      .addCase(fetchAsyncMovies.rejected, (state) => {
        console.log("Rejected");
      })
      .addCase(fetchAsyncShows.pending, (state) => {
        console.log("Pending");
      })
      .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
        console.log("Shows fetched Successfully");
        return { ...state, shows: payload };

        // state.movies = payload;
      })
      .addCase(fetchAsyncShows.rejected, (state) => {
        console.log("Rejected");
      })
      .addCase(fetchAsyncShowsAndMovie.pending, (state) => {
        console.log("Pending");
      })
      .addCase(fetchAsyncShowsAndMovie.fulfilled, (state, { payload }) => {
        console.log("movieDetails fetched Successfully");
        return { ...state, selectedShowOrMovie: payload };

        // state.movies = payload;
      })
      .addCase(fetchAsyncShowsAndMovie.rejected, (state) => {
        console.log("Rejected");
      });
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllDet = (state) => state.movies.selectedShowOrMovie;
export default movieSlice.reducer;
