import styled from "styled-components";

export const ContainerStyle = styled.div<{$propsOpenPersonal: boolean}>`
  position: fixed;
  top: 0;
  left: ${props => props.$propsOpenPersonal ? '0' : '-300px'};
  background-color: #A0ABDC;
  box-shadow: 2px 2px 8px 1px black;
  width: 300px;
  height: 100vh;
  transition: left 1s linear;
  z-index: 999;
`;