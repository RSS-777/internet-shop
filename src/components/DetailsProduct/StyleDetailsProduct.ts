import styled from "styled-components";

export const StyelContainerDetails = styled.div`
   position: relative;

   h2 {
    text-align: center;
    margin: 20px;
    color: red;
   }
`;

export const StyelButton = styled.button`
   position: absolute;
   top: -48px;
   right: -10px;
   padding: 0 5px;
   border-radius: 6px;
   color: blue;
   cursor: pointer;
   border: 1px solid blue;
   background-color: #A0ABDC;
   box-shadow: 2px 2px 6px 1px black;

   &:hover {
    box-shadow: 1px 1px 3px 0 black;
    border: 1px solid tomato;
  }
`;

export const StyleFlex = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px; 
`;

export const StyleBlockImages = styled.div`
  display: flex;
  max-width: 800px;
  box-shadow: 2px 2px 12px 1px black;
  border-radius: 20px;
  overflow: hidden;
  
  img {
    width: 100%;
    max-width: 100%;
  }
`;

export const StyleH2 = styled.h2`
  text-align: center;
  margin: 20px;
  color: red;
`;

export const StyleTextBlock = styled.div`
   width:fit-content;

   p {
       color: blue;
       font-weight: bold;
       text-shadow: 0 0 20px black;
    };

    span {
     color: #A12C00;
     margin-left: 5px;
     font-family: cursive;
    };
`;