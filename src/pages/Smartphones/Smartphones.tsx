import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { TProduct } from "../../store/productSlice";
import { TypeRootState } from "../../store/store";
import ContainerProducts from "../../components/ContainerProducts/ContainerProducts";
import { StyleDiv, StyleImg, StyleText, StyleH4 } from "./SmartphonesStyle";
import { DetailsProduct } from "../../components/DetailsProduct/DetailsProduct";

const Smartphones: FC = () => {
  const data: TProduct[] = useSelector((state: TypeRootState) => state.products.data);
  const [detailsProduct, setDetailsProduct] = useState<TProduct | null>(null);
  const status: string = useSelector((state: TypeRootState) => state.products.status);
  const error: string | null = useSelector((state: TypeRootState) => state.products.error);

  const handleDetails = (item: TProduct) => {
    setDetailsProduct(item)
    console.log("Smartphones", item)
  };

  const handleClear = () => {
    setDetailsProduct(null)
  };

  return (
    <ContainerProducts h2="Smartphones">
      {status === 'loading' && <p>'loading'</p>}

      {status === 'succeeded' && (detailsProduct === null)
        ? (data.filter(items => items.category === 'smartphones').map((item) => (
          <StyleDiv key={item.id} onClick={() => handleDetails(item)}>
            <StyleH4>{item.brand}</StyleH4>
            <StyleImg src={item.thumbnail} alt="imege product" />
            <StyleText>
              <span>Price:{item.price}$</span>
              <span>Discount:{item.discountPercentage}$</span>
            </StyleText>
          </StyleDiv>
        )))
        : (<DetailsProduct dataProps={detailsProduct} onClick={handleClear} />)
      }

      {status === 'faild' && <p>An error occurred while receiving data from the server! ({error})</p>}
    </ContainerProducts>
  )
}

export default Smartphones;