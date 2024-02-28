import styled from "styled-components";

export const StyleContainerFotm = styled.form`
  position: relative;

  .block-input {
    display: flex;
    justify-content: space-between;
   
    label {
        color: blue;
    }

    input {
        border-radius: 8px;
        padding: 2px 5px;
    }
  }

  .block-error {
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
    height: 16px;
    color: red;
  }

  .block-radio {
    fieldset {
        display: flex;
        justify-content: space-around;

        legend {
            margin-left: auto;
            margin-right: auto;
        }
    }
  }

  button {
    margin: 15px 0 0 220px;
    color: blue;
    padding: 2px 5px;
    border-radius: 10px;
    border-color: blue;
    box-shadow: 1px 1px 5px 1px black;

    &:hover {
      border-color: red;
      color: red;
      box-shadow: 1px 1px 3px 0 black; 
    }
  }

  a {
    text-decoration: none;
    position: absolute;
    left: 0;
    bottom: 0;
    color: red;

    &:hover {
      color: #A60000;
      text-shadow: 0 0 1px red;
    }
  }
`;
