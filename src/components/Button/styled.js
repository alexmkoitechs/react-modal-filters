import styled from "styled-components";

export const Button = styled.button`
  border: 0;
  color: white;
  cursor: pointer;
  margin-right: 10px;
  padding: 10px 20px;
  transition: background-color 0.3s;
  background-color: ${({ color }) => color || 'grey'};
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

  &:hover {
    background-color: ${(props) => props.$hoverColor || '#646262'};

    &[disabled] {
      opacity: 0.6;
      background-color: ${({ color }) => color || 'grey'};
    }
  }

  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
