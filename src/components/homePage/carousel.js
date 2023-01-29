import React, { useState } from "react";
import { Link } from "react-router-dom";

const Carousel = ({ list }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex === 0 ? list.length - 1 : currentIndex - 1);
  };

  const handleNextClick = () => {
    console.log("here", currentIndex);
    setCurrentIndex(currentIndex === list.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div style={containerStyles}>
      <div style={prevNextbuttonStyles}>
        <button onClick={handlePrevClick} style={buttonStyles}>
          Prev
        </button>
      </div>

      <div style={innerContainerStyles}>
        {list?.map((item, index) => {
          const isActive =
            (index + list.length - currentIndex) % list.length < 5;
          return isActive ? (
            <Link to={`/details/${item.id}`} relative="path">
              <img
                key={item.id}
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt={item.title}
                style={imageStyles}
              />
            </Link>
          ) : null;
        })}
      </div>
      <div style={prevNextbuttonStyles}>
        <button onClick={handleNextClick} style={buttonStyles}>
          Next
        </button>
      </div>
    </div>
  );
};

const containerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "400px",
  width: "100%",
  backgroundColor: "lightgray",
};

const prevNextbuttonStyles = {
  width: "5%",
};

const innerContainerStyles = {
  display: "flex",
  width: "90%",
  height: "80%",
};

const imageStyles = {
  height: "100%",
  width: "20%",
  objectFit: "cover",
};

const buttonStyles = {
  backgroundColor: "transparent",
  border: "1px solid white",
  color: "black",
  padding: "5px 10px",
  margin: "0 10px",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
};

export default Carousel;
