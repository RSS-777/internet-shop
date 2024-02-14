import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TypeRootState, TypeAppDispatch } from "../../store/store";
import { changeTheme } from "../../store/themeSlice";
import { StyleButton, StyleH1, StyleHeaders, StyleInput, StyleSearch, StyleButtonTheme, StyleNav, StyleUl, StyleLink, StyleDivList } from "./HeaderStyles";

const Header: FC = () => {
    const [theme, SetThem] = useState<string>('');
    const themeValue = useSelector((state: TypeRootState) => state.theme.name);
    const dispatch: TypeAppDispatch = useDispatch();

    useEffect(() => {
        SetThem(themeValue)
    }, [themeValue])

    const handlerTheme = () => {
        themeValue === 'light'
            ? dispatch(changeTheme('dark'))
            : dispatch(changeTheme('light'))
    }

    return (
        <StyleHeaders>
            <StyleH1>Online Store</StyleH1>
            <StyleNav>
                <StyleSearch>
                    <StyleInput />
                    <StyleButton>search</StyleButton>
                </StyleSearch>
                <StyleDivList>
                    <StyleUl>
                        <StyleLink>Login</StyleLink>
                        <StyleLink>User</StyleLink>
                        <StyleLink>Basket</StyleLink>
                    </StyleUl>
                    <StyleButtonTheme $theme={theme} onClick={handlerTheme}>{theme === 'light' ? '☼' : '☾'}</StyleButtonTheme>
                </StyleDivList>
            </StyleNav>
        </StyleHeaders>
    )
}

export default Header;