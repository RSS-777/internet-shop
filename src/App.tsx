import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/productSlice";
import { AppDispatch, RootState } from "./store/store";
import { TProduct } from "./store/productSlice";

const App: FC = () => {
  const dispatch: AppDispatch = useDispatch<AppDispatch>()
  const status = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);
  const data: TProduct[] = useSelector((state: RootState) => state.products.data);
  
  console.log('status:', status)
  console.log('error:', error)
  console.log('data:', data)

  useEffect(() => {
    dispatch(fetchProducts())
  },[])

  return (
   <main>
       <h1>Home</h1>
       <ul>
        {data.map((item) => 
         <li key={item.id}>{item.category}</li>
        )}
       </ul>
       <ul>
         {data.map((item) =>
          <li key={item.id}>{item.title} {<img  src={item.thumbnail}/>}</li>
          )}
       </ul>
   </main>
  )
}

export default App
