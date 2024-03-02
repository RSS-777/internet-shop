import { useSelector, useDispatch } from "react-redux";
import { FC, useEffect, useState } from "react";
import { TypeRootState, TypeAppDispatch } from "../../store/store";
import { TProduct, setProduct } from "../../store/productSlice";
import { StyleList, StyleLink } from "./NavigationStyles";


const Navigation: FC = () => {
    const [filterCategory, setFilterCategory] = useState<string[]>([])
    const data: TProduct[] = useSelector((state: TypeRootState) => state.products.data);
    const dispatch = useDispatch<TypeAppDispatch>();

    useEffect(() => {
        const setCategory: Set<string> = new Set();
        data.forEach((item: TProduct) => {
            setCategory.add(item.category)
        })
        setFilterCategory(Array.from(setCategory))
    }, [data])

    const clearProductStore = () => {
       dispatch(setProduct(''))
    };

    return (
        <nav>
            <StyleList>
                {filterCategory.map((item, index) => {
                    const srcImages = data.find((items) => items.category === item);
                    return (
                        <StyleLink to={item} key={index} onClick={clearProductStore}>
                            <span>{item}</span>
                            {srcImages && <img src={srcImages.thumbnail} />}
                        </StyleLink>
                    )
                })}
            </StyleList>
        </nav>
    )
}

export default Navigation;