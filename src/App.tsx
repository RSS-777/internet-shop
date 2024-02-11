import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProduct } from "./store/productSlice";

const App: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProduct())
  },[])

  return (
   <main>
       <h1>Home</h1>
   </main>
  )
}

export default App
