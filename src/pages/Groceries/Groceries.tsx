import { FC } from "react";
import ContainerProducts from "../../components/ContainerProducts/ContainerProducts";

const Groceries: FC = () => {
  return (
    <ContainerProducts h2="Groceries" product="groceries" $flex={true} />
  )
}

export default Groceries;