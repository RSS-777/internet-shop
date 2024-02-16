import { FC, ReactNode } from "react";
import { StyleDiv, StyleContainer } from "./ContainerProductsStyle";

interface IProps {
    h2: string,
    children: ReactNode,
};

const ContainerProducts: FC<IProps> = ({h2, children}) => {
    return (
        <StyleContainer>
            <h2>{h2}</h2>
            <StyleDiv>
                {children}
            </StyleDiv>
        </StyleContainer>
    )
}

export default ContainerProducts;