import { FC } from "react";
import ContainerForPages from "../../components/ContainerForPages/ContainerForPages";
import { StyleDiv } from "./AboutStyle";

const About: FC = () => {
    return (

        <ContainerForPages h2="About">
            <StyleDiv>
                <p>Welcome to our virtual "home"!</p>
                <p>We are a team of enthusiasts who are proud to work to create the best solutions for our customers. Our mission is to create an unforgettable experience for everyone who chooses us.
                    <br />
                    <br />
                    Our core values are innovation, quality and collaboration. We strive for continuous improvement and are always open to new ideas and opportunities. We understand that in today's world, the key components of success are flexibility, speed and the ability to adapt to change. That is why we always remain at the forefront of our field.
                    <br />
                    <br />
                    Our team consists of talented and experienced professionals who share a common passion for what they do. We believe that the best results are achieved collectively, so in our work we attach great importance to teamwork and mutual assistance.
                    <br />
                    <br />
                    Our doors are always open for cooperation and new acquaintances. We are always happy to welcome new customers, partners and friends who share our values and desire to make the world a better place together with us.
                    <br />
                    <br />
                    <span>Join our community and help us do more!</span>
                </p>
            </StyleDiv>
        </ContainerForPages>
    )
};

export default About;