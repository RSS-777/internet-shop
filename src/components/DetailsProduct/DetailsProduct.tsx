import { FC } from "react";
import { TProduct } from "../../store/productSlice";

interface IDetailsProduct {
    dataProps: TProduct | null;
    onClick: () => void;
}

export const DetailsProduct: FC<IDetailsProduct> = ({dataProps, onClick}) => {
    return(
        <div>
           <h3>{dataProps?.brand}</h3>
           <div>{dataProps?.images.map((item, i) => <img key={i} src={item} alt="Image product"/>)}</div> 
           <button onClick={onClick}>List products</button>
        </div>
    )
}