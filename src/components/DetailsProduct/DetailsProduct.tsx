import { FC } from "react";
import { TProduct, addBasket } from "../../store/productSlice";
import { useDispatch } from "react-redux";
import { TypeAppDispatch } from "../../store/store";
import { StyelButton, StyelContainerDetails, StyleFlex, StyleTextBlock } from "./DetailsProductStyle";
import frames from './../../assets/frames.png';
import imgBuy from './../../assets/buy.png';

interface IDetailsProduct {
    dataProps: TProduct | null;
    onClick: () => void;
};

interface IAddProduct {
    title: string;
    thumbnail: string;
    price: number;
};

export const DetailsProduct: FC<IDetailsProduct> = ({ dataProps, onClick }) => {
    const dispatch: TypeAppDispatch = useDispatch();

    const handleAddBasket = () => {
        if (dataProps) {
            const productToBasket: IAddProduct = {
                title: dataProps.title,
                thumbnail: dataProps.thumbnail,
                price: dataProps.price,
            };
            dispatch(addBasket(productToBasket))
        }
    };

    return (
        <StyelContainerDetails>
            <div>
                <h3>{dataProps?.brand}</h3>
                <img src={frames} alt="frames" />
            </div>
            <StyleTextBlock>
                <p>Title: <span>{dataProps?.title}</span></p>
                <p>Price: <span>{dataProps?.price}$</span></p>
                <p>Discount: <span>{dataProps?.discountPercentage}$</span></p>
                <p>Rating: <span>{dataProps?.rating}</span></p>
                <p>Stock: <span>{dataProps?.stock}</span></p>
                <p>Description: <span>{dataProps?.description}</span></p>
                <button onClick={handleAddBasket}>Add to basket: <img src={imgBuy} alt="Icon basket" /></button>
            </StyleTextBlock>
            <StyleFlex>
                {dataProps?.images.map((item, i) =>
                    <div key={i}>
                        <img key={i} src={item} alt="Image product" />
                    </div>
                )}
            </StyleFlex>
            <StyelButton onClick={onClick}>&#8592; Back</StyelButton>
        </StyelContainerDetails>
    )
};