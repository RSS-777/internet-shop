import { FC } from "react";
import ContainerProducts from "../../components/ContainerProducts/ContainerProducts";

const Laptops: FC = () => {
  return (
    <ContainerProducts h2="Laptops" product="laptops" $flex={true} />
  )
}

export default Laptops;