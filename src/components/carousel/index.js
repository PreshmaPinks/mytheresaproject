import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { CAROUSEL_IMAGES_COUNT } from "../../constants.js";

const Carousel = ({ list, category }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex - 7 < 0 ? list.length - 7 : currentIndex - 7);
  };

  const handleNextClick = () => {
    setCurrentIndex(
      currentIndex + 7 >= list.length
        ? (currentIndex + 7) % list.length
        : currentIndex + 7
    );
  };

  return (
    <div>
      <div className="inner_container_style">
        <button onClick={handlePrevClick} className={`carousel-button-prev`}>
          Prev
        </button>
        {list?.slice(currentIndex, currentIndex + 7).map((item, index) => {
          return (
            <div key={item.id}>
              <Link to={`/details/${category}/${item.id}`} relative="path">
                <img
                  className="home_carousel_image"
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
