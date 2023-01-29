import React from "react";
import Home from "./components/homePage";
import { Route, Routes } from "react-router-dom";
import Wishlist from "./components/wishlist";
import Details from "./components/detailsPage";
import Header from "./components/header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
};

export default App;
