import { FC, useEffect, useState, useRef } from "react";
import Navigation from "../Navigation/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { TypeRootState, TypeAppDispatch } from "../../store/store";
import { changeTheme } from "../../store/themeSlice";
import { setProduct } from "../../store/productSlice";
import { StyleHeaders, StyleSearch, StyleButtonTheme, StyleNav, StyleDivList, } from "./HeaderStyles";
import imgLogin from './../../assets/key.png'
import imgUser from './../../assets/user.png'
import imgBuy from './../../assets/buy.png'

const Header: FC = () => {
    const [theme, SetThem] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const themeValue = useSelector((state: TypeRootState) => state.theme.name);
    const dispatch: TypeAppDispatch = useDispatch();
  
    useEffect(() => {
        SetThem(themeValue)
    }, [themeValue])
    
    const handlerTheme = () => {
        dispatch(changeTheme(themeValue === 'light' ? 'dark' : 'light'))
    }

    const sendValueProduct = () => {
        dispatch(setProduct(inputRef.current?.value));
        if (inputRef.current) {
            inputRef.current.value = ''; 
          }
    };

    return (
        <StyleHeaders>
            <h1>Online Store</h1>
            <StyleNav>
                <StyleSearch>
                    <input ref={inputRef} placeholder="Product search: iPhone 9"/>
                    <button onClick={sendValueProduct}>search</button>
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