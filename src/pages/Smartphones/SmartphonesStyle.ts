import styled from "styled-components";

export const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 180px;
  box-shadow: 1px 1px 6px 0 black;
  border-radius: 15px;
  text-align: center;
  padding: 10px;
  cursor: pointer;

  &:hover {
    transform: rotateY(-25deg) rotateX(2deg);
    border: 2px solid #7284D1;
    box-shadow: 4px 3px 6px 0 black;
    transition: transform 0.5s ease, box-shadow 0.5s ease;
   }
`;

export const StyleImg = styled.img`
   max-width: 100%;
   width: 100%;
   border-radius: 10px;
`;

export const StyleText = styled.div`
   display: flex;
   justify-content: space-around;
`;
 
export const StyleH4 = styled.h4`
   color: blue;
`;