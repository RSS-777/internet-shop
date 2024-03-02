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
   text-align: center;
   position: relative;
   flex: 1 1 100px;
   height: 150px;
   border: 2px solid #A1ACDC;
   cursor: pointer;
   text-decoration: none;
   color: blue;
   user-select: none;
   padding: 10px 10px;
   animation: ${animation} 1.5s ease;
   box-shadow: 1px 1px 6px 0 black;
   transition: transform 0.5s ease, box-shadow 0.5s ease;

   img {
    width: 65px;
    height: 65px;
   }

   &:hover {
    transform: rotateY(-25deg) rotateX(2deg);
    border: 2px solid #7284D1;
    box-shadow: 4px 3px 6px 0 black;
   }

   @media (max-width: 992px){
    height: 120px;
    padding: 10px 5px;
    font-size: 14px;
 
      img {
      width: 40px;
      height: 40px;
      }
    }

    @media (max-width: 776px){
      height: 100px;
      padding: 10px 2px;
      font-size: 10px;
      
      img {
        width: 35px;
        height: 35px;
      }
    }

    @media (max-width: 540px){
      height: 110px;
      font-size: 14px;
      
      span {
        writing-mode: vertical-lr;
        white-space: nowrap;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-180deg); 
      }
      
      img {
       display: none;
      }
    }
`;
