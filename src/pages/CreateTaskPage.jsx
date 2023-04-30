import styled from "styled-components";
import CreateTaskForm from "../components/common/CreateTaskForm";

export const CreateTaskFormPage = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  margin-left: 15%;
  transition: all 0.4s;
  @media (max-width: 1280px) {
    margin-left: 0;
  }
`;

const CreateTaskPage = () => {
  return (
    <CreateTaskFormPage>
      <CreateTaskForm />
    </CreateTaskFormPage>
  );
};

export default CreateTaskPage;
