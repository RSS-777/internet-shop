import styled from "styled-components";

export const StyleDiv = styled.div`
  display: flex;
  justify-content: center; 
  width: 33.33%;
  height: 300px; 
  
  @media (max-width: 768px){
    height: 200px; 
  }

  @media (max-width: 480px){
    height: 100px; 
  }
`;

export const StyleImg = styled.img`
  height: 100%;
  max-width: 100%;
  max-height: 100%; 
  object-fit: cover;
`;