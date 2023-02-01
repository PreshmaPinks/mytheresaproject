import React from "react";
import "./index.scss";

const Wishlist = ({ wishList }) => {
  return (
    <>
      <h1 className="wishlist-page-header">Wishlist</h1>
      <div className="wishlist-container">
        {wishList?.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <img
                  className="wishlist-image"
                  key={item.id}
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt={item.title}
                />
              </div>
              <div className="wishlist-details">{item.title}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Wishlist;
