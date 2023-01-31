import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/homePage";
import Wishlist from "./pages/wishlist";
import Details from "./pages/detailsPage";

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
