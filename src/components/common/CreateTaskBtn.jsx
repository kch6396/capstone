import styled from "styled-components";
import { Link } from "react-router-dom";

const CreateBtn = styled.button`
  background-color: #760b87;
  color: white;
  border-radius: 5px;
  padding: 10px 18px;
  border: none;
  font-weight: 500;
  font-size: 14px;
  margin: 18px;
  font-family: "Roboto", "Noto Sans KR", sans-serif;
  cursor: pointer;
  &:hover {
    background-color: #5e076b;
  }
`;

const CreateTaskBtn = () => {
  return (
    <Link to="/models/upload">
      <CreateBtn type="button">Upload Model</CreateBtn>
    </Link>
  );
};

export default CreateTaskBtn;
