import { FC } from "react";
import ContainerForPages from "../../components/ContainerForPages/ContainerForPages";
import FormForMessage from "../../components/FormForMessage/FormForMessage";
import { StyleDiv } from "./ContactStyle";

const Contact: FC = () => {
    return (
        <ContainerForPages h2="Contact">
            <StyleDiv>
                <div className="div-list">
                    <h4>Our contact details</h4>
                    <ul>
                        <li><span>Address:</span> 123 Taras Shevchenko, Kyiv, Ukraine, 19000</li>
                        <li><span>Phone:</span> +38 000 00 00</li>
                        <li><span>Email:</span> info@example.com</li>
                    </ul>
                </div>
                <div className="div-work-hour">
                    <h4>Hours of work</h4>
                    <ul>
                        <li>We are open Monday through Friday from 9:00 a.m. to 6:00 p.m.</li>
                    </ul>
                </div>
                <FormForMessage />
                <p> Feel free to contact us with any questions or advice. We are always ready to help you!</p>
            </StyleDiv>
        </ContainerForPages>
    )
};

export default Contact;