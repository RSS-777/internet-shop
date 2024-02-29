import { FC } from "react";
import { useSelector } from "react-redux";
import { TypeRootState } from "../../store/store";
import { ContainerStyle } from "./PersonalOfficeStyle";

type TypePersonalOffice = {
    openPersonal: boolean;
};

const PersonalOffice: FC<TypePersonalOffice> = ({openPersonal}) => {
  const nameLogin = useSelector((state: TypeRootState) => state.login.name);

  return (
    <ContainerStyle $propsOpenPersonal={openPersonal}>
       <h4>{nameLogin}</h4>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui cum quae voluptas soluta vel in itaque sed voluptates at similique ut velit ipsam, numquam sit? Aperiam quaerat libero officiis consectetur?</p>
    </ContainerStyle>
  )   
};

export default PersonalOffice;