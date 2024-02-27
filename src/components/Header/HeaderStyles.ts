import styled from "styled-components";

export const StyleHeaders = styled.header`
  background-image: linear-gradient(#A0ABDC, #FFFFAD);
  padding: 10px;

  h1 {
    text-align: center;
    color: blue;
    font-size: 40px;
  }
`;

export const StyleNav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 30px;
  margin-top: 10px;
  align-items: center;
`;

export const StyleSearch = styled.div`
  display: flex;
  width: fit-content;

  input {
    background-color: #FDF6D3;
    font-size: 16px;
    padding: 2px 5px;
    border-radius: 10px;
    box-shadow: 2px 2px 6px 1px black;
  }

  button {
    background-color: #FDF6D3;
    font-size: 16px;
    padding: 2px 5px;
    border-radius: 10px;
    margin-left: 10px;
    box-shadow: 2px 2px 6px 1px black;
    border: 1px solid black;
  
    &:active {
      background-color: #FFFFAD;
       border: 1px solid blue;
    }

    &:hover {
      box-shadow: 1px 1px 3px 0 black;
      border: 1px solid tomato;
    }
  }
`;

export const StyleDivList = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  height: 30px;

  ul {
    display: flex;
    list-style: none;

    li {
      position: relative;
      align-items: center;
      box-shadow: 2px 2px 6px 1px black;
      font-size: 14px;
      margin-left: 5px;
      border-radius: 8px;
      padding: 2px 5px;
      height: 24px;
      width: 67px;
      color: blue;
      cursor: pointer;
      background-color: #A0ABDC;
      border: 1px solid blue;
      user-select: none;

      a {
        text-decoration: none;
        color: blue;
      }

      img {
        position: absolute;
        right: 5px;
        width: 14px;
        height: 14px;
      }

      &:active {
        background-color: #FFFFAD;
         border: 1px solid blue;
        }
    
      &:hover {
        box-shadow: 1px 1px 3px 0 black;
        border: 1px solid tomato;
      }
    }
  }

  span {
    position: absolute;
    top: 20px;
    right: 63px;
    line-height: 14px;
    text-align: center;
    font-size: 8px;
    width:14px;
    height: 14px;
    border: 1px solid red;
    border-radius: 50%;
    background-color: white;
  }
`;

export const StyleButtonTheme = styled.button<{ $theme: string }>`
  background-color: ${props => props.$theme === 'light' ? '#FDF6D3' : 'gray'};
  font-size: 18px;
  padding: 2px 5px;
  border-radius: 8px;
  margin-left: 10px;
  border: 1px solid blue;
  width: 50px;
  height: 24px;
  color: red;
  line-height: 18px;
  box-shadow: 2px 2px 6px 1px black;
  
  &:hover {
    box-shadow: 1px 1px 3px 0 black;
    border: 1px solid tomato;
  }
`;


