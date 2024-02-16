import { FC } from "react";
import ContainerProducts from "../../components/ContainerProducts/ContainerProducts";

const Smartphones: FC = () => {
  return (
    <ContainerProducts h2="Smartphones" product="smartphones" $flex={true} />
  )
}

export default Smartphones;