import React from "react";
import "./wishlist.scss";

const Wishlist = ({ wishList }) => {
  return (
    <>
      <h1>Wishlist</h1>
      <div className="wishlist_container">
        {wishList?.map((item) => {
          return (
            <div>
              <div className="wishlist_image">
                <img
                  // className="carousel_image"
                  key={item.id}
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt={item.title}
                  // style={imageStyles}
                />
              </div>
              <div className="wishlist_details">{item.title}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Wishlist;
