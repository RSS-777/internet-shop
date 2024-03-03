import { FC, useEffect, useState, useRef } from "react";
import Navigation from "../Navigation/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { TypeRootState, TypeAppDispatch } from "../../store/store";
import { setProduct } from "../../store/productSlice";
import { StyleHeaders, StyleSearch, StyleNav, StyleDivList } from "./HeaderStyles";
import imgLogin from './../../assets/key.png'
import imgUser from './../../assets/user.png'
import imgBuy from './../../assets/buy.png'
import Basket from "../Basket/Basket";
import { Link } from "react-router-dom";
import PersonalOffice from "../PersonalOffice/PersonalOffice";

const Header: FC = () => {
    const [valueDisable, setValueDisable] = useState<boolean>(false)
    const [clickedButton, setClickedButton] = useState<boolean>(false)
    const [userLogget, setUserLogget] = useState<boolean>(false)
    const [openPersonal, setOpenPersonal] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null);
    const personalRef = useRef<HTMLDivElement>(null);
    const basketContainerRef = useRef<HTMLDivElement>(null);
    const basketProducts = useSelector((state: TypeRootState) => state.products.basket);
    const singIn = useSelector((state: TypeRootState) => state.login.singIn);
    const dispatch: TypeAppDispatch = useDispatch();

    useEffect(() => {
        setUserLogget(singIn)
    }, [singIn])

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

    useEffect(() => {
        const handleBodyClick = (event: MouseEvent) => {
            if (openPersonal && personalRef.current && !personalRef.current.contains(event.target as Node)) {
                setOpenPersonal(false);
            }
        };

        document.body.addEventListener('click', handleBodyClick);

        return () => {
            document.body.removeEventListener('click', handleBodyClick);
        };
    }, [openPersonal]);

    const handleOpenBasket = () => {
        setValueDisable((prevState) => prevState === false ? true : false)
        setClickedButton(true)
    };

    const handlePersonalChange = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        event.stopPropagation();
        setOpenPersonal(prev => !prev);
        setValueDisable(false)
    };

    return (
        <StyleHeaders>
            <h1>Online Store</h1>
            <StyleNav>
                <StyleSearch>
                    <input ref={inputRef} id="search" placeholder="Product search: iPhone 9" />
                    <button onClick={sendValueProduct}>search</button>
                </StyleSearch>
                <StyleDivList>
                    <ul>
                        <li className={userLogget ? 'disable' : ''}><Link to='/login'>Sign In<img src={imgLogin} alt="icon login" /></Link></li>
                        <li className={userLogget ? '' : 'disable'} onClick={handlePersonalChange}>User<img src={imgUser} alt="icon user" /></li>
                        <li onClick={handleOpenBasket}>
                            Basket<img src={imgBuy} alt="icon basket" />
                            {basketProducts.length !== 0 &&
                                <span>
                                    {basketProducts.reduce((acc, item) => {
                                        acc += item.count
                                        return acc
                                    }, 0)}
                                </span>
                            }
                        </li>
                    </ul>
                </StyleDivList>
            </StyleNav>
            <div ref={personalRef}>
                {singIn && <PersonalOffice openPersonal={openPersonal} setOpenPersonal={setOpenPersonal} />}
            </div>
            <Basket ref={basketContainerRef} propsDisable={valueDisable} setValueDisable={setValueDisable} />
            <Navigation />
        </StyleHeaders>
    )
}

export default Header;