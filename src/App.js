import React, { useState } from "react";
import Home from "./components/homePage";
import { Route, Routes } from "react-router-dom";
import Wishlist from "./components/wishlist";
import Details from "./components/detailsPage";
import Header from "./components/header";

const App = () => {
  const [wishList, addToWishList] = useState([]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist wishList={wishList} />} />
        <Route
          path="/details/:category/:id"
          element={
            <Details addToWishList={addToWishList} wishList={wishList} />
          }
        />
      </Routes>
    </>
  );
};

export default App;
