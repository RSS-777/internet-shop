import styled, {keyframes} from "styled-components";

const messageSubmit = keyframes`
    0% {
      background-color: transparant;
    }
    50% {
      background-color: black;
    }
    100% {
      background-color: transparant;
    }
`;


export const StyleContainer = styled.div`
  background-image: linear-gradient(#A0ABDC, #FFFFAD);
  border-radius: 15px;
  width: 300px;
  overflow: hidden;
  margin-left: 10px;

  form {
    position: relative;
    padding-bottom: 30px;
    padding: 0 15px 35px;

    h3 {
        text-align: center;
        padding: 10px;
    }

    .block-text {
        display: flex;
        justify-content: space-between;
        align-items: center;

        label {
            color: blue;

            @media (max-width: 417px) {
              font-size: 12px;
            }
        }

        input {
            padding: 2px 5px;
            border-radius: 8px;
            width: 200px;
            box-shadow: 1px 1px 5px 0 black;
        }

        textarea {
            border-radius: 8px;
            resize: none;
            height: 100px;
            width: 200px;
            padding: 5px;
            box-shadow: 1px 1px 5px 0 black;
        }
    }

    .block-text:nth-child(6) {

        label {
            align-self: flex-start;
            margin-top: 5px;
        }
    }

    .block-error {
        display: flex;
        justify-content: end;
        align-items: center;
        font-size: 10px;
        height: 16px;

        p {
            color: red;
        }
    }

    button {
        position: absolute;
        right: 15px;
        bottom: 10px;
        padding: 0 5px;
        border-radius: 6px;
        color: blue;
        border: 2px solid blue;
        box-shadow: 2px 2px 5px 1px black;

        &.enabled:hover {
            border: 1px solid red;
            box-shadow: 0 0 3px 0 black;
        }

        &.disabled {
            color: gray;
            border: 2px solid gray;
            cursor: not-allowed;
        }
    }
  }

  @media (max-width: 417px) {
    max-width: 280px;
    margin-left: 0;
}
`;

export const StyleSubmitMessage = styled.div<{$submitted: boolean}>`
    display: ${props => props.$submitted ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: white;
    animation: ${messageSubmit} 4s ease;
`;