import styled from "styled-components";

export const StyleContainer = styled.div<{$disable: boolean}>`
  position: absolute;
  z-index: 999;
  overflow-y: auto;
  top: 100px;
  right:${props => props.$disable ? '0':'-350px'};
  min-height: 85vh;
  width: 320px;
  padding: 10px;
  border: 2px solid blue;
  box-shadow: 0 0 22px 0 black;
  background-color: #FDF6D3;
  transition: right 1s ease-out;

  h3 {
    text-align: center;
    color: blue;
  }

  >div:nth-child(2) {
   
    >div {
      position: relative;
      border: 2px solid yellow;
      border-radius: 10px;
      box-shadow: 2px 2px 8px 0 black;
      margin-top: 5px;

      h4 {
         color: tomato;
         text-align: center;
         margin: 5px;
      }

      span:nth-child(2) {
        color: blue; 
        margin: 5px;
      }

      span:nth-child(4) {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
      }

      img {
        width: 50px;
      }
    }
  }
  
  >div:nth-child(3) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    span {
      color: blue;
      margin-top: 10px;

      span {
        color: red;
      }
    }
  }
`;

export const StyleButton = styled.button`
position: absolute;
right: 10px;
bottom: 5px;
box-shadow: 2px 2px 6px 1px black;
font-size: 10px;
border-radius: 8px;
padding: 2px 5px;
color: blue;
cursor: pointer;
background-color: #A0ABDC;
border: 1px solid blue;
user-select: none;

&:active {
  background-color: #FFFFAD;
   border: 1px solid blue;
  }

&:hover {
  box-shadow: 1px 1px 3px 0 black;
  border: 1px solid tomato;
}
`;

export const StyleButtonBuy = styled(StyleButton)`
  position: static;
  margin-right: 11px;
  width: 38px;
  height: 16px;
`;