import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShoesPage from "./Pages/ShoesPage";
import ClothesPage from "./Pages/ClothesPage";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import jewelry_banner from "./Components/Assets/jewelry.png"; // 이미지 경로가 올바른지 확인합니다.

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/clothes" element={<ClothesPage />} />
          <Route path="/shoe" element={<ShoesPage />} />
          <Route
            path="/jewelry"
            element={
              <ShopCategory banner={jewelry_banner} category="jewelry" />
            }
          />
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
