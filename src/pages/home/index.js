import React, { useState, useEffect } from "react";
import Carousel from "../../components/carousel";
import "./index.scss";
import { APIKEY } from "../../constants.js";
import { fetchMoviesData } from "./apis.js";

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState(null);
  const [popularMovies, setPopularMovies] = useState(null);
  const [topRatedMovies, setTopRatedMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMoviesData("upcoming", setUpcomingMovies, setError);
  }, []);

  useEffect(() => {
    fetchMoviesData("popular", setPopularMovies, setError);
  }, []);

  useEffect(() => {
    fetchMoviesData("top_rated", setTopRatedMovies, setError);
  }, []);

  return (
    <>
      <div>
        {error && <div className="error"> {error} </div>}
        <div className="upcoming-carousel-container">
          <div className="movie-category-header"> Upcoming Movies </div>
          <div>
            <Carousel list={upcomingMovies} category="upcoming" />
          </div>
        </div>
        <div className="popular-carousel-container">
          <div className="movie-category-header"> Popular Movies </div>
          <div>
            <Carousel list={popularMovies} category="popular" />
          </div>
        </div>
        <div className="toprated-carousel-container">
          <div className="movie-category-header"> Top rated Movies </div>
          <div>
            <Carousel list={topRatedMovies} category="toprated" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
