import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-title">Movies</div>
        <div className="header-menu">
          <div className="header-link">
            <Link to={`/`} relative="path">
              Home
            </Link>
          </div>
          <div className="header-link">
            <Link to={`/wishList`} relative="path">
              Wishlist ❤️
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
