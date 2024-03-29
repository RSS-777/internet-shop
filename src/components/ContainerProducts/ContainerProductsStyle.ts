import styled, { keyframes } from "styled-components";

type TypeStyleProps = {
  $flex?: boolean
}

const animation = keyframes`
from {
  transform: scale(0, 0);
}
to {
  transform: scale(1, 1);
}
`;

export const StyleContainer = styled.div`
  margin: 10px;

  h2 {
    color: blue;
    text-shadow: 2px 2px 8px blue;
  }
`;

export const StyleDiv = styled.div<TypeStyleProps>`
  ${(props) => props.$flex && `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `}
    gap: 5px;
    padding: 10px;
    background-image: linear-gradient( #FFFFAD, #A0ABDC);
    box-shadow: 2px 2px 8px 1px black;
    margin-top: 15px;
    animation: ${animation} 2s ease;
`;

export const StyleBlockElement = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1 1 130px;
    max-width: 240px;
    box-shadow: 1px 1px 6px 0 black;
    border-radius: 15px;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    transition: transform 0.5s ease, box-shadow 0.5s ease;
    border: 2px solid #7284D1;

    h4 {
      color: blue;
      margin-bottom: 10px;
    }

    img {
      max-width: 100%;
      width: 100%;
      border-radius: 10px;
    }

    div {
      margin-top: 10px;
      display: flex;
      justify-content: space-around;
    }

    &:hover {
      transform: rotateY(-25deg) rotateX(2deg);
      box-shadow: 4px 3px 6px 0 black;
    }

    @media (max-width: 540px) {
      flex: 1 1 150px;
      max-width: 190px;

      h4 {
         font-size: 14px;
      }
  
      div {
        font-size: 10px;
      }
    }

    @media (max-width: 420px) {
      flex: 1 1 200px;
      max-width: 320px;

      h4 {
         font-size: 14px;
      }
  
      div {
        font-size: 10px;
      }
    }
`;





