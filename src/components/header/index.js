import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header_container">
        <div className="header_titles app_title">Movies</div>
        <div className="header_titles right_header_titles">Home</div>
        <div className="header_titles right_header_titles">About</div>
        <div className="header_titles right_header_titles">Contact</div>
        <div className="header_titles right_header_titles">
          <Link to={`/wishList`} relative="path">
            ❤️
          </Link>
        </div>
        <div className="header_titles right_header_titles">Pinky</div>
        <div className="header_titles right_header_titles">Logout</div>
      </div>
    </>
  );
};

export default Header;
