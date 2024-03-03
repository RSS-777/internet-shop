import styled from "styled-components";

export const StyleHeaders = styled.header`
  background-image: linear-gradient(#A0ABDC, #FFFFAD);
  padding: 10px;

  h1 {
    text-align: center;
    color: blue;
    font-size: 40px;
  }

  @media (max-width: 460px){
    h1 {
      font-size: 30px;
    }
  }
`;

export const StyleNav = styled.nav`
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  margin-top: 10px;

  @media (max-width: 460px) {
    grid-template: 1fr 1fr /  1fr;
    grid-gap: 20px;
  }
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
    font-size: 16px;
    padding: 2px 5px;
    margin-left: 10px;
    box-shadow: 2px 2px 6px 1px black;
    border-radius: 10px;
    border: 1px solid black;
    background-color: #FDF6D3;
  
    &:active {
      background-color: #FFFFAD;
       border: 1px solid blue;
    }

    &:hover {
      box-shadow: 1px 1px 3px 0 black;
      border: 1px solid tomato;
    }
  }

  @media (max-width: 540px) {
    input {
      font-size: 12px;
      border-radius: 7px;
    }
  
    button {
      font-size: 12px;
      border-radius: 7px;
    }
  }
`;

export const StyleDivList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  ul {
    display: flex;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      box-shadow: 2px 2px 6px 1px black;
      font-size: 14px;
      margin-left: 5px;
      border-radius: 8px;
      padding: 2px 5px;
      height: 24px;
      width: 70px;
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

      span {
        position: absolute;
        top: 17px;
        right: 13px;
        line-height: 14px;
        text-align: center;
        font-size: 8px;
        width:14px;
        height: 14px;
        border: 1px solid red;
        border-radius: 50%;
        background-color: white;
      }

      &:active {
        background-color: #FFFFAD;
         border: 1px solid blue;
        }
    
      &:hover {
        box-shadow: 1px 1px 3px 0 black;
        border: 1px solid tomato;
      }

      &.disable {
        display: none;
      }
    }
  }

  @media (max-width: 540px){
    ul {
  
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;

        font-size: 12px;
        border-radius: 7px;

        margin-left: 5px;
        padding: 3px;
        height: 20px;
        width: 58px;
         
        img {
          right: 5px;
          width: 10px;
          height: 10px;
        }

        span {
          top: 13px;
          right: 10px;
        }
      }
    }
  }
`;



