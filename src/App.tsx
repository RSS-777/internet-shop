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
        <Route path="/smartphones" element={<Smartphones />} />
        <Route path="/laptops" element={<Laptops />} />
      </Routes>
    </StyleMain>
  )
}

export default App
