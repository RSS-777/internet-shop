import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TypeRootState, TypeAppDispatch } from "../../store/store";
import { changeTheme } from "../../store/themeSlice";
import { StyleButton, StyleH1, StyleHeaders, StyleInput, StyleSearch, StyleButtonTheme } from "./HeaderStyles";

const Header: FC = () => {
    const [theme, SetThem] = useState<string>('');
    const themeValue = useSelector((state: TypeRootState) => state.theme.name);
    const dispatch: TypeAppDispatch = useDispatch();
    
    useEffect(() => {
       SetThem(themeValue)
    },[themeValue])

    const handlerTheme = () => {
      themeValue === 'light' 
      ? dispatch(changeTheme('dark'))
      : dispatch(changeTheme('light')) 
    }

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
            <h4>{theme}</h4>
            <StyleButtonTheme $theme={theme}  onClick={handlerTheme}>Theme</StyleButtonTheme>
        </StyleHeaders>
    )
}

export default Header;