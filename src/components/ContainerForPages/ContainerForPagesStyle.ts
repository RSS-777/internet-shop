import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  min-height: 90vh;
`;

export const Block = styled.div`
  background-image: linear-gradient(#A0ABDC, #FFFFAD);
  padding: 25px;
  max-width: 700px;

  h2 {
    color: blue;
    text-align: center;
    padding-bottom: 20px;
  }
`;