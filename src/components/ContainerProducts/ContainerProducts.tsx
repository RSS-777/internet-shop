import { FC, ReactNode, useEffect, useState } from "react";
import { StyleDiv, StyleContainer, StyleBlockElement } from "./ContainerProductsStyle";
import { useSelector } from "react-redux";
import { TProduct } from "../../store/productSlice";
import { TypeRootState } from "../../store/store";
import { DetailsProduct } from "../../components/DetailsProduct/DetailsProduct";

export interface IProps {
    h2: string,
    children?: ReactNode,
    product?: string,
    $flex?: boolean,
};

const ContainerProducts: FC<IProps> = ({ h2, children, product, $flex = false }) => {
    const data: TProduct[] = useSelector((state: TypeRootState) => state.products.data);
    const getProduct: string = useSelector((state: TypeRootState) => state.products.product);
    const [detailsProduct, setDetailsProduct] = useState<TProduct | null>(null);
    const status: string = useSelector((state: TypeRootState) => state.products.status);
    const error: string | null = useSelector((state: TypeRootState) => state.products.error);

    const handleDetails = (item: TProduct) => {
        setDetailsProduct(item)
    };

    const handleClear = () => {
        setDetailsProduct(null)
    };
    
    useEffect(() => {
        data.filter(items => items.title === getProduct).map((item) =>handleDetails(item))
    },[getProduct])
    
    return (
        <StyleContainer>
            <h2>{h2}</h2>
            <StyleDiv $flex={$flex} >
                {status === 'loading' && <p>'loading'</p>}

                {status === 'succeeded' && (detailsProduct === null)
                    ? (children || data.filter(items => items.category === product).map((item) => (
                        <StyleBlockElement key={item.id} onClick={() => handleDetails(item)}>
                            <h4>{item.brand}</h4>
                            <img src={item.thumbnail} alt="imege product" />
                            <div>
                                <span>Price:{item.price}$</span>
                                <span>Discount:{item.discountPercentage}$</span>
                            </div>
                        </StyleBlockElement>
                    )))
                    : (<DetailsProduct dataProps={detailsProduct} onClick={handleClear} />)
                }

                {status === 'faild' && <p>An error occurred while receiving data from the server! ({error})</p>}
            </StyleDiv>
        </StyleContainer>
    )
}

export default ContainerProducts;










