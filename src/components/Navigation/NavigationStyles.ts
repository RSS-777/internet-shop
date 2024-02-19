import styled, { keyframes} from "styled-components";
import { Link } from "react-router-dom";

const animation = keyframes`
0% {
   transform: rotateY(90deg);
}
100% {
  transform: rotateY(0deg);
}
`;

export const StyleList = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 30px;
`;

export const StyleLink = styled(Link)`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   flex: 1;
   height: 120px;
   border: 2px solid #A1ACDC;
   cursor: pointer;
   text-decoration: none;
   color: blue;
   user-select: none;
   padding: 10px 10px;
   animation: ${animation} 1.5s ease;
   box-shadow: 1px 1px 6px 0 black;

   img {
    width: 50px;
    height: 50px;
   }

   &:hover {
    transform: rotateY(-25deg) rotateX(2deg);
    border: 2px solid #7284D1;
    box-shadow: 4px 3px 6px 0 black;
    transition: transform 0.5s ease, box-shadow 0.5s ease;
   }
`;
