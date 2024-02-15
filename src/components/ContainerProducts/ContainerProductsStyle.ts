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
  box-shadow: 2px 2px 8px 1px black;
  margin-top: 10px;
  animation: ${animation} 2s ease;
`; 