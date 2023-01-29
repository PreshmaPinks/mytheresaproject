import React from "react";

const Wishlist = ({ wishList }) => {
  return (
    <>
      <h1>Wishlist</h1>
      <div>
        {wishList?.map((item) => {
          return <div>{item.title}</div>;
        })}
      </div>
    </>
  );
};

export default Wishlist;
