import { FC } from "react";
import { useSelector } from "react-redux";
import { TypeRootState } from "../../store/store";
import { ContainerStyle, ContainerProductsStyle } from "./PersonalOfficeStyle";
import { TypeHistory } from "../../store/productSlice";

type TypePersonalOffice = {
  openPersonal: boolean;
};

const PersonalOffice: FC<TypePersonalOffice> = ({ openPersonal }) => {
  const history: TypeHistory[] | null = useSelector((state: TypeRootState) => state.products.history);
  const firstName = useSelector((state: TypeRootState) => state.login.firstName);
  const email = useSelector((state: TypeRootState) => state.login.email);

  return (
    <ContainerStyle $propsOpenPersonal={openPersonal}>
      <span>{email}</span>
      <h3>{firstName}</h3>
      <h4>Your orders:</h4>
      <ContainerProductsStyle>
        {history.map((item, index) => {
          return (
            <div key={index}>
              {item.date
                ? <>
                  <h4>{item.date}</h4>
                  <hr />
                </>
                : <>
                  <h5>{item.title}</h5>
                  <img src={item.thumbnail} alt="Picture product" />
                  <span>{item.price}$</span>
                  <span>quantity: {item.count}</span>
                  <hr />
                </>
              }
            </div>
          )
        })}
      </ContainerProductsStyle>
    </ContainerStyle>
  )
};

export default PersonalOffice;
