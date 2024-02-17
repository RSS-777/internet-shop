import styled from "styled-components";

export const StyelContainerDetails = styled.div`
   position: relative;
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