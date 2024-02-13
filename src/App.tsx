import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./store/productSlice";
import { TypeAppDispatch } from "./store/store";
import { Routes, Route } from "react-router-dom";
import { StyleMain } from "./AppStyles";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Smartphones from './pages/Smartphones/Smartphones';

const App: FC = () => {
  const dispatch: TypeAppDispatch = useDispatch<TypeAppDispatch>()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <StyleMain>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/smartphones" element={<Smartphones />} />
      </Routes>
    </StyleMain>
  )
}

export default App
