import { FC, useState } from "react";
import { TProduct, addBasket } from "../../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { TypeAppDispatch, TypeRootState } from "../../store/store";
import { StyelButton, StyelContainerDetails, StyleFlex, StyleTextBlock, StyleTextShowAdd, StyleButtonBuy } from "./DetailsProductStyle";
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
    count?: number;
};

export const DetailsProduct: FC<IDetailsProduct> = ({ dataProps, onClick }) => {
    const dispatch: TypeAppDispatch = useDispatch();
    const [valueBoolean, setValueBoolean] = useState<boolean>(false)
    const userEmail: string = useSelector((state: TypeRootState) => state.login.email)

    const handleAddBasket = () => {
        if (dataProps) {
            const productToBasket: IAddProduct = {
                title: dataProps.title,
                thumbnail: dataProps.thumbnail,
                price: dataProps.price,
                count: 1,
            };
            dispatch(addBasket(productToBasket))
            setValueBoolean(true)
            setTimeout(() => { setValueBoolean(false) }, 2500)
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
                <StyleButtonBuy onClick={handleAddBasket} disabled={!userEmail}>Add to basket: <img src={imgBuy} alt="Icon basket" /></StyleButtonBuy>
                {!userEmail && <span>You need to log in to the site to buy goods</span>}
            </StyleTextBlock>
            <StyleFlex>
                {dataProps?.images.map((item, i) =>
                    <div key={i}>
                        <img key={i} src={item} alt="Image product" />
                    </div>
                )}
            </StyleFlex>
            <StyelButton onClick={onClick}>&#8592; Back</StyelButton>
            <StyleTextShowAdd $animationOnOf={valueBoolean}><span>The product has been added to the cart!</span> </StyleTextShowAdd>
        </StyelContainerDetails>
    )
};