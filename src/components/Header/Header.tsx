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
import Basket from "../Basket/Basket";

const Header: FC = () => {
    const [theme, SetThem] = useState<string>('');
    const [valueDisable, setValueDisable] = useState<boolean>(false)
    const [clickedButton, setClickedButton] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null);
    const basketContainerRef = useRef<HTMLDivElement>(null);
    const themeValue = useSelector((state: TypeRootState) => state.theme.name);
    const basketProducts = useSelector((state: TypeRootState) => state.products.basket);
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

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const basketContainer = basketContainerRef.current;

            if (valueDisable && !clickedButton && !basketContainer?.contains(event.target as Node)) {
                setValueDisable(false);
            }
            setClickedButton(false)
        }

        document.body.addEventListener('click', handleClickOutside)
        return () => {
            document.body.removeEventListener('click', handleClickOutside)
        }
    }, [valueDisable, clickedButton]);

    const handleOpenBasket = () => {
        setValueDisable((prevState) => prevState === false ? true : false)
        setClickedButton(true)
    };

    return (
        <StyleHeaders>
            <h1>Online Store</h1>
            <StyleNav>
                <StyleSearch>
                    <input ref={inputRef} placeholder="Product search: iPhone 9" />
                    <button onClick={sendValueProduct}>search</button>
                </StyleSearch>
                <StyleDivList>
                    <ul>
                        <li>Login <img src={imgLogin} alt="icon login" /></li>
                        <li>User <img src={imgUser} alt="icon user" /></li>
                        <li onClick={handleOpenBasket}>Basket <img src={imgBuy} alt="icon basket" /></li>
                    </ul>
                    <StyleButtonTheme $theme={theme} onClick={handlerTheme}>{theme === 'light' ? '☼' : '☾'}</StyleButtonTheme>
                    {basketProducts.length !== 0 &&
                        <span>
                            {basketProducts.reduce((acc, item) => {
                                acc += item.count
                                return acc
                            }, 0)}
                        </span>
                    }
                </StyleDivList>
            </StyleNav>
            <Basket ref={basketContainerRef} propsDisable={valueDisable} />
            <Navigation />
        </StyleHeaders>
    )
}

export default Header;