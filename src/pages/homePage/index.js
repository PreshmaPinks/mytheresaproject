import React, { useState, useEffect } from "react";
import Carousel from "../../components/carousel";
import "./index.scss";
import { APIKEY } from "../../constants.js";

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState(null);
  const [popularMovies, setPopularMovies] = useState(null);
  const [topRatedMovies, setTopRatedMovies] = useState(null);

  useEffect(() => {
    const apiResponse = fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-US`
    );
    apiResponse
      .then((res) => res.json())
      .then((list) => {
        setUpcomingMovies(list?.results);
      });
  }, []);

  useEffect(() => {
    const apiResponse = fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US`
    );
    apiResponse
      .then((res) => res.json())
      .then((list) => {
        setPopularMovies(list?.results);
      });
  }, []);

  useEffect(() => {
    const apiResponse = fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US`
    );
    apiResponse
      .then((res) => res.json())
      .then((list) => {
        setTopRatedMovies(list?.results);
      });
  }, []);

  return (
    <>
      <div>
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
