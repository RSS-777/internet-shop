import { FC, ReactNode } from "react";
import { Container, Block } from "./ContainerForPagesStyle";

interface IContainerProps {
    children: ReactNode,
    h2: string
}
const ContainerForPages: FC<IContainerProps> = ({children, h2} ) => {
  return (
    <Container>
        <Block>
          <h2>{h2}</h2>
           {children} 
        </Block>
    </Container>
  )
};

export default ContainerForPages;