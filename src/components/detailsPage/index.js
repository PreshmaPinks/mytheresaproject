import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const APIKEY = "e840e4b6baae963fcdb9be3185131087";
const Details = ({ addToWishList, apple }) => {
  console.log("addToWishList", addToWishList, apple);
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
    <div>
      <div>
        <img
          key={movieDetails?.id}
          src={`https://image.tmdb.org/t/p/original/${movieDetails?.poster_path}`}
          alt={movieDetails?.title}
        />
      </div>
      <div> {movieDetails?.overview}</div>
      <div>
        <button onClick={() => addToWishList([movieDetails])}>
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default Details;
