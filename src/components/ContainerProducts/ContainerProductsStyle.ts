import styled, {keyframes} from "styled-components";

export const StyleContainer = styled.div`
  margin: 10px;
`;

const animation = keyframes`
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
`;

export const StyleDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 10px;
  background-image: linear-gradient( #FFFFAD, #A0ABDC);
  box-shadow: 2px 2px 8px 1px black;
  margin-top: 15px;
  animation: ${animation} 2s ease;
`; 