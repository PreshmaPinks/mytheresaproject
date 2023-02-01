import { APIKEY } from "../../constants.js";
export const fetchMoviesData = (category, callback, errorhandler) => {
  const apiResponse = fetch(
    `https://api.themoviedb.org/3/movie/${category}?api_key=${APIKEY}&language=en-US`
  );
  apiResponse
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw res;
      }
    })
    .then((list) => {
      callback(list?.results);
    })
    .catch((e) => {
      errorhandler(`Data failed to load. Please try after sometime`);
    });
};
