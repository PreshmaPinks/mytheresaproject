import React, { useState } from "react";
import Home from "./components/homePage";
import { Route, Routes } from "react-router-dom";
import Wishlist from "./components/wishlist";
import Details from "./components/detailsPage";
import Header from "./components/header";

const App = () => {
  const [wishList, addToWishList] = useState([]);
  console.log(wishList, "wish");
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist wishList={wishList} />} />
        <Route
          path="/details/:id"
          element={<Details addToWishList={addToWishList} apple={3} />}
        />
      </Routes>
    </>
  );
};

export default App;
