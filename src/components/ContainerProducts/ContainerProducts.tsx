import { FC, ReactNode, useState } from "react";
import { StyleDiv, StyleContainer, StyleBlockElement, StyleImg, StyleText, StyleH2, StyleH4 } from "./ContainerProductsStyle";
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
        <StyleContainer>
            <StyleH2>{h2}</StyleH2>
            <StyleDiv $flex={$flex} >
                {status === 'loading' && <p>'loading'</p>}

                {status === 'succeeded' && (detailsProduct === null)
                    ? (children || data.filter(items => items.category === product).map((item) => (
                        <StyleBlockElement key={item.id} onClick={() => handleDetails(item)}>
                            <StyleH4>{item.brand}</StyleH4>
                            <StyleImg src={item.thumbnail} alt="imege product" />
                            <StyleText>
                                <span>Price:{item.price}$</span>
                                <span>Discount:{item.discountPercentage}$</span>
                            </StyleText>
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










