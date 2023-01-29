import React, { useState, useEffect } from "react";
import Header from "../header";
import Carousel from "./carousel";
const APIKEY = "e840e4b6baae963fcdb9be3185131087";
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
        console.log("l", list);
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

  console.log(upcomingMovies, popularMovies, topRatedMovies);

  return (
    <>
      <div>
        <div>
          <div> Category 1 </div>
          <div>
            <Carousel list={upcomingMovies} />
          </div>
        </div>
        <div>
          <div> Category 2 </div>
          <div>
            <Carousel list={popularMovies} />
          </div>
        </div>
        <div>
          <div> Category 3 </div>
          <div>
            <Carousel list={topRatedMovies} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
