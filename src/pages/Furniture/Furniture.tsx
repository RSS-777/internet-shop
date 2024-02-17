import { FC } from "react";
import ContainerProducts from "../../components/ContainerProducts/ContainerProducts";

const Furniture: FC = () => {
  return (
    <ContainerProducts h2="Furniture" product="furniture" $flex={true} />
  )
}

export default Furniture;