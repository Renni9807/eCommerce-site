import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Shop } from "./Pages/Shop";
import ShoesPage from "./Pages/ShoesPage";
import ClothesPage from "./Pages/ClothesPage";
import { Product } from "./Pages/Product";
import Cart from "./Pages/Cart";
import { LoginSignup } from "./Pages/LoginSignup";
import { Footer } from "./Components/Footer/Footer";
import JewelryPage from "./Pages/JewelryPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/clothes" element={<ClothesPage />} />
          <Route path="/shoes" element={<ShoesPage />} />
          <Route path="/jewelry" element={<JewelryPage />} />{" "}
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
