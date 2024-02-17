import { FC } from "react";
import { TProduct } from "../../store/productSlice";
import { StyelButton, StyelContainerDetails } from "./StyleDetailsProduct";

interface IDetailsProduct {
    dataProps: TProduct | null;
    onClick: () => void;
}

export const DetailsProduct: FC<IDetailsProduct> = ({dataProps, onClick}) => {
    return(
        <StyelContainerDetails>
           <h3>{dataProps?.brand}</h3>
           <div>{dataProps?.images.map((item, i) => <img key={i} src={item} alt="Image product"/>)}</div> 
           <StyelButton onClick={onClick}>&#8592; Back</StyelButton>
        </StyelContainerDetails>
    )
}