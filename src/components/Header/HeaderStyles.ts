import styled from "styled-components";

export const StyleHeaders = styled.header`
  //  background-color: #A0ABDC;
  background-image: linear-gradient(#A0ABDC, #FFFFAD);
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
  font-size: 16px;
  padding: 2px 5px;
  border-radius: 10px;
  box-shadow: 2px 2px 6px 1px black;
`;

export const StyleButton = styled.button`
  background-color: #FDF6D3;
  font-size: 16px;
  padding: 2px 5px;
  border-radius: 10px;
  margin-left: 10px;
  box-shadow: 2px 2px 6px 1px black;
  border: 1px solid black;

  &:hover {
    box-shadow: 1px 1px 3px 0 black;
    border: 1px solid tomato;
  }
`;

export const StyleButtonTheme = styled(StyleButton) <{ $theme: string }>`
  background-color: ${props => props.$theme === 'light' ? '#FDF6D3' : 'gray'};
  font-size: 18px;
  border-radius: 8px;
  border: 1px solid blue;
  width: 50px;
  height: 24px;
  color: red;
  line-height: 18px;
`;

export const StyleNav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 30px;
  margin-top: 10px;
  align-items: center;
`

export const StyleDivList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  height: 30px;
`

export const StyleUl = styled.ul`
  display: flex;
  list-style: none;
`

export const StyleLink = styled.li`
  box-shadow: 2px 2px 6px 1px black;
  margin-left: 5px;
  border-radius: 8px;
  padding: 2px 5px;
  color: blue;
  cursor: pointer;
  background-color: #A0ABDC;
  border: 1px solid blue;

  &:hover {
    box-shadow: 1px 1px 3px 0 black;
    border: 1px solid tomato;
  }
`
