import { FC } from "react";
import SimpleSlider from "../../components/Slider/Slider";
import ContainerProducts from "../../components/ContainerProducts/ContainerProducts";

const Home: FC = () => {
    return (
        <ContainerProducts h2="Top products">
           <SimpleSlider />
        </ContainerProducts>
    )
}

export default Home;