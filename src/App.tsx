import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./store/productSlice";
import { TypeAppDispatch } from "./store/store";
import { Routes, Route } from "react-router-dom";
import { StyleMain } from "./AppStyles";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Smartphones from './pages/Smartphones/Smartphones';
import Laptops from "./pages/Laptops/Laptops";
import Fragrances from "./pages/Fragrances/Fragrances";
import Furniture from "./pages/Furniture/Furniture";
import Groceries from "./pages/Groceries/Groceries";
import HomeDecoration from "./pages/HomeDecoration/HomeDecoration";
import Skincare from "./pages/Skincare/Skincare";
import Tops from "./pages/Tops/Tops";
import WomensDresses from "./pages/WomensDresses/WomensDresses";
import WomensShoes from "./pages/Womens-shoes/WomensShoes";

const App: FC = () => {
  const dispatch: TypeAppDispatch = useDispatch<TypeAppDispatch>()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <StyleMain>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fragrances" element={<Fragrances />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/groceries" element={<Groceries />} />
        <Route path="/home-decoration" element={<HomeDecoration />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/smartphones" element={<Smartphones />} />
        <Route path="/tops" element={<Tops />} />
        <Route path="/womens-shoes" element={<WomensShoes/>} />
        <Route path="/womens-dresses" element={<WomensDresses />} />
      </Routes>
    </StyleMain>
  )
}

export default App
