import styled from "styled-components";

export const ContainerStyle = styled.div<{$propsOpenPersonal: boolean}>`
  position: fixed;
  top: 0;
  left: ${props => props.$propsOpenPersonal ? '0' : '-320px'};
  background-color: #A0ABDC;
  box-shadow: 2px 2px 8px 1px black;
  width: 300px;
  height: 100vh;
  padding: 10px;
  transition: left 1s linear;
  z-index: 999;

  >span {
    position: absolute;
    right: 20px;
    color: white;
  }

  >h3 {
    color: white;
    margin-bottom: 20px;
  }

  >h4 {
    text-align: center;
    color: blue;
  }

  button {
    font-size: 20px;
    color: red;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 50px;
    right: 15px;

    &:hover {
      color: yellow;
    }
  }

  @media (max-width: 540px) {
    top: 125px;
    height: 82vh;
  }

  @media (max-width: 430px) {
    left: ${props => props.$propsOpenPersonal ? '0' : '-110%'};
    width: 100%;
    top: 0;
    height: 100vh;
  }
`;

export const ContainerProductsStyle = styled.div`
  overflow-y: scroll; 
  padding: 10px;
  margin-top: 10px;
  height: 85%;
  background-image: linear-gradient(#A0ABDC, #FFFFAD);
  box-shadow: 2px 2px 8px 1px black;

  div {
    position: relative;
    margin-bottom: 10px;
    
    h4 {
      text-align: center;
    }

    h5 {
      text-align: center;
      color: #73051E;
    }

    img {
      width: 30px;
      margin-bottom: 10px;
    }

    span:first-of-type {
      position: absolute;
      top: 0;
      right: 5px;
      color: red;
      font-size: 14px;
    }

    span:last-of-type {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
`;