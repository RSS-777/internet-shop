import styled, {keyframes} from "styled-components";

const animationText = keyframes`
from {
  transform: translateX(-500px);
}
to {
  transform: translateX(0);
}
`;

const animationBlock = keyframes`
from {
  transform: scale(0, 0);
}
to {
  transform: scale(1, 1);
}
`;

export const StyelContainerDetails = styled.div`
  position: relative;
  
  >div:first-child {
    position: relative;
    width: fit-content;
    min-width: 100px;
    height: 101px;
    padding: 0 5px ;
    left: 50%;
    transform: translateX(-50%);
    
    h3 {
      text-align: center;
      color: red;
      font-size: 24px;
      line-height: 100px; 
    }

    img {
      position: absolute;
      bottom: -35px;
      left: 0;
      height: 170px;
      width: 100%;
      max-width: 100%;
      padding: 0;
    }  
  }
`;

export const StyleTextBlock = styled.div`
   width:fit-content;
   animation: ${animationText} 2s ease;

   p {
       color: blue;
       font-weight: bold;
       text-shadow: 0 0 20px black;
    };

    span {
     color: #A12C00;
     margin-left: 5px;
     font-family: cursive;
    };

    >button {
      margin-top: 5px;
      padding: 2px 5px;
      border-radius: 6px;
      color: blue;
      cursor: pointer;
      border: 1px solid blue;
      background-color: #A0ABDC;
      box-shadow: 2px 2px 6px 1px black;
   
      &:active {
      background-color: #FFFFAD;
       border: 1px solid blue;
      }

      &:hover {
       box-shadow: 1px 1px 3px 0 black;
       border: 1px solid tomato;
      }

      img {
        width: 14px;
        height: 14px;
      }
    }
`;

export const StyleFlex = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px; 
  animation: ${animationBlock} 2s ease;

  div {
    display: flex;
    max-width: 800px;
    box-shadow: 2px 2px 12px 1px black;
    border-radius: 20px;
    overflow: hidden;
    
    img {
      width: 100%;
      max-width: 100%;
    }
  }
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
   
   &:active {
    background-color: #FFFFAD;
     border: 1px solid blue;
   }
   
   &:hover {
    box-shadow: 1px 1px 3px 0 black;
    border: 1px solid tomato;
   }

`;


