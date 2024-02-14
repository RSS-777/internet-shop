import styled from "styled-components";

export const StyleUl = styled.ul`
  display: flex;
  background-color: #FFFFAD;
  margin: 0;
  padding: 0;
`;

export const StyleLi = styled.li`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   flex: 1;
   height: 100px;
   text-align: center;
   border: 2px solid #FDF6D3;
   cursor: pointer;
   list-style: none;
   user-select: none;
   padding: 10px 0;

   &:hover {
    border: 2px solid tomato;
   }
`;

export const StyleImg = styled.img`
  width: 60px;
  height: 60px;
`