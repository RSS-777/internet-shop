import styled from "styled-components";

export const StyleContainer = styled.div<{$disable: boolean}>`
  position: fixed;
  z-index: 999;
  overflow-y: auto;
  top: 100px;
  right:${props => props.$disable ? '0': '-350px'};
  max-height: 84vh;
  width: 320px;
  padding: 10px;
  border: 2px solid blue;
  border-radius: 10px 0 0 10px;
  box-shadow: 0 0 22px 0 black;
  background-color: #FDF6D3;
  transition: right 1s linear;
  user-select: none;

  h3 {
    text-align: center;
    color: blue;
  }

  >button {
    border: none;
    background-color: transparent;
    color: red;
    font-size: 22px;
    position: absolute;
    top: 5px;

    &:hover {
      color: orange;
      text-shadow: 0 0 1px black;
    }
  }

  >div:nth-child(3) {
   
    >div {
      position: relative;
      margin-top: 5px;

      h4 {
         color: #73051E;
         text-align: center;
         margin: 5px;
      }

      span:nth-child(2) {
        margin: 5px;
      }

      img {
        width: 50px;
      }

      span:nth-child(4) {
        position: absolute;
        right: 10px;
        bottom: 2px;
        color: red;
      }

      div {
        position: absolute;
        left: 50%;
        bottom: 4px;
        transform: translateX(-50%);
        height: 22px;
        display: flex;
        align-items: center;
        
        span {
          text-align: center;
          color: blue;
          border: 2px solid black;
          width: 30px;
          height:20px;
          font-size: 16px;
        }

        button {
          border-style: none;
          background-color: transparent;
          font-size: 18px;
          cursor: pointer;
          
          &:hover {
            color: red;
          }
        }
      }
      
      >button {
        position: absolute;
        right: 10px;
        top: 0;
        font-size: 18px;
        background-color: transparent;
        cursor: pointer;
        border: none;

        &:hover {
          color: red;
        }
      }
    }
  }
  
  >div:nth-child(4) {
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

  @media (max-width: 540px) {
    top: 125px;
  }

  @media (max-width: 430px) {
    top: 0;
    right:${props => props.$disable ? '0': '-120%'};
    height: 100vh;
    max-height: 100vh;
    width: 100%;
    border-radius: 0;
  }
`;

export const StyleButtonBuy = styled.button`
  box-shadow: 2px 2px 6px 1px black;
  font-size: 14px;
  border-radius: 8px;
  padding: 2px 5px;
  color: ${props => props.disabled ? '#A1ACDC' : 'blue'}; 
  cursor: pointer;
  background-color: ${props => props.disabled ? '#CBCBCE' : '#A0ABDC'} ;
  border: 1px solid blue;
  pointer-events: ${props => props.disabled ? 'none' : 'auto'}

  &:active {
    background-color: #FFFFAD;
    border: 1px solid blue;
    }

  &:hover {
    box-shadow: 1px 1px 3px 0 black;
    border: 1px solid tomato;
  }
`;