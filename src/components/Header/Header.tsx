import { FC } from "react";
import { StyleButton, StyleH1, StyleHeaders, StyleInput, StyleSearch } from "./HeaderStyles";

const Header: FC = () => {
    return (
        <StyleHeaders>
            <StyleH1>Online Store</StyleH1>
            <StyleSearch>
                <StyleInput />
                <StyleButton>search</StyleButton>
            </StyleSearch>
            <div>
                <span>login</span>
                <span>user</span>
                <span>корзина</span>
            </div>
        </StyleHeaders>
    )
}

export default Header;