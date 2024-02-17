import { FC, useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { TypeRootState, TypeAppDispatch } from "../../store/store";
import { changeTheme } from "../../store/themeSlice";
import { StyleHeaders, StyleSearch, StyleButtonTheme, StyleNav, StyleDivList, } from "./HeaderStyles";
import imgLogin from './../../assets/key.png'
import imgUser from './../../assets/user.png'
import imgBuy from './../../assets/buy.png'

const Header: FC = () => {
    const [theme, SetThem] = useState<string>('');
    const themeValue = useSelector((state: TypeRootState) => state.theme.name);
    const dispatch: TypeAppDispatch = useDispatch();

    useEffect(() => {
        SetThem(themeValue)
    }, [themeValue])

    const handlerTheme = () => {
        dispatch(changeTheme(themeValue === 'light' ? 'dark' : 'light'))
    }

    return (
        <StyleHeaders>
            <h1>Online Store</h1>
            <StyleNav>
                <StyleSearch>
                    <input />
                    <button>search</button>
                </StyleSearch>
                <StyleDivList>
                    <ul>
                        <li>Login <img src={imgLogin} alt="icon login" /></li>
                        <li>User <img src={imgUser} alt="icon user" /></li>
                        <li>Basket <img src={imgBuy} alt="icon basket" /></li>
                    </ul>
                    <StyleButtonTheme $theme={theme} onClick={handlerTheme}>{theme === 'light' ? '☼' : '☾'}</StyleButtonTheme>
                </StyleDivList>
            </StyleNav>
            <Navigation />
        </StyleHeaders>
    )
}

export default Header;