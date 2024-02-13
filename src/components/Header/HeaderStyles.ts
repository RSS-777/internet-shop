import styled from "styled-components";

export const StyleHeaders = styled.header`
   background-color: #A0ABDC;
   padding: 10px;
`;

export const StyleSearch = styled.div`
  display: flex;
  width: fit-content;
`;

export const StyleH1 = styled.h1`
  text-align: center;
  color: blue;
  font-size: 40px;
`;

export const StyleInput = styled.input`
  background-color: #FDF6D3;
  font-size: 22px;
  padding: 2px 5px;
  border-radius: 15px;
`;

export const StyleButton = styled.button`
background-color: #FDF6D3;
font-size: 22px;
padding: 2px 5px;
border-radius: 15px;
margin-left: 10px;

  &:hover {
    background-color: #FDF000;
  }
`;