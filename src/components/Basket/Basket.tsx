import { FC, ForwardedRef, forwardRef } from "react";
import { StyleContainer, StyleButtonBuy } from "./BasketStyle";
import { useSelector, useDispatch } from "react-redux";
import { TypeAppDispatch, TypeRootState } from "../../store/store";
import { deleteProductFromBasket, updateProductInBasket, TypeAddBasket } from "../../store/productSlice";

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

   const handleIncrementQuantity = (index: number) => {
      const updateProduct = { ...product[index] }
      if (updateProduct.count < 100) {
         updateProduct.count += 1;
         updateProduct.price = updateProduct.price / (updateProduct.count - 1)
         updateProduct.price *= updateProduct.count;
         dispatch(updateProductInBasket({ index, updateProduct }))
      }
   };

   const handleDecrementQuantity = (index: number) => {
      const updateProduct = { ...product[index] }
      if (updateProduct.count > 1) {
         updateProduct.count -= 1;
         updateProduct.price = updateProduct.price / (updateProduct.count + 1);
         updateProduct.price *= updateProduct.count;
         dispatch(updateProductInBasket({ index, updateProduct }))
      }
   };

   return (
      <StyleContainer $disable={propsDisable} ref={ref}>
         <h3>Basket</h3>
         <div>
            {product?.map((item, index) => (
               <div key={index}>
                  <h4>{item.title}</h4>
                  <span>{index + 1 + '.'}</span>
                  <img src={item.thumbnail} alt="Image product" />
                  <span>{item.price}$</span>
                  <div>
                     <button onClick={() => handleIncrementQuantity(index)}>+</button>
                     <span>{item.count}</span>
                     <button onClick={() => handleDecrementQuantity(index)}>-</button>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); handleDeleteProduct(index); }}>x</button>
                  <hr />
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
            <StyleButtonBuy disabled={product.length ? false : true}>Buy goods</StyleButtonBuy>
         </div>
      </StyleContainer>
   )
});

export default Basket;