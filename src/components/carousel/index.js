import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { CAROUSEL_IMAGES_COUNT } from "../../constants.js";

const Carousel = ({ list, category }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(
      currentIndex - CAROUSEL_IMAGES_COUNT < 0
        ? list.length - CAROUSEL_IMAGES_COUNT
        : currentIndex - CAROUSEL_IMAGES_COUNT
    );
  };

  const handleNextClick = () => {
    setCurrentIndex(
      currentIndex + CAROUSEL_IMAGES_COUNT >= list.length
        ? (currentIndex + CAROUSEL_IMAGES_COUNT) % list.length
        : currentIndex + CAROUSEL_IMAGES_COUNT
    );
  };

  return (
    <div>
      <div className="inner-container-style">
        <button onClick={handlePrevClick} className={`carousel-button-prev`}>
          Prev
        </button>
        {list
          ?.slice(currentIndex, currentIndex + CAROUSEL_IMAGES_COUNT)
          .map((item, index) => {
            return (
              <div key={item.id}>
                <Link to={`/details/${category}/${item.id}`} relative="path">
                  <img
                    className="home-carousel-image"
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    alt="slide"
                  />
                </Link>
              </div>
            );
          })}
        <button onClick={handleNextClick} className={`carousel-button-next`}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
