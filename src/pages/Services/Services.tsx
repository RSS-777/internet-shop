import { FC } from "react";
import ContainerForPages from "../../components/ContainerForPages/ContainerForPages";
import { StyleDiv } from "./ServicesStyle";

const Services: FC = () => {
    return (
        <ContainerForPages h2="Services">
            <StyleDiv>
                <h3>Our services: Creation of websites</h3>
                <h4>The technologies we use</h4>
                <p>We offer you a wide range of professional website creation services using the most modern technologies and libraries. Our team of experts knows how to create sites that meet your needs and exceed customer expectations.</p>
                <div>
                    <h4>Technologies and tools</h4>
                    <ul>
                        <li><span>React:</span>
                            We specialize in website development using React, a powerful and flexible JavaScript framework.
                        </li>
                        <li><span>HTML & CSS:</span>
                            We create efficient and well-organized HTML and CSS for better design and interaction.
                        </li>
                        <li><span>JavaScript:</span>
                            JS is used to add dynamism and interactivity to websites.
                        </li>
                        <li><span>TypeScript:</span>
                            Using TypeScript allows us to create high-quality code with improved typeability and safety.
                        </li>
                        <li><span>Styled-Components:</span>
                            Using Styled-Components allows us to easily create and manage component styles in React.
                        </li>
                        <li><span>Redux:</span>
                            We use Redux to manage application state and ensure data integrity.
                        </li>
                        <li><span>Bootstrap:</span>
                            Using Bootstrap allows us to quickly create a responsive and attractive design.
                        </li>
                        <li><span>REST API:</span>
                            We integrate external and internal REST APIs to interact with various data sources.
                        </li>
                    </ul>
                </div>
                <h3>Our approach</h3>
                <p>
                    We work with you at every stage of development, from analyzing your needs and requirements, developing design and functionality, to testing and launching your website. Our goal is to provide you with a quality, efficient and user-centric website that reflects your brand and achieves your business goals.
                    <br />
                    <br />
                    Let our team create a site for you that will capture your imagination and give your business a competitive edge in the online world!
                </p>






            </StyleDiv>
        </ContainerForPages>
    )
};

export default Services;