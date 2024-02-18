import styled from "styled-components";

export const StyleContainer = styled.div<{$disable: boolean}>`
  display:${props => props.$disable ? 'block': 'none'};
  position: absolute;
  z-index: 999;
  overflow-y: auto;
  top: 100px;
  right: 0;
  min-height: 85vh;
  width: 320px;
  padding: 10px;
  border: 2px solid blue;
  box-shadow: 0 0 22px 0 black;
  background-color: #FDF6D3;

  h3 {
    text-align: center;
    color: blue;
  }

 >div {
    border: 2px solid red;

    >div {
      border: 2px solid green;

      h4 {
         color: tomato;
         text-align: center;
      }

      span {

      }

      img {
        width: 50px;
      }

      button {

      }
    }
  }
`;