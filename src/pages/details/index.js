import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
import { APIKEY, POPULAR, UPCOMING } from "../../constants.js";
import { fetchMovieData } from "./apis.js";

const Details = ({ addToWishList, wishList }) => {
  const params = useParams();
  const [movieDetails, setmovieDetails] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchMovieData(params.id, setmovieDetails, setError);
  }, []);

  if (error) {
    return <div className="error"> {error} </div>;
  }

  return (
    <div className={`details-container-${params.category}`}>
      <div className="movie-image-container">
        <img
          key={movieDetails?.id}
          src={`https://image.tmdb.org/t/p/original/${movieDetails?.poster_path}`}
          alt={movieDetails?.title}
        />
      </div>

      <div className="movie-detail-container">
        <div className="movie-detail-sub-container">
          <div className={`movie-detail-name-${params.category}`}>
            {movieDetails?.original_title}
          </div>

          <div className="wishlist-button-container">
            <button
              onClick={() => addToWishList([...wishList, movieDetails])}
              className={`wishlist-button-${params.category}`}
            >
              ADD TO WISHLIST
            </button>
          </div>
          {params?.category == POPULAR && (
            <div>Rating - {movieDetails?.vote_average} ⭐ </div>
          )}

          {params?.category == UPCOMING && (
            <div className="coming-soon-text">coming soon</div>
          )}

          <div className="details-text-header">Details</div>
          <div className="details-text"> {movieDetails?.overview}</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
