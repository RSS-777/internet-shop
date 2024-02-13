import { useDispatch, useSelector } from "react-redux";
import { FC, useEffect, useState } from "react";
import { TypeAppDispatch, TypeRootState } from "../../store/store";
import { TProduct, getCategory } from "../../store/productSlice";
import { StyleUl, StyleLi, StyleImg } from "./NavigationStyles";

const Navigation: FC = () => {
    const [filterCategory, setFilterCategory] = useState<string[]>([])
    const dispatch: TypeAppDispatch = useDispatch<TypeAppDispatch>();
    const data: TProduct[] = useSelector((state: TypeRootState) => state.products.data);

    useEffect(() => {
        const setCategory: Set<string> = new Set();
        data.forEach((item: TProduct) => {
            setCategory.add(item.category)
        })
        setFilterCategory(Array.from(setCategory))
    }, [data])

    const handleGetCategory = (e: string): void => {
        dispatch(getCategory(e))
    }

    return (
        <nav>
            <StyleUl>
                {filterCategory.map((item, index) => {
                    const srcImages = data.find((items) => items.category === item);
                    return (
                        <StyleLi key={index} onClick={() => handleGetCategory(item)}>
                            {item}
                            {srcImages && <StyleImg src={srcImages.thumbnail} />}
                        </StyleLi>
                    )
                })}
            </StyleUl>
        </nav>
    )
}

export default Navigation;