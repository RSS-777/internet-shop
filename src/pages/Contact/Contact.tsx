import { FC } from "react";
import ContainerForPages from "../../components/ContainerForPages/ContainerForPages";
import { StyleDiv } from "./ContactStyle";

const Contact: FC = () => {
    return (
        <ContainerForPages h2="Contact">
            <StyleDiv>
                <div>
                    <h3>Our contact details</h3>
                    <ul>
                        <li><span>Address:</span> 123 Taras Shevchenko, Kyiv, Ukraine, 19000</li>
                        <li><span>Phone:</span> +38 000 00 00</li>
                        <li><span>Email:</span> info@example.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Hours of work</h3>
                    <p>We are open Monday through Friday from 9:00 a.m. to 6:00 p.m.</p>
                </div>
                <p> Feel free to contact us with any questions or advice. We are always ready to help you!</p>
            </StyleDiv>
        </ContainerForPages>
    )
};

export default Contact;