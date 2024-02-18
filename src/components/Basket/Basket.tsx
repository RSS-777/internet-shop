import { FC, ForwardedRef, forwardRef } from "react";
import { StyleContainer } from "./BasketStyle";
import { useSelector, useDispatch } from "react-redux";
import { TypeAppDispatch, TypeRootState } from "../../store/store";
import { deleteProductFromBasket, TypeAddBasket } from "../../store/productSlice";


interface BasketProps {
   propsDisable: boolean;
   ref: ForwardedRef<HTMLDivElement>;
}

const Basket: FC<BasketProps> = forwardRef(({ propsDisable }, ref) => {
   const product: TypeAddBasket[] | null = useSelector((state: TypeRootState) => state.products.basket);
   const dispatch: TypeAppDispatch = useDispatch();

   const handleDeleteProduct = (index: number) => {
      dispatch(deleteProductFromBasket(index))
   };

   return (
      <StyleContainer $disable={propsDisable} ref={ref}>
         <h3>Basket</h3>
         <div>
            {product?.map((item, index) => (
               <div key={index}>
                  <h4>{item.title}</h4>
                  <span>{item.price}</span>
                  <img src={item.thumbnail} alt="Image product" />
                  <button onClick={() => handleDeleteProduct(index)}>Delete</button>
               </div>
            )
            )}
         </div>
         <span>{product?.reduce((acc, item) => {
            acc += item.price;
            return acc
         }, 0)}
         </span>
         <button>Buy</button>
      </StyleContainer>
   )
});

export default Basket;