import { FC } from "react";
import { StyleDiv } from "./HomeStyle";
import SimpleSlider from "../../components/Slider/Slider";

const Home: FC = () => {
    return (
        <div>
            <h2>Top products</h2>
            <StyleDiv>
                <SimpleSlider />
            </StyleDiv>
        </div>
    )
}

export default Home;