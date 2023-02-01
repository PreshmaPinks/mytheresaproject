import { APIKEY } from "../../constants.js";
export const fetchMovieData = (id, callback, errorHandler) => {
  const apiResponse = fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`
  );
  apiResponse
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw res;
      }
    })
    .then((details) => {
      callback(details);
    })
    .catch(() => {
      errorHandler("Failed to load. Please try after sometime");
    });
};
