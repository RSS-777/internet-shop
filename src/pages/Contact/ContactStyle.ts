import styled from "styled-components";

export const StyleDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 15px;
  border-radius: 15px;
  color: white;

  .div-list {
    
    h4 {
       padding: 10px;
    }

    ul {
      padding-left: 25px; 

      span {
          color: #6E86F1;
          padding-right: 10px;
      }
    }
  }

  .div-work-hour {
    h4 {
      padding: 10px;
    }

    ul {
      padding-left: 25px;
      margin-bottom: 20px;
    }
  }

  >p {
    padding: 10px 10px 0;
    color: red;
  }
`;