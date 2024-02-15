import { FC } from "react";
import { useSelector } from "react-redux";
import { TProduct } from "../../store/productSlice";
import { TypeRootState } from "../../store/store";
import ContainerProducts from "../../components/ContainerProducts/ContainerProducts";
import { DivStyle } from "./SmartphonesStyle";

const Smartphones: FC = () => {
  const data: TProduct[] = useSelector((state: TypeRootState) => state.products.data);
  const status: string = useSelector((state: TypeRootState) => state.products.status);
  const error: string | null = useSelector((state: TypeRootState) => state.products.error);

  return (
    <ContainerProducts h2="Smartphones">
      {status === 'loading' && <p>'loading'</p>}
      {status === 'succeeded' &&
        data.map((item) => {
          return (
            <DivStyle key={item.id}>
              <span>{item.price}</span>
              <span>{item.brand}</span>
              <p>{item.description}</p>
              <div>{item.images.map((items, index) => <img key={index} src={items} />)}</div>
              <span>{item.discountPercentage}</span>
              <div>{item.name}</div>
              <div>{item.rating}</div>
              <div>{item.stock}</div>
              <div>{item.title}</div>
              План на завтра:
              1)  Створити state який буде отримувати item. Потім умова якщо state має значення то умовний рендер!
              2)  Cтворити компоненту (деталі товару) і кнопку з поверненням + очистити state
              3) Компоненту створити універсальну за допомогою пропсів змінює вміст

            </DivStyle>
          )
        })
      }
      {status === 'faild' && <p>An error occurred while receiving data from the server! ({error})</p>}
    </ContainerProducts>
  )
}

export default Smartphones;