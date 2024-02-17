import { FC } from "react";
import { TProduct } from "../../store/productSlice";
import { StyelButton, StyelContainerDetails, StyleFlex, StyleTextBlock } from "./StyleDetailsProduct";
import frames from './../../assets/frames.png';

interface IDetailsProduct {
    dataProps: TProduct | null;
    onClick: () => void;
};

export const DetailsProduct: FC<IDetailsProduct> = ({ dataProps, onClick }) => {
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
            </StyleTextBlock>
            <StyleFlex>
                {dataProps?.images.map((item, i) =>
                    <div>
                        <img key={i} src={item} alt="Image product" />
                    </div>
                )}
            </StyleFlex>
            <StyelButton onClick={onClick}>&#8592; Back</StyelButton>
        </StyelContainerDetails>
    )
};