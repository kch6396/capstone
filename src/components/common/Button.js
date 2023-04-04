import styled from "styled-components";

const Button = styled.button`
  background-color: white;
  color: black;
  border: 1px solid black;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export default Button;
