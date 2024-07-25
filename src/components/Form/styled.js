import styled from "styled-components";

export const FormContainer = styled.div`
  form {
    padding: 20px;
    margin: 10px auto;

    & > div {
      margin: 5px;
      display: flex;
      flex-flow: row nowrap;

      & > label {
        color: #333;
        width: 130px;
        font-size: 16px;
        line-height: 30px;
      }

      & > input {
        font-size: 16px;
        padding: 3px 5px;
        margin-left: 20px;
        border: 1px solid grey;
      }

      & > div {
        display: flex;
        margin-left: 16px;

        & > label {
          display: flex;
          margin-right: 10px;
          align-items: center;

          & > input {
            margin: 0;
            margin-right: 5px;
          }
        }
      }
    }
  }
`;

export const ButtonsSection = styled.div`
  display: flex;
  justify-content: center;
`;
