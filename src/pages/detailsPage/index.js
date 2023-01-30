import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";

const APIKEY = "e840e4b6baae963fcdb9be3185131087";
const Details = ({ addToWishList, wishList }) => {
  const params = useParams();
  const [movieDetails, setmovieDetails] = useState(null);

  useEffect(() => {
    const apiResponse = fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=${APIKEY}&language=en-US`
    );
    apiResponse
      .then((res) => res.json())
      .then((details) => {
        setmovieDetails(details);
      });
  }, []);
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
          <div className="wishlist-button-container">
            <button
              onClick={() => addToWishList([...wishList, movieDetails])}
              className="wishlist-button"
            >
              ADD TO WISHLIST
            </button>
          </div>
          <div className="details-text-header">Details</div>
          <div className="details-text"> {movieDetails?.overview}</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
