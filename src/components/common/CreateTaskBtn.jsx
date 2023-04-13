import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { submitTask } from "../../modules/task";

const Form = styled.form`
  padding: 18px;
  display: flex;
`;

const CreateBtn = styled.button`
  background-color: #760b87;
  color: white;
  border-radius: 3px;
  padding: 10px 18px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #5e076b;
  }
`;
const OkBtn = styled.button`
  background-color: #2f58e2;
  color: white;
  border-radius: 3px;
  padding: 10px 18px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: #274cc5;
  }
`;

const CancelBtn = styled.button`
  background-color: #eb5a5a;
  color: white;
  border-radius: 3px;
  padding: 10px 18px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    background-color: #c04848;
  }
`;

const Input = styled.input`
  padding: 9px 10px;
  margin-left: 10px;
  border-radius: 3px;
  border: none;
  font-size: 14px;
  transition: all 0.6s;
  width: ${(props) => (props.create ? "400px" : "0px")};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
`;

const CreateTaskBtn = () => {
  const [onCreate, setOnCreate] = useState(false);
  const [delayBorder, setDelayBorder] = useState("");
  const [delayPadding, setDelayPadding] = useState("");
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleCreate = () => {
    setOnCreate(true);

    setDelayBorder("1px solid black");
    setDelayPadding("9px 10px");
  };

  const handleCancel = () => {
    setOnCreate(false);
    setTimeout(() => {
      setDelayBorder("none");
      setInputValue("");
    }, 600);
    setTimeout(() => {
      setDelayPadding("0");
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      alert("Task이름을 적어주세요.");
      return;
    }
    dispatch(submitTask(inputValue));
    setInputValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <CreateBtn type="button" onClick={handleCreate}>
        Create task
      </CreateBtn>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        create={onCreate}
        border={delayBorder}
        padding={delayPadding}
      />
      {onCreate && <OkBtn type="submit"> Create</OkBtn>}
      {onCreate && <CancelBtn onClick={handleCancel}>Cancel</CancelBtn>}
    </Form>
  );
};

export default CreateTaskBtn;
