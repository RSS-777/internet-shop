import { FC, ForwardedRef, forwardRef } from "react";
import { StyleContainer, StyleButton, StyleButtonBuy } from "./BasketStyle";
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
                  <span>{index + 1}</span>
                  <img src={item.thumbnail} alt="Image product" />
                  <span>{item.price}$</span>
                  <StyleButton onClick={(e) => { e.stopPropagation(); handleDeleteProduct(index); }}>Delete</StyleButton>
               </div>
            )
            )}
         </div>
         <div>
            <span>Total price: <span>{product?.reduce((acc, item) => {
               acc += item.price;
               return acc
            }, 0)}$</span>
            </span>
            <StyleButtonBuy>Buy</StyleButtonBuy>
         </div>
      </StyleContainer>
   )
});

export default Basket;